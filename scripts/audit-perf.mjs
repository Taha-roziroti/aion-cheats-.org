/**
 * Lighthouse perf audit against astro preview (cursor-seo-audit-prompt §10).
 */
import { spawn, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(root, '..');
const dist = path.join(projectRoot, 'dist');
const outDir = path.join(projectRoot, 'audit');
const reportFile = path.join(outDir, 'lighthouse-report.json');

const TARGETS = [
  { path: '/', template: 'home' },
  { path: '/aion-classic-esp/', template: 'spoke-article' },
  { path: '/aion-classic-pricing/', template: 'commercial' },
  { path: '/cloud-dma-for-aion-classic/', template: 'product' },
  { path: '/faq/', template: 'faq' },
  { path: '/404/', template: '404' },
];

const FLOOR = Number(process.env.LIGHTHOUSE_FLOOR || 95);
const RUNS = Number(process.env.LIGHTHOUSE_RUNS || 3);
const PORT = Number(process.env.PREVIEW_PORT || 4173);

function median(nums) {
  const s = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
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

async function runLighthouse(url, formFactor) {
  const mod = await import('lighthouse');
  const lighthouse = mod.default ?? mod;
  const chromeLauncher = await import('chrome-launcher');
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless', '--no-sandbox'] });
  try {
    const settings =
      formFactor === 'mobile'
        ? {
            formFactor: 'mobile',
            screenEmulation: { mobile: true, width: 375, height: 667, deviceScaleFactor: 2, disabled: false },
          }
        : {
            formFactor: 'desktop',
            screenEmulation: { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false },
          };
    const result = await lighthouse(
      url,
      {
        port: chrome.port,
        output: 'json',
        logLevel: 'error',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        ...settings,
      },
      undefined,
    );
    const c = result.lhr.categories;
    return {
      performance: Math.round((c.performance?.score ?? 0) * 100),
      accessibility: Math.round((c.accessibility?.score ?? 0) * 100),
      bestPractices: Math.round((c['best-practices']?.score ?? 0) * 100),
      seo: Math.round((c.seo?.score ?? 0) * 100),
    };
  } finally {
    await chrome.kill();
  }
}

async function main() {
  if (!fs.existsSync(dist)) {
    console.error('audit-perf: dist/ missing — run npm run build first');
    process.exit(1);
  }

  let hasLighthouse = true;
  try {
    await import('lighthouse');
    await import('chrome-launcher');
  } catch {
    hasLighthouse = false;
  }

  if (!hasLighthouse) {
    console.warn(
      'audit-perf: lighthouse/chrome-launcher not installed — add devDependencies and re-run. Logged as blocked.',
    );
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(
      reportFile,
      JSON.stringify({ blocked: true, reason: 'missing lighthouse devDependencies' }, null, 2),
    );
    process.exit(process.env.PERF_STRICT === '1' ? 1 : 0);
  }

  const preview = spawn('npx', ['astro', 'preview', '--host', '127.0.0.1', '--port', String(PORT)], {
    cwd: projectRoot,
    stdio: 'ignore',
    shell: true,
  });

  const base = `http://127.0.0.1:${PORT}`;
  const failures = [];

  try {
    await waitForServer(`${base}/`);
    const report = { generatedAt: new Date().toISOString(), floor: FLOOR, pages: [] };

    for (const target of TARGETS) {
      const url = `${base}${target.path === '/404/' ? '/404/' : target.path}`;
      for (const formFactor of ['mobile', 'desktop']) {
        const scores = [];
        for (let i = 0; i < RUNS; i += 1) {
          scores.push(await runLighthouse(url, formFactor));
        }
        const med = {
          performance: median(scores.map((s) => s.performance)),
          accessibility: median(scores.map((s) => s.accessibility)),
          bestPractices: median(scores.map((s) => s.bestPractices)),
          seo: median(scores.map((s) => s.seo)),
        };
        report.pages.push({ ...target, formFactor, median: med, runs: scores });
        const categories = target.template === '404' ? ['performance', 'accessibility', 'bestPractices'] : Object.keys(med);
        for (const k of categories) {
          const v = med[k];
          if (v < FLOOR) {
            failures.push(`${target.template} ${formFactor} ${k}=${v} < ${FLOOR} (${url})`);
          }
        }
      }
    }

    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(reportFile, `${JSON.stringify(report, null, 2)}\n`);
    console.log(`audit-perf: wrote ${reportFile}`);

    if (failures.length) {
      console.error('audit-perf failed:\n' + failures.map((f) => `  - ${f}`).join('\n'));
      process.exit(1);
    }
    console.log('audit-perf: OK (all medians ≥ floor)');
  } finally {
    preview.kill('SIGTERM');
    spawnSync('taskkill', ['/PID', String(preview.pid), '/T', '/F'], { shell: true, stdio: 'ignore' });
  }
}

main().catch((err) => {
  console.error('audit-perf error:', err);
  process.exit(1);
});