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
  modules: [
    "@nuxt/eslint",
    "@sentry/nuxt/module",
    "@nuxtjs/seo",
    "nuxt-security",
  ],
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
  robots: {
    blockAiBots: true,
    blockNonSeoBots: true,
  },
  security: {
    headers: {
      contentSecurityPolicy: {
        "script-src": [
          "'self'", // Fallback value, will be ignored by most modern browsers (level 3)
          "https:", // Fallback value, will be ignored by most modern browsers (level 3)
          "'unsafe-inline'", // Fallback value, will be ignored by almost any browser (level 2)
          "'strict-dynamic'", // Strict CSP via 'strict-dynamic', supported by most modern browsers (level 3)
          "'nonce-{{nonce}}'", // Enables CSP nonce support for scripts in SSR mode, supported by almost any browser (level 2)
          "https://eu.i.posthog.com",
        ],
        "style-src": [
          "'self'", // Enables loading of stylesheets hosted on same origin
          "https:", // For increased security, replace by the specific hosting domain or file name of your external stylesheets
          "'unsafe-inline'", // Recommended default for most Nuxt apps
          "https://use.typekit.net",
          "https://use.fontawesome.com",
        ],
        "base-uri": ["'none'"],
        "img-src": [
          "'self'",
          "data:",
          "https://assets-cdn.sums.su",
          "https://app.greenweb.org",
        ], // Add relevant https://... sources if you load images from external sources
        "font-src": ["'self'", "https:", "data:"], //  For increased security, replace by the specific sources for fonts
        "object-src": ["'none'"],
        "script-src-attr": ["'none'"],
        "upgrade-insecure-requests": true,
        "report-to": "csp-endpoint",
        "report-uri": [
          "https://o4506869614903296.ingest.us.sentry.io/api/4508098677374976/security/?sentry_key=e6600512df57797f4fd551f8f8adf187;",
        ],
      },
    },
    sri: true,
  },
});
