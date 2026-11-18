import { business } from "@/config/business";
import { Container } from "@/components/container";
import { stepIcons } from "@/components/icons";
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
          {business.steps.map((step, index) => {
            const Icon = stepIcons[step.id as keyof typeof stepIcons];

            return (
              <li
                key={step.id}
                className="lift flex flex-col items-center border border-brand/20 bg-white p-5 text-center"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center ${index % 2 === 0 ? "text-brand" : "text-accent"}`}
                >
                  <Icon className="h-9 w-9" />
                </span>
                <span
                  className={`mt-3 text-sm font-extrabold tracking-tight ${index % 2 === 0 ? "text-brand" : "text-accent"}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-base leading-relaxed text-ink">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
