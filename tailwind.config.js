/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    // "./layouts/**/*.vue",
    "./pages/**/*.vue",
    // "./plugins/**/*.js",
    "./nuxt.config.js",
    
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
}
