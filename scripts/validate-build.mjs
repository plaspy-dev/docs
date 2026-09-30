import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

// A compiler exit code of zero is insufficient if a generated route chunk is
// empty: its page renders static HTML but the browser cannot hydrate it.
export async function validateBuild(directory, relative = '') {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    const name = path.posix.join(relative, entry.name);
    if (entry.isDirectory()) {
      await validateBuild(file, name);
      continue;
    }
    if (!entry.isFile()) throw new Error(`Unexpected build entry: ${file}`);
    const requiredContent = name.endsWith('.html') ||
      (name.startsWith('assets/js/') && name.endsWith('.js')) ||
      (name.startsWith('assets/css/') && name.endsWith('.css')) ||
      name.startsWith('assets/images/');
    if (requiredContent && (await stat(file)).size === 0) {
      throw new Error(`Empty generated output: ${file}`);
    }
  }
}
