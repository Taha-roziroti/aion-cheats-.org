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
  'Independent guides and checkout paths for Dota 2 cheat software on Windows PC, including map vision, hero ESP, and related modules listed on the vendor build.';

export const SITE_ABOUT = ['Dota 2 cheats', 'Maphack', 'Hero ESP', 'Scripts', 'Windows PC'] as const;

export const LISTED_PRICES = {
  monthlyUsd: 35,
  lifetimeUsd: 150,
  cloudDmaLifetimeUsd: 0,
} as const;

export const SEO_ROUTE_INTENTS: Record<string, string> = {
  '/': 'dota 2 cheats, buy dota 2 cheats, plans',
  '/dota-2-maphack/': 'dota 2 maphack, map hack, fog of war',
  '/dota-2-hero-esp/': 'dota 2 hero esp, player esp',
  '/dota-2-cheats-review/': 'dota 2 cheats review, features',
  '/dota-2-scripts/': 'dota 2 scripts, hero scripts',
  '/dota-2-vac-ban-risk/': 'vac ban dota 2 cheats, valve policy',
  '/faq/': 'dota 2 cheats faq',
  '/support/': 'dota cheat support',
};

export { INDEXABLE_MONEY_ROUTES } from '../../config/site.mjs';

export const OG_IMAGES: Record<string, string> = {
  '/': '/og/home.jpg',
  '/dota-2-maphack/': '/og/home.jpg',
  '/dota-2-hero-esp/': '/og/home.jpg',
  '/dota-2-cheats-review/': '/og/pricing.jpg',
  '/dota-2-scripts/': '/og/default.jpg',
  '/dota-2-vac-ban-risk/': '/og/default.jpg',
  '/faq/': '/og/faq.jpg',
  '/guides/system-requirements/': '/og/requirements.jpg',
  default: '/og/default.jpg',
};

export function ogImageForPath(pathname: string): string {
  const path = pathname.endsWith('/') || pathname === '' ? pathname || '/' : `${pathname}/`;
  return OG_IMAGES[path] ?? OG_IMAGES.default!;
}

export const SITEMAP_IMAGES = buildSitemapImages(SITE_URL) as Record<string, { loc: string; title: string }[]>;

export const KEYWORD_REDIRECTS: [string, string][] = [
  ['/pricing', '/#products'],
  ['/pricing/', '/#products'],
  ['/arena-breakout-infinite-esp/', '/dota-2-hero-esp/'],
  ['/arena-breakout-infinite-aimbot/', '/dota-2-scripts/'],
  ['/arena-breakout-infinite-cheats-pricing/', '/#products'],
  ['/cloud-dma-for-arena-breakout-infinite/', '/'],
  ['/arena-breakout-infinite-hwid-spoofer/', '/products/dota-2-cheats/hwid-spoofer/'],
  ['/cloud-dma/', '/'],
  ['/hwid-spoofer/', '/products/dota-2-cheats/hwid-spoofer/'],
  ['/sitemap-index.xml', '/sitemap.xml'],
  ['/sitemap-0.xml', '/sitemap.xml'],
];