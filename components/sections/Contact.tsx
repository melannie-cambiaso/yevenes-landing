export default function Contact() {
  return (
    <section id="contacto" className="px-6 py-24 bg-[#F5F2EC]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-px bg-[#C9A84C]" aria-hidden="true" />
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C9A84C]">
            Contacto
          </p>
        </div>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0F1F3D] mb-14">
          Empecemos a trabajar juntos.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="border-t border-[#D4C9B0] pt-6">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#C9A84C] mb-3">
              Email
            </p>
            <p className="text-[#0F1F3D] text-sm">[email@consultora.com]</p>
          </div>
          <div className="border-t border-[#D4C9B0] pt-6">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#C9A84C] mb-3">
              Teléfono
            </p>
            <p className="text-[#0F1F3D] text-sm">[+56 9 XXXX XXXX]</p>
          </div>
          <div className="border-t border-[#D4C9B0] pt-6">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#C9A84C] mb-3">
              Dirección
            </p>
            <p className="text-[#0F1F3D] text-sm">[Dirección, Ciudad]</p>
          </div>
        </div>
      </div>
    </section>
  );
}
