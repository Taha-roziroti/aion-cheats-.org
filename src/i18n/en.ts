import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { PRODUCT_BASE, SITE_DOMAIN, SUPPORT_EMAIL } from '../config/site';
import { PLACEHOLDER_COPY } from '../data/placeholders';

const productBase = PRODUCT_BASE;

const featureBento = [
  'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
  'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-2',
  'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-2',
  'sm:col-span-2 lg:col-span-4 lg:col-start-1 lg:row-start-3',
  'sm:col-span-2 lg:col-span-4 lg:col-start-5 lg:row-start-3',
  'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-3',
  'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-4',
  'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-4',
] as const;

function featureBlock(index: number, title: string) {
  return {
    title,
    subtitle: 'Subtitle placeholder',
    desc: 'Description placeholder for this feature card. Swap in real copy when your product brief is ready.',
    bullets: ['Bullet placeholder one', 'Bullet placeholder two', 'Bullet placeholder three'],
    tags: ['tag-a', 'tag-b'],
    bento: featureBento[index]!,
  };
}

export const en: Translations = {
  site: {
    name: PLACEHOLDER_COPY.siteName,
    domain: SITE_DOMAIN,
    title: 'Dota 2 Cheats: Features & Pricing',
    description:
      'See Dota 2 cheats features, Windows requirements and current plans. Compare the 31-day and lifetime options before choosing.',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  nav: [
    { href: '/#features', label: 'Features' },
    { href: '/dota-2-maphack/', label: 'Maphack' },
    { href: '/dota-2-hero-esp/', label: 'Hero ESP' },
    { href: '/dota-2-cheats-review/', label: 'Review' },
    { href: '/dota-2-scripts/', label: 'Scripts' },
    { href: '/dota-2-vac-ban-risk/', label: 'VAC risk' },
    { href: '/faq/', label: 'FAQ' },
  ],
  hero: {
    status: 'Dota 2 on Steam · Windows 10 & 11',
    eyebrow: PLACEHOLDER_COPY.eyebrow,
    titleLine1: 'Dota 2 Cheats',
    titleLine2: 'Map vision, hero ESP & timers',
    subtitle: PLACEHOLDER_COPY.subtitle,
    ctaPrimary: PLACEHOLDER_COPY.cta,
    ctaDiscord: 'Read the review',
    modesLabel: 'Supported client',
    modes: ['Steam Dota 2'],
    metrics: [
      { label: 'Monthly', strong: '$35' },
      { label: 'Lifetime', strong: '$150' },
      { label: 'Access', strong: '31 days' },
      { label: 'Market', strong: 'United States' },
    ],
  },
  features: {
    eyebrow: 'Modules',
    title: 'Explore the Dota 2 Cheat Features',
    subtitle:
      'Each card maps to a documented module on the vendor build—vision, hero overlays, and HUD helpers.',
    items: [
      {
        title: 'Map vision',
        subtitle: 'Maphack cluster',
        desc: 'Ward awareness and fog-of-war context for rotations. Details on the Dota 2 maphack page.',
        bullets: ['Ward ESP where listed', 'Map tint controls', 'Distance caps'],
        tags: ['maphack', 'wards', 'vision'],
        bento: featureBento[0]!,
      },
      {
        title: 'Hero ESP',
        subtitle: 'Player overlays',
        desc: 'Names, health, and items on heroes without mixing map-only searches into ESP copy.',
        bullets: ['Enemy filters', 'Ally cooldown tags', 'Font scaling'],
        tags: ['hero esp', 'player info'],
        bento: featureBento[1]!,
      },
      {
        title: 'Gameplay timers',
        subtitle: 'HUD helpers',
        desc: 'Rune, stack, and reminder panels that stay separate from script automation.',
        bullets: ['Rune timers', 'Stack reminders', 'Configurable alerts'],
        tags: ['timers', 'hud'],
        bento: featureBento[2]!,
      },
      featureBlock(3, 'Script helpers'),
      featureBlock(4, 'Menu profiles'),
      featureBlock(5, 'Stream layout'),
      featureBlock(6, 'Steam client'),
      featureBlock(7, 'Windows security'),
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Comparison section placeholder',
    subtitle: 'Two-column comparison and metric cards await your positioning copy.',
    usLabel: 'Your brand',
    otherLabel: 'Typical listing',
    rows: [
      { title: 'Row one', desc: 'Placeholder comparison bullet for your unique selling point.' },
      { title: 'Row two', desc: 'Placeholder comparison bullet for pricing or support policies.' },
      { title: 'Row three', desc: 'Placeholder comparison bullet for documentation quality.' },
      { title: 'Row four', desc: 'Placeholder comparison bullet for checkout transparency.' },
    ],
    metrics: [
      { value: '$35', title: 'Monthly plan', desc: '31-day access—confirm on checkout before paying.' },
      { value: '$150', title: 'Lifetime plan', desc: 'One-time USD purchase while the product remains listed.' },
      { value: 'PC', title: 'Windows build', desc: 'Steam client on 64-bit Windows 10 or 11.' },
    ],
  },
  setup: {
    eyebrow: 'Setup',
    titleLead: 'Three-step',
    titleHighlight: 'onboarding placeholder',
    intro: 'Explain how customers move from discovery to configured product in your own words.',
    ctaPrimary: 'Primary CTA',
    ctaSecondary: 'FAQ CTA',
    ctaPrimaryHref: '/#products',
    ctaSecondaryHref: '/faq/',
    steps: [
      { step: 'Step 1', title: 'Check requirements', desc: 'Placeholder setup step description.' },
      { step: 'Step 2', title: 'Choose checkout', desc: 'Placeholder setup step description.' },
      { step: 'Step 3', title: 'Configure product', desc: 'Placeholder setup step description.' },
    ],
  },
  compatibility: {
    eyebrow: 'Compatibility',
    title: 'Platform support placeholder',
    subtitle: 'Chip list for OS, clients, and add-ons.',
    items: ['OS placeholder', 'Client A', 'Client B', 'Add-on', 'Utility', 'Checkout', 'Guides', 'Support'],
  },
  cheats: {
    eyebrow: 'Tiers',
    title: 'Tier card placeholder',
    subtitle: 'Single tier slot demonstrates the product detail template.',
    viewAll: 'View tiers',
    explore: 'Explore',
    items: [
      {
        badge: 'Placeholder',
        tier: 'Tier',
        name: 'Primary tier',
        title: 'Primary tier',
        desc: 'Tier description placeholder — link to product detail routes when ready.',
        features: ['Feature A', 'Feature B', 'Feature C', 'Feature D'],
        more: 0,
        href: `${productBase}elite/`,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Utilities',
    title: 'Utility cards placeholder',
    subtitle: 'Secondary SKUs render in this row.',
    viewAll: 'View utilities',
    get: 'Get',
    explore: 'Explore',
    items: [
      {
        badge: 'Placeholder',
        category: 'Utility',
        title: 'Utility A',
        subtitle: 'Subtitle placeholder',
        desc: 'Utility description placeholder.',
        features: ['Bullet 1', 'Bullet 2', 'Bullet 3', 'Bullet 4'],
        more: 0,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Placeholder',
        category: 'Utility',
        title: 'Utility B',
        subtitle: 'Subtitle placeholder',
        desc: 'Utility description placeholder.',
        features: ['Bullet 1', 'Bullet 2', 'Bullet 3', 'Bullet 4'],
        more: 0,
        href: `${productBase}ugc/`,
      },
      {
        badge: 'Placeholder',
        category: 'Utility',
        title: 'Utility C',
        subtitle: 'Subtitle placeholder',
        desc: 'Utility description placeholder.',
        features: ['Bullet 1', 'Bullet 2', 'Bullet 3', 'Bullet 4'],
        more: 0,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Blog listing placeholder',
    subtitle: 'Posts array is empty until you add entries in src/data/blog/posts.ts.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filters and sort controls remain functional.',
    filterAll: 'All',
    sortLabel: 'Sort',
    sortNewest: 'Newest',
    sortOldest: 'Oldest',
    sortShortRead: 'Short read',
    sortLongRead: 'Long read',
    emptyFilter: 'No articles yet.',
    viewAll: 'View blog',
    read: 'Read',
    items: [],
  },
  toolkit: {
    eyebrow: 'Toolkit',
    title: 'Toolkit section placeholder',
    subtitle: 'Numbered cards for grouped settings or modules.',
    items: [
      { num: '01', label: 'Group', title: 'Panel one', desc: 'Toolkit card placeholder text.' },
      { num: '02', label: 'Group', title: 'Panel two', desc: 'Toolkit card placeholder text.' },
      { num: '03', label: 'Group', title: 'Panel three', desc: 'Toolkit card placeholder text.' },
    ],
  },
  workflow: {
    eyebrow: 'Workflow',
    badge: '4 steps',
    titleBefore: 'From review to',
    titleHighlight: 'checkout',
    subtitle: 'Compare modules, confirm Windows requirements, then open checkout when you are ready.',
    ctaLabel: 'View plans',
    ctaHref: '/#products',
    ctaSecondary: 'FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      { num: '01', phase: 'Step', title: 'Review features', desc: 'Read the maphack, hero ESP, and scripts pages for modules listed on the build.' },
      { num: '02', phase: 'Step', title: 'Pick a plan', desc: 'Choose monthly or lifetime pricing on the homepage product cards.' },
      { num: '03', phase: 'Step', title: 'Checkout', desc: 'Complete purchase through the /go/ bridge when your affiliate URL is configured.' },
      { num: '04', phase: 'Step', title: 'Install on PC', desc: 'Follow vendor instructions on Windows 10 or 11 after delivery.' },
    ],
  },
  fieldNotes: {
    eyebrow: 'Notes',
    title: 'Field notes placeholder',
    items: [
      { num: '01', title: 'Note one', desc: 'Short callout placeholder.' },
      { num: '02', title: 'Note two', desc: 'Short callout placeholder.' },
      { num: '03', title: 'Note three', desc: 'Short callout placeholder.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Support page placeholder',
    subtitle: 'Channel cards and ticket checklist await your operations copy.',
    channels: [
      {
        icon: 'users',
        title: 'Channel A',
        desc: 'Placeholder support channel description.',
        linkLabel: 'Open checkout hub',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Email',
        desc: 'Placeholder email support description.',
        linkLabel: SUPPORT_EMAIL,
        href: `mailto:${SUPPORT_EMAIL}`,
      },
      {
        icon: 'navFaq',
        title: 'FAQ',
        desc: 'Placeholder FAQ channel description.',
        linkLabel: 'View FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Guides',
        desc: 'Placeholder guide channel description.',
        linkLabel: 'Open setup guide',
        href: '/guides/cloud-dma-setup/',
      },
    ],
    ticketTitle: 'Include in tickets',
    ticketItems: [
      { title: 'Field A', desc: 'Placeholder ticket field guidance.' },
      { title: 'Field B', desc: 'Placeholder ticket field guidance.' },
      { title: 'Field C', desc: 'Placeholder ticket field guidance.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Homepage FAQ placeholder',
    subtitle: 'Accordion pulls from data/faq.ts on the full FAQ route.',
    items: [
      { num: '01', q: 'Question placeholder one?', a: 'Answer placeholder one with at least a full sentence of guidance.' },
      { num: '02', q: 'Question placeholder two?', a: 'Answer placeholder two with at least a full sentence of guidance.' },
      { num: '03', q: 'Question placeholder three?', a: 'Answer placeholder three with at least a full sentence of guidance.' },
    ],
  },
  footer: {
    explore: 'Explore',
    tagline: `Independent Dota 2 software guides and checkout paths for Windows PC.`,
    exploreLinks: [
      { href: '/#features', label: 'Features', ariaLabel: 'Features' },
      { href: '/dota-2-maphack/', label: 'Maphack', ariaLabel: 'Maphack' },
      { href: '/dota-2-hero-esp/', label: 'Hero ESP', ariaLabel: 'Hero ESP' },
      { href: '/dota-2-cheats-review/', label: 'Review', ariaLabel: 'Review' },
      { href: '/faq/', label: 'FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy',
    terms: 'Terms',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About DotaCheat',
      description: `How ${SITE_DOMAIN} publishes Dota 2 software guides for Windows PC shoppers in the United States.`,
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'DotaCheat is an independent publisher of feature guides, pricing summaries, and checkout paths for third-party Dota 2 modules.',
            'We are not affiliated with Valve Corporation or any game publisher.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy policy',
      description: `How ${SITE_DOMAIN} handles analytics, support email, and checkout partner data.`,
      sections: [
        {
          heading: 'Data collection',
          paragraphs: [
            'We may log standard web analytics and store messages you send to support. Checkout partners handle payment data under their own policies.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms of service',
      description: `License, refund, and acceptable-use notes for plans listed on ${SITE_DOMAIN}.`,
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'By purchasing through our checkout links you accept the vendor terms and the summaries published on this site.',
          ],
        },
      ],
    },
    support: {
      title: 'Support',
      description: `Contact and setup help for ${SITE_DOMAIN} visitors.`,
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: PLACEHOLDER_COPY.cta,
    browseCheatsMobile: PLACEHOLDER_COPY.cta,
    homeAria: 'Home',
    checkoutAria: 'Checkout',
    discordAria: 'Community link',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
};