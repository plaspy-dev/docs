import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { generatedPath, rootDir, sites } from './sites.mjs';
import { mergeBuilds } from './merge-builds.mjs';
import { validateBuild } from './validate-build.mjs';

const require = createRequire(import.meta.url);
const cli = require.resolve('@docusaurus/core/bin/docusaurus.mjs');

function runDocusaurus(site, command, args = []) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [
      cli, command, '--config', `sites/${site.id}/docusaurus.config.js`, ...args,
    ], {
      cwd: rootDir,
      stdio: 'inherit',
      env: {
        ...process.env,
        NODE_OPTIONS: process.env.NODE_OPTIONS || '--max-old-space-size=6144',
        DOCUSAURUS_GENERATED_FILES_DIR_NAME: `.docusaurus/${site.id}`,
        DOCUSAURUS_SSR_CONCURRENCY: process.env.DOCUSAURUS_SSR_CONCURRENCY || '2',
        DOCUSAURUS_SSG_WORKER_THREAD_COUNT: process.env.DOCUSAURUS_SSG_WORKER_THREAD_COUNT || '2',
        TERSER_PARALLEL: process.env.TERSER_PARALLEL || 'false',
      },
    });
    child.on('error', reject);
    child.on('exit', (code, signal) => {
      if (code === 0) resolve();
      else reject(new Error(`${site.id}: ${command} failed (${signal || code}).`));
    });
  });
}

async function buildSite(site, args) {
  const outDir = generatedPath(rootDir, `.builds/${site.id}`);
  // A failed build cannot leave a success marker from an earlier run.
  await rm(outDir, { recursive: true, force: true });
  console.log(`\nBuilding ${site.id} (${site.baseUrl})`);
  await runDocusaurus(site, 'build', [
    '--locale', site.locale, '--out-dir', outDir, ...args,
  ]);
  await validateBuild(outDir);
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, 'build-manifest.json'), JSON.stringify({
    id: site.id, section: site.section, locale: site.locale, baseUrl: site.baseUrl,
    sharedImages: true,
  }, null, 2));
}

async function main() {
  const [command, target = 'all', ...args] = process.argv.slice(2);
  if (!['build', 'start', 'deploy'].includes(command)) {
    throw new Error('Usage: node scripts/site.mjs <build|start|deploy> <site|all> [Docusaurus options]');
  }
  const selected = target === 'all' ? sites : sites.filter((site) => site.id === target);
  if (!selected.length) throw new Error(`Unknown site: ${target}`);
  if (command === 'start') {
    if (selected.length !== 1) throw new Error('Select one site to start.');
    await runDocusaurus(selected[0], 'start', ['--locale', selected[0].locale, ...args]);
    return;
  }
  if (command === 'deploy' && target !== 'all') throw new Error('Deploy requires all four sites.');
  // Separate processes release their memory before the next site starts.
  for (const site of selected) await buildSite(site, args);
  if (target === 'all') await mergeBuilds(rootDir);
  if (command === 'deploy') {
    await runDocusaurus(sites[0], 'deploy', ['--skip-build', '--out-dir', 'build']);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
