import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: `Página não encontrada | ${business.name}`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="py-20 sm:py-28">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
        Página não encontrada
      </p>
      <h1 className="mt-3 max-w-xl text-4xl font-extrabold tracking-tight text-ink">
        Este endereço não faz parte do site.
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
        Volte ao início da Sovi Malharia ou peça um orçamento de camisetas
        personalizadas.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-md border border-brand/30 bg-white px-5 text-sm font-semibold text-brand hover:bg-brand-soft"
        >
          Voltar ao início
        </Link>
        <WhatsAppLink>Pedir orçamento no WhatsApp</WhatsAppLink>
      </div>
    </Container>
  );
}
