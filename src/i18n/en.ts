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
    title: 'Aion Classic ESP and Aimbot Pricing | US Players Hub',
    description:
      'Main plan: player ESP and aimbot. Cloud DMA and HWID Spoofer are separate supporting products—not bundled with monthly or lifetime access.',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  nav: [
    { href: '/#features', label: 'Features' },
    { href: '/aion-classic-esp/', label: 'ESP' },
    { href: '/aion-classic-pricing/', label: 'Pricing' },
    { href: '/cloud-dma-for-aion-classic/', label: 'Cloud DMA' },
    { href: '/aion-classic-system-requirements/', label: 'Requirements' },
    { href: '/faq/', label: 'FAQ' },
  ],
  hero: {
    status: 'Listed partner pricing · Verify at checkout',
    eyebrow: PLACEHOLDER_COPY.eyebrow,
    titleLine1: 'Aion Classic ESP',
    titleLine2: '& Aimbot Main Plan',
    subtitle: PLACEHOLDER_COPY.subtitle,
    ctaPrimary: PLACEHOLDER_COPY.cta,
    ctaDiscord: 'View pricing',
    modesLabel: 'Supported platform',
    modes: ['Aion Classic · Windows 10/11'],
    metrics: [
      { label: 'Monthly', strong: '$35' },
      { label: 'Lifetime', strong: '$150' },
      { label: 'Cloud DMA', strong: '$50' },
      { label: 'OS', strong: 'Win 10/11' },
    ],
  },
  features: {
    eyebrow: 'Main plan',
    title: 'ESP and aimbot on the main plan',
    subtitle:
      'Only ESP and aimbot ship with the $35 / $150 main plan. Cloud DMA and HWID Spoofer are separate supporting products.',
    items: [
      {
        title: 'Player nameplate ESP',
        subtitle: 'See players faster',
        desc: 'Nameplates with distance, faction tags, and configurable box styles for open-world awareness.',
        bullets: ['Corner boxes and health bars', 'Faction filters', 'Distance readouts'],
        tags: ['esp', 'pvp'],
        bento: featureBento[0]!,
      },
      {
        title: 'Aimbot modules',
        subtitle: 'Main plan only',
        desc: 'Aimbot features are part of the ESP & aimbot main plan—not Cloud DMA or HWID Spoofer.',
        bullets: ['Confirm live partner menu', 'Targeting options vary by build', 'Sold with monthly or lifetime access'],
        tags: ['aimbot'],
        bento: featureBento[1]!,
      },
      {
        title: 'Cloud DMA',
        subtitle: 'Supporting product',
        desc: 'Listed at $50 lifetime separately. Required on supported stacks per vendor—not included in the main plan price.',
        bullets: ['Hyper-V single-PC setup', 'GREENWARD, Static Server, AWS extra', 'Dedicated guide on this site'],
        tags: ['cloud-dma'],
        bento: featureBento[2]!,
      },
      {
        title: 'HWID Spoofer',
        subtitle: 'Supporting product',
        desc: 'Standalone utility checkout when offered by the partner. Never bundled with ESP or aimbot access.',
        bullets: ['Separate from main plan', 'Confirm listing before buy', 'Requirements on system page'],
        tags: ['hwid'],
        bento: featureBento[3]!,
      },
      {
        title: 'Windows 10 and 11',
        subtitle: '64-bit clients',
        desc: 'Published requirements include HVCI, Core Isolation, TPM, Secure Boot, and a dedicated graphics card.',
        bullets: ['8 GB RAM minimum', 'Security settings on', 'Requirements page checklist'],
        tags: ['windows'],
        bento: featureBento[4]!,
      },
      {
        title: 'Partner checkout',
        subtitle: 'Main vs supporting',
        desc: 'ESP and aimbot ($35 / 30 days or $150 lifetime) route through this checkout bridge. Add Cloud DMA or HWID only if you need them.',
        bullets: ['Main plan first', 'Supporting products separate', 'Pricing page tables'],
        tags: ['pricing'],
        bento: featureBento[5]!,
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why AionCheats',
    title: 'Guides before checkout',
    subtitle: 'We split features, pricing, Cloud DMA, and PC requirements so you can read the listing without one long sales page.',
    usLabel: 'AionCheats',
    otherLabel: 'Typical reseller page',
    rows: [
      {
        title: 'Separate URLs',
        desc: 'ESP, pricing, Cloud DMA, and system requirements each have a focused page matched to search intent.',
      },
      {
        title: 'Extra costs named',
        desc: 'GREENWARD, Static Server, and AWS are called out as separate purchases before you open checkout.',
      },
      {
        title: 'Listing-aligned copy',
        desc: 'Screenshots and bullets follow the partner menu layout instead of invented feature tiers.',
      },
      {
        title: 'Central checkout bridge',
        desc: 'Buy links route through /go/ redirects so affiliate URLs stay in one config file.',
      },
    ],
    metrics: [
      { value: '$35', title: 'Monthly main plan', desc: 'ESP & aimbot · 30 days' },
      { value: '$150', title: 'Lifetime main plan', desc: 'ESP & aimbot · one-time' },
      { value: '$50', title: 'Cloud DMA', desc: 'Lifetime license, separate checkout' },
    ],
  },
  setup: {
    eyebrow: 'Setup',
    titleLead: 'Three steps to a',
    titleHighlight: 'supported checkout',
    intro: 'Confirm Windows settings, budget Cloud DMA add-ons, then open partner checkout when the checklists are done.',
    ctaPrimary: 'View plans',
    ctaSecondary: 'Read FAQ',
    ctaPrimaryHref: '/#products',
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Check requirements',
        desc: 'Walk HVCI, TPM, Secure Boot, RAM, GPU, and Hyper-V items on the system requirements page.',
      },
      {
        step: 'Step 2',
        title: 'Compare total cost',
        desc: 'Budget main plan ESP & aimbot ($35 or $150), then add Cloud DMA ($50) and HWID Spoofer only if needed.',
      },
      {
        step: 'Step 3',
        title: 'Open checkout',
        desc: 'Use the checkout bridge on this site, then follow vendor email steps for loader and Cloud DMA setup.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Compatibility',
    title: 'Platform support',
    subtitle: 'Main plan ESP & aimbot; Cloud DMA and HWID sold separately.',
    items: [
      'Windows 10 / 11',
      'Player ESP',
      'Aimbot',
      'Cloud DMA',
      'HWID Spoofer',
      'HVCI + TPM',
      'Partner checkout',
      'Requirements',
    ],
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
    eyebrow: 'Plans',
    title: 'Main plan & supporting products',
    subtitle: 'ESP and aimbot on the main plan. Cloud DMA and HWID Spoofer check out separately.',
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
    title: 'AionCheats blog',
    subtitle: 'Articles publish when entries exist in src/data/blog/posts.ts.',
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
    subtitle: 'Read the guides, budget both stacks, verify your PC, then buy through the partner listing.',
    ctaLabel: 'View plans',
    ctaHref: '/#products',
    ctaSecondary: 'FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Read',
        title: 'Compare ESP modules',
        desc: 'Use the ESP guide for player overlays and aimbot modules on the main plan.',
      },
      {
        num: '02',
        phase: 'Price',
        title: 'Budget both stacks',
        desc: 'Add Cloud DMA and HWID only after you price the ESP & aimbot main plan.',
      },
      {
        num: '03',
        phase: 'Verify',
        title: 'Check your PC',
        desc: 'Confirm Windows security settings and CPU virtualization before you pay for licenses.',
      },
      {
        num: '04',
        phase: 'Buy',
        title: 'Open checkout',
        desc: 'Start on this site’s checkout bridge, then follow vendor ticket or Discord steps for activation.',
      },
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
    title: 'AionCheats support: site help vs vendor tickets',
    subtitle: 'Seller support handles loaders and Cloud DMA. This site publishes guides and routes checkout only.',
    channels: [
      {
        icon: 'users',
        title: 'Vendor checkout',
        desc: 'Purchase through the partner listing, then use ticket or Discord support listed on the vendor site.',
        linkLabel: 'Open checkout hub',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Site email',
        desc: 'Questions about AionCheats copy, broken links, or affiliate disclosures on this domain.',
        linkLabel: SUPPORT_EMAIL,
        href: `mailto:${SUPPORT_EMAIL}`,
      },
      {
        icon: 'navFaq',
        title: 'FAQ',
        desc: 'Windows, Cloud DMA, and plan questions we answer on the FAQ page without replacing vendor support.',
        linkLabel: 'View FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Requirements',
        desc: 'HVCI, TPM, Hyper-V, and RAM notes before checkout on the main plan or supporting products.',
        linkLabel: 'System requirements',
        href: '/aion-classic-system-requirements/',
      },
    ],
    ticketTitle: 'Include with vendor tickets',
    ticketItems: [
      { title: 'Order ID', desc: 'Copy the ID from the partner receipt email.' },
      { title: 'Windows edition', desc: 'Note Home vs Pro and whether Hyper-V is available.' },
      { title: 'Security settings', desc: 'State whether HVCI, TPM, and Secure Boot are enabled.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common pre-checkout questions',
    subtitle: 'Answers pull from the FAQ route and linked guides.',
    items: [
      {
        num: '01',
        q: 'Is Cloud DMA required?',
        a: 'Cloud DMA is a supporting product—not included in the ESP & aimbot main plan.',
      },
      {
        num: '02',
        q: 'Do monthly and lifetime differ on features?',
        a: 'The listing states the same feature set. Only duration and payment structure change.',
      },
      {
        num: '03',
        q: 'Where are install steps?',
        a: 'Follow vendor PDFs or email after purchase. This site documents requirements and pricing only.',
      },
    ],
  },
  footer: {
    explore: 'Explore',
    tagline: 'ESP & aimbot main plan guides, plus Cloud DMA and HWID Spoofer supporting products for US Windows players.',
    exploreLinks: [
      { href: '/#features', label: 'Home feature section', ariaLabel: 'Home feature section' },
      { href: '/aion-classic-esp/', label: 'ESP features', ariaLabel: 'ESP features' },
      { href: '/aion-classic-pricing/', label: 'Compare plan costs', ariaLabel: 'Compare plan costs' },
      { href: '/cloud-dma-for-aion-classic/', label: 'Cloud DMA overview', ariaLabel: 'Cloud DMA overview' },
      { href: '/faq/', label: 'Help and answers', ariaLabel: 'Help and answers' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy',
    terms: 'Terms',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About AionCheats',
      description: `How ${SITE_DOMAIN} publishes Aion Classic guides and routes affiliate checkout.`,
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            `${SITE_DOMAIN} is an affiliate information site. We publish guides, pricing summaries, and requirement checklists for Aion Classic overlay software sold through a partner storefront.`,
            'We are not NCSoft, the game publisher, or the software vendor. Trademarks belong to their owners.',
            'Editorial pages split search intent across ESP, pricing, Cloud DMA, and system requirements URLs.',
          ],
        },
        {
          heading: 'What each guide covers',
          paragraphs: [
            'The ESP page explains main-plan ESP and aimbot. The pricing page compares monthly and lifetime access plus separate Cloud DMA and HWID costs.',
            'The Cloud DMA page documents Hyper-V setup expectations and third-party purchases named by the vendor.',
            'The requirements page lists Windows, security, and hardware checks before checkout.',
          ],
        },
        {
          heading: 'How we stay independent',
          paragraphs: [
            'Feature and price copy is aligned to the partner listing at the time each page is updated. Confirm live checkout before you pay.',
            'When listings change, update the markdown sources and rerun the site build verifiers.',
            'Loader setup, bans, and refunds are handled by the vendor. This site does not operate support tickets for product activation.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy policy',
      description: `How ${SITE_DOMAIN} handles analytics, email, and outbound checkout.`,
      sections: [
        {
          heading: 'Data collection',
          paragraphs: [
            'We may use privacy-oriented analytics to understand traffic in aggregate. Analytics should not collect payment card numbers.',
            'If you email us, we keep messages long enough to respond and maintain the site.',
            'Checkout happens on partner domains. Their privacy policy governs payment data after you leave this site.',
          ],
        },
        {
          heading: 'Cookies and analytics',
          paragraphs: [
            'First-party cookies, if enabled, support analytics or session preferences documented in this policy.',
            'Partner checkout may set its own cookies when you follow affiliate links.',
          ],
        },
        {
          heading: 'Your choices',
          paragraphs: [
            'You may request deletion of email correspondence you sent to our support address, subject to legal retention needs.',
            'Payment disputes and refunds must go through the vendor named on your receipt.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms of service',
      description: `Use of ${SITE_DOMAIN} and outbound affiliate links.`,
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'By using this site you agree that software licenses are sold by third-party vendors linked from our checkout bridge.',
            'If marketing copy on this site conflicts with the live partner listing, the listing at checkout controls price and feature claims.',
          ],
        },
        {
          heading: 'Licenses and pricing',
          paragraphs: [
            'Prices shown ($35 / 30 days, $150 lifetime ESP & aimbot, $50 Cloud DMA lifetime) mirror published listing figures and may change without notice on this site until updated.',
            'GREENWARD, Static Server, and AWS are separate purchases with their own terms.',
          ],
        },
        {
          heading: 'Refunds and acceptable use',
          paragraphs: [
            'Refunds follow the vendor policy attached to your order. We do not process payments on this domain.',
            'You are responsible for complying with game terms of service and local law when using third-party software.',
          ],
        },
      ],
    },
    support: {
      title: 'Support',
      description: `Contact paths for ${SITE_DOMAIN} versus vendor product support.`,
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