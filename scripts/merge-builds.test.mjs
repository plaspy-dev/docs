import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import test from 'node:test';
import { mergeBuilds } from './merge-builds.mjs';
import { generatedPath, rootDir, sites } from './sites.mjs';

const require = createRequire(import.meta.url);
const { SharedImagesPlugin } = require('./shared-images.cjs');
const loaderUtils = require(require.resolve('loader-utils', { paths: [path.dirname(require.resolve('url-loader'))] }));

test('shared Markdown images preserve Windows loader paths containing spaces', () => {
  let rewrite;
  const factory = { hooks: { beforeResolve: { tap(_name, handler) { rewrite = handler; } } } };
  const compiler = { hooks: {
    normalModuleFactory: { tap(_name, handler) { handler(factory); } },
    afterEmit: { tapPromise() {} },
  } };
  new SharedImagesPlugin().apply(compiler);
  const fallback = 'C:\\Users\\Dev\\OneDrive - Example\\node_modules\\file-loader\\dist\\cjs.js';
  const data = { request: `!url-loader?name=assets/images/[name]-[contenthash].[ext]&fallback=${fallback}!tracker.png` };
  rewrite(data);
  const loader = data.request.split('!')[1];
  const options = loaderUtils.getOptions({ query: loader.slice(loader.indexOf('?')) });
  assert.equal(options.fallback, fallback);
  assert.equal(options.publicPath, '/');
  assert.equal(options.name, 'assets/images/[name]-[contenthash].[ext]');
});

test('emitted shared images preserve the original bytes even if the bundler wrote an empty file', async (t) => {
  const root = await fixture(t);
  const output = generatedPath(root, '.builds/devices-en');
  await writeFile(path.join(root, 'original.png'), 'original image bytes');
  await writeFile(path.join(output, 'assets/images/tracker-abc.png'), '');
  let afterEmit;
  const compiler = { context: root, outputPath: output, hooks: {
    normalModuleFactory: { tap() {} },
    afterEmit: { tapPromise(_name, handler) { afterEmit = handler; } },
  } };
  new SharedImagesPlugin().apply(compiler);
  await afterEmit({ getAssets: () => [{ name: 'assets/images/tracker-abc.png', info: { sourceFilename: 'original.png' } }] });
  assert.equal(await readFile(path.join(output, 'assets/images/tracker-abc.png'), 'utf8'), 'original image bytes');
});

async function fixture(t) {
  const parent = generatedPath(rootDir, '.builds/test-fixtures');
  await mkdir(parent, { recursive: true });
  const root = await mkdtemp(path.join(parent, 'merge-'));
  // The fixture root is verified inside the repository's build directory.
  t.after(() => rm(generatedPath(rootDir, path.relative(rootDir, root)), { recursive: true, force: true }));
  for (const site of sites) {
    const output = generatedPath(root, `.builds/${site.id}`);
    await mkdir(path.join(output, 'assets/js'), { recursive: true });
    await mkdir(path.join(output, 'assets/images'), { recursive: true });
    await mkdir(path.join(output, 'docs/welcome_to_help'), { recursive: true });
    await writeFile(path.join(output, 'index.html'), site.id);
    await writeFile(path.join(output, 'docs/welcome_to_help/index.html'), site.id);
    await writeFile(path.join(output, 'assets/js/main.js'), site.id);
    await writeFile(path.join(output, 'assets/images/tracker-abc.png'), 'same image bytes');
    await writeFile(path.join(output, 'build-manifest.json'), JSON.stringify({ ...site, sharedImages: true }));
    await writeFile(path.join(output, 'sitemap.xml'),
      `<urlset><url><loc>https://docs.plaspy.com${site.baseUrl}example</loc>` +
      '<xhtml:link rel="alternate" hreflang="es" href="https://docs.plaspy.com/es/docs/example"/>' +
      '</url></urlset>');
  }
  await mkdir(path.join(root, 'build'), { recursive: true });
  await writeFile(path.join(root, 'build/previous.txt'), 'previous publication');
  return root;
}

