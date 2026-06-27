export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between">
      <span className="font-semibold text-lg">[Nombre Consultora]</span>
      <nav>
        <ul className="flex gap-6 list-none">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#about">Nosotros</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
