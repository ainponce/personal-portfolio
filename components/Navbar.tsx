interface Props {
  setSection: (section: string) => void;
}

export default function Navbar({ setSection }: Props) {
  return (
    <nav className="flex justify-center gap-6 py-4 fixed top-4 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-sm rounded-full px-8 border border-mintGreen/20 shadow-lg z-50">
      {["about", "skills", "projects", "contact"].map((item) => (
        <button
          key={item}
          onClick={() => setSection(item)}
          className="text-mintGreen/80 uppercase hover:text-mintGreen hover:scale-105 tracking-widest transition-all duration-300"
        >
          {item}
        </button>
      ))}
    </nav>
  );
}
