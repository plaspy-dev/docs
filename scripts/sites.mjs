import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const rootDir = fileURLToPath(new URL('../', import.meta.url));
export const sites = [
  { id: 'docs-en', section: 'docs', locale: 'en', baseUrl: '/', mount: '' },
  { id: 'docs-es', section: 'docs', locale: 'es', baseUrl: '/es/', mount: 'es' },
  { id: 'devices-en', section: 'devices', locale: 'en', baseUrl: '/devices/', mount: 'devices' },
  { id: 'devices-es', section: 'devices', locale: 'es', baseUrl: '/es/devices/', mount: 'es/devices' },
];

export function generatedPath(root, relative) {
  const resolvedRoot = path.resolve(root);
  const resolved = path.resolve(resolvedRoot, relative);
  const withinRoot = path.relative(resolvedRoot, resolved);
  if (withinRoot !== 'build' && !withinRoot.startsWith(`.builds${path.sep}`)) {
    throw new Error(`Refusing to modify a non-build directory: ${resolved}`);
  }
  return resolved;
}
