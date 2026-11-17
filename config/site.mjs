/**
 * Canonical site host — imported by Astro, src/data/site.ts, and Node build scripts.
 */

export const SITE_HOST = 'aioncheats.org';
export const SITE_URL = `https://${SITE_HOST}`;

/** Indexable commercial and feature URLs (verify-seo audits these). */
export const INDEXABLE_MONEY_ROUTES = ['/', '/cloud-dma-for-aion-classic/'];

const showcaseImage = (siteUrl, path, title) => ({
  loc: `${siteUrl}${path}`,
  title,
});

/** Google sitemap image namespace entries (keep in sync with src/data/site.ts). */
export function buildSitemapImages(siteUrl = SITE_URL) {
  const fallback = showcaseImage(siteUrl, '/images/showcase/aion-visuals.webp', 'Aion Classic player ESP overlay preview');
  return {
    '/': [showcaseImage(siteUrl, '/images/showcase/aion-visuals.webp', 'Aion Classic player ESP overlay preview')],
    '/aion-classic-esp/': [
      showcaseImage(siteUrl, '/images/showcase/aion-visuals.webp', 'Aion Classic player nameplate ESP'),
    ],
    '/aion-classic-pricing/': [
      showcaseImage(siteUrl, '/images/showcase/aion-gameplay.webp', 'Aion Classic ESP and aimbot monthly and lifetime pricing'),
    ],
    '/cloud-dma-for-aion-classic/': [
      showcaseImage(siteUrl, '/images/showcase/aion-misc.webp', 'Cloud DMA for Aion Classic setup'),
    ],
    '/aion-classic-system-requirements/': [
      showcaseImage(siteUrl, '/images/showcase/aion-misc.webp', 'Aion Classic ESP aimbot Windows system requirements'),
    ],
    '/faq/': [fallback],
  };
}