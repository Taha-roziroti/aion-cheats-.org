import type { ProductSlide } from './products';

const base = '/images/abi';

export const ABI_PRIMARY_IMAGE = `${base}/abi-esp-aimbot-loot.webp`;

export const ABI_HERO_SLIDES: ProductSlide[] = [
  {
    src: `${base}/abi-esp-aimbot-loot.webp`,
    alt: 'Gameplay with enemy ESP, loot value labels, and aimbot FOV circle',
    caption: 'ESP & loot',
    captionDesc: 'Player markers, item prices, and FOV overlay in one view.',
  },
  {
    src: `${base}/abi-esp-snaplines.webp`,
    alt: 'ESP snaplines and distance readouts on distant targets',
    caption: 'Snaplines',
    captionDesc: 'Distance tags and lines to tracked entities.',
  },
  {
    src: `${base}/abi-player-esp-grass.webp`,
    alt: 'Player ESP tags and health bars through dense foliage',
    caption: 'Player ESP',
    captionDesc: 'Name, distance, and status through cover.',
  },
  {
    src: `${base}/abi-radar-overlay.webp`,
    alt: '2D radar minimap with entity blips',
    caption: 'Radar',
    captionDesc: 'Compact awareness panel beside the main view.',
  },
  {
    src: `${base}/abi-esp-player-tags.webp`,
    alt: 'ESP boxes with health and stamina on multiple targets',
    caption: 'Target info',
    captionDesc: 'Health, weight, and growth readouts on targets.',
  },
  {
    src: `${base}/abi-combat-showcase.webp`,
    alt: 'Combat view with aimbot FOV circle and wireframe ESP',
    caption: 'Combat assist',
    captionDesc: 'FOV ring with synchronized visual overlays.',
  },
  {
    src: `${base}/abi-esp-boxes-camera.webp`,
    alt: 'Free camera view with ESP bounding boxes on entities',
    caption: 'World ESP',
    captionDesc: 'Box ESP and distance filters in open terrain.',
  },
  {
    src: `${base}/abi-menu-overlay.webp`,
    alt: 'In-game configuration menu with feature toggles',
    caption: 'Configuration',
    captionDesc: 'Toggle modules and adjust interface options.',
  },
];

export const ABI_GALLERY = ABI_HERO_SLIDES.map((slide) => ({
  src: slide.src,
  alt: slide.alt,
}));

/** Optional lead image per money page (Markdown SEO routes). */
export const ABI_PAGE_PREVIEW: Record<string, string> = {
  '/arena-breakout-infinite-esp/': `${base}/abi-esp-snaplines.webp`,
  '/arena-breakout-infinite-aimbot/': `${base}/abi-combat-showcase.webp`,
  '/arena-breakout-infinite-cheats-pricing/': `${base}/abi-menu-overlay.webp`,
  '/cloud-dma-for-arena-breakout-infinite/': `${base}/abi-radar-overlay.webp`,
};
