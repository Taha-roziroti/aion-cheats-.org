/** Canonical SEO / site identity — host from config/site.mjs. */

import { SITE_HOST as CANONICAL_HOST, SITE_URL as CANONICAL_URL, buildSitemapImages } from '../../config/site.mjs';
import { PLACEHOLDER_COPY } from './placeholders';

export const SITE_HOST = CANONICAL_HOST;
export const SITE_URL = CANONICAL_URL;

export const SITE_NAME = PLACEHOLDER_COPY.siteName;
export const SITE_BRAND = SITE_NAME;
export const SUPPORT_EMAIL = `support@${SITE_HOST}`;

export const PRODUCT_BASE = '/';
export const TITLE_PREFIX = PLACEHOLDER_COPY.title;

export const PRODUCT_ID = `${SITE_URL}/#product`;

export const SITE_PURPOSE =
  'Affiliate information site for Aion Classic ESP and aimbot on the main plan, plus Cloud DMA and HWID Spoofer supporting products for US players.';

export const SITE_ABOUT = [
  'Aion Classic ESP and aimbot',
  'Pricing',
  'Cloud DMA',
  'HWID Spoofer',
  'System requirements',
] as const;

export const LISTED_PRICES = {
  monthlyUsd: 35,
  lifetimeUsd: 150,
  cloudDmaLifetimeUsd: 50,
} as const;

export const SEO_ROUTE_INTENTS: Record<string, string> = {
  '/': 'Aion Classic ESP and aimbot, monthly and lifetime pricing',
  '/aion-classic-esp/': 'Aion Classic ESP and aimbot main plan features',
  '/aion-classic-pricing/': 'Aion Classic ESP and aimbot pricing, monthly vs lifetime',
  '/cloud-dma-for-aion-classic/': 'Cloud DMA for Aion Classic setup and requirements',
  '/aion-classic-system-requirements/': 'Aion Classic ESP aimbot and Cloud DMA system requirements',
  '/faq/': 'Aion Classic checkout and Cloud DMA FAQ',
  '/support/': 'AionCheats support channels and vendor ticket tips',
  '/guides/cloud-dma-setup/': 'Cloud DMA setup outline for Aion Classic Hyper-V',
};

export { INDEXABLE_MONEY_ROUTES } from '../../config/site.mjs';

export const OG_IMAGES: Record<string, string> = {
  '/': '/og/home.jpg',
  '/aion-classic-esp/': '/og/home.jpg',
  '/aion-classic-pricing/': '/og/pricing.jpg',
  '/cloud-dma-for-aion-classic/': '/og/cloud-dma.jpg',
  '/aion-classic-system-requirements/': '/og/requirements.jpg',
  '/faq/': '/og/faq.jpg',
  default: '/og/default.jpg',
};

export function ogImageForPath(pathname: string): string {
  const path = pathname.endsWith('/') || pathname === '' ? pathname || '/' : `${pathname}/`;
  return OG_IMAGES[path] ?? OG_IMAGES.default!;
}

export const SITEMAP_IMAGES = buildSitemapImages(SITE_URL) as Record<string, { loc: string; title: string }[]>;

export const KEYWORD_REDIRECTS: [string, string][] = [
  ['/pricing', '/aion-classic-pricing/'],
  ['/pricing/', '/aion-classic-pricing/'],
  ['/dota-2-maphack/', '/aion-classic-esp/'],
  ['/dota-2-hero-esp/', '/aion-classic-esp/'],
  ['/dota-2-cheats-review/', '/aion-classic-pricing/'],
  ['/dota-2-scripts/', '/'],
  ['/cloud-dma-for-arena-breakout-infinite/', '/cloud-dma-for-aion-classic/'],
  ['/guides/system-requirements/', '/aion-classic-system-requirements/'],
  ['/arena-breakout-infinite-esp/', '/aion-classic-esp/'],
  ['/arena-breakout-infinite-cheats-pricing/', '/aion-classic-pricing/'],
  ['/cloud-dma/', '/cloud-dma-for-aion-classic/'],
  ['/hwid-spoofer/', '/aion-classic-system-requirements/#hwid-spoofer'],
  ['/sitemap-index.xml', '/sitemap.xml'],
  ['/sitemap-0.xml', '/sitemap.xml'],
  ['/dota-2-vac-ban-risk', '/aion-classic-pricing/'],
  ['/dota-2-vac-ban-risk/', '/aion-classic-pricing/'],
];