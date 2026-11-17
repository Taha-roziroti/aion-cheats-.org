# SEO audit final report — aioncheats.org

Per `cursor-seo-audit-prompt.md` (passes 0–10). Evidence paths: `AUDIT_LOG.md`, `audit/lighthouse-report.json`, `audit/anchor-inventory.json`.

**Pass 10 note:** Money URLs are `/aion-classic-pricing/` and `/aion-classic-system-requirements/` (legacy cheat-slug URLs 301). Product positioning: main plan ESP + aimbot; Cloud DMA and HWID Spoofer sold separately.

## Passes completed

**10 passes** (baseline + passes 7–10 on Aion migration). Scriptable gate: **`npm run audit`** green (includes build verifiers, anchor inventory, keywords, cspell, link crawl).

## Scriptable checks — status

| Check | Status | Evidence |
|-------|--------|----------|
| `npm run build` | pass | Chained verifiers exit 0 |
| `npm run audit` ×3 (last 2 skip build) | pass | Pass 8–9 logs |
| `keywords.json` | pass | Five money URLs |
| Anchor inventory | pass | 0 scoped violations |
| Redirects / links | pass | `verify-redirects`, crawl in `seo-audit.mjs` |
| `npm run audit:e2e` | pass | Playwright header-link smoke |
| `npm run audit:perf` | **partial** | Mobile ≥95; desktop performance &lt;95 (see below) |

## Lighthouse summary (`LIGHTHOUSE_RUNS=1`, latest)

| Template | Mobile perf | Desktop perf | A11y | BP | SEO |
|----------|-------------|--------------|------|-----|-----|
| Home | **98** | **70** | 97 | 100 | 100 |
| Spoke (ESP) | **99** | **88** | 96 | 100 | 100 |
| Commercial (`/aion-classic-pricing/`) | **99** | **88** | 96 | 100 | 100 |
| Product (Cloud DMA) | **99** | **88** | 96 | 100 | 100 |
| FAQ | high 90s | **89** | 96 | 100 | 100 |
| 404 | high 90s | **90** | 96 | 100 | excluded (`noindex`) |

**Root cause (desktop):** large shared CSS bundle (~30KB, render-blocking), ~1,900-line homepage `main` with full money-page markdown, and desktop-only hero carousel — mobile hides most of that weight, so mobile scores meet the 95 floor.

## Blocked / owner action

1. **Desktop Lighthouse performance 95+** — needs architectural split (lighter hub vs. spoke layout) or acceptance of mobile-only floor; do not remove required SEO copy.
2. **Playwright §13 spacing screenshots** — only link smoke exists; add visual baselines at 375/768/1024/1440 if required.
3. **Forum/blog scaffold** — still builds; not in sitemap.
4. **Affiliate URLs** — `/go/*` placeholders.
5. **IndexNow** — set `INDEXNOW_KEY`.

## Definition of done

- **A (full prompt):** not met — desktop `audit:perf` below 95.
- **B (exhausted per pass cap on desktop perf):** documented with evidence; all other scriptable items met.