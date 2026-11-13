/**
 * Canonical site host — imported by Astro, src/data/site.ts, and Node build scripts.
 * Update only here before launch.
 */

export const SITE_HOST = 'isle-hack.com';
export const SITE_URL = `https://${SITE_HOST}`;

export const INDEXABLE_MONEY_ROUTES = [
  '/',
  '/arena-breakout-infinite-esp/',
  '/arena-breakout-infinite-aimbot/',
  '/arena-breakout-infinite-cheats-pricing/',
  '/cloud-dma-for-arena-breakout-infinite/',
  '/guides/cloud-dma-setup/',
  '/guides/system-requirements/',
  '/faq/',
];

/** Google sitemap image namespace entries (keep in sync with src/data/site.ts). */
export function buildSitemapImages(siteUrl = SITE_URL) {
  const showcase = (file) => `${siteUrl}/images/showcase/${file}`;

  return {
    '/': [
      { loc: showcase('abi-esp-indoor-aimbot.webp'), title: 'Arena Breakout Infinite cheats overview' },
      { loc: showcase('abi-combat-showcase.webp'), title: 'ABI ESP and aimbot features' },
    ],
    '/arena-breakout-infinite-cheats-pricing/': [
      { loc: showcase('abi-esp-menu.webp'), title: 'Arena Breakout Infinite pricing' },
    ],
    '/cloud-dma-for-arena-breakout-infinite/': [
      { loc: `${siteUrl}/og/cloud-dma.jpg`, title: 'Cloud DMA for Arena Breakout Infinite' },
      { loc: showcase('abi-jungle-radar.webp'), title: 'Radar and ESP preview' },
    ],
    '/arena-breakout-infinite-esp/': [
      { loc: showcase('abi-grass-stealth.webp'), title: 'Arena Breakout Infinite ESP' },
      { loc: showcase('abi-esp-distance-lines.webp'), title: 'ESP distance and snaplines' },
    ],
    '/arena-breakout-infinite-aimbot/': [
      { loc: showcase('abi-esp-indoor-aimbot.webp'), title: 'Arena Breakout Infinite aimbot' },
      { loc: showcase('abi-esp-menu.webp'), title: 'Aimbot and FOV menu' },
    ],
    '/guides/cloud-dma-setup/': [
      { loc: `${siteUrl}/og/cloud-dma-setup.jpg`, title: 'Cloud DMA setup guide' },
      { loc: showcase('abi-jungle-radar.webp'), title: 'ESP radar preview' },
    ],
    '/guides/system-requirements/': [
      { loc: showcase('abi-esp-menu.webp'), title: 'ABI system requirements' },
    ],
    '/faq/': [{ loc: `${siteUrl}/og/faq.jpg`, title: 'ABI FAQ' }],
  };
}
