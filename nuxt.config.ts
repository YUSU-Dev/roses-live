// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  vite: { plugins: [tailwindcss()] },

  nitro: { prerender: { autoSubfolderIndex: false } },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/eslint", "@sentry/nuxt/module", "@nuxtjs/seo"],
  eslint: { config: { stylistic: false } },
  site: {
    url: "https://roseslive.co.uk",
    name: "Roses Live",
    description:
      "Roses is an annual sporting varsity between the University of York and Lancaster University. Roses 2025 marks the 60th anniversary of the competition! #RosesAreWhite",
    defaultLocale: "en",
  },
  seo: {
    meta: {
      titleTemplate: "%s | Roses Live",
      description:
        "Roses is an annual sporting varsity between the University of York and Lancaster University. Roses 2025 marks the 60th anniversary of the competition! #RosesAreWhite",
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
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
