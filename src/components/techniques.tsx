import Image from "next/image";
import { business } from "@/config/business";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function Techniques() {
  return (
    <section id="tecnicas" className="bg-white">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Estamparia"
          title="Serigrafia e sublimação total"
        >
          São duas formas de personalizar a peça. A escolha depende da arte,
          das cores, da malha e da quantidade.
        </SectionHeading>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {business.techniques.map((technique) => (
            <article
              key={technique.id}
              className="lift overflow-hidden border border-brand/25 bg-paper"
            >
              <Image
                src={technique.image.src}
                alt={technique.image.alt}
                width={technique.image.width}
                height={technique.image.height}
                sizes="(min-width: 768px) 50vw, 100vw"
                loading="lazy"
                fetchPriority="low"
                className="aspect-[4/3] w-full bg-brand-soft object-cover"
              />
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-semibold text-ink">
                  {technique.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {technique.text}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft">
          Na serigrafia, cada cor corresponde a uma tela e o resultado é firme
          em áreas chapadas. Na sublimação total, a arte é transferida para o
          tecido e pode ocupar a peça por completo. Se a arte ainda não define
          a técnica, descreva o pedido no WhatsApp.
        </p>
      </Container>
    </section>
  );
}
