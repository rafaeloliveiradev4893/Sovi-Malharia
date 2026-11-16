import { business, joinList } from "@/config/business";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function ServiceArea() {
  const cities = joinList(business.region.cities);

  return (
    <section id="regiao" className="bg-paper">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Região"
          title="Malharia em Boninal, com entrega na Chapada Diamantina"
        >
          A Sovi Malharia fica em {business.address.city}, na{" "}
          {business.address.street}. A entrega é feita para Boninal e para a
          região da Chapada Diamantina, incluindo {cities}. Para outra cidade
          da Chapada, a entrega é confirmada no orçamento.
        </SectionHeading>
        <p className="mt-6">
          <a
            href={business.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
          >
            Ver a oficina no Google Maps
          </a>
        </p>
      </Container>
    </section>
  );
}
