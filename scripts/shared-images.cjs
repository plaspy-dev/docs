const { copyFile } = require('node:fs/promises');
const path = require('node:path');

// Keep image bytes unchanged, but give every application the same asset URLs.
class SharedImagesPlugin {
  apply(compiler) {
    compiler.hooks.normalModuleFactory.tap('shared-images', (factory) => {
      // Markdown uses inline loaders, which bypass ordinary module rules.
      factory.hooks.beforeResolve.tap('shared-images', (data) => {
        if (!data?.request?.includes('!')) return;
        data.request = data.request.split('!').map((part) => {
          if (!/(?:url|file)-loader/.test(part)) return part;
          const queryIndex = part.indexOf('?');
          if (queryIndex < 0) return part;
          const options = new URLSearchParams(part.slice(queryIndex + 1));
          if (!options.get('name')?.startsWith('assets/images/')) return part;
          options.set('publicPath', '/');
          // loader-utils decodes percent escapes but does not decode '+' spaces.
          return `${part.slice(0, queryIndex)}?${options.toString().replace(/\+/g, '%20')}`;
        }).join('!');
      });
    });
    compiler.hooks.afterEmit.tapPromise('shared-images', async (compilation) => {
      // File-loader's original source is authoritative. Large Rspack builds can
      // emit empty buffers for duplicate image assets despite correct hashes.
      for (const { name, info } of compilation.getAssets()) {
        if (!name.startsWith('assets/images/')) continue;
        if (!info.sourceFilename) throw new Error(`Missing image source: ${name}`);
        const destination = path.resolve(compiler.outputPath, name);
        if (path.relative(compiler.outputPath, destination).startsWith('..')) {
          throw new Error(`Invalid image output: ${name}`);
        }
        await copyFile(path.resolve(compiler.context, info.sourceFilename), destination);
      }
    });
  }
}

function configureSharedImages(rules) {
  for (const rule of rules || []) {
    for (const loader of Array.isArray(rule.use) ? rule.use : [rule.use]) {
      if (loader?.options?.name?.startsWith('assets/images/')) {
        loader.options.publicPath = '/';
      }
    }
    configureSharedImages(rule.oneOf);
    configureSharedImages(rule.rules);
  }
}

module.exports = { SharedImagesPlugin, configureSharedImages };
