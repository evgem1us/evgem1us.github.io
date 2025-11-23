// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EVGeM1us',
  tagline: 'Catgirl operator (кошкоженя)',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://evgem1us.ru/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'evgem1us', // Usually your GitHub org/user name.
  projectName: 'evgem1us.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js'
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn'
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/maid_unity.png',
      navbar: {
        title: 'EVGeM1us',
        logo: {
          alt: 'EVGeM1us Logo',
          src: 'img/evgem1us.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guideSidebar',
            to: '/docs/guides/intro',
            position: 'left',
            label: 'Гайды',
          },
          {
            to: '/blog',
            label: 'Обновы',
            position: 'left',
          },
          {
            href: 'https://github.com/evgem1us',
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
              {
                label: 'Гайды',
                to: '/docs/guides/intro',
              },
            ],
          },
          {
            title: 'Обратная связь',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/evgem1us'
              },
              {
                label: 'VRChat',
                href: 'https://vrchat.com/home/user/usr_e24a652c-0f10-4907-91b2-7ec2e03c2666',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/evgem1us'
              },
              {
                html: 'Discord: @evgem1us'
              }
            ],
          },
          {
            title: 'Ссылки',
            items: [
              {
                label: 'Koi No Niwa',
                href: 'https://vrchat.com/home/group/grp_7dda67ae-8c4f-442d-9117-208adc9a9bf2',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
