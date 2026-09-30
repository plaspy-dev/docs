# Plaspy Documentation Center

Official documentation and knowledge base for the **Plaspy** platform.

Plaspy is a cloud platform for GPS fleet tracking, telematics, and IoT monitoring.
This repository contains the user guides, tutorials, and technical documentation used by customers, installers, and integration partners.

---

## 📚 What you will find here

* Getting started guides
* Platform user manual
* Alerts and notifications
* API and integrations
* Troubleshooting articles

The documentation is built as a static website and can be deployed publicly.

---

## 🧰 Requirements

Before running the project locally, install:

* Node.js 24 (Node.js 20 or newer is required)
* npm (comes with Node.js)

Check your installation:

```
node -v
npm -v
```

---

## 🚀 Running locally

1. Clone the repository

```
git clone https://github.com/PlaspyHQ/Help.git
cd Help
```

2. Install dependencies

```
npm install
```

3. Start the local documentation server

```
npm run start
```

After starting, open your browser at:

```
http://localhost:3000
```

The documentation site will automatically reload when you edit files.

---

## 🏗 Build your site

Build your site for production:

```bash
npm run build
```

This runs four builds sequentially, each in a separate Node.js process, then
assembles their output into the `build` folder. Only one section and one locale
are loaded per build:

| Site configuration | Content | Published path |
| --- | --- | --- |
| `sites/docs-en` | English documentation, homepage and blog | `/` and `/docs/` |
| `sites/docs-es` | Spanish documentation, homepage and blog | `/es/` and `/es/docs/` |
| `sites/devices-en` | English device catalog | `/devices/` |
| `sites/devices-es` | Spanish device catalog | `/es/devices/` |

The four configurations share one installation of dependencies, the theme in
`src`, and the existing content in `docs`, `devices`, and `i18n`. Documents do not
need to be duplicated or moved. Each site has its own generated files under
`.docusaurus/<site>` and its own output under `.builds/<site>`.
Common Docusaurus settings live in `sites/shared.config.js`; each site's
configuration selects its section and locale.
Development bundler caches are isolated per section and locale so that one site
cannot reuse another site's generated configuration or route aliases. Production
Webpack filesystem caching is disabled to reduce peak memory when closing the
large catalog compilations. The shared MDX compilation cache remains enabled.

To build just one part:

```bash
npm run build:docs:en
npm run build:docs:es
npm run build:devices:en
npm run build:devices:es
```

After all four builds succeed, `npm run build:merge` assembles the publication.
It requires a successful build artifact for each part, refuses file collisions,
and combines all four sitemaps into `build/sitemap.xml`. It validates and stages
the output before replacing the previous `build` folder.

Production images are served from one shared `build/assets/images` directory.
Emitted image files are copied from their original sources to preserve their bytes.
Identical files are copied once; conflicting bytes under the same filename fail
the assembly. Image contents are preserved. Standalone development servers keep
their own image paths.

To stay within GitHub Pages' 1 GB published-site limit, device pages include only
the current navigation branch in static HTML. The browser then loads the complete
searchable sidebar. The catalog pages and combined sitemap still expose every
brand and device. Assembly checks the total size before replacing `build`.

Local builds default to a 6 GiB Node.js heap and two workers for static page
generation, with two concurrent pages per worker. These can be adjusted through
`NODE_OPTIONS`, `DOCUSAURUS_SSG_WORKER_THREAD_COUNT`, and
`DOCUSAURUS_SSR_CONCURRENCY` when needed. Workers are recycled by Docusaurus to
contain memory growth during static page generation.
Docusaurus Faster uses Webpack and SWC, and shares MDX compilation between the
server and browser builds to reduce the build workload.
Rspack is disabled because it emitted empty route chunks in this large catalog
while reporting successful compilation. Every build and assembly now rejects
empty generated JavaScript, CSS, HTML, or image files before publication.

Run `npm run test:build` to verify artifact assembly and collision protection.

---

## 🚀 Deploy your site

Test your production build locally:

```bash
npm run serve
```

The `build` folder is now served at http://localhost:3000/.

Use this combined production preview to test navigation between sections and
languages. For development, start only the part you are editing:

```bash
npm run start                 # English docs
npm run start-es              # Spanish docs, /es/
npm run start:devices:en       # English devices, /devices/
npm run start:devices:es       # Spanish devices, /es/devices/
```

Links into another part require the combined preview, since each development
server loads only its own section. Add `-- --port 3001` to select another port.

---

## � Internationalization (i18n)

To create or update the translation files for a specific locale (e.g., Spanish):

```bash
npm run write-translations -- --locale es
```

The default translation command loads the documentation section. To update the
device section's translation messages, use:

```bash
npm run write-translations-devices-es
```

To start the local documentation server with the Spanish locale:

```bash
npm run start-es
```

The translation files will be generated in the `i18n` directory.

---

## �🌐 Deployment

This documentation is intended to be published at:

https://docs.plaspy.com

On a push to `main`, GitHub Actions compiles the four sites in separate matrix
jobs, downloads their artifacts in an assembly job, and deploys the single
combined `build` folder to GitHub Pages. The workflow can also be run manually.
The public document and device URLs remain the same.

---

## 🤝 Contributing

We welcome improvements and corrections.

If you find an error or want to suggest improvements:

1. Fork the repository
2. Create a branch
3. Submit a Pull Request

---

## 🛠️ Maintenance

### Centering Device Main Images

This Bash script identifies `index.md` files within the `devices` directory and its translations that are missing the `device-logo` class. It automatically wraps the primary image tag in a `<div className="device-logo">` container to ensure all device images are properly centered and consistently styled throughout the documentation.

```bash
# Update local device files
grep -L 'device-logo' devices/*/*/index.md | while IFS= read -r file; do
  sed -i.bak -E 's|^([[:space:]]*!\[[^]]*\]\([^)]*\)[[:space:]]*)$|<div className="device-logo">\
\1\
</div>|' "$file"
  echo "Updated: $file"
  rm -f $file.bak
done

# Update Spanish translation files
grep -L 'device-logo' i18n/es/docusaurus-plugin-content-docs-devices/current/*/*/index.md | while IFS= read -r file; do
  sed -i.bak -E 's|^([[:space:]]*!\[[^]]*\]\([^)]*\)[[:space:]]*)$|<div className="device-logo">\
\1\
</div>|' "$file"
  echo "Updated: $file"
  rm -f $file.bak
done
```

---

## 📬 Contact

Website: https://www.plaspy.com

---

© 2026 Plaspy. All rights reserved.
