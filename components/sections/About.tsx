export default function About() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-mintGreen/20 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        <h1 className="text-3xl text-mintGreen mb-2 animate-fadeIn">Sobre Mí</h1>
        <p className="text-base text-gray-300 leading-relaxed animate-fadeInUp">
          Hola! Soy Ain Moises Ponce, un desarrollador full-stack apasionado por crear soluciones web innovadoras y eficientes.
          Con experiencia en el desarrollo de aplicaciones modernas utilizando tecnologías como React,
          Node.js y bases de datos relacionales y no relacionales, entre otras tecnologías.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-mintGreen/20 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <h2 className="text-xl text-mintGreen mb-2 animate-fadeIn">Experiencia</h2>
          <p className="text-sm text-gray-300 leading-relaxed animate-fadeInUp">
            He trabajado en diversos proyectos, desde pequeñas aplicaciones hasta sistemas empresariales
            complejos. Mi enfoque se centra en escribir código limpio, mantenible y escalable.
          </p>
        </div>
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-mintGreen/20 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <h2 className="text-xl text-mintGreen mb-2 animate-fadeIn">Enfoque</h2>
          <p className="text-sm text-gray-300 leading-relaxed animate-fadeInUp">
            Me especializo en el desarrollo de aplicaciones web modernas, con un fuerte énfasis en la
            experiencia del usuario y el rendimiento. Siempre estoy aprendiendo nuevas tecnologías y
            mejores prácticas para mejorar mis habilidades.
          </p>
        </div>
      </div>
    </div>
  );
}
