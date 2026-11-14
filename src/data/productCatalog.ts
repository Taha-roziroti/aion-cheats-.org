import { checkoutPath } from '../config/checkout';
import { MONTHLY_ACCESS_DAYS } from './productPricing';
import { PLACEHOLDER_COPY } from './placeholders';

export const PUBLISHER_DISCLAIMER =
  'This site is independent and is not affiliated with, endorsed by, or sponsored by any game publisher. Game names are descriptive references only.';

export const FEATURE_TOOL_DISCLAIMER =
  'Replace this disclaimer with accurate product positioning before launch.';

export const CLOUD_DMA_ADDITIONAL_SERVICES = [
  {
    name: 'Service A',
    summary: 'Placeholder — describe required add-on or third-party service.',
  },
  {
    name: 'Service B',
    summary: 'Placeholder — pricing and purchase path for this component.',
  },
  {
    name: 'Service C',
    summary: 'Placeholder — ongoing fees or setup notes not included in the base license.',
  },
] as const;

export const MAIN_PRODUCT_CHECKOUT = checkoutPath('mainProduct');
export const CLOUD_DMA_CHECKOUT = checkoutPath('cloudDma');
export const HWID_SPOOFER_CHECKOUT = checkoutPath('hwidSpoofer');

export const mainProductOffers = [
  { name: `${PLACEHOLDER_COPY.productName} — Monthly`, priceUsd: 35, url: MAIN_PRODUCT_CHECKOUT },
  { name: `${PLACEHOLDER_COPY.productName} — Lifetime`, priceUsd: 150, url: MAIN_PRODUCT_CHECKOUT },
] as const;

export const cloudDmaOffer = {
  name: 'Add-on license (placeholder)',
  priceUsd: 0,
  url: CLOUD_DMA_CHECKOUT,
} as const;

export const hwidSpooferOffer = {
  name: 'Utility license (placeholder)',
  priceUsd: 0,
  url: HWID_SPOOFER_CHECKOUT,
} as const;

export const mainProductFeatures = [
  'Feature one — placeholder',
  'Feature two — placeholder',
  'Feature three — placeholder',
  'Feature four — placeholder',
  'Feature five — placeholder',
  'Feature six — placeholder',
] as const;

export const mainProductRequirements = [
  'Client: placeholder platform / store',
  'OS: placeholder operating system requirements',
  'Hardware: placeholder RAM and GPU notes',
  'Security: placeholder firmware / isolation settings',
  'Infrastructure: placeholder environment prerequisites',
] as const;

export const cloudDmaRequirements = [
  'Windows 10 or Windows 11 64-bit with Hyper-V capable edition',
  'CPU virtualization enabled in firmware and Windows',
  'Minimum 8 GB RAM; 16 GB recommended for the Hyper-V guest',
  'Stable wired or wireless internet connection',
  'Secure Boot and Core Isolation settings compatible with Hyper-V setup',
] as const;

export const monthlyPlanCopy = {
  priceUsd: 35,
  durationLabel: `${MONTHLY_ACCESS_DAYS}-day access`,
  renewal: 'Placeholder renewal terms — replace before launch.',
} as const;

export const lifetimePlanCopy = {
  priceUsd: 150,
  durationLabel: 'Lifetime access',
  renewal: 'Placeholder lifetime terms — replace before launch.',
} as const;
