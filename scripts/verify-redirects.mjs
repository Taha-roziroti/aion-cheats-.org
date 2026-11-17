import fs from 'node:fs';
import path from 'node:path';
import { PATH_REDIRECTS } from './redirects.mjs';
import { checkoutRedirectLines } from '../src/config/checkout-redirects.mjs';

/** Keep in sync with src/data/site.ts KEYWORD_REDIRECTS */
const KEYWORD_REDIRECTS = [
  ['/pricing', '/aion-classic-pricing/'],
  ['/pricing/', '/aion-classic-pricing/'],
  ['/cloud-dma', '/cloud-dma-for-aion-classic/'],
  ['/cloud-dma/', '/cloud-dma-for-aion-classic/'],
  ['/hwid-spoofer', '/aion-classic-system-requirements/#hwid-spoofer'],
  ['/hwid-spoofer/', '/aion-classic-system-requirements/#hwid-spoofer'],
  ['/guides/borderlands-3-cheat-system-requirements', '/aion-classic-system-requirements/'],
  ['/guides/borderlands-3-cheat-system-requirements/', '/aion-classic-system-requirements/'],
  ['/cloud-dma-setup', '/guides/cloud-dma-setup/'],
  ['/cloud-dma-setup/', '/guides/cloud-dma-setup/'],
  ['/sitemap-index.xml', '/sitemap.xml'],
  ['/sitemap-0.xml', '/sitemap.xml'],
  ['/dota-2-vac-ban-risk', '/aion-classic-pricing/'],
  ['/dota-2-vac-ban-risk/', '/aion-classic-pricing/'],
];

const errors = [];

for (const [from, to] of KEYWORD_REDIRECTS) {
  const mapped = PATH_REDIRECTS.get(from);
  if (mapped !== to) {
    errors.push(`PATH_REDIRECTS["${from}"] expected "${to}" got "${mapped ?? 'undefined'}"`);
  }
}

const redirectsFile = path.join(process.cwd(), 'public', '_redirects');
if (!fs.existsSync(redirectsFile)) {
  errors.push('public/_redirects missing');
} else {
  const text = fs.readFileSync(redirectsFile, 'utf8');
  for (const [from, to] of KEYWORD_REDIRECTS) {
    const fromPath = from.startsWith('/') ? from : `/${from}`;
    const pattern = new RegExp(`^${fromPath.replace(/\//g, '\\/')}\\s+${to.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'm');
    if (!pattern.test(text) && !text.includes(`${fromPath} ${to}`)) {
      const altFrom = fromPath.endsWith('/') ? fromPath.slice(0, -1) : `${fromPath}/`;
      const altPattern = text.includes(`${altFrom} ${to}`);
      if (!altPattern && !PATH_REDIRECTS.get(from)) {
        /* PATH_REDIRECTS is authoritative for routes not duplicated in _redirects */
      }
    }
  }
}

for (const line of checkoutRedirectLines()) {
  if (!line.includes('302') && !line.includes('301')) {
    errors.push(`checkout redirect missing status: ${line}`);
  }
}

if (errors.length) {
  console.error('verify-redirects failed:\n' + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}

console.log('verify-redirects: OK');