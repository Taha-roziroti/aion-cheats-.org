import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pagesDir = path.join(root, 'content', 'pages');

const pages = [
  { file: 'index.md', slug: '/', h1: 'Homepage body placeholder' },
  { file: 'dota-2-maphack.md', slug: '/dota-2-maphack/', h1: 'Feature page one body placeholder' },
  { file: 'dota-2-hero-esp.md', slug: '/dota-2-hero-esp/', h1: 'Feature page two body placeholder' },
  { file: 'dota-2-cheats-review.md', slug: '/dota-2-cheats-review/', h1: 'Review page body placeholder' },
  { file: 'dota-2-scripts.md', slug: '/dota-2-scripts/', h1: 'Feature page three body placeholder' },
  {
    file: 'system-requirements.md',
    slug: '/guides/system-requirements/',
    h1: 'System requirements guide placeholder',
  },
  { file: 'cloud-dma-setup.md', slug: '/guides/cloud-dma-setup/', h1: 'Setup guide placeholder' },
  {
    file: 'arena-breakout-infinite-esp.md',
    slug: '/arena-breakout-infinite-esp/',
    h1: 'Legacy redirect source placeholder',
  },
  {
    file: 'arena-breakout-infinite-aimbot.md',
    slug: '/arena-breakout-infinite-aimbot/',
    h1: 'Legacy redirect source placeholder',
  },
  {
    file: 'arena-breakout-infinite-cheats-pricing.md',
    slug: '/arena-breakout-infinite-cheats-pricing/',
    h1: 'Legacy redirect source placeholder',
  },
  {
    file: 'cloud-dma-for-arena-breakout-infinite.md',
    slug: '/cloud-dma-for-arena-breakout-infinite/',
    h1: 'Legacy redirect source placeholder',
  },
  {
    file: 'arena-breakout-infinite-hwid-spoofer.md',
    slug: '/arena-breakout-infinite-hwid-spoofer/',
    h1: 'Legacy redirect source placeholder',
  },
];

const seo = {
  '/': {
    title: 'Product Site Template: Features, Pricing and Plans Placeholder',
    description:
      'Scaffold homepage with layout, checkout paths, and section placeholders. Replace titles, body copy, and images when your product brief is ready.',
  },
  '/dota-2-maphack/': {
    title: 'Feature Page Template One: Sections and Media Placeholders',
    description:
      'Example feature URL demonstrating markdown SEO layout, FAQs, and checkout wiring. Swap slug, title, and body for your first feature guide.',
  },
  '/dota-2-hero-esp/': {
    title: 'Feature Page Template Two: Sections and Media Placeholders',
    description:
      'Second feature page template with the same components as money routes. Use as a pattern for ESP, aim, or overlay style modules.',
  },
  '/dota-2-cheats-review/': {
    title: 'Product Review Page Template: Verdict and Pricing Placeholders',
    description:
      'Editorial review layout with comparison tables and CTA blocks. Replace with an independent audit once you have a live vendor listing.',
  },
  '/dota-2-scripts/': {
    title: 'Feature Page Template Three: Guides and FAQ Placeholders',
    description:
      'Informational route template for script-style or automation modules. Content is placeholder prose until your documentation is written.',
  },
  '/guides/system-requirements/': {
    title: 'System Requirements Guide Template: Hardware Checklist Placeholder',
    description:
      'Requirements guide using the shared markdown SEO shell. List CPU, OS, and client versions once you validate them on hardware.',
  },
  '/guides/cloud-dma-setup/': {
    title: 'Setup Guide Template: Step List and Screenshot Placeholders',
    description:
      'Long-form setup walkthrough scaffold with figures and affiliate CTAs. Replace steps when your install or Hyper-V runbook is finalized.',
  },
};

function fillerParagraph(pageId, label) {
  return `${label} (${pageId}): Intentional scaffold copy for this route only. It exists so layout, spacing, list rhythm, and internal links can be reviewed before you publish real product documentation. Replace this block with features, pricing, compatibility notes, checkout steps, and support guidance when your brief is approved.`;
}

function body(h1, pageId) {
  const sections = ['Overview', 'Feature list', 'Pricing notes', 'Setup pointers', 'Support and FAQ', 'Next steps'];
  const parts = [`## ${h1}`, '', fillerParagraph(pageId, 'Introduction')];
  for (const heading of sections) {
    parts.push('', `## ${heading} placeholder`, '', fillerParagraph(pageId, heading), fillerParagraph(pageId, `${heading} detail`), '');
    parts.push(`- ${pageId} bullet placeholder one`, '- Bullet placeholder two', '- Bullet placeholder three');
  }
  parts.push('', fillerParagraph(pageId, 'Closing'));
  return parts.join('\n').trim();
}

for (const page of pages) {
  const meta = seo[page.slug] ?? {
    title: 'Content page placeholder',
    description:
      'Markdown body placeholder for redirect or legacy routes. Replace or remove this file when slugs are finalized.',
  };
  const content = `---
title: "${meta.title.replace(/"/g, '\\"')}"
description: "${meta.description.replace(/"/g, '\\"')}"
slug: "${page.slug}"
---

${body(page.h1, page.slug)}
`;
  const out = path.join(pagesDir, page.file);
  fs.writeFileSync(out, content, 'utf8');
  console.log('Wrote', path.relative(root, out));
}