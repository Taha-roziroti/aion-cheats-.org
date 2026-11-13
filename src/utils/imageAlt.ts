/** Consistent alt strings for branded and blog imagery. */

export const SITE_LOGO_ALT = 'ABI Cheats logo';

export const HERO_BACKGROUND_ALT =
  'Atmospheric Arena Breakout Infinite raid environment used as a decorative background';

export function blogFeaturedImageAlt(title: string): string {
  const cleaned = title.replace(/\s+/g, ' ').trim();
  return cleaned ? `${cleaned} — featured image` : 'Blog featured image';
}
