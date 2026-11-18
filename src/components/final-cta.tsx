import { business } from "@/config/business";
import { Container } from "@/components/container";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function FinalCta() {
  return (
    <section id="contato" className="bg-paper">
      <Container className="py-16 sm:py-24">
        <div className="border border-brand/25 bg-white px-6 py-12 text-center sm:px-12">
          <div className="mx-auto mb-4 h-1.5 w-20 overflow-hidden" aria-hidden="true">
            <div className="flex h-full w-full">
              <span className="h-full w-2/3 bg-brand" />
              <span className="h-full w-1/3 bg-accent" />
            </div>
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            {business.name}
          </p>
          <h2 className="mx-auto mt-3 max-w-xl text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
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
