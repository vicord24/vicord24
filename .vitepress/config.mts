import { defineConfig } from 'vitepress'
import { makeSidebar } from './data/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vicord Blog",
  description: "A blog of journey for an undergrad",

  base: "/vicord24/",
  
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '😮 About Me', link: '/articles/about-me' },
      { text: '📖 Blogs', link: '/articles/archive' }
    ],

    sidebar: makeSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vicord24/vicord24' }
    ]
  }
})
