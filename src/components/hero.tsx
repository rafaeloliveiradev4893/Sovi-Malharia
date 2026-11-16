import { business } from "@/config/business";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function Hero() {
  return (
    <section id="inicio" className="bg-white">
      <Container className="grid items-center justify-items-center gap-10 py-12 sm:gap-12 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:justify-items-stretch lg:py-20">
        <div className="order-2 w-full max-w-xl text-center lg:order-1 lg:max-w-none lg:justify-self-start lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            Malharia e estamparia em Boninal e Região
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Camisetas personalizadas na Chapada Diamantina
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Desde {business.foundingYear}, com sede em Boninal e entrega em toda
            a Chapada Diamantina. Serigrafia e sublimação para empresas,
            escolas, eventos e grupos da região.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <WhatsAppLink className="w-full sm:w-auto">
              Pedir orçamento no WhatsApp
            </WhatsAppLink>
            <a
              href="#galeria"
              className="motion-link inline-flex h-12 w-full items-center justify-center rounded-md border border-brand/30 bg-white px-5 text-sm font-semibold text-brand hover:bg-brand-soft sm:w-auto"
            >
              Ver galeria
            </a>
          </div>
        </div>
        <Logo
          priority
          className="hero-panel order-1 h-36 w-auto max-w-[min(100%,20rem)] object-contain sm:h-48 lg:order-2 lg:h-80 lg:max-w-none lg:justify-self-end"
        />
      </Container>
    </section>
  );
}
