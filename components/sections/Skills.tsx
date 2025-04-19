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
import { FaDatabase } from "react-icons/fa";

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-mintGreen/20 shadow-lg">
        <h2 className="text-2xl text-mintGreen mb-4">Frontend</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.slice(0, 9).map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-black/30 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl text-mintGreen mb-2">{skill.icon}</div>
              <p className="text-sm text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-mintGreen/20 shadow-lg">
        <h2 className="text-2xl text-mintGreen mb-4">Backend</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.slice(9, 18).map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-black/30 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl text-mintGreen mb-2">{skill.icon}</div>
              <p className="text-sm text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-mintGreen/20 shadow-lg col-span-1 md:col-span-2">
        <h2 className="text-2xl text-mintGreen mb-4">Herramientas y Otros</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.slice(18).map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-black/30 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl text-mintGreen mb-2">{skill.icon}</div>
              <p className="text-sm text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
