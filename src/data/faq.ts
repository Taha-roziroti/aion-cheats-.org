import type { IconName } from '../components/icons/types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { SITE_DOMAIN } from '../config/site';
import { normalizeInternalPath } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'windows-support',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'Does Aion Classic work on Windows 11?',
    a: a(
      'The published listing supports Windows 10 and Windows 11 (64-bit). Enable HVCI, Core Isolation, TPM, and Secure Boot as described on the requirements page.',
    ),
  },
  {
    id: 'cloud-dma-required',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Is Cloud DMA required?',
    a: a(
      `Yes for full functionality on supported builds. Read the ${link('Cloud DMA guide', '/cloud-dma-for-aion-classic/')} for Hyper-V and separate purchases.`,
    ),
  },
  {
    id: 'plans-features',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Do monthly and lifetime plans include different features?',
    a: a(
      `The listing states both plans include the same ESP and aimbot set. Compare payment structure on the ${link('monthly vs lifetime table', '/aion-classic-pricing/')}.`,
    ),
  },
  {
    id: 'checkout-flow',
    topic: 'plans',
    icon: 'faqAfterBuy',
    q: 'How do I buy through this site?',
    a: a(
      `Use the ${link('checkout hub', PRIMARY_CHECKOUT_PATH)} or product-specific /go/ links. Amounts must match the live partner listing at checkout.`,
    ),
  },
  {
    id: 'esp-modules',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'What does the ESP overlay include?',
    a: a(
      `Player nameplate ESP, gathering, rare spawns, chests, minimap, distance, and stream-proof overlay are listed. Details sit on the ${link('ESP guide', '/aion-classic-esp/')}.`,
    ),
  },
  {
    id: 'extra-purchases',
    topic: 'plans',
    icon: 'faqAfterBuy',
    q: 'Are GREENWARD, Static Server, and AWS included in Cloud DMA?',
    a: a(
      'No. The vendor lists them as separate purchases with their own billing. Cloud DMA’s $50 lifetime fee covers the DMA license only.',
    ),
  },
  {
    id: 'stream-proof',
    topic: 'products',
    icon: 'faqStatus',
    q: 'Does stream-proof mode work with OBS?',
    a: a(
      'The supplier states that stream-proof mode hides ESP and menus from OBS, Streamlabs, and most capture tools. Test your own broadcast setup before going live.',
    ),
  },
  {
    id: 'vendor-support',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Who helps with loader setup?',
    a: a(
      'Ticket support and Discord are listed on the vendor product page. Include your order ID when asking about activation or configuration.',
    ),
  },
  {
    id: 'site-role',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: `What is ${SITE_DOMAIN}?`,
    a: a(
      'An affiliate information site for Aion Classic overlays, pricing, Cloud DMA requirements, and setup checklists. We do not operate game servers or sell licenses directly.',
    ),
  },
];

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions before checkout',
  subtitle: 'Filters by topic. Answers reference published listing details, not vendor ticket status.',
} as const;

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Related questions',
  subtitle: 'Short answers for this page. Open the full FAQ for filters and more topics.',
} as const;

export const SITE_FAQ_FILTER_TOPICS = [
  'all',
  'plans',
  'setup',
  'products',
  'safety',
] as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const general = siteFaqs.filter((f) => !f.scopes);
  const combined = kind === 'tier' ? [...scoped, ...general] : [...scoped, ...general.slice(0, 4)];
  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {};

export function faqItemsForBlogTag(tag: string): SiteFaqItem[] {
  return blogTopicFaqs[tag] ?? [];
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs;
}

export function getLandingFaqs(): SiteFaqItem[] {
  return contextualizeFaqs('/', siteFaqs.slice(0, 4));
}

function contextualizeFaqs(route: string, items: SiteFaqItem[]): SiteFaqItem[] {
  return items.map((item) => {
    if (item.id === 'checkout-flow' && route === '/aion-classic-pricing/') {
      return {
        ...item,
        a: `Open checkout from the pricing page or the ${link('checkout hub', PRIMARY_CHECKOUT_PATH)} after you confirm Cloud DMA costs.`,
        aHtml: undefined,
      };
    }
    return item;
  });
}

export function getContentPageFaqs(route: string): SiteFaqItem[] {
  if (route.startsWith('/guides/')) return [];
  if (route === '/aion-classic-esp/') {
    return contextualizeFaqs(route, siteFaqs.filter((f) => ['esp-modules', 'cloud-dma-required', 'stream-proof'].includes(f.id)));
  }
  if (route === '/cloud-dma-for-aion-classic/') {
    return contextualizeFaqs(route, siteFaqs.filter((f) => ['cloud-dma-required', 'extra-purchases', 'windows-support'].includes(f.id)));
  }
  return contextualizeFaqs(route, siteFaqs.slice(0, 4));
}

export function getBlogFaqs(_tag: string, _slug: string): SiteFaqItem[] {
  return [];
}