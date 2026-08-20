// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DemoMed Help Center',
  tagline: 'Documentation and FAQs for running your clinic on DemoMed',
  favicon: 'img/favicon.svg',

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
      },
    },
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // ---------------------------------------------------------------------
  // GitHub Pages deployment config.
  //
  // UPDATE THESE THREE VALUES to match your GitHub username/org and the
  // name of the repo you push this project to, then everything (site url,
  // links, `npm run deploy`) lines up automatically.
  // ---------------------------------------------------------------------
  url: 'https://andrast0th.github.io',
  baseUrl: '/wiki-demo/',
  organizationName: 'andrast0th', // Your GitHub org/user name.
  projectName: 'wiki-demo', // Your GitHub repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ro',
    locales: ['ro', 'en'],
    localeConfigs: {
      ro: {
        label: 'Română',
        htmlLang: 'ro',
      },
      en: {
        label: 'English',
        htmlLang: 'en',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve docs at the site root, wiki-style.
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/andrast0th/wiki-demo/tree/main/',
          editLocalizedFiles: true, // "Edit this page" links to the file for the current locale (docs/ for ro, i18n/en/... for en), not always the ro source.
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'DemoMed Help Center',
        logo: {
          alt: 'DemoMed Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'custom-searchBar',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/andrast0th/wiki-demo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Getting Started', to: '/getting-started/account-setup'},
              {label: 'Video Consultations', to: '/video-consultations/device-setup'},
              {label: 'FAQ', to: '/faq/general-faq'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Search', to: '/search'},
              {
                label: 'GitHub',
                href: 'https://github.com/andrast0th/wiki-demo',
              },
            ],
          },
        ],
        copyright:
          'Demo documentation site built with Docusaurus + Pagefind. DemoMed is a fictional product.',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
