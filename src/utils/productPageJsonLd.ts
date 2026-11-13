import {
  cloudDmaOffer,
  CLOUD_DMA_CHECKOUT,
  hwidSpooferOffer,
  HWID_SPOOFER_CHECKOUT,
  MAIN_PRODUCT_CHECKOUT,
  mainProductOffers,
} from '../data/productCatalog';
export type CheckoutProductKind = 'main-product' | 'cloud-dma' | 'hwid-spoofer';
import { PRODUCT_ID, SITE_URL } from '../data/site';
import { productSchema } from './schema';

const ROUTE_PRODUCT_IMAGE: Record<string, string> = {
  '/arena-breakout-infinite-esp/': '/images/showcase/abi-grass-stealth.webp',
  '/arena-breakout-infinite-aimbot/': '/images/showcase/abi-esp-indoor-aimbot.webp',
  '/arena-breakout-infinite-cheats-pricing/': '/images/showcase/abi-esp-menu.webp',
  '/cloud-dma-for-arena-breakout-infinite/': '/og/cloud-dma.jpg',
  '/arena-breakout-infinite-hwid-spoofer/': '/og/default.jpg',
};

export function productJsonLdForRoute(
  route: string,
  name: string,
  description: string,
  checkout: CheckoutProductKind,
): Record<string, unknown> | null {
  const image = ROUTE_PRODUCT_IMAGE[route];
  if (!image) return null;

  if (checkout === 'cloud-dma') {
    return productSchema({
      name: 'Cloud DMA for Arena Breakout Infinite',
      description,
      url: route,
      offerUrl: CLOUD_DMA_CHECKOUT,
      sku: 'cloud-dma-license',
      image,
      productId: `${SITE_URL}${route}#product`,
      offers: [
        {
          name: cloudDmaOffer.name,
          priceUsd: cloudDmaOffer.priceUsd,
          url: CLOUD_DMA_CHECKOUT,
        },
      ],
    });
  }

  if (checkout === 'hwid-spoofer') {
    return productSchema({
      name: 'Arena Breakout Infinite HWID Spoofer',
      description,
      url: route,
      offerUrl: HWID_SPOOFER_CHECKOUT,
      sku: 'hwid-spoofer',
      image,
      productId: `${SITE_URL}${route}#product`,
      offers: [
        {
          name: hwidSpooferOffer.name,
          priceUsd: hwidSpooferOffer.priceUsd,
          url: HWID_SPOOFER_CHECKOUT,
        },
      ],
    });
  }

  return productSchema({
    name,
    description,
    url: route,
    offerUrl: MAIN_PRODUCT_CHECKOUT,
    sku: route.replace(/\//g, '-').replace(/^-|-$/g, '') || 'main-product',
    image,
    productId: route === '/' ? PRODUCT_ID : `${SITE_URL}${route}#product`,
    offers: [...mainProductOffers],
  });
}
