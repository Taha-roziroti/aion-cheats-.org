import type Lenis from 'lenis';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/** Scroll helper shared by site.ts and Lenis (window.__lenis). */
export function scrollToElement(target: HTMLElement) {
  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(target, { offset: 0, duration: 1.1 });
    return;
  }
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
