#!/usr/bin/env node
// Removes developer comments from the published copy of the site, so the
// public link carries none of the internal working notes. Run by the Pages
// workflow on _site only; the source files in this repo keep their comments.
//
// Plain patterns are safe here because the site has no inline <script> or
// <style> blocks, no quoted CSS text containing a comment marker, and its JS
// comments are whole lines only. Re-check those three facts before reusing
// this on other markup.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const patterns = {
  '.html': /<!--[\s\S]*?-->/g,
  '.css': /\/\*[\s\S]*?\*\//g,
  '.js': /^[ \t]*\/\/.*\n/gm,
};

const root = process.argv[2];
if (!root) {
  console.error('usage: strip-comments.mjs <dir>');
  process.exit(1);
}

for (const entry of await readdir(root, { recursive: true, withFileTypes: true })) {
  const pattern = patterns[path.extname(entry.name)];
  if (!entry.isFile() || !pattern) continue;
  const file = path.join(entry.parentPath, entry.name);
  const text = await readFile(file, 'utf8');
  const removed = text.match(pattern)?.length ?? 0;
  if (removed === 0) continue;
  await writeFile(file, text.replace(pattern, ''));
  console.log(`${String(removed).padStart(3)} ${path.relative(root, file)}`);
}
