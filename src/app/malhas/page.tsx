import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { FabricSpecsBlock } from "@/components/fabric-specs";
import { FabricSwatch } from "@/components/fabric-swatch";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { business, publicSiteUrl } from "@/config/business";
import { fabricCategories, fabricColorCount } from "@/config/malhas";

export const metadata: Metadata = {
  title: `Catálogo de malhas e cores | ${business.name}`,
  description:
    "Catálogo de malhas e cores da Sovi Malharia em Boninal: PV, algodão, dry, moletom, piquet e outras opções para camisetas personalizadas na Chapada Diamantina.",
  alternates: publicSiteUrl() ? { canonical: "/malhas" } : undefined,
};

export default function MalhasPage() {
  return (
    <Container className="py-12 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
        Catálogo
      </p>
      <h1 className="mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        Malhas e cores disponíveis
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
        {fabricColorCount()} opções em{" "}
        {fabricCategories.filter((item) => item.kind !== "tape").length} malhas,
        além de fitas refletivas para aplicar na camisa. Cada amostra abre o
        WhatsApp com o item selecionado. A cor na tela é aproximada; o tom é
        confirmado no pedido. Composição e cuidados constam na cartela do
        fornecedor.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <WhatsAppLink message="Olá! Vi o catálogo de malhas da Sovi e gostaria de confirmar cores e disponibilidade.">
          Pedir orçamento no WhatsApp
        </WhatsAppLink>
        <Link
          href="/#malhas"
          className="inline-flex h-12 items-center justify-center rounded-md border border-brand/30 bg-white px-5 text-sm font-semibold text-brand hover:bg-brand-soft"
        >
          Voltar à página inicial
        </Link>
      </div>
      <nav aria-label="Tipos de malha" className="mt-10">
        <ul className="flex flex-wrap gap-2">
          {fabricCategories.map((category) => (
            <li key={category.id}>
              <a
                href={`#${category.id}`}
                className="inline-flex h-9 items-center rounded-md border border-line bg-white px-3 text-sm font-semibold text-ink hover:border-brand/40 hover:bg-brand-soft"
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-12 space-y-16">
        {fabricCategories.map((category) => (
          <section key={category.id} id={category.id}>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              {category.name}
            </h2>
            <p className="mt-1 text-sm text-muted">
              {category.summary ?? `${category.colors.length} cores`}
            </p>
            {category.specs ? <FabricSpecsBlock specs={category.specs} /> : null}
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {category.colors.map((color) => (
                <li key={color.name}>
                  <FabricSwatch category={category} color={color} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Container>
  );
}
