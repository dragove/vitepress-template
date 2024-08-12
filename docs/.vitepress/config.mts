import { defineConfig } from 'vitepress';
import { fetchItems } from './fetch_sidebar.mts';

export default defineConfig({
  // TODO change your site title and description
  title: 'demo',
  description: 'desc',
  base: '/vitepress-template',
  rewrites: {
    'zh/:rest*': ':rest*',
  },
  themeConfig: {
    // TODO change your site github repo
    socialLinks: [{ icon: 'github', link: 'https://github.com/dragove/vitepress-template' }],
    search: {
      provider: 'local',
    },
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-Hans',
      themeConfig: {
        langMenuLabel: '多语言',
        nav: [{ text: '主页', link: '/' }],
        sidebar: {
          '/': {
            base: '/',
            items: fetchItems('zh'),
          },
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [{ text: 'Home', link: '/en/' }],
        sidebar: {
          '/en/': {
            base: '/en/',
            items: fetchItems('en'),
          },
        },
      },
    },
  },
});
