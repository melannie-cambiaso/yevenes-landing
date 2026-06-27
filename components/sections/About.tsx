export default function About() {
  return (
    <section id="about" className="bg-[#0F1F3D] px-6 py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-[#C9A84C]" aria-hidden="true" />
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C9A84C]">
              Sobre nosotros
            </p>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#F5F2EC] leading-[1.2] mb-6">
            Precisión, confianza y compromiso con cada cliente.
          </h2>
          <p className="text-[#F5F2EC]/60 leading-relaxed mb-4">
            Somos un estudio contable especializado en el acompañamiento a
            empresas argentinas en todas las etapas de su crecimiento.
            Combinamos experiencia en materia impositiva y laboral con un trato
            cercano y personalizado.{/* TODO: replace */}
          </p>
          <p className="text-[#F5F2EC]/60 leading-relaxed">
            Cada cliente es una relación de largo plazo. Nuestro trabajo no
            termina cuando presentamos la declaración — empieza ahí.{/* TODO: replace */}
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-60 h-72">
            <div className="absolute inset-0 bg-[#162B54]" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A84C]/25" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#C9A84C]/30 text-xs tracking-widest uppercase">
                Foto del equipo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
