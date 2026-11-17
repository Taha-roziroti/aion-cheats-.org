/**
 * Keyword stuffing and placement checks (cursor-seo-audit-prompt §5).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, '..', 'dist');
const keywordsPath = path.join(root, '..', 'keywords.json');
const pagesDir = path.join(root, '..', 'content', 'pages');

const MARKDOWN_BY_ROUTE = {
  '/': 'index.md',
  '/aion-classic-esp/': 'aion-classic-esp.md',
  '/aion-classic-pricing/': 'aion-classic-pricing.md',
  '/cloud-dma-for-aion-classic/': 'cloud-dma-for-aion-classic.md',
  '/aion-classic-system-requirements/': 'aion-classic-system-requirements.md',
};

function loadMarkdownProse(route) {
  const file = MARKDOWN_BY_ROUTE[route];
  if (!file) return null;
  const raw = fs.readFileSync(path.join(pagesDir, file), 'utf8');
  const body = raw.replace(/^---[\s\S]*?---\n?/, '');
  return body
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#*_>`]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function markdownHeadings(route, { levels = [1, 2] } = {}) {
  const file = MARKDOWN_BY_ROUTE[route];
  if (!file) return [];
  const raw = fs.readFileSync(path.join(pagesDir, file), 'utf8');
  const body = raw.replace(/^---[\s\S]*?---\n?/, '');
  const headings = [];
  for (const line of body.split('\n')) {
    const m = line.match(/^(#{1,6})\s+(.+)$/);
    if (!m) continue;
    const level = m[1].length;
    if (!levels.includes(level)) continue;
    const text = m[2].replace(/\*\*/g, '').trim();
    if (/image alt text/i.test(text)) continue;
    headings.push(text);
  }
  return headings;
}

function normalizePhrase(s) {
  return s.toLowerCase().replace(/\s+/g, ' ').trim();
}

function countPhrase(text, phrase) {
  const p = normalizePhrase(phrase);
  if (!p) return 0;
  const escaped = p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`\\b${escaped.replace(/\s+/g, '\\s+')}\\b`, 'gi');
  return (normalizePhrase(text).match(re) ?? []).length;
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function words(text) {
  const w = text.match(/[a-z0-9]+(?:'[a-z]+)?/gi);
  return w?.length ?? 0;
}

function readHtml(route) {
  const file = path.join(dist, route === '/' ? 'index.html' : `${route.slice(1)}index.html`);
  if (!fs.existsSync(file)) return null;
  return fs.readFileSync(file, 'utf8');
}

function metaContent(html, name) {
  const re = new RegExp(`<meta[^>]*name=["']${name}["'][^>]*content=["']([^"']+)["']`, 'i');
  const alt = new RegExp(`<meta[^>]*content=["']([^"']+)["'][^>]*name=["']${name}["']`, 'i');
  return html.match(re)?.[1] ?? html.match(alt)?.[1] ?? '';
}

function firstH1(html) {
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  return m ? stripHtml(m[1]) : '';
}

function headingTexts(html) {
  const out = [];
  const re = /<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    out.push(stripHtml(m[1]));
  }
  return out;
}

function mainBody(html) {
  let main = html.match(/<main[^>]*>([\s\S]*)<\/main>/i)?.[1] ?? html;
  main = main.replace(/<nav[^>]*aria-label=["']Breadcrumb["'][\s\S]*?<\/nav>/gi, '');
  return main;
}

function main() {
  if (!fs.existsSync(dist)) {
    console.error('verify-keywords: dist/ missing');
    process.exit(1);
  }

  const { pages } = JSON.parse(fs.readFileSync(keywordsPath, 'utf8'));
  const primaries = pages.map((p) => normalizePhrase(p.primary));
  if (new Set(primaries).size !== primaries.length) {
    console.error('verify-keywords: duplicate primary keywords in keywords.json');
    process.exit(1);
  }

  const errors = [];

  for (const page of pages) {
    const html = readHtml(page.path);
    if (!html) {
      errors.push(`${page.path}: built HTML missing`);
      continue;
    }

    const title =
      metaContent(html, 'title') ||
      (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '');
    const description = metaContent(html, 'description');
    const h1 = firstH1(html);
    const bodyHtml = mainBody(html);
    const mdProse = loadMarkdownProse(page.path);
    const bodyText = mdProse ?? stripHtml(bodyHtml);
    const wc = words(bodyText);

    const tNorm = normalizePhrase(title);
    const hNorm = normalizePhrase(h1);
    const dNorm = normalizePhrase(description);
    if (tNorm && tNorm === hNorm) errors.push(`${page.path}: title matches H1`);
    if (tNorm && tNorm === dNorm) errors.push(`${page.path}: title matches meta description`);
    if (hNorm && hNorm === dNorm) errors.push(`${page.path}: H1 matches meta description`);

    const primary = page.primary;
    const pCount = countPhrase(bodyText, primary);
    const density = wc > 0 ? pCount / wc : 0;
    if (density > 0.015) {
      errors.push(`${page.path}: primary "${primary}" density ${(density * 100).toFixed(2)}% > 1.5%`);
    }
    const maxPrimary = Math.max(1, Math.ceil(wc / 150));
    if (pCount > maxPrimary) {
      errors.push(`${page.path}: primary "${primary}" appears ${pCount}× in body (max ${maxPrimary} for ${wc} words)`);
    }

    for (const secondary of page.secondaries) {
      const sCount = countPhrase(bodyText, secondary);
      const maxSecondary = Math.max(1, Math.ceil(wc / 250));
      if (sCount > maxSecondary) {
        errors.push(
          `${page.path}: secondary "${secondary}" appears ${sCount}× (max ${maxSecondary} for ${wc} words)`,
        );
      }
    }

    const headings = mdProse
      ? markdownHeadings(page.path, { levels: [1, 2] })
      : headingTexts(bodyHtml).slice(0, 12);
    const primaryInHeadings = headings.filter((h) => countPhrase(h, primary) > 0).length;
    const headingCap = page.path === '/' ? 3 : 2;
    if (primaryInHeadings > headingCap) {
      errors.push(
        `${page.path}: primary in ${primaryInHeadings} headings (max ${headingCap} for H1–H2)`,
      );
    }

    const proseText = bodyText;
    const firstWords = proseText.split(/\s+/).slice(0, 100).join(' ');
    if (countPhrase(firstWords, primary) === 0) {
      errors.push(`${page.path}: primary not in first ~100 words of main copy`);
    }

    const alts = [...bodyHtml.matchAll(/<img[^>]*\balt\s*=\s*["']([^"']+)["']/gi)].map((m) => m[1]);
    const primaryAlts = alts.filter((a) => normalizePhrase(a).includes(normalizePhrase(primary)));
    if (primaryAlts.length > 1) {
      errors.push(`${page.path}: ${primaryAlts.length} image alts contain primary keyword`);
    }
  }

  if (errors.length) {
    console.error('verify-keywords failed:\n' + errors.map((e) => `  - ${e}`).join('\n'));
    process.exit(1);
  }

  console.log(`verify-keywords: OK (${pages.length} money pages)`);
}

main();