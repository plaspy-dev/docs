// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import sharedImages from '../scripts/shared-images.cjs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Plaspy Documentation',
  tagline: 'Plaspy Documentation',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: false,
      rspackPersistentCache: false,
      ssgWorkerThreads: true,
      mdxCrossCompilerCache: true,
    },
  },

  // Set the production url of your site here
  url: 'https://docs.plaspy.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Plaspy', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  stylesheets: [
    {
      href: '/css/font-awesome.min.css',
      type: 'text/css',
    },
  ],
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      es: { label: 'Español' },
      en: { label: 'English' },
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'devices',
        path: 'devices',
        routeBasePath: 'devices',
        sidebarPath: './sidebarsDevices.js',
        editUrl: 'https://github.com/plaspy-dev/docs/blob/main/',
        showLastUpdateTime: true,
      },
    ]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/plaspy-dev/docs/blob/main/',
          path: 'docs',
          routeBasePath: 'docs',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/plaspy-dev/docs/blob/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'GTM-TJBWWH3W',
          anonymizeIP: true,
        },
      })
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
          className: 'brand-logo'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'devices',
            sidebarId: 'devicesSidebar',
            position: 'left',
            label: 'Devices',
            className: 'show-only-plaspy'
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Go to Plaspy',
                href: 'https://www.plaspy.com',
              },
              {
                label: 'Sign in',
                href: 'https://app.plaspy.com',
              },
              {
                label: 'Pricing',
                href: 'https://www.plaspy.com/Features/Pricing',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Help Center',
                to: '/docs/welcome_to_help',
              },
              {
                label: 'Contact support',
                href: 'https://www.plaspy.com/ContactUs',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Homepage',
                href: 'https://www.plaspy.com',
              },
              {
                label: 'Privacy Policy',
                href: 'https://www.plaspy.com/ServiceAgreement/Policy',
              },
              {
                label: 'Terms & Conditions',
                href: 'https://www.plaspy.com/ServiceAgreement/Terms',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Plaspy`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: 'XZBQE60VD2',
        apiKey: '397f890aee67969f67422c7357ae49c3',
        indexName: 'Docs Plaspy',
        contextualSearch: true,
        externalUrlRegex: 'plaspy\\.com|app\\.plaspy\\.com',
        searchParameters: {},
        searchPagePath: 'search',
        insights: false,
        askAi: 'oBN2ifEx7Zng',
      },
    }),
};

/**
 * Each build loads one section and one locale. Content, translations and themes
 * stay shared in the repository; only generated files are isolated.
 * @param {'docs' | 'devices'} section
 * @param {'en' | 'es'} locale
 * @returns {import('@docusaurus/types').Config}
 */
export function createSiteConfig(section, locale) {
  const isDocs = section === 'docs';
  const localePrefix = locale === 'es' ? '/es' : '';
  const baseUrl = `${localePrefix}${isDocs ? '/' : '/devices/'}`;
  const [presetName, presetOptions] = config.presets[0];
  const sectionLink = (path) => ({
    href: `pathname://${localePrefix}${path}`,
    autoAddBaseUrl: false,
    target: '_self',
  });
  function isolatedBuildPlugin() {
    return {
      name: 'isolated-build-cache',
      configureWebpack(webpackConfig) {
        const result = {};
        if (webpackConfig.mode === 'production') {
          sharedImages.configureSharedImages(webpackConfig.module.rules);
          result.plugins = [new sharedImages.SharedImagesPlugin()];
        }
        // Serializing both large device compilations can exhaust the Node heap.
        // Keep the MDX cache, but avoid Webpack's production filesystem cache.
        if (webpackConfig.mode === 'production') {
          result.cache = false;
        } else if (webpackConfig.cache?.type === 'filesystem') {
          result.cache = {
            ...webpackConfig.cache,
            name: `${section}-${locale}-${webpackConfig.cache.name}`,
          };
        }
        if (webpackConfig.experiments?.cache?.type === 'persistent') {
          result.experiments = {
            cache: {
              ...webpackConfig.experiments.cache,
              version: `${section}-${locale}-${webpackConfig.experiments.cache.version}`,
            },
          };
        }
        return result;
      },
    };
  }

  return {
    ...config,
    baseUrl,
    customFields: { section },
    stylesheets: [{ ...config.stylesheets[0], href: `${baseUrl}css/font-awesome.min.css` }],
    i18n: {
      ...config.i18n,
      localeConfigs: {
        en: { label: 'English', baseUrl: isDocs ? '/' : '/devices/' },
        es: { label: 'Español', baseUrl: isDocs ? '/es/' : '/es/devices/' },
      },
    },
    plugins: isDocs ? [isolatedBuildPlugin] : [
      isolatedBuildPlugin,
      [config.plugins[0][0], { ...config.plugins[0][1], routeBasePath: '/' }],
    ],
    presets: [[presetName, {
      ...presetOptions,
      docs: isDocs ? presetOptions.docs : false,
      blog: isDocs ? presetOptions.blog : false,
      pages: isDocs ? {} : false,
    }]],
    themeConfig: {
      ...config.themeConfig,
      navbar: {
        ...config.themeConfig.navbar,
        logo: { ...config.themeConfig.navbar.logo, href: `pathname://${localePrefix}/`, target: '_self' },
        items: [
          isDocs ? config.themeConfig.navbar.items[0] : {
            label: 'Documentation', position: 'left',
            ...sectionLink('/docs/welcome_to_help'),
          },
          isDocs ? {
            label: 'Devices', position: 'left', className: 'show-only-plaspy',
            ...sectionLink('/devices/'),
          } : config.themeConfig.navbar.items[1],
          config.themeConfig.navbar.items[2],
        ],
      },
      footer: {
        ...config.themeConfig.footer,
        links: config.themeConfig.footer.links.map((column) => ({
          ...column,
          items: column.items.map((item) => {
            if (item.label !== 'Help Center') return item;
            const { to, ...rest } = item;
            return { ...rest, ...sectionLink('/docs/welcome_to_help') };
          }),
        })),
      },
    },
  };
}
