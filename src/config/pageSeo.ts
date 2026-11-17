export type PageSeoEntry = { title: string; description: string };

/** Unique titles ~50–60 chars; primary keyword near the front where it fits naturally. */
export const PAGE_SEO_OVERRIDES: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Aion Classic ESP and Aimbot Pricing | US Player Hub',
    description:
      'Main plan: Aion Classic player ESP and aimbot. Compare monthly and lifetime access; Cloud DMA and HWID Spoofer sold separately.',
  },
  '/aion-classic-esp/': {
    title: 'Aion Classic ESP Features | Main Plan Aimbot Guide',
    description:
      'Player ESP, world overlays, and aimbot modules on the main plan. Cloud DMA and HWID Spoofer stay separate supporting products with their own checkout.',
  },
  '/aion-classic-pricing/': {
    title: 'Aion Classic Pricing | ESP & Aimbot Monthly Plans US',
    description:
      'Compare $35 monthly and $150 lifetime ESP and aimbot access. Cloud DMA and HWID Spoofer are not included in the main plan.',
  },
  '/cloud-dma-for-aion-classic/': {
    title: 'Cloud DMA for Aion Classic | Hyper-V Setup & Pricing',
    description:
      'Cloud DMA Hyper-V stack for Aion Classic: $50 lifetime license plus GREENWARD, Static Server, and AWS. Not bundled with ESP and aimbot.',
  },
  '/aion-classic-system-requirements/': {
    title: 'Aion Classic System Requirements | ESP, DMA, Windows',
    description:
      'Windows, GPU, and security requirements for the main plan plus Cloud DMA and HWID Spoofer supporting products.',
  },
  '/faq/': {
    title: 'Aion Classic FAQ | ESP Pricing & Cloud DMA Answers',
    description:
      'Pre-checkout answers on monthly vs lifetime pricing, Cloud DMA Hyper-V setup, Windows security settings, and vendor support.',
  },
  '/about/': {
    title: 'About AionCheats | Aion Classic ESP Guide Publisher',
    description:
      'How aioncheats.org publishes Aion Classic ESP guides, pricing tables, requirement checklists, and affiliate checkout routing for US players.',
  },
  '/support/': {
    title: 'AionCheats Support | Checkout Help & Vendor Tickets',
    description:
      'When to email the site publisher versus opening a vendor ticket, plus links to requirements and Cloud DMA setup guides.',
  },
  '/privacy/': {
    title: 'AionCheats Privacy Policy | Analytics & Cookie Notice',
    description:
      'How this domain uses analytics cookies, handles contact email, and links out to partner checkout for payments.',
  },
  '/terms/': {
    title: 'AionCheats Terms of Service | Purchases & Refunds',
    description:
      'Affiliate disclosure, refund routing to the checkout partner, and acceptable use for Aion Classic guide pages.',
  },
  '/guides/cloud-dma-setup/': {
    title: 'Cloud DMA Setup Guide | Aion Classic Hyper-V Checklist',
    description:
      'Hyper-V prep, security settings, and separate GREENWARD, Static Server, and AWS purchases before Cloud DMA checkout.',
  },
};

function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | null {
  return PAGE_SEO_OVERRIDES[normalizePath(pathname)] ?? null;
}