// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/motion/nuxt",
    "@nuxt/content",
    "nuxt-icon",
    "nuxt-marquee",
  ],
  tailwindcss: {
    viewer: true,
  },
  css: [
    "@/assets/css/main.css",
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.css",
  ],
  build: {
    transpile: ["primevue"],
  },
  experimental: {
    /**
     * see: https://v3.nuxtjs.org/api/configuration/nuxt.config#inlinessrstyles
     */
    inlineSSRStyles: false,
  },
  vite: {
    plugins: [svgLoader()],
  },
});