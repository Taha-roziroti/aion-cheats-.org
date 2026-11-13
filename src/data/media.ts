import { SHOWCASE_SHOTS } from './showcaseImages';

/** Homepage product screenshot gallery (thumbs + lightbox-style main image). */
export const PRODUCT_PREVIEW_GALLERY = SHOWCASE_SHOTS.map((shot) => ({
  src: shot.src,
  alt: shot.alt,
}));
