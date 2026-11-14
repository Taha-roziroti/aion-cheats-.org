/** Product screenshots under /images/showcase/ (responsive widths from optimize-images). */

export const SHOWCASE_BASE = '/images/showcase';

export interface ShowcaseShot {
  src: string;
  alt: string;
  caption?: string;
  captionDesc?: string;
}

const shot = (file: string, alt: string, caption?: string, captionDesc?: string): ShowcaseShot => ({
  src: `${SHOWCASE_BASE}/${file}`,
  alt,
  caption,
  captionDesc,
});

export const SHOWCASE_SHOTS: ShowcaseShot[] = [
  shot(
    'dota-drow-teamfight.webp',
    'Dota 2 gameplay feature preview with hero overlays and map information',
    'Teamfight view',
    'Gameplay screenshot showing HUD and in-match overlays from the listed product.',
  ),
  shot(
    'dota-huskar-combat.webp',
    'Dota 2 cheats software interface during ranked combat',
    'Combat HUD',
    'In-game view with health bars and minimap visible.',
  ),
  shot(
    'dota-magnus-overlay.webp',
    'Dota 2 cheat menu screenshot with ability cooldown overlays',
    'Cooldown tracking',
    'Screenshot showing ability timers above enemy heroes.',
  ),
  shot(
    'dota-invoker-river.webp',
    'Dota 2 maphack map visibility preview near the river',
    'Map awareness',
    'River fight with minimap and standard Dota 2 interface.',
  ),
  shot(
    'dota-axe-combat.webp',
    'Dota 2 hero ESP player information overlay in a skirmish',
    'Hero ESP',
    'Screenshot with extra readouts above heroes during combat.',
  ),
  shot(
    'dota-low-poly-map.webp',
    'Dota 2 map information interface with simplified terrain view',
    'Map rendering',
    'Product screenshot showing an alternate map display mode.',
  ),
  shot(
    'dota-meta-picker.webp',
    'Dota 2 cheat menu screenshot with hero selection statistics',
    'Menu overlay',
    'Hero picker screen with additional stat overlays.',
  ),
  shot(
    'dota-feature-menu.webp',
    'Dota 2 cheats software interface feature panel',
    'Feature panel',
    'Menu or configuration screenshot from the product showcase.',
  ),
];

export const HERO_SHOWCASE_SLIDES = SHOWCASE_SHOTS.slice(0, 5).map((s) => ({
  src: s.src,
  alt: s.alt,
  caption: s.caption ?? 'Feature preview',
  captionDesc: s.captionDesc ?? s.alt,
}));

export const PRIMARY_SHOWCASE_IMAGE = SHOWCASE_SHOTS[0]!.src;

export const HERO_SECTION_BACKGROUND = '/images/hero/hero-background.webp';
export const HERO_SECTION_LCP_PRELOAD = '/images/hero/hero-background-640.webp';