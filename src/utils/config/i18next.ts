import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationDE from '../../assets/i18next/de.json';
import translationEN from '../../assets/i18next/en.json';

const resources = {
  de: {
    translation: translationDE,
  },
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
