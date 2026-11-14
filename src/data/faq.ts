import type { IconName } from '../components/icons/types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { SITE_DOMAIN } from '../config/site';
import { normalizeInternalPath, ROUTES } from '../utils/path';

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

const reviewPage = link('Dota 2 cheats review', '/dota-2-cheats-review/');
const checkout = link('checkout hub', PRIMARY_CHECKOUT_PATH);
const reqGuide = link('system requirements guide', '/guides/system-requirements/');

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
    a: a(
      `Plans route through the ${checkout} picker, then a brief on-site handoff before Zadeyo checkout.`,
    ),
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
    a: a(
      `Valve enforces VAC on supported clients. Read the ${reviewPage} for what the listing establishes, then check official Valve policy before you install anything.`,
    ),
  },
  {
    id: 'windows-reqs',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'Which PC builds are supported?',
    a: a(`Start with the ${reqGuide} for Windows 10 and 11 notes before purchase.`),
  },
  {
    id: 'feature-pages',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are features explained?',
    a: a(
      `Use the ${reviewPage}, plus the maphack, hero ESP, and scripts pages for module-level summaries.`,
    ),
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
  return siteFaqs.slice(0, 4);
}

export function getContentPageFaqs(_route: string): SiteFaqItem[] {
  return siteFaqs.slice(0, 4);
}

export function getBlogFaqs(_tag: string, _slug: string): SiteFaqItem[] {
  return [];
}