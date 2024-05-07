// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/variables.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/eslint-module',
    'nuxt-svgo',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@formkit/auto-animate/nuxt',
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'fr',
        name: 'Français',
      },
      {
        code: 'de',
        name: 'Deutsch',
      },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
  },
  eslint: {
    lintOnStart: false,
  },
  svgo: {
    componentPrefix: 'icon',
    fontControl: false,
  },
});
