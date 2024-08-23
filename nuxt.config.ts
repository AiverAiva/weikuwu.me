// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
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
      pathPrefix: false,
    },
  ],
  modules: [
    // 'vue-tippy/nuxt'
    '@nuxt/content',
    '@nuxt/image'
  ],
  plugins: [
    { src: "@/plugins/aos", ssr: false, mode: "client" }
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      // 'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nesting',
      // 'postcss-preset-env': {
      //   features: { 'nesting-rules': false },
      // },
    },
  },
})