/**
 * Minimal Playwright smoke (cursor-seo-audit-prompt §2) — header links return 200.
 */
import { spawn, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(root, '..');
const dist = path.join(projectRoot, 'dist');
const PORT = Number(process.env.PREVIEW_PORT || 4174);

const ROUTES = ['/', '/aion-classic-esp/', '/aion-classic-pricing/', '/faq/', '/404.html'];

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
    console.error('audit-e2e: dist/ missing — run npm run build first');
    process.exit(1);
  }

  let playwright;
  try {
    playwright = await import('playwright');
  } catch {
    console.warn('audit-e2e: playwright not installed — run: npm i -D playwright && npx playwright install chromium');
    process.exit(process.env.E2E_STRICT === '1' ? 1 : 0);
  }

  const preview = spawn('npx', ['astro', 'preview', '--host', '127.0.0.1', '--port', String(PORT)], {
    cwd: projectRoot,
    stdio: 'ignore',
    shell: true,
  });

  const base = `http://127.0.0.1:${PORT}`;
  const errors = [];

  try {
    await waitForServer(`${base}/`);
    const browser = await playwright.chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    for (const route of ROUTES) {
      const url = route.startsWith('http') ? route : `${base}${route}`;
      const response = await page.goto(url, { waitUntil: 'domcontentloaded' });
      if (!response || response.status() >= 400) {
        errors.push(`${route}: HTTP ${response?.status() ?? 'no response'}`);
        continue;
      }
      const headerLinks = await page.locator('header a[href^="/"]').all();
      for (const link of headerLinks.slice(0, 6)) {
        const href = await link.getAttribute('href');
        if (!href || href.startsWith('/go/')) continue;
        const target = href.startsWith('/') ? `${base}${href}` : href;
        const r = await page.request.get(target);
        if (r.status() >= 400) {
          errors.push(`header link ${href} from ${route}: HTTP ${r.status()}`);
        }
      }
    }

    await browser.close();
  } finally {
    preview.kill('SIGTERM');
    spawnSync('taskkill', ['/PID', String(preview.pid), '/T', '/F'], { shell: true, stdio: 'ignore' });
  }

  if (errors.length) {
    console.error('audit-e2e failed:\n' + errors.map((e) => `  - ${e}`).join('\n'));
    process.exit(1);
  }

  console.log(`audit-e2e: OK (${ROUTES.length} routes, header links)`);
}

main().catch((err) => {
  console.error('audit-e2e error:', err);
  process.exit(1);
});