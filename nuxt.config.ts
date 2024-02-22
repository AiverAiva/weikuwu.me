// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ['~/assets/css/main.css', 'boxicons/css/boxicons.min.css'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/img/icons/favicon.ico' }
      ]
      //   link: [
      //     { rel: 'stylesheet', href: 'bootstrap/dist/css/bootstrap.min.css' },
      //   ],
      //   script: [{ src: '~/assets/js/main.js' }],
    },
  },
  modules: [
    // 'vue-tippy/nuxt'
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
