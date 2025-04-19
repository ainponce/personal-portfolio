import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-mintGreen/20 shadow-lg">
        <h2 className="text-2xl text-mintGreen mb-4">Email</h2>
        <div className="bg-black/30 rounded-xl p-4 min-h-[200px] flex flex-col items-center justify-center">
          <a 
            href="mailto:ainponce@gmail.com" 
            className="text-mintGreen hover:text-mintGreenLight transition-colors duration-300"
          >
            <FaEnvelope size={48} />
          </a>
        </div>
      </div>
      <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-mintGreen/20 shadow-lg">
        <h2 className="text-2xl text-mintGreen mb-4">LinkedIn</h2>
        <div className="bg-black/30 rounded-xl p-4 min-h-[200px] flex flex-col items-center justify-center">
          <a
            href="https://www.linkedin.com/in/ainponce/"
            className="text-mintGreen hover:text-mintGreenLight transition-colors duration-300"
          >
            <FaLinkedin size={48} />
          </a>
        </div>
      </div>
      <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-mintGreen/20 shadow-lg col-span-1 md:col-span-2">
        <h2 className="text-2xl text-mintGreen mb-4">Disponibilidad</h2>
        <div className="bg-black/30 rounded-xl p-4 min-h-[200px] flex items-center justify-center">
          <p className="text-gray-300">Actualmente disponible para nuevos proyectos y colaboraciones. 🚀</p>
        </div>
      </div>
    </div>
  );
}
