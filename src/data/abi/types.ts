export interface AbiPlan {
  name: string;
  price: string;
  duration: string;
  description: string;
}

export interface AbiPageSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  plans?: AbiPlan[];
}

export interface AbiPageFaq {
  question: string;
  answer: string;
}

export interface AbiInternalLink {
  text: string;
  href: string;
}

export interface AbiPageCta {
  heading: string;
  text: string;
  button: string;
  href: string;
}

export interface AbiPage {
  slug: string;
  seo: { title: string; description: string };
  h1: string;
  introduction: string;
  sections: AbiPageSection[];
  faqs: AbiPageFaq[];
  internalLinks: AbiInternalLink[];
  cta: AbiPageCta;
  draftOnly?: boolean;
  publishNote?: string;
}

export type AbiPageKey = 'home' | 'esp' | 'aimbot' | 'pricing' | 'cloudDma' | 'hwidSpoofer';
