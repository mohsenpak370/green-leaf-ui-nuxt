// https://nuxt.com/docs/api/configuration/nuxt-config
//https://nuxt.com/docs/guide/going-further/layers
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [join(currentDir, './assets/css/variables.css')],
  components: [
    { path: '~/components/atoms', pathPrefix: false },
    { path: '~/components/molecules', pathPrefix: false },
    { path: '~/components/organisms', pathPrefix: false },
    '~/components',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    join(currentDir, './node_modules/@nuxtjs/eslint-module/dist/module.mjs'),
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
