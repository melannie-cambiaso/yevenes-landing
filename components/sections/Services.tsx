import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function Services() {
  return (
    <section id="services" className="px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>
              Asesoría Impositiva {/* TODO: replace */}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              Liquidación de Sueldos {/* TODO: replace */}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              Auditoría Contable {/* TODO: replace */}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
