import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-[88vh] flex items-center bg-[#F5F2EC] px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-xs font-semibold tracking-[0.22em] text-[#C9A84C] uppercase mb-8">
          Consultoría Contable · Chile
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F1F3D] leading-[1.1] mb-8 max-w-3xl">
          El respaldo contable
          <br />
          que su empresa{" "}
          <em className="not-italic text-[#C9A84C]">merece.</em>
        </h1>
        <p className="text-lg text-[#0F1F3D]/60 max-w-xl mb-12 leading-relaxed">
          Asesoramos a pymes argentinas con claridad impositiva, liquidaciones
          precisas y acompañamiento real en cada decisión financiera.
        </p>
        <div className="flex items-center gap-8">
          <Button
            className="bg-[#0F1F3D] text-[#F5F2EC] hover:bg-[#162B54] rounded-none px-8 h-12 text-base"
          >
            Contactanos
          </Button>
          <a
            href="#services"
            className="text-sm text-[#0F1F3D]/50 hover:text-[#0F1F3D] transition-colors"
          >
            Ver servicios →
          </a>
        </div>
      </div>
    </section>
  );
}
