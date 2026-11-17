import type { ProductSlide } from './products';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import type { IconName } from '../components/icons/types';
import { PLACEHOLDER_COPY } from './placeholders';
import { HERO_SHOWCASE_SLIDES } from './showcaseImages';
import {
  CLOUD_DMA_CHECKOUT,
  HWID_SPOOFER_CHECKOUT,
  monthlyPlanCopy,
  lifetimePlanCopy,
} from './productCatalog';

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
    title: PLACEHOLDER_COPY.productName,
    href: '/aion-classic-pricing/',
    buyUrl: PRIMARY_CHECKOUT_PATH,
    badge: 'ESP & aimbot',
    variant: 'popular',
    icon: 'coreProduct',
    features: [
      `$${monthlyPlanCopy.priceUsd} · ${monthlyPlanCopy.durationLabel}`,
      `$${lifetimePlanCopy.priceUsd} · ${lifetimePlanCopy.durationLabel}`,
      'Player and world ESP',
      'Aimbot modules',
    ],
    more: 0,
  },
  {
    slug: 'cloud-dma',
    label: 'Supporting',
    title: 'Cloud DMA',
    href: '/cloud-dma-for-aion-classic/',
    buyUrl: CLOUD_DMA_CHECKOUT,
    badge: 'Not in main plan',
    variant: 'essential',
    icon: 'dmaHardware',
    features: ['$50 lifetime listed', 'Hyper-V single-PC stack', 'GREENWARD, Static Server, AWS extra'],
    more: 0,
  },
  {
    slug: 'hwid-spoofer',
    label: 'Supporting',
    title: 'HWID Spoofer',
    href: '/aion-classic-system-requirements/#hwid-spoofer',
    buyUrl: HWID_SPOOFER_CHECKOUT,
    badge: 'Not in main plan',
    variant: 'essential',
    icon: 'sidebarHwid',
    features: ['Standalone utility checkout', 'Separate from ESP & aimbot', 'Confirm live listing'],
    more: 0,
  },
];

export const guideCards = [
  {
    title: 'Aion Classic ESP & Aimbot',
    desc: 'What the main plan lists for player ESP, world overlays, and aimbot.',
    href: '/aion-classic-esp/',
    readLabel: 'View ESP guide',
  },
  {
    title: 'ESP & Aimbot Pricing',
    desc: 'Compare $35 monthly and $150 lifetime main-plan access.',
    href: '/aion-classic-pricing/',
    readLabel: 'View pricing',
  },
  {
    title: 'Cloud DMA for Aion Classic',
    desc: 'Supporting infrastructure—sold separately from the main plan.',
    href: '/cloud-dma-for-aion-classic/',
    readLabel: 'View Cloud DMA guide',
  },
] as const;