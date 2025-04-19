export default function About() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-mintGreen/20 shadow-lg col-span-1 md:col-span-2">
        <h1 className="text-4xl text-mintGreen mb-4">Sobre Mí</h1>
        <p className="text-lg text-gray-300">
          Soy un desarrollador full-stack apasionado por crear soluciones web innovadoras y eficientes.
          Con experiencia en el desarrollo de aplicaciones modernas utilizando tecnologías como React,
          Node.js y bases de datos relacionales y no relacionales.
        </p>
      </div>
      <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-mintGreen/20 shadow-lg">
        <h2 className="text-2xl text-mintGreen mb-4">Experiencia</h2>
        <p className="text-gray-300">
          He trabajado en diversos proyectos, desde pequeñas aplicaciones hasta sistemas empresariales
          complejos. Mi enfoque se centra en escribir código limpio, mantenible y escalable.
        </p>
      </div>
      <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-mintGreen/20 shadow-lg">
        <h2 className="text-2xl text-mintGreen mb-4">Enfoque</h2>
        <p className="text-gray-300">
          Me especializo en el desarrollo de aplicaciones web modernas, con un fuerte énfasis en la
          experiencia del usuario y el rendimiento. Siempre estoy aprendiendo nuevas tecnologías y
          mejores prácticas para mejorar mis habilidades.
        </p>
      </div>
    </div>
  );
}
