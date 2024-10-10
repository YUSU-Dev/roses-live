// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  modules: ['@nuxt/eslint', '@sentry/nuxt/module', '@nuxtjs/tailwindcss'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
