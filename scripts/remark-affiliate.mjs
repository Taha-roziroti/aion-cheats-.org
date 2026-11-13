import { visit } from 'unist-util-visit';

function affiliateHrefForContentSlug(slug) {
  const normalized = slug.endsWith('/') ? slug : `${slug}/`;
  if (normalized.includes('cloud-dma-for-arena-breakout-infinite')) return '/go/cloud-dma/';
  if (normalized.includes('hwid-spoofer')) return '/go/hwid-spoofer/';
  return '/go/main-product/';
}

const FILE_SLUG = [
  ['home.md', '/'],
  ['arena-breakout-infinite-esp.md', '/arena-breakout-infinite-esp/'],
  ['arena-breakout-infinite-aimbot.md', '/arena-breakout-infinite-aimbot/'],
  ['arena-breakout-infinite-cheats-pricing.md', '/arena-breakout-infinite-cheats-pricing/'],
  ['cloud-dma-for-arena-breakout-infinite.md', '/cloud-dma-for-arena-breakout-infinite/'],
  ['arena-breakout-infinite-hwid-spoofer.md', '/arena-breakout-infinite-hwid-spoofer/'],
];

function slugFromFile(file) {
  const path = file.path ?? file.history?.[0] ?? '';
  const base = path.split(/[/\\]/).pop() ?? '';
  for (const [name, slug] of FILE_SLUG) {
    if (base === name || path.includes(name)) return slug;
  }
  return '/';
}

export function remarkAffiliate() {
  return (tree, file) => {
    const href = affiliateHrefForContentSlug(slugFromFile(file));
    visit(tree, 'link', (node) => {
      if (node.url === 'AFFILIATE_LINK_PLACEHOLDER') {
        node.url = href;
      }
    });
  };
}
