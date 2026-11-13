# GSAP + Lenis Motion Enhancement (Astro)

You are enhancing the design of this existing website with smooth scrolling (Lenis) and scroll-based animation (GSAP). Read this entire file before changing anything. Work in Agent mode, make the changes yourself, and report back in plain English.

---

## 0. Priorities (in order)

1. **SEO and page speed come first.** Nothing in this file may reduce rankings, Core Web Vitals (LCP, CLS, INP), crawlability, or accessibility. If a motion effect conflicts with SEO or performance, skip the effect.
2. **Do not change the existing design, content, URLs, metadata, structured data, redirects, or sitemap.** This task only adds motion.
3. **Smooth, professional, subtle.** Motion should feel polished, not flashy or gimmicky.

---

## 1. Fixed stack (do NOT change)

- Astro (static site generator, pre-rendered HTML in `dist/`), Node >= 22.12
- Tailwind CSS 4 via `@tailwindcss/vite`
- Starwind UI components (`@starwind-ui/astro`), Embla carousel
- TypeScript in `src/`
- Content Collections (markdown in `content/pages/`)
- Custom Node build scripts (SEO assets, redirects, `/go/*` bridges, audits)

**Hard rules:**
- NO React, Vue, Svelte, or any new UI framework. Do NOT add `@astrojs/react` or similar.
- NO new animation libraries beyond `gsap` and `lenis`. (Do not use React Bits, Framer Motion, anime.js, etc.)
- Do NOT modify the build scripts, `_redirects`, sitemap setup, or SEO asset generation.
- Do NOT commit, push, or deploy. Make local file changes only, unless I explicitly tell you to commit or push.
- Do NOT introduce pill-shaped (fully rounded) buttons or any new visual style. Keep the existing design language.
- Never copy or leak content, images, or text from any template or other site.

---

## 2. Non-negotiable safety rules for animation

1. **All text and content must exist in the static HTML and be visible without JavaScript.** Never hide content with CSS (`opacity: 0`, `visibility: hidden`, `display: none`) as a default starting state. Any hidden starting state must be set by JavaScript only.
2. **Never animate anything visible on first load.** No animation on the H1, the hero section, the header/navigation, or the likely LCP image. Skip any element that is already inside the viewport when the page loads.
3. **Animate with `transform` and `opacity` only.** Never animate width, height, margin, padding, top/left, or anything that causes layout shift (CLS must stay at or near 0).
4. **Respect `prefers-reduced-motion`.** If enabled: no Lenis, no GSAP animations, everything shown in its final state.
5. **Never block interaction or scrolling.** No scroll-jacking, no pinned sections that trap the user, no forced scroll snapping.
6. **Do not slow the page.** Load the motion script as a normal Astro bundled `<script>`. Do not add render-blocking scripts. Do not load GSAP plugins that are not used.
7. **Accessibility:** keyboard navigation, focus outlines, skip links, anchor links (`#section`), and screen readers must still work exactly as before. Split-text effects must keep the heading text readable by screen readers and crawlers.
8. **Internal and external links, forms, and Starwind components must behave exactly as before.**

---

## 3. Steps

### Step 1: Inspect first (change nothing yet)

- Find the main layout file(s) (the ones containing `<html>`, `<head>`, and `<slot />`).
- Check whether `<ClientRouter />` (Astro view transitions) is used anywhere. Remember the answer. It changes Step 3.
- Check which Starwind components use their own scrolling or drag behavior (dialogs, drawers, carousels, dropdowns, scroll areas).
- Check whether `gsap` or `lenis` is already installed.
- Briefly list what you found.

### Step 2: Install

Install `gsap` and `lenis` using the project's package manager (check the lockfile to know which). All GSAP plugins are free and included in the `gsap` package. Do not install `gsap-trial` or any paid/Club package.

### Step 3: Create `src/scripts/motion.ts`

Create this file using the reference below. Adapt it if needed, but keep the safety rules from Section 2.

```ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;
let ctx: gsap.Context | null = null;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Elements already on screen at load are left alone (protects LCP and avoids flicker)
const isInitiallyVisible = (el: Element) =>
  el.getBoundingClientRect().top < window.innerHeight * 0.9;

const tick = (time: number) => lenis?.raf(time * 1000);

const variants: Record<string, gsap.TweenVars> = {
  up: { y: 40 },
  left: { x: -40 },
  right: { x: 40 },
  scale: { scale: 0.95 },
  "3d": { y: 40, rotateX: 12, transformPerspective: 900, transformOrigin: "50% 100%" },
};

function setupReveals() {
  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
    if (isInitiallyVisible(el)) return;
    const v = variants[el.dataset.reveal || "up"] ?? variants.up;
    gsap.from(el, {
      opacity: 0,
      ...v,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
    });
  });
}

function setupStagger() {
  gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
    const items = Array.from(group.children);
    if (!items.length || isInitiallyVisible(group)) return;
    gsap.from(items, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: { trigger: group, start: "top 85%", once: true },
    });
  });
}

function setupParallax() {
  gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
    const amount = parseFloat(el.dataset.parallax || "") || 8;
    gsap.fromTo(
      el,
      { yPercent: -amount },
      {
        yPercent: amount,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });
}

export function initMotion() {
  if (prefersReducedMotion()) return;

  lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  ctx = gsap.context(() => {
    setupReveals();
    setupStagger();
    setupParallax();
  });

  window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
}

export function destroyMotion() {
  ctx?.revert();
  ctx = null;
  gsap.ticker.remove(tick);
  lenis?.destroy();
  lenis = null;
}
```

