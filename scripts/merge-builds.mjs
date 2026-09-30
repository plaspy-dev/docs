import { copyFile, mkdir, readFile, readdir, rename, rm, stat, writeFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generatedPath, rootDir, sites } from './sites.mjs';
import { validateBuild } from './validate-build.mjs';

async function copyWithoutCollisions(source, destination, relative = '') {
  await mkdir(destination, { recursive: true });
  for (const entry of await readdir(source, { withFileTypes: true })) {
    if (entry.name === 'build-manifest.json') continue;
    const from = path.join(source, entry.name);
    const to = path.join(destination, entry.name);
    if (entry.isDirectory()) {
      const nextRelative = path.join(relative, entry.name);
      if (nextRelative === path.join('assets', 'images')) continue;
      await copyWithoutCollisions(from, to, nextRelative);
    } else if (entry.isFile()) {
      // COPYFILE_EXCL: never silently overwrite another site's output.
      await copyFile(from, to, constants.COPYFILE_EXCL);
    } else {
      throw new Error(`Unexpected build entry: ${from}`);
    }
  }
}

async function copySharedImages(source, destination) {
  let entries;
  try { entries = await readdir(source, { withFileTypes: true }); }
  catch (error) { if (error.code === 'ENOENT') return; throw error; }
  await mkdir(destination, { recursive: true });
  for (const entry of entries) {
    if (!entry.isFile()) throw new Error(`Unexpected image entry: ${entry.name}`);
    const from = path.join(source, entry.name);
    const to = path.join(destination, entry.name);
    try { await copyFile(from, to, constants.COPYFILE_EXCL); }
    catch (error) {
      if (error.code !== 'EEXIST') throw error;
      const [original, existing] = await Promise.all([readFile(from), readFile(to)]);
      if (!original.equals(existing)) throw new Error(`Conflicting shared image: ${entry.name}`);
    }
  }
}

async function directoryBytes(directory) {
  let bytes = 0;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    bytes += entry.isDirectory() ? await directoryBytes(file) : (await stat(file)).size;
  }
  return bytes;
}

export async function mergeBuilds(root = rootDir, { maxBytes = 1_000_000_000 } = {}) {
  const sitemapBodies = [];
  // Validate every artifact before touching the previous publication.
  for (const site of sites) {
    const source = generatedPath(root, `.builds/${site.id}`);
    await validateBuild(source);
    const manifest = JSON.parse(await readFile(path.join(source, 'build-manifest.json'), 'utf8'));
    if (manifest.id !== site.id || manifest.baseUrl !== site.baseUrl ||
        manifest.locale !== site.locale || manifest.section !== site.section || manifest.sharedImages !== true) {
      throw new Error(`Invalid build artifact: ${site.id}`);
    }
    const entryPage = site.section === 'docs' ? 'docs/welcome_to_help/index.html' : 'index.html';
    if (!(await stat(path.join(source, entryPage))).isFile()) {
      throw new Error(`Missing entry page: ${site.id}`);
    }
    const sitemap = await readFile(path.join(source, 'sitemap.xml'), 'utf8');
    const match = sitemap.match(/<urlset\b[^>]*>([\s\S]*?)<\/urlset>/);
    if (!match) throw new Error(`Invalid sitemap: ${site.id}`);
    sitemapBodies.push(match[1]);
  }

  const staging = generatedPath(root, '.builds/combined');
  const destination = generatedPath(root, 'build');
  await rm(staging, { recursive: true, force: true });
  for (const site of sites) {
    await copyWithoutCollisions(
      generatedPath(root, `.builds/${site.id}`), path.join(staging, site.mount),
    );
    await copySharedImages(
      path.join(generatedPath(root, `.builds/${site.id}`), 'assets/images'),
      path.join(staging, 'assets/images'),
    );
  }
  // The root sitemap exposes every section and locale to the existing crawler.
  await writeFile(path.join(staging, 'sitemap.xml'),
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">' +
    sitemapBodies.join('') + '</urlset>\n');
  const bytes = await directoryBytes(staging);
  if (bytes > maxBytes) {
    throw new Error(`Combined site is ${(bytes / 1_000_000).toFixed(1)} MB; GitHub Pages allows 1 GB. Previous build preserved.`);
  }
  await rm(destination, { recursive: true, force: true });
  await rename(staging, destination);
  console.log(`All four sites assembled in build/: ${(bytes / 1_000_000).toFixed(1)} MB.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  mergeBuilds().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
