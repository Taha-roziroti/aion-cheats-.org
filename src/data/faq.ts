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

function checkoutLabel(route: string): string {
  const labels: Record<string, string> = {
    '/': 'site checkout hub',
    '/faq/': 'checkout hub picker',
    '/dota-2-maphack/': 'maphack checkout picker',
    '/dota-2-hero-esp/': 'ESP checkout picker',
    '/dota-2-cheats-review/': 'review checkout picker',
    '/dota-2-scripts/': 'scripts checkout picker',
  };
  return labels[route] ?? 'checkout hub';
}

function vacRiskAnswer(route: string): string {
  const labels: Record<string, string> = {
    '/': 'long-form Dota 2 cheats review',
    '/faq/': 'written Dota 2 cheats review',
    '/dota-2-maphack/': 'review section on map modules',
    '/dota-2-hero-esp/': 'review section on ESP overlays',
    '/dota-2-cheats-review/': 'independent feature audit on this page',
    '/dota-2-scripts/': 'review section on script tooling',
  };
  const review = link(labels[route] ?? 'Dota 2 cheats review', '/dota-2-cheats-review/');
  return `Valve enforces VAC on supported clients. Read the ${review} for what the listing establishes, then check official Valve policy before you install anything.`;
}

function checkoutFlowAnswer(route: string): string {
  const hub = link(checkoutLabel(route), PRIMARY_CHECKOUT_PATH);
  return `Plans route through the ${hub}, then a brief on-site handoff before Zadeyo checkout.`;
}

function featurePagesAnswer(): string {
  return (
    `Use the ${link('editorial cheats review', '/dota-2-cheats-review/')}, plus the ` +
    `${link('standalone maphack guide', '/dota-2-maphack/')}, ` +
    `${link('hero ESP walkthrough', '/dota-2-hero-esp/')}, and ` +
    `${link('scripts explainer', '/dota-2-scripts/')} pages for module-level summaries.`
  );
}

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'what-is-dotacheat',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'What is DotaCheat?',
    a: a(
      `${SITE_DOMAIN} publishes independent guides for Dota 2 map vision, hero ESP, and related modules on supported Windows builds.`,
    ),
  },
  {
    id: 'checkout-flow',
    topic: 'plans',
    icon: 'faqAfterBuy',
    q: 'How does checkout work?',
    a: checkoutFlowAnswer('/faq/'),
  },
  {
    id: 'pricing-listed',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'What do the listed prices mean?',
    a: a(
      `The homepage shows $35 for 31 days and $150 lifetime as listed on this site. Confirm the live vendor checkout before you pay.`,
    ),
  },
  {
    id: 'vac-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can third-party software lead to a VAC ban?',
    a: vacRiskAnswer('/faq/'),
  },
  {
    id: 'windows-reqs',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'Which PC builds are supported?',
    a: a(
      `Start with the ${link('Windows 10 and 11 requirements guide', '/guides/system-requirements/')} for OS notes before purchase.`,
    ),
  },
  {
    id: 'feature-pages',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are features explained?',
    a: featurePagesAnswer(),
  },
];

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions before checkout',
  subtitle: 'Plans, compatibility, and policy pointers for United States shoppers on Windows PC.',
} as const;

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Related questions',
  subtitle: 'Quick answers tied to this product area.',
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
    if (item.id === 'vac-risk') {
      return { ...item, a: vacRiskAnswer(route), aHtml: undefined };
    }
    if (item.id === 'checkout-flow') {
      return { ...item, a: checkoutFlowAnswer(route), aHtml: undefined };
    }
    if (item.id === 'feature-pages' && route !== '/faq/') {
      return {
        ...item,
        a: `Use the ${link('cheats review summary', '/dota-2-cheats-review/')} and the module pages linked from your current guide for feature lists.`,
        aHtml: undefined,
      };
    }
    if (item.id === 'windows-reqs' && route !== '/faq/') {
      return {
        ...item,
        a: `Open the ${link('PC requirements checklist', '/guides/system-requirements/')} before you buy.`,
        aHtml: undefined,
      };
    }
    return item;
  });
}

export function getContentPageFaqs(route: string): SiteFaqItem[] {
  if (route.startsWith('/guides/')) return [];
  return contextualizeFaqs(route, siteFaqs.slice(0, 4));
}

export function getBlogFaqs(_tag: string, _slug: string): SiteFaqItem[] {
  return [];
}