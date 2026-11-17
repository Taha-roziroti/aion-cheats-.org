/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/'],
  ['/cheats/', '/'],
  ['/cheats/lite', '/'],
  ['/cheats/lite/', '/'],
  ['/cheats/pro', '/'],
  ['/cheats/pro/', '/'],
  ['/cheats/elite', '/'],
  ['/cheats/elite/', '/'],
  ['/cheats/compare', '/blog/dota-2-lite-vs-pro/'],
  ['/cheats/compare/', '/blog/dota-2-lite-vs-pro/'],
  ['/products/dota-2-cheats/utilities', '/products/dota-2-cheats/utilities/'],
  ['/products/dota-2-cheats', '/'],
  ['/products/dota-2-cheats/', '/'],
  ['/products/dota-2-cheats/account-recovery', '/'],
  ['/products/dota-2-cheats/account-recovery/', '/'],
  ['/products/dota-2-cheats/hwid-spoofer', '/aion-classic-system-requirements/#hwid-spoofer'],
  ['/products/dota-2-cheats/hwid-spoofer/', '/aion-classic-system-requirements/#hwid-spoofer'],
  ['/products/dota-2-cheats/ugc', '/'],
  ['/products/dota-2-cheats/ugc/', '/'],
  ['/products/dota-2-cheats/unlock-all', '/'],
  ['/products/dota-2-cheats/unlock-all/', '/'],
  ['/products/dota-2-cheats/elite', '/'],
  ['/products/dota-2-cheats/elite/', '/'],
  ['/pricing', '/aion-classic-pricing/'],
  ['/pricing/', '/aion-classic-pricing/'],
  ['/aion-classic-cheats-price', '/aion-classic-pricing/'],
  ['/aion-classic-cheats-price/', '/aion-classic-pricing/'],
  ['/aion-classic-cheat-system-requirements', '/aion-classic-system-requirements/'],
  ['/aion-classic-cheat-system-requirements/', '/aion-classic-system-requirements/'],
  ['/cloud-dma', '/cloud-dma-for-aion-classic/'],
  ['/cloud-dma/', '/cloud-dma-for-aion-classic/'],
  ['/hwid-spoofer', '/aion-classic-system-requirements/#hwid-spoofer'],
  ['/hwid-spoofer/', '/aion-classic-system-requirements/#hwid-spoofer'],
  ['/dota-2-maphack', '/aion-classic-esp/'],
  ['/dota-2-maphack/', '/aion-classic-esp/'],
  ['/dota-2-hero-esp', '/aion-classic-esp/'],
  ['/dota-2-hero-esp/', '/aion-classic-esp/'],
  ['/dota-2-cheats-review', '/aion-classic-pricing/'],
  ['/dota-2-cheats-review/', '/aion-classic-pricing/'],
  ['/dota-2-scripts', '/'],
  ['/dota-2-scripts/', '/'],
  ['/guides/system-requirements', '/aion-classic-system-requirements/'],
  ['/guides/system-requirements/', '/aion-classic-system-requirements/'],
  ['/guides/borderlands-3-cheat-system-requirements', '/aion-classic-system-requirements/'],
  ['/guides/borderlands-3-cheat-system-requirements/', '/aion-classic-system-requirements/'],
  ['/cloud-dma-setup', '/guides/cloud-dma-setup/'],
  ['/cloud-dma-setup/', '/guides/cloud-dma-setup/'],
  ['/sitemap-index.xml', '/sitemap.xml'],
  ['/sitemap-0.xml', '/sitemap.xml'],
  ['/dota-2-vac-ban-risk', '/aion-classic-pricing/'],
  ['/dota-2-vac-ban-risk/', '/aion-classic-pricing/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
