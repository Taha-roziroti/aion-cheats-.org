# SEO audit log (`cursor-seo-audit-prompt.md`)

Workflow: `npm run audit` → fix → rebuild → log. Companion: `npm run audit:perf` (Lighthouse on `astro preview`).

## Pass 10 (Aion — 2026-11-17)

- **Copy repositioning:** site-wide removal of generic “cheats” copy; **main plan = ESP + aimbot**; **Cloud DMA + HWID Spoofer** as separate supporting products (homepage product carousel, i18n, `productCatalog`, money markdown).
- **URLs:** `/aion-classic-pricing/`, `/aion-classic-system-requirements/` with **301** from old `*-cheats-price*` / `*-cheat-system-requirements*` paths (`astro.config`, `_redirects`, `redirects.mjs`).
- **SEO data:** `keywords.json`, `pageSeo.ts`, anchor uniqueness fixes after URL migration.
- **Evidence:** `npm run build`, `npm run audit` (with build), `SKIP_BUILD=1 npm run audit` — **exit 0**.
- **Still blocked:** desktop `audit:perf` performance &lt; 95 (see pass 9 report); Playwright §13 screenshots optional pass not run this session.

## Pass 9 (Aion — 2026-11-17)

- **Hub DOM diet:** hero carousel capped at 3 slides; homepage showcase gallery uses `PRODUCT_SHOTS` (5) not 8; DOM ~1,286 (was ~1,312).
- **Fonts:** reverted bundled `@fontsource` (regressed mobile perf); kept async Google Fonts (`display=swap`).
- **Playwright:** added `npm run audit:e2e` — smoke 5 routes + header link HTTP checks — **exit 0**.
- **`audit:perf` (`LIGHTHOUSE_RUNS=1`):** mobile money templates **≥95**; **desktop performance** still below 95 (home **67**, spokes **88–89**). See `audit/lighthouse-report.json`.
- **Evidence:** `npm run build`, `npm run audit`, `npm run audit:e2e` exit 0.

## Pass 8 (Aion — 2026-11-17)

- **Template leakage (§6):** removed physical routes under `src/pages/products/`, Dota/Arena markdown shells, and standalone `hwid-spoofer` / `cloud-dma` pages; legacy URLs remain **301-only** via `astro.config.mjs`, `redirects.mjs`, and `public/_redirects` (including `hwid-spoofer` → system requirements).
- **A11y / Lighthouse:** fixed comparison table ARIA misuse (`WhySetupSection`), label/name mismatches (header/footer/checkout), primary contrast (`--cod-cta` → `#a855f7`), decorative logo `aria-hidden` on brand marks.
- **Performance:** deferred GSAP/Lenis until scroll, keydown, pointer, or 8s idle; `inlineStylesheets: 'never'`; `content-visibility: auto` on home sections below the hero.
- **404:** US English copy; pricing CTA → `/aion-classic-cheats-price/`.
- **Evidence:** `npm run build` + `npm run audit` exit 0; `SKIP_BUILD=1 npm run audit` exit 0.
- **`audit:perf` (`LIGHTHOUSE_RUNS=1`):** mobile templates ≥95 (home **95**); desktop performance still below floor on home (**67**) and spoke pages (~**91**); 404 SEO excluded from gate (`noindex`). Report: `audit/lighthouse-report.json`.

## Prior pass 7 summary

- `keywords.json`, anchor inventory + keyword verifiers, `npm run audit:perf`, view transitions, footer anchor fixes, three consecutive green `npm run audit`.

## Decisions

- **Anchor regions:** `generate-anchor-inventory.mjs`; body rules scoped to Aion money + support URLs until forum/blog legacy is removed or noindexed.
- **Affiliate bridges:** `/go/*` out of sitemap; `rel="sponsored noopener"`.
- **Metadata gates:** title/description 35–72 / 110–165 (aligned with `verify-seo`).
- **Homepage headings:** verbatim brief allows three H1–H2 primary mentions on `/`.
- **404 Lighthouse SEO:** scored separately from indexable templates (`noindex` by design).
- **Desktop perf vs mobile:** home is a large hub (~190KB HTML with full money-page copy on-page); mobile lab meets 95; desktop lab remains blocked until HTML/paint budget is reduced without removing required SEO copy.
- **No commits** unless user requests.

## Blocked

| Item | Reason |
|------|--------|
| Desktop Lighthouse performance 95+ on hub | ~190KB homepage `main` (hero + sections + full `index.md`); desktop perf **67** after deferrals |
| Desktop Lighthouse 95+ on spokes (~91) | Heavy shared CSS/JS shell; needs further asset diet |
| Playwright viewport screenshots §13 | Only `audit:e2e` smoke (no 375/768/1440 screenshots) |
| Real affiliate URLs | `/go/*` placeholders |
| Forum/blog scaffold URLs | Still build; not in sitemap |

## Review table (indexable / audited routes)

| page | spelling | spacing | images/alt | relevancy | keywords/anchors | headings/visual | status | notes |
|------|----------|---------|------------|-----------|------------------|-----------------|--------|-------|
| `/` | pass | blocked | pass | pass | pass | blocked | pass | mobile perf 95; desktop perf blocked |
| `/aion-classic-esp/` | pass | blocked | pass | pass | pass | pass | pass | |
| `/aion-classic-pricing/` | pass | blocked | pass | pass | pass | pass | pass | ESP/aimbot pricing |
| `/cloud-dma-for-aion-classic/` | pass | blocked | pass | pass | pass | pass | pass | supporting product |
| `/aion-classic-system-requirements/` | pass | blocked | pass | pass | pass | pass | pass | incl. HWID section |
| `/guides/cloud-dma-setup/` | pass | blocked | pass | pass | pass | pass | pass | |
| `/faq/` | pass | blocked | pass | pass | pass | pass | pass | |
| `/about/` | pass | blocked | pass | pass | pass | pass | pass | |
| `/support/` | pass | blocked | pass | pass | pass | pass | pass | |
| `/privacy/` | pass | blocked | pass | pass | pass | pass | pass | |
| `/terms/` | pass | blocked | pass | pass | pass | pass | pass | |

## Final verification (pass 8)

1. `npm run build` — **pass**
2. `npm run audit` (with build) — **pass**
3. `SKIP_BUILD=1 npm run audit` — **pass**
4. `npm run audit:perf` — **partial** (mobile ≥95; desktop performance below 95)

**Definition of done:** **A** not met (desktop Lighthouse performance); **B** documented above with evidence.