test('mounts all four sites and combines the sitemap without replacing assets', async (t) => {
  const root = await fixture(t);
  await mergeBuilds(root);
  for (const site of sites) {
    const output = path.join(root, 'build', site.mount);
    assert.equal(await readFile(path.join(output, 'index.html'), 'utf8'), site.id);
    assert.equal(await readFile(path.join(output, 'assets/js/main.js'), 'utf8'), site.id);
    await assert.rejects(readFile(path.join(output, 'build-manifest.json')), { code: 'ENOENT' });
  }
  const sitemap = await readFile(path.join(root, 'build/sitemap.xml'), 'utf8');
  for (const site of sites) assert.ok(sitemap.includes(`https://docs.plaspy.com${site.baseUrl}example`));
  assert.equal((sitemap.match(/<url>/g) || []).length, 4);
  assert.ok(sitemap.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"'));
  assert.equal(await readFile(path.join(root, 'build/assets/images/tracker-abc.png'), 'utf8'), 'same image bytes');
  await assert.rejects(readFile(path.join(root, 'build/es/devices/assets/images/tracker-abc.png')), { code: 'ENOENT' });
});

test('missing or failed artifacts leave the previous publication intact', async (t) => {
  const root = await fixture(t);
  await rm(path.join(root, '.builds/devices-es/build-manifest.json'));
  await assert.rejects(mergeBuilds(root), { code: 'ENOENT' });
  assert.equal(await readFile(path.join(root, 'build/previous.txt'), 'utf8'), 'previous publication');
});

test('rejects empty HTML, route chunks, styles and images before replacing the publication', async (t) => {
  for (const file of ['index.html', 'assets/js/main.js', 'assets/css/main.css', 'assets/images/tracker-abc.png']) {
    const root = await fixture(t);
    await mkdir(path.dirname(path.join(root, '.builds/devices-en', file)), { recursive: true });
    await writeFile(path.join(root, '.builds/devices-en', file), '');
    await assert.rejects(mergeBuilds(root), /Empty generated output/);
    assert.equal(await readFile(path.join(root, 'build/previous.txt'), 'utf8'), 'previous publication');
  }
});

test('rejects an artifact built with the wrong locale or URL prefix', async (t) => {
  const root = await fixture(t);
  await writeFile(path.join(root, '.builds/devices-es/build-manifest.json'), JSON.stringify(sites[2]));
  await assert.rejects(mergeBuilds(root), /Invalid build artifact: devices-es/);
  assert.equal(await readFile(path.join(root, 'build/previous.txt'), 'utf8'), 'previous publication');
});

test('route collisions fail before replacing the previous publication', async (t) => {
  const root = await fixture(t);
  await mkdir(path.join(root, '.builds/docs-en/devices'), { recursive: true });
  await writeFile(path.join(root, '.builds/docs-en/devices/index.html'), 'conflicting route');
  await assert.rejects(mergeBuilds(root), { code: 'EEXIST' });
  assert.equal(await readFile(path.join(root, 'build/previous.txt'), 'utf8'), 'previous publication');
});

test('build cleanup cannot target source directories or escape the repository', () => {
  for (const relative of ['devices', '../build', '.builds/../../docs']) {
    assert.throws(() => generatedPath(rootDir, relative), /non-build directory/);
  }
});

test('rejects conflicting shared image bytes without replacing the publication', async (t) => {
  const root = await fixture(t);
  await writeFile(path.join(root, '.builds/devices-es/assets/images/tracker-abc.png'), 'different image');
  await assert.rejects(mergeBuilds(root), /Conflicting shared image/);
  assert.equal(await readFile(path.join(root, 'build/previous.txt'), 'utf8'), 'previous publication');
});

test('checks publication size before replacing the previous build', async (t) => {
  const root = await fixture(t);
  await assert.rejects(mergeBuilds(root, { maxBytes: 1 }), /GitHub Pages allows 1 GB/);
  assert.equal(await readFile(path.join(root, 'build/previous.txt'), 'utf8'), 'previous publication');
});
