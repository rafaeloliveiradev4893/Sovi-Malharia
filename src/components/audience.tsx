import { business } from "@/config/business";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function Audience() {
  return (
    <section id="para-quem" className="bg-white">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Atendimento"
          title="Empresas, escolas, eventos e grupos"
        >
          Atendemos empresas, escolas, eventos, grupos, festas e outros
          pedidos em Boninal e em toda a Chapada Diamantina. O cuidado com
          tecido, arte e prazo é o mesmo em um uniforme e na camiseta de um
          evento.
        </SectionHeading>
        <ul className="mt-10 grid gap-px border border-brand/25 bg-brand/15 sm:grid-cols-2 lg:grid-cols-3">
          {business.audience.map((item) => (
            <li key={item.title} className="lift bg-white p-6">
              <span className="mb-3 flex h-1 w-8 overflow-hidden" aria-hidden="true">
                <span className="h-full w-2/3 bg-brand" />
                <span className="h-full w-1/3 bg-accent" />
              </span>
              <h3 className="text-lg font-bold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
