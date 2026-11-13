import type { ProductSlide } from './products';
import {
  CLOUD_DMA_CHECKOUT,
  HWID_SPOOFER_CHECKOUT,
  MAIN_PRODUCT_CHECKOUT,
} from './productCatalog';
import type { IconName } from '../components/icons/types';
import { PLACEHOLDER_COPY } from './placeholders';
import { HERO_SHOWCASE_SLIDES } from './showcaseImages';

export interface LandingCatalogProduct {
  slug: string;
  label: string;
  title: string;
  href: string;
  buyUrl: string;
  features: string[];
  more: number;
  icon: IconName;
  badge?: string;
  variant?: 'essential' | 'popular' | 'limited';
}

export const heroSlides: ProductSlide[] = HERO_SHOWCASE_SLIDES;

export const landingProducts: LandingCatalogProduct[] = [
  {
    slug: 'main-product',
    label: 'Main plan',
    title: 'Arena Breakout Infinite Cheats',
    href: '/arena-breakout-infinite-cheats-pricing/',
    buyUrl: MAIN_PRODUCT_CHECKOUT,
    badge: 'Popular',
    variant: 'popular',
    icon: 'coreProduct',
    features: ['Feature A', 'Feature B', 'Feature C', 'Feature D', 'Feature E', 'Feature F'],
    more: 4,
  },
  {
    slug: 'hwid-spoofer',
    label: 'Utility',
    title: 'HWID Spoofer',
    href: '/arena-breakout-infinite-hwid-spoofer/',
    buyUrl: HWID_SPOOFER_CHECKOUT,
    badge: 'Available',
    variant: 'essential',
    icon: 'shieldCheck',
    features: ['Utility feature 1', 'Utility feature 2', 'Utility feature 3', 'Utility feature 4'],
    more: 2,
  },
  {
    slug: 'cloud-dma',
    label: 'Infrastructure',
    title: 'Cloud DMA license',
    href: '/cloud-dma-for-arena-breakout-infinite/',
    buyUrl: CLOUD_DMA_CHECKOUT,
    badge: 'Available',
    variant: 'essential',
    icon: 'reqCpu',
    features: ['Infra feature 1', 'Infra feature 2', 'Infra feature 3', 'Infra feature 4'],
    more: 1,
  },
];

export const guideCards = [
  {
    title: 'Plan pricing',
    desc: 'Placeholder — compare monthly and lifetime plans before checkout.',
    href: '/arena-breakout-infinite-cheats-pricing/',
    readLabel: 'Compare plans',
  },
  {
    title: 'Cloud DMA setup guide',
    desc: 'Placeholder — environment and virtualization checks.',
    href: '/guides/cloud-dma-setup/',
    readLabel: 'Read setup guide',
  },
  {
    title: 'PC system requirements',
    desc: 'Placeholder — OS, client, and infrastructure prerequisites.',
    href: '/guides/system-requirements/',
    readLabel: 'Check requirements',
  },
] as const;
