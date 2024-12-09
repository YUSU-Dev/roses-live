// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/eslint", "@sentry/nuxt/module", "@nuxtjs/tailwindcss"],
  eslint: {
    config: {
      stylistic: false,
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/roses-logo.png",
        },
        { rel: "stylesheet", href: "https://use.typekit.net/nks8xpu.css" },
        {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v6.7.1/css/all.css",
        },
      ],
    },
  },
});
