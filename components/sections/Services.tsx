const services = [
  {
    title: "Asesoría Impositiva",
    description:
      "Planificación fiscal y cumplimiento de obligaciones con enfoque en la realidad de cada empresa.", // TODO: replace
  },
  {
    title: "Liquidación de Sueldos",
    description:
      "Gestión mensual de haberes, aportes y cargas sociales. Nos encargamos para que usted se enfoque en su negocio.", // TODO: replace
  },
  {
    title: "Auditoría Contable",
    description:
      "Revisión independiente de estados contables. Información confiable para las decisiones que importan.", // TODO: replace
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 bg-[#F5F2EC]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-px bg-[#C9A84C]" aria-hidden="true" />
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C9A84C]">
            Lo que hacemos
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.title} className="border-t-2 border-[#C9A84C] pt-6">
              <h3 className="font-playfair text-2xl font-semibold text-[#0F1F3D] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-[#0F1F3D]/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
