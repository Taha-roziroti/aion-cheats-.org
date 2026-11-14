/** Site-wide marketing defaults — dotacheat.com / en-US. */

import { PRIMARY_SHOWCASE_IMAGE, SHOWCASE_SHOTS } from './showcaseImages';

export const PLACEHOLDER_IMAGE = PRIMARY_SHOWCASE_IMAGE;
export const PLACEHOLDER_IMAGE_ALT = SHOWCASE_SHOTS[0]?.alt ?? 'Dota 2 gameplay feature preview';

export const PLACEHOLDER_COPY = {
  title: 'Dota 2 Cheats',
  eyebrow: 'DotaCheat · Windows PC',
  subtitle:
    'Review map vision, hero ESP, gameplay timers, and other modules listed for the current Windows build before you choose a plan.',
  feature: 'Map vision, ward information, and hero overlays for supported Dota 2 clients on PC.',
  cta: 'View plans and pricing',
  productName: 'Dota 2 Cheats',
  siteName: 'DotaCheat',
} as const;