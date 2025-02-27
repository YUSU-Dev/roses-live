// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  vite: { plugins: [tailwindcss()] },

  nitro: { prerender: { autoSubfolderIndex: false } },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/eslint", "@sentry/nuxt/module"],
  eslint: { config: { stylistic: false } },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/roses-logo.png" },
        { rel: "stylesheet", href: "https://use.typekit.net/nks8xpu.css" },
        { rel: "stylesheet", href: "https://use.typekit.net/jxs0adx.css" },
        {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v6.7.1/css/all.css",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      posthogPublicKey: "phc_7UNozIT6wt5PDS26tlecUIcybDSxDVOhyrj1RC7amws",
      posthogHost: "https://eu.i.posthog.com",
    },
  },
});
