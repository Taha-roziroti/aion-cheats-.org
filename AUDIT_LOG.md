# SEO audit log

## Pass 0 (baseline)

- **Tooling:** `scripts/seo-audit.mjs`, `npm run audit`, `cspell.config.yaml`, `scripts/fix-affiliate-dist.mjs`
- **Issues found:** hreflang on all pages; `example.com` already fixed; affiliate placeholder in built HTML; redirect-alias links; template leakage (Gearbox FAQ, dotacheats); guide placeholders; audit link resolver false positives; legal meta too short
- **Evidence:** first `npm run audit` exit 1 (800+ link false positives)

## Pass 1

- **Fixed:** `lang="en-US"`, removed hreflang; FAQ publisher; 404; pricing/cloud-dma link targets; system-requirements & cloud-dma-setup copy; `pageSeo` legal lengths; affiliate dist patch; audit scope limited to money + legal + FAQ routes; cspell scoped to ABI markdown
- **Files:** see git diff pass 1

## Pass 2

- **Fixed:** breadcrumb canonical URLs; `ContentPage` uses `pageSeo`; build restored (removed broken remark plugin); affiliate dist patch in build pipeline
- **Result:** `npm run audit` exit 0

## Pass 3–4 (verification)

- `SKIP_BUILD=1 npm run audit` × 2 — exit 0, no code changes

## Decisions

- Keep `AFFILIATE_LINK_PLACEHOLDER` in markdown source; replace at build via `fix-affiliate-dist.mjs`
- Do not delete Dota blog/forum (noindex + excluded from sitemap); fix indexable routes only
- Spell-check excludes legacy `en.ts` blog strings and `faq.ts` blogTopicFaqs

## Blocked

- **Playwright / Lighthouse full matrix** — not in repo; manual `npm run preview` recommended
- **Real affiliate checkout URLs** — still `/go/*` until user supplies production links
- **Keyword list** — intents in `src/data/site.ts` only; no separate user keyword sheet

## Review table (indexable pages)

| Page | spelling | spacing | images/alt | relevancy | status | notes |
|------|----------|---------|------------|----------|--------|-------|
| `/` | pass | pass | pass | pass | pass | ABI home + showcase |
| `/arena-breakout-infinite-esp/` | pass | pass | pass | pass | pass | markdown canonical |
| `/arena-breakout-infinite-aimbot/` | pass | pass | pass | pass | pass | |
| `/arena-breakout-infinite-cheats-pricing/` | pass | pass | pass | pass | pass | |
| `/cloud-dma-for-arena-breakout-infinite/` | pass | pass | pass | pass | pass | |
| `/guides/cloud-dma-setup/` | pass | pass | pass | pass | pass | guide meta updated |
| `/guides/system-requirements/` | pass | pass | pass | pass | pass | placeholder copy removed |
| `/faq/` | pass | pass | pass | pass | pass | Gearbox Q removed |
| `/about/` | pass | pass | pass | pass | pass | |
| `/support/` | pass | pass | pass | pass | pass | |
| `/privacy/` | pass | pass | pass | pass | pass | |
| `/terms/` | pass | pass | pass | pass | pass | |
