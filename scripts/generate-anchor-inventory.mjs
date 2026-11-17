/**
 * Build audit/anchor-inventory.json from dist/ HTML (cursor-seo-audit-prompt §3).
 */
import fs from 'node:fs';
import path from 'node:path';

const dist = path.join(process.cwd(), 'dist');
const outDir = path.join(process.cwd(), 'audit');
const outFile = path.join(outDir, 'anchor-inventory.json');

const GENERIC = new Set([
  'click here',
  'here',
  'read more',
  'learn more',
  'more',
  'view',
  'see more',
  'details',
  'continue',
  'this page',
  'link',
]);

function walkHtmlFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkHtmlFiles(p, files);
    else if (ent.name.endsWith('.html')) files.push(p);
  }
  return files;
}

function routeFromFile(file) {
  const rel = path.relative(dist, file).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  if (rel === '404.html') return '/404/';
  const m = rel.match(/^(.+)\/index\.html$/);
  return m ? `/${m[1]}/` : null;
}

function normalizeHref(href) {
  if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
    return href ?? '';
  }
  let p = href.split('#')[0].trim();
  if (!p) return '/';
  if (p.startsWith('http')) return p;
  if (!p.startsWith('/')) return href;
  const hash = href.indexOf('#');
  if (hash >= 0) {
    const base = normalizeHref(href.slice(0, hash));
    const frag = href.slice(hash);
    return `${base}${frag}`;
  }
  if (!p.endsWith('/') && !p.includes('.')) p = `${p}/`;
  return p;
}

function normalizeText(text) {
  return text.toLowerCase().replace(/\s+/g, ' ').trim();
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function anchorTextFromMatch(fullTag, inner) {
  const aria = fullTag.match(/\baria-label\s*=\s*["']([^"']+)["']/i)?.[1];
  const imgAlt = inner.match(/<img[^>]*\balt\s*=\s*["']([^"']*)["']/i)?.[1];
  const visible = stripTags(inner);
  if (visible) return visible;
  if (imgAlt) return imgAlt;
  if (aria) return aria;
  return '';
}

function classifyRegions(html) {
  const header = html.match(/<header[^>]*>([\s\S]*?)<\/header>/i)?.[1] ?? '';
  const footer = html.match(/<footer[^>]*>([\s\S]*?)<\/footer>/i)?.[1] ?? '';
  const main = html.match(/<main[^>]*>([\s\S]*)<\/main>/i)?.[1] ?? '';
  const breadcrumb =
    main.match(/<nav[^>]*aria-label=["']Breadcrumb["'][\s\S]*?<\/nav>/i)?.[0] ??
    main.match(/<nav[^>]*breadcrumb[\s\S]*?<\/nav>/i)?.[0] ??
    '';
  const toc =
    main.match(/<nav[^>]*aria-label=["'][^"']*contents[^"']*["'][\s\S]*?<\/nav>/i)?.[0] ??
    main.match(/<nav[^>]*class=["'][^"']*toc[^"']*["'][\s\S]*?<\/nav>/i)?.[0] ??
    '';
  let body = main;
  if (breadcrumb) body = body.replace(breadcrumb, '');
  if (toc) body = body.replace(toc, '');
  body = body.replace(/<nav[^>]*aria-label=["']Breadcrumb["'][\s\S]*?<\/nav>/gi, '');
  return { header, footer, breadcrumb, toc, body };
}

function extractAnchorsFromChunk(chunk, page, region) {
  const entries = [];
  const re = /<a\s+[^>]*\bhref\s*=\s*["'][^"']+["'][^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(chunk)) !== null) {
    const fullTag = m[0];
    const inner = m[1];
    const href = fullTag.match(/\bhref\s*=\s*["']([^"']+)["']/i)?.[1] ?? '';
    const rel = fullTag.match(/\brel\s*=\s*["']([^"']+)["']/i)?.[1] ?? '';
    const text = anchorTextFromMatch(fullTag, inner);
    const norm = normalizeText(text);
    entries.push({
      page,
      region,
      text,
      normalized: norm,
      href: normalizeHref(href),
      rel,
      generic: GENERIC.has(norm),
    });
  }
  return entries;
}

function extractAnchors(html, page) {
  const regions = classifyRegions(html);
  const inventory = [];
  for (const [region, chunk] of Object.entries(regions)) {
    if (!chunk.trim()) continue;
    inventory.push(...extractAnchorsFromChunk(chunk, page, region));
  }
  return inventory;
}

function main() {
  if (!fs.existsSync(dist)) {
    console.error('generate-anchor-inventory: dist/ missing — run build first');
    process.exit(1);
  }

  const inventory = [];
  for (const file of walkHtmlFiles(dist)) {
    const route = routeFromFile(file);
    if (!route) continue;
    const html = fs.readFileSync(file, 'utf8');
    inventory.push(...extractAnchors(html, route));
  }

  fs.mkdirSync(outDir, { recursive: true });
  const payload = {
    generatedAt: new Date().toISOString(),
    count: inventory.length,
    anchors: inventory,
  };
  fs.writeFileSync(outFile, `${JSON.stringify(payload, null, 2)}\n`);
  console.log(`generate-anchor-inventory: wrote ${inventory.length} anchors → audit/anchor-inventory.json`);
}

main();