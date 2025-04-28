import { useTranslation } from '../../hooks/useTranslation';
import LanguageToggle from '../LanguageToggle';
import Image from 'next/image';

export default function About() {
  const t = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
      <div className="flex flex-col justify-center h-full">
        <div className="relative w-full h-full min-h-[300px] md:min-h-0 overflow-hidden bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-mintGreen/20 shadow-lg flex flex-col justify-center transition-all duration-300 hover:scale-105 hover:border-mintGreen/40 hover:shadow-xl">
            <Image
              src="/1724084171929.jpg"
              alt="Ain Moises Ponce"
              fill
              className="object-cover rounded-2xl transition-transform duration-300 hover:scale-110"
              priority
            />
        </div>
      </div>
      <div className="flex flex-col justify-center h-full">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-mintGreen/20 shadow-lg h-full flex flex-col justify-center transition-all duration-300 hover:scale-105 hover:border-mintGreen/40 hover:shadow-xl">
          <h1 className="text-4xl text-mintGreen mb-4 animate-fadeIn">{t.about.title}</h1>
          <p className="text-lg text-gray-300 leading-relaxed animate-fadeInUp">
            {t.about.description}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 h-full">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-mintGreen/20 shadow-lg flex-1 flex flex-col justify-center h-full transition-all duration-300 hover:scale-105 hover:border-mintGreen/40 hover:shadow-xl">
          <h2 className="text-2xl text-mintGreen mb-4 animate-fadeIn">{t.about.experience.title}</h2>
          <p className="text-gray-300 leading-relaxed animate-fadeInUp">
            {t.about.experience.description}
          </p>
        </div>
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-mintGreen/20 shadow-lg flex-1 flex flex-col justify-center h-full transition-all duration-300 hover:scale-105 hover:border-mintGreen/40 hover:shadow-xl">
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
