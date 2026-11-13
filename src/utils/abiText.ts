/** Normalize template-literal copy to a single prose paragraph. */
export function normalizeAbiParagraph(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

export function resolveAbiHref(href: string): string {
  if (href === '#plans') return '/arena-breakout-infinite-cheats-pricing/';
  if (!href.startsWith('/')) return `/${href}`;
  return href.endsWith('/') || href === '/' ? href : `${href}/`;
}
