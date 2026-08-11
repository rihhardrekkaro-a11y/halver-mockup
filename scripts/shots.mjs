#!/usr/bin/env node
// Walks every .html page in this repo and screenshots it with Playwright at
// three widths, in both colour schemes, full page. Pages are discovered by
// directory walk, not by a hardcoded list, because pages get added in
// parallel by other agents while this script is not being edited.
//
// Usage: npm run shots                    every page in the repo
//        npm run shots -- index.html tood.html   only the named pages
// Page arguments are repo-relative substrings; parallel agents pass their own
// pages so seven concurrent runs do not each shoot the whole repo.
// Expects (or starts) the dev server from scripts/dev-server.mjs on :8899.

import { chromium } from 'playwright';
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import http from 'node:http';
import { spawn } from 'node:child_process';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const PORT = Number(process.env.PORT) || 8899;
const BASE_URL = `http://localhost:${PORT}`;
const OUT_DIR = path.join(ROOT, 'screenshots');
const WIDTHS = [1440, 768, 375];
const SCHEMES = ['light', 'dark'];
const SKIP_DIRS = new Set(['node_modules', '.git', 'screenshots', '.github']);

/** Recursively find every .html file under `dir`, skipping SKIP_DIRS. */
async function findHtmlFiles(dir, base = dir, results = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      await findHtmlFiles(path.join(dir, entry.name), base, results);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.html')) {
      results.push(path.relative(base, path.join(dir, entry.name)));
    }
  }
  return results;
}

/** "tood.html" -> "tood", "shop/product.html" -> "shop-product" */
function slugFor(relPath) {
  return relPath
    .replace(/\.html$/i, '')
    .split(path.sep)
    .join('-');
}

function pingServer() {
  return new Promise((resolve) => {
    const req = http.get(BASE_URL + '/', (res) => {
      res.resume();
      resolve(true);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(1000, () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function waitForServer(retries = 40) {
  for (let i = 0; i < retries; i++) {
    if (await pingServer()) return true;
    await new Promise((r) => setTimeout(r, 250));
  }
  return false;
}

/** Scroll to the bottom in steps so IntersectionObserver reveals fire, then back to top. */
async function triggerScrollReveal(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      const step = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        const atBottom =
          window.scrollY + window.innerHeight >= document.body.scrollHeight - 1;
        if (atBottom) {
          clearInterval(timer);
          resolve(undefined);
        }
      }, 50);
    });
  });
  // Let scroll-triggered transitions/observers settle before scrolling back.
  await page.waitForTimeout(350);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(150);
}

async function main() {
  let serverProcess = null;
  const running = await pingServer();

  if (running) {
    console.log(`Using existing server at ${BASE_URL}`);
  } else {
    console.log(`No server on ${BASE_URL}, starting scripts/dev-server.mjs ...`);
    serverProcess = spawn(
      process.execPath,
      [path.join(ROOT, 'scripts', 'dev-server.mjs')],
      { stdio: 'inherit', env: { ...process.env, PORT: String(PORT) } }
    );
    const ok = await waitForServer();
    if (!ok) {
      console.error(`Server did not come up on ${BASE_URL} in time.`);
      serverProcess.kill();
      process.exit(1);
    }
  }

  await mkdir(OUT_DIR, { recursive: true });

  const wanted = process.argv.slice(2);
  let htmlFiles = (await findHtmlFiles(ROOT)).sort();
  if (wanted.length > 0) {
    htmlFiles = htmlFiles.filter((rel) => wanted.some((w) => rel.includes(w)));
    if (htmlFiles.length === 0) {
      console.error(`No .html files matched: ${wanted.join(', ')}`);
      process.exit(1);
    }
  }
  if (htmlFiles.length === 0) {
    console.error('No .html files found in the repo. Nothing to shoot.');
  }

  const browser = await chromium.launch();
  const results = [];

  try {
    for (const relPath of htmlFiles) {
      const slug = slugFor(relPath);
      const url = `${BASE_URL}/${relPath.split(path.sep).join('/')}`;

      for (const width of WIDTHS) {
        const context = await browser.newContext({ viewport: { width, height: 900 } });
        const page = await context.newPage();

        for (const scheme of SCHEMES) {
          const fileName = `${slug}-${width}-${scheme}.png`;
          const filePath = path.join(OUT_DIR, fileName);
          try {
            await page.emulateMedia({ colorScheme: scheme });
            await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
            await triggerScrollReveal(page);
            await page.screenshot({ path: filePath, fullPage: true });
            results.push({
              page: relPath,
              width,
              scheme,
              file: `screenshots/${fileName}`,
              status: 'ok',
            });
          } catch (err) {
            console.error(`Failed: ${relPath} @ ${width} (${scheme}) -> ${err.message}`);
            results.push({
              page: relPath,
              width,
              scheme,
              file: `screenshots/${fileName}`,
              status: 'FAILED',
            });
          }
        }

        await context.close();
      }
    }
  } finally {
    await browser.close();
    if (serverProcess) serverProcess.kill();
  }

  printSummary(results, htmlFiles.length);

  if (results.some((r) => r.status !== 'ok')) {
    process.exitCode = 1;
  }
}

function printSummary(results, pageCount) {
  const cols = {
    page: Math.max(4, ...results.map((r) => r.page.length)),
    width: 5,
    scheme: 6,
    status: 6,
  };
  const pad = (s, w) => String(s).padEnd(w);

  console.log('\nScreenshot summary');
  console.log('-------------------');
  console.log(
    `${pad('page', cols.page)}  ${pad('width', cols.width)}  ${pad('scheme', cols.scheme)}  ${pad('status', cols.status)}  file`
  );
  for (const r of results) {
    console.log(
      `${pad(r.page, cols.page)}  ${pad(r.width, cols.width)}  ${pad(r.scheme, cols.scheme)}  ${pad(r.status, cols.status)}  ${r.file}`
    );
  }
  const ok = results.filter((r) => r.status === 'ok').length;
  console.log(
    `\nCaptured ${ok}/${results.length} screenshots from ${pageCount} page(s) x ${WIDTHS.length} widths x ${SCHEMES.length} schemes.`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
