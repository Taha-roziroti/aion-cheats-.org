/** Product screenshot masters under /images/showcase/ (responsive widths from optimize-images). */

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
    'abi-esp-menu.webp',
    'ESP and aimbot menu overlay with FOV, visual toggles, and radar',
    'In-game menu',
    'FOV, sky, fog, and module toggles in one overlay.',
  ),
  shot(
    'abi-esp-indoor-aimbot.webp',
    'Player ESP silhouette, bounding box, and aimbot FOV circle during combat',
    'Player ESP',
    'Target boxes, skeleton readouts, and FOV display.',
  ),
  shot(
    'abi-combat-showcase.webp',
    'ESP wireframes, radar, and entity markers during a firefight',
    'Combat awareness',
    'Combined ESP, distance tags, and on-screen radar.',
  ),
  shot(
    'abi-jungle-radar.webp',
    '2D radar with player positions and ESP information panels',
    'Radar',
    'Compact radar beside detailed player readouts.',
  ),
  shot(
    'abi-esp-distance-lines.webp',
    'ESP snaplines, distance tags, and entity labels across the map',
    'Distance ESP',
    'Snaplines and range readouts for nearby activity.',
  ),
  shot(
    'abi-grass-stealth.webp',
    'Enemy ESP markers and status bars through environmental cover',
    'ESP through cover',
    'Health, distance, and labels with foliage on screen.',
  ),
  shot(
    'abi-free-camera.webp',
    'Free camera view with ESP boxes on creatures in a dense environment',
    'World ESP',
    'Wireframe boxes and range markers in low light.',
  ),
  shot(
    'abi-esp-open-area.webp',
    'Third-person view with player nameplates, health bars, and HUD overlays',
    'Player tags',
    'Name, health, and stamina readouts over targets.',
  ),
];

/** Hero carousel — first five showcase angles. */
export const HERO_SHOWCASE_SLIDES = SHOWCASE_SHOTS.slice(0, 5).map((s) => ({
  src: s.src,
  alt: s.alt,
  caption: s.caption ?? 'Feature preview',
  captionDesc: s.captionDesc ?? s.alt,
}));

/** Primary OG / schema image. */
export const PRIMARY_SHOWCASE_IMAGE = SHOWCASE_SHOTS[1]!.src;

/** Full-bleed homepage hero backdrop (decorative). */
export const HERO_SECTION_BACKGROUND = '/images/hero/hero-background.webp';
