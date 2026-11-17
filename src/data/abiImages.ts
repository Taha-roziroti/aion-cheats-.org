import type { ProductSlide } from './products';
import { SHOWCASE_SHOTS } from './showcaseImages';

export const ABI_PRIMARY_IMAGE = SHOWCASE_SHOTS[0]!.src;

export const ABI_HERO_SLIDES: ProductSlide[] = SHOWCASE_SHOTS.slice(0, 6).map((s) => ({
  src: s.src,
  alt: s.alt,
  caption: s.caption ?? 'Feature preview',
  captionDesc: s.captionDesc ?? s.alt,
}));

export const ABI_GALLERY = SHOWCASE_SHOTS.map((s) => ({ src: s.src, alt: s.alt }));

export const ABI_PAGE_PREVIEW: Record<string, string> = {
  '/': SHOWCASE_SHOTS[0]!.src,
  '/aion-classic-esp/': SHOWCASE_SHOTS[0]!.src,
  '/aion-classic-pricing/': SHOWCASE_SHOTS[4]!.src,
  '/cloud-dma-for-aion-classic/': SHOWCASE_SHOTS[3]!.src,
  '/aion-classic-system-requirements/': SHOWCASE_SHOTS[3]!.src,
};