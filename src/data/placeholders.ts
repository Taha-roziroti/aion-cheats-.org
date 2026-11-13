/** Default marketing copy; assets point at showcase screenshots. */

import { PRIMARY_SHOWCASE_IMAGE, SHOWCASE_SHOTS } from './showcaseImages';

export const PLACEHOLDER_IMAGE = PRIMARY_SHOWCASE_IMAGE;
export const PLACEHOLDER_IMAGE_ALT = SHOWCASE_SHOTS[1]?.alt ?? 'Arena Breakout Infinite cheat feature preview';

export const PLACEHOLDER_COPY = {
  title: 'Arena Breakout Infinite Cheats',
  eyebrow: 'ABI Cheats for PC',
  subtitle: 'Arena Breakout Infinite ESP, aimbot, loot displays, and Cloud DMA setup resources.',
  feature: 'ESP, aimbot, loot displays, and radar-style overlays for supported Windows builds.',
  cta: 'Explore available plans',
  productName: 'Arena Breakout Infinite Cheats',
  siteName: 'ABI Cheats',
} as const;
