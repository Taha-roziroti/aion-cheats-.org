/**
 * Enforce anchor rules from cursor-seo-audit-prompt §3 on audit/anchor-inventory.json.
 * Body rules apply to indexable Aion money pages + audited support URLs only.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { INDEXABLE_MONEY_ROUTES } from '../config/site.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const inventoryPath = path.join(root, '..', 'audit', 'anchor-inventory.json');
const keywordsPath = path.join(root, '..', 'keywords.json');

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

const AUDIT_SCOPE = new Set([
  ...INDEXABLE_MONEY_ROUTES,
  ...JSON.parse(fs.readFileSync(keywordsPath, 'utf8')).pages.map((p) => p.path),
  '/guides/cloud-dma-setup/',
  '/about/',
  '/support/',
  '/privacy/',
  '/terms/',
  '/faq/',
]);

function normalize(text) {
  return text.toLowerCase().replace(/\s+/g, ' ').trim();
}

function isInternal(href) {
  return href && href.startsWith('/') && !href.startsWith('/go/');
}

function scoped(anchors) {
  return anchors.filter((a) => AUDIT_SCOPE.has(a.page));
}

function main() {
  if (!fs.existsSync(inventoryPath)) {
    console.error('verify-anchor-inventory: run generate-anchor-inventory first');
    process.exit(1);
  }

  const { anchors: all } = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
  const anchors = scoped(all);
  const keywords = JSON.parse(fs.readFileSync(keywordsPath, 'utf8'));
  const primaryByPath = new Map(keywords.pages.map((p) => [p.path, normalize(p.primary)]));

  const errors = [];
  const bodyByNorm = new Map();
  const chromeLabels = new Set();
  const bodyInboundPrimary = new Map();

  for (const a of anchors) {
    if (!a.normalized) continue;
    if (a.region === 'body' && GENERIC.has(a.normalized)) {
      errors.push(`${a.page}: generic body anchor "${a.text}" → ${a.href}`);
    }
    if (['header', 'footer', 'breadcrumb', 'toc'].includes(a.region)) {
      chromeLabels.add(a.normalized);
    }
  }

  for (const a of anchors) {
    if (a.region !== 'body' || !a.normalized) continue;
    if (chromeLabels.has(a.normalized)) {
      errors.push(`${a.page}: body anchor reuses chrome label "${a.text}" → ${a.href}`);
    }

    const prior = bodyByNorm.get(a.normalized);
    if (prior) {
      errors.push(
        `Global body duplicate "${a.text}" on ${a.page} and ${prior.page} (→ ${a.href})`,
      );
    } else {
      bodyByNorm.set(a.normalized, a);
    }

    if (isInternal(a.href)) {
      const destPrimary = primaryByPath.get(a.href);
      if (destPrimary && a.normalized === destPrimary) {
        const hits = bodyInboundPrimary.get(a.href) ?? [];
        hits.push(a);
        bodyInboundPrimary.set(a.href, hits);
      }
    }
  }

  const byPageDest = new Map();
  for (const a of anchors) {
    if (a.region !== 'body' || !isInternal(a.href)) continue;
    const key = `${a.page}::${a.href}`;
    const hits = byPageDest.get(key) ?? [];
    hits.push(a);
    byPageDest.set(key, hits);
    if (a.href === a.page) {
      errors.push(`${a.page}: self-link in body "${a.text}"`);
    }
  }
  for (const [, hits] of byPageDest) {
    if (hits.length > 1) {
      errors.push(`${hits[0].page}: duplicate body links to ${hits[0].href} (${hits.length}×)`);
    }
  }

  for (const [dest, hits] of bodyInboundPrimary) {
    if (hits.length > 1) {
      errors.push(
        `More than one exact primary-keyword body anchor to ${dest}: ${hits.map((h) => h.page).join(', ')}`,
      );
    }
  }

  const chromeDup = new Map();
  for (const a of anchors) {
    if (!['header', 'footer', 'breadcrumb', 'toc'].includes(a.region) || !a.normalized) continue;
    const key = `${a.page}::${a.region}::${a.normalized}`;
    const hits = chromeDup.get(key) ?? [];
    hits.push(a);
    chromeDup.set(key, hits);
  }
  for (const [, hits] of chromeDup) {
    const hrefs = new Set(hits.map((h) => h.href));
    if (hrefs.size > 1) {
      errors.push(
        `${hits[0].page} ${hits[0].region}: label "${hits[0].text}" → ${[...hrefs].join(', ')}`,
      );
    }
  }

  if (errors.length) {
    console.error(`verify-anchor-inventory failed (${errors.length}):\n` + errors.map((e) => `  - ${e}`).join('\n'));
    process.exit(1);
  }

  console.log(
    `verify-anchor-inventory: OK (${anchors.length} scoped anchors, ${bodyByNorm.size} unique body labels)`,
  );
}

main();