**Wire it up depending on what you found in Step 1:**

- **No `<ClientRouter />` (normal full page loads, preferred for this site):** in the layout, add
  ```astro
  <script>
    import { initMotion } from "../scripts/motion.ts";
    initMotion();
  </script>
  ```
  (Fix the relative path for the real layout location.)

- **`<ClientRouter />` IS used:** the script only runs once, so re-initialize on each navigation:
  ```astro
  <script>
    import { initMotion, destroyMotion } from "../scripts/motion.ts";
    document.addEventListener("astro:page-load", initMotion);
    document.addEventListener("astro:before-swap", destroyMotion);
  </script>
  ```
  Make sure nothing is initialized twice and nothing leaks between pages.

### Step 4: Apply the animation attributes

Add these attributes to existing elements. Do not change their text, classes, or structure otherwise.

| Attribute | Effect | Use on |
|---|---|---|
| `data-reveal` | Fade + slide up | Section headings (H2/H3), paragraphs, images, feature blocks below the fold |
| `data-reveal="left"` / `"right"` | Fade + slide from side | Alternating two-column sections |
| `data-reveal="scale"` | Fade + slight zoom-in | Images, screenshots, gallery items |
| `data-reveal="3d"` | Fade + subtle tilt-up depth effect | Cards, highlight panels (use sparingly) |
| `data-reveal-stagger` | Children animate one after another | The container of a card grid, feature list, or pricing columns |
| `data-parallax` (optional number) | Slow image drift while scrolling | Large decorative images only (see below) |

**Where NOT to use any of them:** the H1, hero section, header, navigation, footer links, the main LCP image, cookie banners, forms, FAQ accordions that need instant interaction, and anything visible on first load.

**Parallax rules:** only on non-hero images. The image's parent container must have `overflow-hidden`, and the image must be slightly scaled up (e.g. `scale-110`) so no empty gaps show while it moves. If you can't do this cleanly on an image, skip it.

**Use restraint.** Do not put an attribute on everything. Aim for a rhythm: roughly one reveal per section, plus staggered grids where it looks good. Pages should still feel fast and clean.

### Step 5: Starwind and special components

- Add `data-lenis-prevent` to any element that must scroll natively inside the page: dialogs, drawers, sidebars, dropdown menus, scrollable lists, code blocks, and similar.
- Check Embla/Starwind carousels: dragging and buttons must still work with Lenis on. If a carousel conflicts, add `data-lenis-prevent` to it.
- Check iframes (maps, videos): Lenis can't smooth-scroll over them. Leave them as is.
- Check anchor links and skip links still scroll to the right place with Lenis on. If they don't, fix it using Lenis' anchor handling, without breaking normal behavior.

### Step 6 (optional): Hover polish without JavaScript

Add subtle hover and focus effects using Tailwind classes only (no JS), for example `transition-transform duration-300 hover:-translate-y-1` on cards and links, and a gentle scale on images inside cards. Only where it fits the existing design. Do not change colors or shapes.

### Step 7 (optional): Word-by-word heading reveal

Only on H2/H3 headings below the fold (never the H1). Use GSAP's `SplitText` (free, included in the `gsap` package) via `SplitText.create(el, { type: "words", autoSplit: true, onSplit(self) { return gsap.from(self.words, { opacity: 0, y: 20, stagger: 0.04, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } }); } })`, registered with `gsap.registerPlugin(SplitText)`, triggered by a `data-split` attribute. Verify the heading text is still intact in the DOM, readable by screen readers, and unchanged in the static HTML. If you can't guarantee that, skip this step.

---

## 4. Verification (required)

Build and preview the site, then use the project's Playwright setup to check **every page type** (home, a content page, a page with a carousel or dialog, a long page):

1. No console errors or warnings caused by the changes.
2. **JavaScript disabled:** all text and images are visible, nothing is hidden or faded out.
3. `prefers-reduced-motion: reduce` emulated: no smooth scrolling, no animations, everything visible.
4. Animated elements actually animate when scrolled to, once, and are fully visible afterward.
5. No element in the hero or above the fold is animated. H1 is untouched.
6. No horizontal scrollbar, no layout shift (CLS near 0), no content jumping.
7. Desktop and mobile widths both work, and touch scrolling feels normal on mobile.
8. Keyboard Tab navigation, focus outlines, anchor links, and skip links still work.
9. Carousels, dialogs, dropdowns, and forms behave exactly as before.
10. The built HTML for titles, meta descriptions, canonical URLs, headings, structured data, sitemap, and redirects is **unchanged** compared to before your edits.
11. The site's existing audit scripts (if any) still pass.

**Fix passes:** if something fails, fix it and re-run the checks. Do this for **at most 2 fix passes**. If something is still failing after that, stop, list exactly what is still wrong and why, and ask me what to do. Do not loop endlessly.

---

## 5. Final report (plain English)

When finished, tell me:

1. Every file you created or changed.
2. Where Lenis and GSAP are loaded.
3. Which pages and elements got animations (a short summary, not every line).
4. Whether `<ClientRouter />` was detected and how you handled it.
5. The results of each verification check (pass/fail).
6. Anything you skipped on purpose and why.
7. How I can turn smooth scrolling off, or remove an animation from one element, in one sentence each.

Do not commit or push. Wait for my instruction.
