import type { ProductSlide } from './products';
import { MAIN_PRODUCT_CHECKOUT } from './productCatalog';
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
    label: 'Primary',
    title: PLACEHOLDER_COPY.productName,
    href: '/#products',
    buyUrl: MAIN_PRODUCT_CHECKOUT,
    badge: 'Steam Dota 2',
    variant: 'popular',
    icon: 'coreProduct',
    features: ['Map vision modules', 'Hero ESP overlays', 'Gameplay timers', 'Optional scripts'],
    more: 0,
  },
];

export const guideCards = [
  {
    title: 'Dota 2 maphack guide',
    desc: 'Map visibility, fog of war context, and ward ESP without overlapping the homepage keyword.',
    href: '/dota-2-maphack/',
    readLabel: 'Open maphack page',
  },
  {
    title: 'Dota 2 cheats review',
    desc: 'Editorial look at listed features, pricing, and what we can verify independently.',
    href: '/dota-2-cheats-review/',
    readLabel: 'Read review',
  },
  {
    title: 'VAC ban risk',
    desc: 'Valve policy summary—no promises about detection or undetectable modules.',
    href: '/dota-2-vac-ban-risk/',
    readLabel: 'Read VAC guide',
  },
] as const;