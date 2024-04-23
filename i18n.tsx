import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import language translations (see step 3)
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import es from './locales/es/translation.json';

i18n
  .use(initReactI18next) // Initialize for React
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      es: { translation: es },
    },
    lng: 'en', // Set default language to English (or any of your supported languages)
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
