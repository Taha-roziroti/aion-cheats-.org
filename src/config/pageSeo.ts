/**
 * Central titles/descriptions (mirrors content/pages frontmatter).
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Dota 2 Cheats: Features & Pricing',
    description:
      'See Dota 2 cheats features, Windows requirements and current plans. Compare the 31-day and lifetime options before choosing.',
  },
  '/dota-2-maphack/': {
    title: 'Dota 2 Maphack: Map Vision & Ward ESP',
    description:
      'See what the Dota 2 maphack listing says about fog of war, ward placement ESP and map information. Check the feature details.',
  },
  '/dota-2-hero-esp/': {
    title: 'Dota 2 Hero ESP: Player Information',
    description:
      'Explore Dota 2 hero ESP features, including player levels, item information and enemy inventory visibility. See the listed functionality.',
  },
  '/dota-2-cheats-review/': {
    title: 'Dota 2 Cheats Review: Features & Price',
    description:
      'Read our Dota 2 cheats review covering listed features, Windows requirements, plans and pricing. Check the details before purchasing.',
  },
  '/dota-2-scripts/': {
    title: 'Dota 2 Scripts: What to Know',
    description:
      'Understand Dota 2 scripts, last-hit assistance and auto-dodge features. See how individual functions compare with a full product package.',
  },
  '/faq/': {
    title: 'Dota 2 Cheats FAQ – Plans & Windows Requirements',
    description:
      'Frequently asked questions about Dota 2 cheat plans, Windows requirements, checkout, and how feature lists map to the current product build.',
  },
  '/support/': {
    title: 'DotaCheat Support – Checkout & Setup Help',
    description:
      'Get help with Dota 2 cheat checkout, license delivery, and Windows compatibility before you purchase or install supported modules.',
  },
  '/about/': {
    title: 'About DotaCheat – Independent Dota 2 Product Guides',
    description:
      'Learn how DotaCheat publishes feature guides, pricing, and setup notes for Windows players evaluating third-party Dota 2 software.',
  },
  '/guides/system-requirements/': {
    title: 'Dota 2 Cheat System Requirements for Windows PC',
    description:
      'Windows 10 and 11 requirements for Dota 2 cheat software, including RAM, CPU, Steam client builds, and security settings to verify first.',
  },
  '/privacy/': {
    title: 'DotaCheat Privacy Policy – Analytics & Support Email',
    description:
      'Privacy policy for dotacheat.com: analytics cookies, support email, and checkout partner data when you contact us or complete an order.',
  },
  '/terms/': {
    title: 'DotaCheat Terms of Service – Licenses & Refunds',
    description:
      'Terms and conditions for Dota 2 cheat plans, refunds, and acceptable use on supported Windows PCs purchased through our checkout flow.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}