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
      'Windows 10/11, HVCI, TPM, Secure Boot, and GPU checks for ESP and aimbot, plus Hyper-V notes when you add Cloud DMA or HWID Spoofer separately.',
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
      'How aioncheats.org uses analytics cookies, stores support email, and sends you to partner checkout where payment data is handled off-site.',
  },
  '/terms/': {
    title: 'AionCheats Terms | Purchase, Refund & Affiliate Rules',
    description:
      'Affiliate disclosure for Aion Classic guides, listed prices ($35 / $150 / $50), refund routing to the vendor receipt, and acceptable use.',
  },
  '/guides/cloud-dma-setup/': {
    title: 'Cloud DMA Setup Guide | Aion Classic Hyper-V Checklist',
    description:
      'Hyper-V prep checklist: firmware virtualization, TPM, Core Isolation, and budgeting GREENWARD, Static Server, and AWS before the $50 license.',
  },
  '/blog/': {
    title: 'Aion Classic Guides Blog | ESP, Pricing & Cloud DMA',
    description:
      'Editorial notes on ESP modules, plan pricing, and Cloud DMA prep—supporting the main money pages, not a replacement for vendor support.',
  },
  '/forum/': {
    title: 'Aion Classic Community Forum | Guides & Discussions',
    description:
      'Placeholder forum threads summarizing site guides on ESP, pricing, and setup. Read money pages for canonical checkout and requirement details.',
  },
  '/go/': {
    title: 'Aion Classic Checkout Hub | ESP, DMA & HWID Plans',
    description:
      'Pick the main ESP and aimbot plan, Cloud DMA license, or HWID utility, then continue to the partner listing with the live price shown at checkout.',
  },
};

function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | null {
  return PAGE_SEO_OVERRIDES[normalizePath(pathname)] ?? null;
}