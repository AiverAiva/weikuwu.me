// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: [
        '/', // homepage
        // ...require('./lib/data').PROJECTS.map(p => `/projects/${p.slug}`)
      ]
    }
  },
  build: {
    transpile: ['gsap'],  // Ensure gsap is transpiled if needed
  },
  compatibilityDate: '2025-10-05',
  css: [
    '~/assets/css/main.css',
    'boxicons/css/boxicons.min.css',
    '@fontsource/inter/100.css',
    '@fontsource/inter/200.css',
    '@fontsource/inter/300.css',
    '@fontsource/inter/400.css',
    '@fontsource/inter/500.css',
    '@fontsource/inter/600.css',
    '@fontsource/inter/700.css',
    '@fontsource/inter/800.css',
    '@fontsource/inter/900.css',
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image', href: 'https://crafatar.com/avatars/cd2f08fb-eede-4b88-b1c1-6f3e46007171?size=100' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css', },
      ]
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: true,
    },
  ],
  // https://content.nuxtjs.org
  // content: {
  //   documentDriven: true,
  //   highlight: {
  //     // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
  //     theme: {
  //       dark: 'github-dark',
  //       default: 'github-light'
  //     }
  //   },
  //   markdown: {
  //     // Allow custom Vue components
  //     mdc: true,
  //   },
  // },
  modules: [
    // 'vue-tippy/nuxt'
    // '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
  ],
  plugins: [
    { src: "@/plugins/aos", ssr: false, mode: "client" }
  ],
})