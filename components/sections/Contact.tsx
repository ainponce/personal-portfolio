import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';
import { motion } from 'framer-motion';

export default function Contact() {
  const t = useTranslation();

  return (
    <div className="grid grid-cols-1 gap-4">
      <motion.div 
        className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-mintGreen/20 shadow-lg transition-all duration-300 hover:scale-105 hover:border-mintGreen/40 hover:shadow-[0_0_15px_rgba(74,222,128,0.3)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl text-mintGreen mb-2">{t.contact.title}</h2>
        <p className="text-sm text-gray-300 mb-2 leading-relaxed">
          {t.contact.description}
        </p>
        <div className="space-y-2">
          <motion.a
            href="mailto:ponce.ain@gmail.com"
            className="flex items-center space-x-2 text-gray-300 hover:text-mintGreen transition-colors duration-300 group hover:shadow-[0_0_10px_rgba(74,222,128,0.2)] p-2 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <FaEnvelope className="text-lg group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm">ponce.ain@gmail.com</span>
          </motion.a>
          <motion.a
            href="https://github.com/ainponce"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-mintGreen transition-colors duration-300 group hover:shadow-[0_0_10px_rgba(74,222,128,0.2)] p-2 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <FaGithub className="text-lg group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm">GitHub</span>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/ainponce"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-mintGreen transition-colors duration-300 group hover:shadow-[0_0_10px_rgba(74,222,128,0.2)] p-2 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <FaLinkedin className="text-lg group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm">LinkedIn</span>
          </motion.a>
        </div>
      </motion.div>
      <motion.div 
        className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-mintGreen/20 shadow-lg transition-all duration-300 hover:scale-105 hover:border-mintGreen/40 hover:shadow-[0_0_15px_rgba(74,222,128,0.3)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-xl text-mintGreen mb-2">{t.contact.location.title}</h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          {t.contact.location.description}
        </p>
        <motion.div 
          className="mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.27456538852!2d-58.51569975125118!3d-34.61579604824612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1745104254283!5m2!1ses-419!2sar"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(74,222,128,0.3)]"
          ></iframe>
        </motion.div>
      </motion.div>
    </div>
  );
}
