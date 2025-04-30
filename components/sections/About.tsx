import { useTranslation } from '../../hooks/useTranslation';
import LanguageToggle from '../LanguageToggle';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  const t = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
      <motion.div 
        className="flex flex-col justify-center h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full h-full min-h-[300px] md:min-h-0 overflow-hidden bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm rounded-2xl p-6 border border-mintGreen/20 shadow-lg flex flex-col justify-center transition-all duration-300 hover:scale-105 hover:border-mintGreen/40 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] group">
          <div className="absolute inset-0 bg-gradient-to-br from-mintGreen/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Image
            src="/1724084171929.jpg"
            alt="Ain Moises Ponce"
            fill
            className="object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
            priority
          />
        </div>
      </motion.div>
      <motion.div 
        className="flex flex-col justify-center h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm rounded-2xl p-8 border border-mintGreen/20 shadow-lg h-full flex flex-col justify-center transition-all duration-300 hover:scale-105 hover:border-mintGreen/40 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]">
          <h1 className="text-4xl font-semibold text-mintGreen mb-6 bg-clip-text text-transparent bg-gradient-to-r from-mintGreen to-mintGreenLight">{t.about.title}</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            {t.about.description}
          </p>
        </div>
      </motion.div>
      <motion.div 
        className="flex flex-col gap-6 h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm rounded-2xl p-8 border border-mintGreen/20 shadow-lg flex-1 flex flex-col justify-center h-full transition-all duration-300 hover:scale-105 hover:border-mintGreen/40 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]">
          <h2 className="text-2xl font-semibold text-mintGreen mb-4 bg-clip-text text-transparent bg-gradient-to-r from-mintGreen to-mintGreenLight">{t.about.experience.title}</h2>
          <p className="text-gray-300 leading-relaxed">
            {t.about.experience.description}
          </p>
        </div>
        <div className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm rounded-2xl p-8 border border-mintGreen/20 shadow-lg flex-1 flex flex-col justify-center h-full transition-all duration-300 hover:scale-105 hover:border-mintGreen/40 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]">
          <h2 className="text-2xl font-semibold text-mintGreen mb-4 bg-clip-text text-transparent bg-gradient-to-r from-mintGreen to-mintGreenLight">{t.about.approach.title}</h2>
          <p className="text-gray-300 leading-relaxed">
            {t.about.approach.description}
          </p>
        </div>
      </motion.div>
      <LanguageToggle />
    </div>
  );
}
