import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';
import { SITE_URL } from './config/site.mjs';
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  redirects: {
    '/pricing/': '/aion-classic-pricing/',
    '/aion-classic-cheats-price/': '/aion-classic-pricing/',
    '/aion-classic-cheat-system-requirements/': '/aion-classic-system-requirements/',
    '/cloud-dma/': '/cloud-dma-for-aion-classic/',
    '/hwid-spoofer/': '/aion-classic-system-requirements/#hwid-spoofer',
    '/dota-2-maphack/': '/aion-classic-esp/',
    '/dota-2-hero-esp/': '/aion-classic-esp/',
    '/dota-2-cheats-review/': '/aion-classic-pricing/',
    '/dota-2-scripts/': '/',
    '/arena-breakout-infinite-esp/': '/aion-classic-esp/',
    '/arena-breakout-infinite-aimbot/': '/',
    '/arena-breakout-infinite-cheats-pricing/': '/aion-classic-pricing/',
    '/cloud-dma-for-arena-breakout-infinite/': '/cloud-dma-for-aion-classic/',
    '/arena-breakout-infinite-hwid-spoofer/': '/aion-classic-system-requirements/#hwid-spoofer',
    '/guides/borderlands-3-cheat-system-requirements/': '/aion-classic-system-requirements/',
    '/guides/system-requirements/': '/aion-classic-system-requirements/',
    '/cloud-dma-setup/': '/guides/cloud-dma-setup/',
    '/cheats/': '/',
    '/products/dota-2-cheats/': '/',
    '/products/dota-2-cheats/elite/': '/',
    '/products/dota-2-cheats/utilities/': '/',
    '/cheats/lite/': '/',
    '/cheats/pro/': '/',
    '/cheats/elite/': '/',
    '/cheats/compare/': '/blog/dota-2-lite-vs-pro/',
    '/contact/': '/support/',
    '/dota-2-vac-ban-risk/': '/aion-classic-pricing/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['**/unslop/**'],
      },
    },
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/gsap')) return 'vendor-gsap';
            if (id.includes('node_modules/lenis')) return 'vendor-lenis';
          },
        },
      },
    },
  },
  build: {
    /** External CSS keeps HTML under budget and improves lab FCP/LCP (cursor-seo-audit §10). */
    inlineStylesheets: 'never',
  },
});
