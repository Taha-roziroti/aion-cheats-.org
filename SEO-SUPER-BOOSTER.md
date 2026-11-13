# SEO checklist

**Canonical host:** `config/site.mjs` (`SITE_HOST`, `INDEXABLE_MONEY_ROUTES`, `buildSitemapImages`). Astro, `src/data/site.ts`, and Node build scripts import from there.

**Site copy & routes:** `src/data/site.ts` (intents, OG map, redirects). Showcase images under `/images/showcase/` — no `placeholder.svg`.

**Money routes:** listed in `INDEXABLE_MONEY_ROUTES`; after `npm run build`, `scripts/verify-seo.mjs` checks canonicals, OG, JSON-LD, h1 count, sitemap images, and `public/robots.txt`.

**System requirements:** `/guides/system-requirements/` — legacy `/guides/borderlands-3-cheat-system-requirements/` redirects here (Astro, `public/_redirects`, `scripts/redirects.mjs`).

**Launch tweak:** change `SITE_HOST` in `config/site.mjs` only, then run `npm run build`.
