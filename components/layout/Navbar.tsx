import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F2EC]/95 backdrop-blur-sm border-b border-[#D4C9B0]/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-semibold text-[#0F1F3D] tracking-wide">
          [Nombre Consultora]
        </span>
        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none">
            <li>
              <a href="#" className="text-sm text-[#0F1F3D]/55 hover:text-[#0F1F3D] transition-colors">
                Inicio
              </a>
            </li>
            <li>
              <a href="#services" className="text-sm text-[#0F1F3D]/55 hover:text-[#0F1F3D] transition-colors">
                Servicios
              </a>
            </li>
            <li>
              <a href="#about" className="text-sm text-[#0F1F3D]/55 hover:text-[#0F1F3D] transition-colors">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" className="text-sm text-[#0F1F3D]/55 hover:text-[#0F1F3D] transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <Button
          className="bg-[#0F1F3D] text-[#F5F2EC] hover:bg-[#162B54] rounded-none text-sm px-5 h-9"
        >
          Consultanos
        </Button>
      </div>
    </header>
  );
}
