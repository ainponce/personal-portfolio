import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiJest,
  SiStorybook,
  SiVite,
  SiRedux,
  SiBootstrap,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiSpring,
  SiMysql,
  SiPhp,
  SiAmazon,
  SiGit,
  SiApache,
  SiPostman,
  SiPhpmyadmin,
  SiHibernate,
} from "react-icons/si";
import { useTranslation } from '../../hooks/useTranslation';
import LanguageToggle from '../LanguageToggle';
import { motion } from 'framer-motion';

const skills = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Angular", icon: <SiAngular /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Jest", icon: <SiJest /> },
  { name: "Storybook", icon: <SiStorybook /> },
  { name: "Vite.js", icon: <SiVite /> },
  { name: "Java", icon: <SiSpringboot /> },
  { name: "SpringBoot", icon: <SiSpring /> },
  { name: "Hibernate", icon: <SiHibernate /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "PHPMyAdmin", icon: <SiPhpmyadmin /> },
  { name: "AWS", icon: <SiAmazon /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Apache", icon: <SiApache /> },
  { name: "Postman", icon: <SiPostman /> },
];

export default function Skills() {
  const t = useTranslation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div 
        className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm rounded-2xl p-8 border border-mintGreen/20 shadow-lg transition-all duration-300 hover:scale-105 hover:border-mintGreen/40 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-mintGreen mb-6 bg-clip-text text-transparent bg-gradient-to-r from-mintGreen to-mintGreenLight">{t.skills.frontend.title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.slice(0, 9).map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-black/40 to-black/20 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-black/50 hover:border hover:border-mintGreen/20 hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="text-3xl text-mintGreen mb-2 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="text-sm text-gray-300 group-hover:text-mintGreen transition-colors duration-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm rounded-2xl p-8 border border-mintGreen/20 shadow-lg transition-all duration-300 hover:scale-105 hover:border-mintGreen/40 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-2xl font-semibold text-mintGreen mb-6 bg-clip-text text-transparent bg-gradient-to-r from-mintGreen to-mintGreenLight">{t.skills.backend.title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.slice(10, 18).map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-black/40 to-black/20 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-black/50 hover:border hover:border-mintGreen/20 hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="text-3xl text-mintGreen mb-2 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="text-sm text-gray-300 group-hover:text-mintGreen transition-colors duration-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm rounded-2xl p-8 border border-mintGreen/20 shadow-lg transition-all duration-300 hover:scale-105 hover:border-mintGreen/40 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-mintGreen mb-6 bg-clip-text text-transparent bg-gradient-to-r from-mintGreen to-mintGreenLight">{t.skills.tools.title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.slice(18).map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-black/40 to-black/20 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-black/50 hover:border hover:border-mintGreen/20 hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="text-3xl text-mintGreen mb-2 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="text-sm text-gray-300 group-hover:text-mintGreen transition-colors duration-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
