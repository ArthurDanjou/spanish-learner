export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },

  // Nuxt App
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      templateParams: {
        separator: '•',
      },
    },
  },

  // Nuxt Modules
  modules: [
    '@nuxthub/core',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxthq/studio',
    '@nuxt/image',
  ],

  // Nuxt Hub
  hub: {
    cache: true,
    database: true,
    analytics: true,
  },

  // Nuxt Content
  content: {
    highlight: {
      theme: 'github-dark',
    },
  },

  // Nuxt Color Mode
  colorMode: {
    preference: 'system',
    fallback: 'light',
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
      'Inter': [400, 500, 600, 700, 800, 900],
      'DM Sans': [400, 500, 600, 700, 800, 900],
    },
  },

  // Nitro
  nitro: {
    experimental: {
      openAPI: true,
    },
  },

  compatibilityDate: '2024-07-23',
})
