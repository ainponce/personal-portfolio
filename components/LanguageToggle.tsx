import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-4 right-4 bg-black/20 backdrop-blur-sm rounded-full p-3 border border-mintGreen/20 shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl z-50 w-12 h-12 flex items-center justify-center"
      aria-label="Toggle language"
    >
      <span className="text-mintGreen font-medium text-lg">
        {language === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  );
} 