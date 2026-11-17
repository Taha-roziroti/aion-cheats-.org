import { checkoutPath } from '../config/checkout';
import { MONTHLY_ACCESS_DAYS } from './productPricing';
import { PLACEHOLDER_COPY } from './placeholders';

export const PUBLISHER_DISCLAIMER =
  'AionCheats.org is independent and is not affiliated with, endorsed by, or sponsored by NCSOFT or any game publisher. Aion® is a registered trademark of NCSOFT Corporation.';

export const FEATURE_TOOL_DISCLAIMER =
  'Features described here match the partner listing at checkout. Menu options may change between builds; confirm the live product before purchase.';

export const CLOUD_DMA_ADDITIONAL_SERVICES = [
  {
    name: 'GREENWARD',
    summary: 'Required activation and routing service purchased outside this site.',
  },
  {
    name: 'Static Server',
    summary: 'Dedicated server component with a separate fee.',
  },
  {
    name: 'AWS',
    summary: 'Cloud resources billed independently; not included in the Cloud DMA license.',
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
  name: 'Cloud DMA lifetime license',
  priceUsd: 50,
  url: CLOUD_DMA_CHECKOUT,
} as const;

export const hwidSpooferOffer = {
  name: 'HWID Spoofer utility',
  priceUsd: 0,
  url: HWID_SPOOFER_CHECKOUT,
} as const;

export const mainProductFeatures = [
  'Player and world ESP overlays (partner-listed modules)',
  'Aimbot modules (partner-listed; not included in Cloud DMA or HWID Spoofer)',
  'Windows 10 and Windows 11 64-bit support',
  'Monthly ($35 / 30 days) or lifetime ($150) main-plan access',
] as const;

export const mainProductRequirements = [
  'Windows 10 or Windows 11 64-bit',
  'Minimum 8 GB RAM and a dedicated GPU',
  'HVCI, Core Isolation, TPM, and Secure Boot as listed',
  'Stable internet connection',
  'See Cloud DMA page for Hyper-V and virtualization requirements',
] as const;

export const cloudDmaRequirements = [
  'Windows 10 or Windows 11 64-bit with Hyper-V capable edition',
  'Intel VT-x or AMD-V enabled in firmware and Windows',
  'Minimum 8 GB RAM; 16 GB recommended for the Hyper-V guest',
  'Stable broadband internet',
  'Secure Boot and Core Isolation compatible with Hyper-V setup',
] as const;

export const monthlyPlanCopy = {
  priceUsd: 35,
  durationLabel: `${MONTHLY_ACCESS_DAYS}-day access`,
  renewal: 'Renews when you purchase another 30-day term from the partner store.',
} as const;

export const lifetimePlanCopy = {
  priceUsd: 150,
  durationLabel: 'Lifetime access',
  renewal: 'One-time payment per vendor lifetime license terms.',
} as const;