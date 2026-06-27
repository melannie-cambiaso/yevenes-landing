import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24 gap-6">
      <h1 className="text-4xl font-bold leading-tight max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h1>
      <p className="text-lg max-w-xl opacity-80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Button variant="default">Contactanos</Button>
    </section>
  );
}
