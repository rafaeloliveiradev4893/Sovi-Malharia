import { business } from "@/config/business";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function Hero() {
  return (
    <section id="inicio" className="bg-white">
      <Container className="grid items-center gap-12 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            Malharia e estamparia em Boninal desde {business.foundingYear}
          </p>
          <h1 className="mt-4 max-w-xl text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Camisetas personalizadas na Chapada Diamantina
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Produção desde {business.foundingYear} em Boninal, com serigrafia e
            sublimação para empresas, escolas, eventos e grupos. Entrega para
            toda a região da Chapada Diamantina.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink className="w-full sm:w-auto">
              Pedir orçamento no WhatsApp
            </WhatsAppLink>
            <a
              href="#galeria"
              className="inline-flex h-12 w-full items-center justify-center rounded-md border border-brand/30 bg-white px-5 text-sm font-semibold text-brand hover:bg-brand-soft sm:w-auto"
            >
              Ver galeria
            </a>
          </div>
          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
            {business.seals.map((seal) => (
              <li
                key={seal}
                className="flex items-center gap-2 text-sm font-semibold text-ink"
              >
                <span className="h-2 w-2 bg-brand" aria-hidden="true" />
                {seal}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative border border-line bg-paper px-8 py-14 sm:px-12">
          <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-brand" aria-hidden="true" />
          <span className="absolute right-3 top-3 h-4 w-4 border-r border-t border-brand" aria-hidden="true" />
          <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-accent" aria-hidden="true" />
          <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-accent" aria-hidden="true" />
          <Logo className="mx-auto h-16 w-auto sm:h-20" />
          <p className="mt-8 text-center text-sm font-semibold text-ink">
            Boninal, Chapada Diamantina
          </p>
          <p className="mt-2 text-center text-sm leading-relaxed text-muted">
            Malhas PV, poliéster e outras. Serigrafia e sublimação total.
          </p>
        </div>
      </Container>
    </section>
  );
}
