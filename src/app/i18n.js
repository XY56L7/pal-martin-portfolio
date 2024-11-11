import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Pál Martin's Portfolio!",
      description: "Start exploring the site and learn about my work.",
      github: "GitHub Projects",
      contact: "Contact",
      projects: "Projects",
      language: "Language",
    },
  },
  hu: {
    translation: {
      welcome: "Üdvözöllek Pál Martin portfólió oldalán!",
      description: "Kezdd el böngészni az oldalt, és ismerd meg a munkáimat.",
      github: "GitHub Projektek",
      contact: "Kapcsolat",
      projects: "Projektek",
      language: "Nyelv",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Alapértelmezett nyelv
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
