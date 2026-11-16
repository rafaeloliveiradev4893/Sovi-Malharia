import { business } from "@/config/business";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-paper">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Pedido"
          title="Como funciona o pedido"
        >
          Do primeiro contato à entrega, o caminho tem cinco passos.
        </SectionHeading>
        <ol className="mt-10 grid gap-4 md:grid-cols-5">
          {business.steps.map((step, index) => (
            <li key={step} className="border border-line bg-white p-5">
              <span className="text-sm font-semibold text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-base leading-relaxed text-ink">{step}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
