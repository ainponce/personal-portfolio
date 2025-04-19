import { useTranslation } from '../../hooks/useTranslation';
import LanguageToggle from '../LanguageToggle';

export default function About() {
  const t = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-mintGreen/20 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        <h1 className="text-4xl text-mintGreen mb-4 animate-fadeIn">{t.about.title}</h1>
        <p className="text-lg text-gray-300 leading-relaxed animate-fadeInUp">
          {t.about.description}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-mintGreen/20 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <h2 className="text-2xl text-mintGreen mb-4 animate-fadeIn">{t.about.experience.title}</h2>
          <p className="text-gray-300 leading-relaxed animate-fadeInUp">
            {t.about.experience.description}
          </p>
        </div>
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-mintGreen/20 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <h2 className="text-2xl text-mintGreen mb-4 animate-fadeIn">{t.about.approach.title}</h2>
          <p className="text-gray-300 leading-relaxed animate-fadeInUp">
            {t.about.approach.description}
          </p>
        </div>
      </div>
      <LanguageToggle />
    </div>
  );
}
