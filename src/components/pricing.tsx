import { business, formatMoney } from "@/config/business";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function Pricing() {
  const { price, payments } = business;

  const conditions = [
    `Pedido mínimo de ${price.minimumPieces} peças`,
    `Prazo médio de ${price.leadTimeDays} dias`,
    payments.join(", "),
    `${price.depositPercent}% antes do pedido e ${price.depositPercent}% após a entrega`,
    "Fazemos a arte, ou recebemos o arquivo pronto em PDF",
  ];

  return (
    <section id="precos" className="bg-white">
      <Container className="py-16 sm:py-24">
        <SectionHeading eyebrow="Condições" title="Preços e condições">
          O valor fica entre {formatMoney(price.from)} e {formatMoney(price.to)}{" "}
          por peça e varia conforme a técnica, a quantidade e a personalização.
        </SectionHeading>
        <div className="mt-10 border border-line bg-white">
          <div className="h-1 bg-brand" aria-hidden="true">
            <div className="ml-auto h-full w-16 bg-accent" />
          </div>
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
                A partir de
              </p>
              <p className="mt-3 text-5xl font-semibold tracking-tight text-ink">
                {formatMoney(price.from)}
              </p>
              <p className="mt-2 text-lg text-ink-soft">por peça</p>
            </div>
            <ul className="space-y-4 border-t border-line p-8 sm:p-10 md:border-l md:border-t-0">
              {conditions.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-ink">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <WhatsAppLink className="w-full sm:w-auto">
            Pedir orçamento no WhatsApp
          </WhatsAppLink>
        </div>
      </Container>
    </section>
  );
}
