// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-10-05',
  css: ['~/assets/css/main.css', 'boxicons/css/boxicons.min.css'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image', href: 'https://crafatar.com/avatars/cd2f08fb-eede-4b88-b1c1-6f3e46007171?size=100' }
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
  content: {
    documentDriven: true,
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: {
        dark: 'github-dark',
        default: 'github-light'
      }
    },
    markdown: {
      // Allow custom Vue components
      mdc: true,
    },
  },
  modules: [
    // 'vue-tippy/nuxt'
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
  ],
  plugins: [
    { src: "@/plugins/aos", ssr: false, mode: "client" }
  ],
})