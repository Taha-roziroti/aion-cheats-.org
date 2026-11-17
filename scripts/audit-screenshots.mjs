/**
 * Playwright viewport screenshots (cursor-seo-audit-prompt §13).
 */
import { spawn, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { INDEXABLE_MONEY_ROUTES } from '../config/site.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(root, '..');
const dist = path.join(projectRoot, 'dist');
const outDir = path.join(projectRoot, 'audit', 'screenshots');
const PORT = Number(process.env.PREVIEW_PORT || 4176);

const VIEWPORTS = [
  { name: '375', width: 375, height: 812 },
  { name: '768', width: 768, height: 1024 },
  { name: '1024', width: 1024, height: 768 },
  { name: '1440', width: 1440, height: 900 },
];

const ROUTES = [
  ...INDEXABLE_MONEY_ROUTES,
  '/aion-classic-esp/',
  '/aion-classic-pricing/',
  '/aion-classic-system-requirements/',
  '/faq/',
];

function slugFromRoute(route) {
  if (route === '/') return 'home';
  return route.replace(/^\//, '').replace(/\/$/, '').replace(/\//g, '_');
}

function waitForServer(url, timeoutMs = 60000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = () => {
      http
        .get(url, (res) => {
          res.resume();
          resolve();
        })
        .on('error', () => {
          if (Date.now() - start > timeoutMs) reject(new Error(`preview not ready: ${url}`));
          else setTimeout(tick, 400);
        });
    };
    tick();
  });
}

async function main() {
  if (!fs.existsSync(dist)) {
    console.error('audit-screenshots: dist/ missing — run npm run build first');
    process.exit(1);
  }

  let playwright;
  try {
    playwright = await import('playwright');
  } catch {
    console.warn('audit-screenshots: playwright not installed');
    process.exit(process.env.SCREENSHOTS_STRICT === '1' ? 1 : 0);
  }

  const preview = spawn('npx', ['astro', 'preview', '--host', '127.0.0.1', '--port', String(PORT)], {
    cwd: projectRoot,
    stdio: 'ignore',
    shell: true,
  });

  const base = `http://127.0.0.1:${PORT}`;
  const manifest = { generatedAt: new Date().toISOString(), shots: [] };

  try {
    await waitForServer(`${base}/`);
    fs.mkdirSync(outDir, { recursive: true });
    const browser = await playwright.chromium.launch({ headless: true });

    for (const route of ROUTES) {
      const slug = slugFromRoute(route);
      for (const vp of VIEWPORTS) {
        const context = await browser.newContext({
          viewport: { width: vp.width, height: vp.height },
        });
        const page = await context.newPage();
        const url = `${base}${route === '/404/' ? '/404/' : route}`;
        await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 });
        const file = `${slug}--${vp.name}.png`;
        const filePath = path.join(outDir, file);
        await page.screenshot({ path: filePath, fullPage: true });
        manifest.shots.push({ route, viewport: vp.name, file: `screenshots/${file}` });
        await context.close();
      }
    }

    await browser.close();
    fs.writeFileSync(path.join(outDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
    console.log(`audit-screenshots: wrote ${manifest.shots.length} images under audit/screenshots/`);
  } finally {
    preview.kill('SIGTERM');
    spawnSync('taskkill', ['/PID', String(preview.pid), '/T', '/F'], { shell: true, stdio: 'ignore' });
  }
}

main().catch((err) => {
  console.error('audit-screenshots error:', err);
  process.exit(1);
});