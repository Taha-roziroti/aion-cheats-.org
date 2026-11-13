/**
 * Central titles/descriptions for high-traffic routes (mirrors content/pages frontmatter).
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Arena Breakout Infinite Cheats | ESP & Aimbot',
    description:
      'Explore Arena Breakout Infinite cheats with player ESP, AI ESP, loot displays and configurable aimbot options. Review features and access plans.',
  },
  '/arena-breakout-infinite-esp/': {
    title: 'Arena Breakout Infinite ESP | Player & Loot',
    description:
      'Explore Arena Breakout Infinite ESP, including player, AI, inventory and loot displays. See the available visual options and settings.',
  },
  '/arena-breakout-infinite-aimbot/': {
    title: 'Arena Breakout Infinite Aimbot | ABI Features',
    description:
      'Explore ABI aimbot settings, including FOV, smoothness, speed, target filters and custom keybinds. Review the available configuration.',
  },
  '/arena-breakout-infinite-cheats-pricing/': {
    title: 'Arena Breakout Infinite Cheats Price & Plans',
    description:
      'Compare Arena Breakout Infinite monthly and lifetime plans, Cloud DMA pricing and setup requirements. Explore the available access options.',
  },
  '/cloud-dma-for-arena-breakout-infinite/': {
    title: 'Cloud DMA for Arena Breakout Infinite | Setup',
    description:
      'Explore Cloud DMA for Arena Breakout Infinite, including Hyper-V setup, Windows requirements, pricing and additional services.',
  },
  '/arena-breakout-infinite-hwid-spoofer/': {
    title: 'Arena Breakout Infinite HWID Spoofer | ABI',
    description:
      'Explore HWID spoofing features, Windows requirements and hardware identifier options. Review the listed compatibility before choosing a setup.',
  },
  '/faq/': {
    title: 'ABI FAQ – plans, Cloud DMA, Windows & checkout',
    description:
      'Frequently asked questions about Arena Breakout Infinite cheats, pricing, Cloud DMA, Windows requirements, and checkout.',
  },
  '/support/': {
    title: 'ABI Support – checkout, Cloud DMA & setup help',
    description:
      'Get help with Arena Breakout Infinite checkout, Cloud DMA Hyper-V setup, license delivery, and Windows compatibility before you buy or install.',
  },
  '/about/': {
    title: 'About ABI Cheats – Arena Breakout Infinite guides',
    description:
      'Learn who publishes ABI Cheats, what Arena Breakout Infinite features we document, and how pricing, Cloud DMA, and setup guides fit together.',
  },
  '/guides/cloud-dma-setup/': {
    title: 'Cloud DMA setup guide for Arena Breakout Infinite',
    description:
      'Step-by-step Cloud DMA setup for Arena Breakout Infinite on Windows 10 and 11, including Hyper-V, RAM sizing, and virtualization checks before cheat install.',
  },
  '/guides/system-requirements/': {
    title: 'Arena Breakout Infinite system requirements',
    description:
      'Windows 10 and 11 requirements for Arena Breakout Infinite cheats, including RAM, CPU, client builds, and Cloud DMA virtualization prerequisites.',
  },
  '/privacy/': {
    title: 'ABI Privacy Policy – analytics & support email',
    description:
      'Privacy policy for isle-hack.com: how we use analytics cookies, support email, and checkout partner data for Arena Breakout Infinite customers.',
  },
  '/terms/': {
    title: 'ABI Terms – licenses, refunds & Cloud DMA',
    description:
      'Terms and conditions for Arena Breakout Infinite cheat plans, Cloud DMA licenses, refunds, and acceptable use on supported Windows PCs.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
