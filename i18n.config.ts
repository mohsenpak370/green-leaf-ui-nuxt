import en from './locales/en';
import fr from './locales/fr';
import de from './locales/de';
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    fr,
    de,
  },
}));
