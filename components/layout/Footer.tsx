export default function Footer() {
  return (
    <footer className="bg-[#0B1426] px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <span className="font-semibold text-[#F5F2EC]/90">[Nombre Consultora]</span>
        <nav>
          <ul className="flex gap-8 list-none">
            <li>
              <a href="#" className="text-sm text-[#F5F2EC]/40 hover:text-[#F5F2EC]/80 transition-colors">
                Inicio
              </a>
            </li>
            <li>
              <a href="#services" className="text-sm text-[#F5F2EC]/40 hover:text-[#F5F2EC]/80 transition-colors">
                Servicios
              </a>
            </li>
            <li>
              <a href="#about" className="text-sm text-[#F5F2EC]/40 hover:text-[#F5F2EC]/80 transition-colors">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" className="text-sm text-[#F5F2EC]/40 hover:text-[#F5F2EC]/80 transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-[#F5F2EC]/30 text-xs">
          &copy; [Año] [Nombre Consultora]. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
