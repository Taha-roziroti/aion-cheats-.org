export type PageSeoEntry = { title: string; description: string };

export const PAGE_SEO_OVERRIDES: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Aion Classic ESP & Aimbot | Pricing',
    description:
      'Main plan: Aion Classic player ESP and aimbot. Compare monthly and lifetime access; Cloud DMA and HWID Spoofer sold separately.',
  },
  '/aion-classic-esp/': {
    title: 'Aion Classic ESP & Aimbot Features',
    description:
      'ESP and aimbot modules on the main plan. Cloud DMA and HWID Spoofer are separate supporting products.',
  },
  '/aion-classic-pricing/': {
    title: 'Aion Classic ESP & Aimbot Pricing',
    description:
      'Compare $35 monthly and $150 lifetime ESP and aimbot access. Cloud DMA and HWID Spoofer are not included in the main plan.',
  },
  '/cloud-dma-for-aion-classic/': {
    title: 'Cloud DMA for Aion Classic | Setup & Requirements',
    description: 'Cloud DMA supporting product for Aion Classic—separate from the ESP and aimbot main plan.',
  },
  '/aion-classic-system-requirements/': {
    title: 'Aion Classic ESP & Aimbot System Requirements',
    description:
      'Windows, GPU, and security requirements for the main plan plus Cloud DMA and HWID Spoofer supporting products.',
  },
};

function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | null {
  return PAGE_SEO_OVERRIDES[normalizePath(pathname)] ?? null;
}