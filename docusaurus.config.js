// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VirtuCare Help Center',
  tagline: 'Documentation and FAQs for running your clinic on VirtuCare',
  favicon: 'img/favicon.ico',

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
    defaultLocale: 'en',
    locales: ['en'],
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
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'VirtuCare Help Center',
        logo: {
          alt: 'VirtuCare Logo',
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
            to: '/search',
            position: 'left',
            label: 'Search',
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
        copyright: `Copyright © ${new Date().getFullYear()} VirtuCare, Inc. Built with Docusaurus. (Demo content — VirtuCare is a fictional product.)`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
