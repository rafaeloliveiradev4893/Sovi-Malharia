import { business, joinList } from "@/config/business";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function ServiceArea() {
  const cities = joinList(business.region.cities);

  return (
    <section id="regiao" className="bg-paper">
      <Container className="py-16 sm:py-24">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <SectionHeading
            eyebrow="Boninal e Região"
            title="Entrega em toda a Chapada Diamantina"
          >
            Atendemos Boninal e a região da Chapada Diamantina, incluindo{" "}
            {cities}. A oficina fica em {business.address.city}, na{" "}
            {business.address.street}. Para outra cidade da Chapada, a entrega
            é confirmada no orçamento.
          </SectionHeading>
          <div className="overflow-hidden border border-brand/30 shadow-[inset_0_0_0_1px_rgba(163,56,52,0.18)]">
            <iframe
              title="Localização da Sovi Malharia no Google Maps"
              src={business.mapsEmbed}
              className="aspect-[4/3] w-full border-0 lg:aspect-auto lg:h-full lg:min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
