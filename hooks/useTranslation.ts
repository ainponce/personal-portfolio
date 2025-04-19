import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  es: require('../locales/es.json'),
  en: require('../locales/en.json'),
};

export function useTranslation() {
  const { language } = useLanguage();
  return translations[language];
} 