# Search Console workflow (aioncheats.org)

1. Open [Google Search Console](https://search.google.com/search-console) and add the **domain** property for `aioncheats.org` if it is not already there.
2. Under **Sitemaps**, submit: `https://aioncheats.org/sitemap.xml`
3. After deploy, use **URL inspection** on `/`, `/aion-classic-esp/`, `/aion-classic-cheats-price/`, `/cloud-dma-for-aion-classic/`, and `/aion-classic-cheat-system-requirements/`.
4. Run `npm run audit` locally before each release to catch canonical, OG, and copy issues.