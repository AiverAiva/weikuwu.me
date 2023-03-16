// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css', 'boxicons/css/boxicons.min.css'],
    app: {
        head: {
        //   link: [
        //     { rel: 'stylesheet', href: 'bootstrap/dist/css/bootstrap.min.css' },
        //   ],
        //   script: [{ src: '~/assets/js/main.js' }],
        },
    },
    modules: [
      // 'vue-tippy/nuxt'
    ],
    // plugins: [
    //   { src: '~/plugins/vue-tippy', mode: 'client' }
    // ],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
})
