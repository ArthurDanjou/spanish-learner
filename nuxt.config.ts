export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },

  // Nuxt Modules
  modules: [
    '@nuxthub/core',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
  ],

  // Nuxt Hub
  hub: {
    cache: true,
    database: true,
    analytics: true,
  },

  // Nuxt Color Mode
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  // Nuxt Devtools
  devtools: {
    enabled: true,
    timeline: { enabled: true },
  },

  // Nuxt Google Fonts
  googleFonts: {
    display: 'swap',
    families: {
      'DM Sans': [400, 500, 600, 700, 800, 900],
    },
  },

  // Nitro
  nitro: {
    experimental: {
      openAPI: true,
    },
  },

  compatibilityDate: '2024-07-08',
})
