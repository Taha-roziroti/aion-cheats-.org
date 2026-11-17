/** Consistent alt strings for branded and blog imagery. */

import { PLACEHOLDER_COPY } from '../data/placeholders';

export const SITE_LOGO_ALT = `${PLACEHOLDER_COPY.siteName} logo`;

export const HERO_BACKGROUND_ALT =
  'Decorative backdrop behind the Aion Classic ESP and aimbot product overview';

export function blogFeaturedImageAlt(title: string): string {
  const cleaned = title.replace(/\s+/g, ' ').trim();
  return cleaned ? `${cleaned} — featured image` : 'Blog featured image';
}
