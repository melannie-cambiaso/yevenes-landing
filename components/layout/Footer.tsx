export default function Footer() {
  return (
    <footer className="w-full px-6 py-8 mt-auto">
      <div className="flex flex-col items-center gap-4 text-sm opacity-75">
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
        <p>&copy; [Año] [Nombre Consultora]. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
