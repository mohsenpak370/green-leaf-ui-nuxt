// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/variables.css',
    '@/assets/css/telma.css',
    '@/assets/css/boska.css',
    '@/assets/css/kalam.css',
    '@/assets/css/chillax.css',
  ],
  components: [
    { path: '~/components/atoms', pathPrefix: false },
    { path: '~/components/molecules', pathPrefix: false },
    { path: '~/components/organisms', pathPrefix: false },
    '~/components',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/eslint-module',
    'nuxt-svgo',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@formkit/auto-animate/nuxt',
    '@nuxt/image',
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
