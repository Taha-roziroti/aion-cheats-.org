/** Canonical SEO / site identity — host from config/site.mjs; copy and routes here. */

import { SITE_HOST as CANONICAL_HOST, SITE_URL as CANONICAL_URL, buildSitemapImages } from '../../config/site.mjs';
import { PLACEHOLDER_COPY } from './placeholders';

export const SITE_HOST = CANONICAL_HOST;
export const SITE_URL = CANONICAL_URL;

export const SITE_NAME = PLACEHOLDER_COPY.siteName;
export const SITE_BRAND = SITE_NAME;
export const SUPPORT_EMAIL = `support@${SITE_HOST}`;

export const PRODUCT_BASE = '/';
export const TITLE_PREFIX = 'Arena Breakout Infinite Cheats';

export const PRODUCT_ID = `${SITE_URL}/#product`;

export const SITE_PURPOSE =
  'Arena Breakout Infinite PC cheat features including player ESP, AI ESP, loot displays, aimbot options, and Cloud DMA infrastructure for supported Windows builds.';

export const SITE_ABOUT = [
  'Arena Breakout Infinite cheats',
  'Player ESP',
  'Loot ESP',
  'Aimbot',
  'Cloud DMA',
  'Hyper-V virtualization',
] as const;

export const LISTED_PRICES = {
  monthlyUsd: 35,
  lifetimeUsd: 150,
  cloudDmaLifetimeUsd: 50,
} as const;

export const SEO_ROUTE_INTENTS: Record<string, string> = {
  '/': 'arena breakout infinite cheats, ESP, aimbot, loot, PC',
  '/arena-breakout-infinite-esp/': 'arena breakout infinite esp, player esp, loot esp',
  '/arena-breakout-infinite-aimbot/': 'arena breakout infinite aimbot, fov, smoothness',
  '/arena-breakout-infinite-cheats-pricing/': 'arena breakout infinite cheats price, monthly lifetime',
  '/cloud-dma-for-arena-breakout-infinite/': 'cloud dma arena breakout infinite, hyper-v',
  '/arena-breakout-infinite-hwid-spoofer/': 'hwid spoofer arena breakout',
  '/guides/cloud-dma-setup/': 'cloud dma setup hyper-v',
  '/guides/system-requirements/': 'arena breakout infinite system requirements windows',
  '/faq/': 'abi cheats faq pricing cloud dma',
  '/support/': 'abi checkout support',
};

export { INDEXABLE_MONEY_ROUTES } from '../../config/site.mjs';

export const OG_IMAGES: Record<string, string> = {
  '/': '/og/home.jpg',
  '/arena-breakout-infinite-cheats-pricing/': '/og/pricing.jpg',
  '/cloud-dma-for-arena-breakout-infinite/': '/og/cloud-dma.jpg',
  '/arena-breakout-infinite-esp/': '/og/home.jpg',
  '/arena-breakout-infinite-aimbot/': '/og/home.jpg',
  '/arena-breakout-infinite-hwid-spoofer/': '/og/default.jpg',
  '/guides/cloud-dma-setup/': '/og/cloud-dma-setup.jpg',
  '/guides/system-requirements/': '/og/requirements.jpg',
  '/faq/': '/og/faq.jpg',
  default: '/og/default.jpg',
};

export function ogImageForPath(pathname: string): string {
  const path = pathname.endsWith('/') || pathname === '' ? pathname || '/' : `${pathname}/`;
  return OG_IMAGES[path] ?? OG_IMAGES.default!;
}

export const SITEMAP_IMAGES = buildSitemapImages(SITE_URL) as Record<string, { loc: string; title: string }[]>;

export const KEYWORD_REDIRECTS: [string, string][] = [
  ['/pricing', '/arena-breakout-infinite-cheats-pricing/'],
  ['/pricing/', '/arena-breakout-infinite-cheats-pricing/'],
  ['/cloud-dma', '/cloud-dma-for-arena-breakout-infinite/'],
  ['/cloud-dma/', '/cloud-dma-for-arena-breakout-infinite/'],
  ['/hwid-spoofer', '/arena-breakout-infinite-hwid-spoofer/'],
  ['/hwid-spoofer/', '/arena-breakout-infinite-hwid-spoofer/'],
  ['/guides/borderlands-3-cheat-system-requirements', '/guides/system-requirements/'],
  ['/guides/borderlands-3-cheat-system-requirements/', '/guides/system-requirements/'],
  ['/cloud-dma-setup', '/guides/cloud-dma-setup/'],
  ['/cloud-dma-setup/', '/guides/cloud-dma-setup/'],
  ['/sitemap-index.xml', '/sitemap.xml'],
  ['/sitemap-0.xml', '/sitemap.xml'],
];
