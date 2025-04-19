import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-mintGreen/20 shadow-lg">
        <h2 className="text-2xl text-mintGreen mb-4">Proyectos Destacados</h2>
        <div className="bg-black/30 rounded-xl p-4 min-h-[200px] flex items-center justify-center">
          <a
            href="https://github.com/ainponce"
            className="text-mintGreen hover:text-mintGreenLight transition-colors duration-300"
          >
            <FaGithub size={48} />
          </a>
        </div>
      </div>
      <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-mintGreen/20 shadow-lg">
        <h2 className="text-2xl text-mintGreen mb-4">Contribuciones</h2>
        <div className="bg-black/30 rounded-xl p-4 min-h-[200px] flex items-center justify-center">
          <p className="text-gray-300">Próximamente mostraré mis contribuciones a proyectos open source. 🌟</p>
        </div>
      </div>
    </div>
  );
}