/**
 * Canonical site host — imported by Astro, src/data/site.ts, and Node build scripts.
 */

export const SITE_HOST = 'dotacheat.com';
export const SITE_URL = `https://${SITE_HOST}`;

/** Indexable commercial and feature URLs (verify-seo audits these). */
export const INDEXABLE_MONEY_ROUTES = [
  '/',
  '/dota-2-maphack/',
  '/dota-2-hero-esp/',
  '/dota-2-cheats-review/',
];

function showcaseImage(siteUrl, file, title) {
  return { loc: `${siteUrl}/images/showcase/${file}`, title };
}

/** Google sitemap image namespace entries (keep in sync with src/data/site.ts). */
export function buildSitemapImages(siteUrl = SITE_URL) {
  return {
    '/': [
      showcaseImage(siteUrl, 'dota-drow-teamfight.webp', 'Dota 2 cheats software interface'),
      showcaseImage(siteUrl, 'dota-huskar-combat.webp', 'Dota 2 gameplay feature preview'),
    ],
    '/dota-2-maphack/': [
      showcaseImage(siteUrl, 'dota-invoker-river.webp', 'Dota 2 maphack map visibility preview'),
      showcaseImage(siteUrl, 'dota-low-poly-map.webp', 'Dota 2 map information interface'),
    ],
    '/dota-2-hero-esp/': [
      showcaseImage(siteUrl, 'dota-axe-combat.webp', 'Dota 2 hero ESP player information overlay'),
      showcaseImage(siteUrl, 'dota-magnus-overlay.webp', 'Dota 2 enemy hero ESP interface'),
    ],
    '/dota-2-cheats-review/': [
      showcaseImage(siteUrl, 'dota-drow-teamfight.webp', 'Dota 2 cheats review product interface'),
      showcaseImage(siteUrl, 'dota-feature-menu.webp', 'Dota 2 cheat software feature demonstration'),
    ],
    '/dota-2-scripts/': [
      showcaseImage(siteUrl, 'dota-magnus-overlay.webp', 'Dota 2 scripts feature interface'),
    ],
    '/dota-2-vac-ban-risk/': [
      showcaseImage(siteUrl, 'dota-huskar-combat.webp', 'Dota 2 VAC anti-cheat information'),
    ],
    '/faq/': [{ loc: `${siteUrl}/og/faq.jpg`, title: 'DotaCheat FAQ' }],
  };
}