/** Product screenshots — Aion Classic ESP and aimbot menu captures. */

const base = (name: string) => `/images/showcase/${name}.webp`;

export const SHOWCASE_BASE = base('aion-visuals');

export interface ShowcaseShot {
  src: string;
  alt: string;
  caption?: string;
  captionDesc?: string;
}

export const PRODUCT_SHOTS: ShowcaseShot[] = [
  {
    src: base('aion-visuals'),
    alt: 'Aion Classic player nameplate ESP menu screenshot',
    caption: 'Player Visual',
    captionDesc: 'Aion Classic player ESP overlay preview with nameplates and distance.',
  },
  {
    src: base('aion-world'),
    alt: 'Aion Classic gathering and rare spawn ESP world menu',
    caption: 'World & radar',
    captionDesc: 'Gathering nodes, rare spawns, chest ESP, and minimap radar settings.',
  },
  {
    src: base('aion-aimbot'),
    alt: 'Aion Classic settings menu configuration panel',
    caption: 'Menu panel',
    captionDesc: 'In-game menu layout for supported Aion Classic builds.',
  },
  {
    src: base('aion-misc'),
    alt: 'Cloud DMA for Aion Classic connection status panel',
    caption: 'Misc & cloud',
    captionDesc: 'Stream-proof options and Cloud DMA single-PC Hyper-V status.',
  },
  {
    src: base('aion-gameplay'),
    alt: 'Aion Classic in-game combat screenshot',
    caption: 'In-game',
    captionDesc: 'Gameplay capture for Aion Classic ESP and aimbot pricing context.',
  },
];

/** Eight slots for carousels that expect extra thumbs — repeats gameplay/visuals. */
export const SHOWCASE_SHOTS: ShowcaseShot[] = [
  ...PRODUCT_SHOTS,
  PRODUCT_SHOTS[0]!,
  PRODUCT_SHOTS[4]!,
  PRODUCT_SHOTS[2]!,
];

/** Hero carousel — cap slides to limit DOM size on the hub (Lighthouse §10). */
export const HERO_SHOWCASE_SLIDES = PRODUCT_SHOTS.slice(0, 3).map((s) => ({
  src: s.src,
  alt: s.alt,
  caption: s.caption ?? s.alt,
  captionDesc: s.captionDesc ?? s.alt,
}));

export const PRIMARY_SHOWCASE_IMAGE = PRODUCT_SHOTS[0]!.src;

export const HERO_SECTION_BACKGROUND = '/images/hero/hero-background.webp';
export const HERO_SECTION_LCP_PRELOAD = '/images/hero/hero-background-512.webp';