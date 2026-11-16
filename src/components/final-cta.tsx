import { business } from "@/config/business";
import { Container } from "@/components/container";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function FinalCta() {
  return (
    <section id="contato" className="bg-paper">
      <Container className="py-16 sm:py-24">
        <div className="border border-line bg-white px-6 py-12 text-center sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {business.name}
          </p>
          <h2 className="mx-auto mt-3 max-w-xl text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Pronto para fazer o seu pedido?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
            Envie a quantidade, os tamanhos e a arte, ou peça ajuda para criar
            o design.
          </p>
          <div className="mt-8">
            <WhatsAppLink className="w-full sm:w-auto">
              Pedir orçamento no WhatsApp
            </WhatsAppLink>
          </div>
          <p className="mt-4 text-sm text-muted">{business.hours.summary}</p>
        </div>
      </Container>
    </section>
  );
}
