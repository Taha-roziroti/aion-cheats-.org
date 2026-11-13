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
    features: ['Player & AI ESP', 'Loot readouts', 'Aimbot menu', 'Config profiles'],
    more: 2,
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
    features: ['HWID rotation', 'Windows 10/11', 'Post-ban recovery', 'One-time license'],
    more: 0,
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
    features: ['Hyper-V host', 'Lifetime license', 'Works with main plan', 'Setup guide linked'],
    more: 0,
  },
];

export const guideCards = [
  {
    title: 'Plan pricing',
    desc: 'Monthly and lifetime listings with Cloud DMA called out separately.',
    href: '/arena-breakout-infinite-cheats-pricing/',
    readLabel: 'Open pricing sheet',
  },
  {
    title: 'Cloud DMA setup guide',
    desc: 'Hyper-V, firmware virtualization, and pre-flight checks.',
    href: '/guides/cloud-dma-setup/',
    readLabel: 'Start Hyper-V walkthrough',
  },
  {
    title: 'PC system requirements',
    desc: 'RAM, GPU, and Windows security settings in one checklist.',
    href: '/guides/system-requirements/',
    readLabel: 'Open requirements checklist',
  },
] as const;
