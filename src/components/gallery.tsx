import { business } from "@/config/business";
import { Container } from "@/components/container";
import { GalleryGrid } from "@/components/gallery-grid";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function Gallery() {
  const photos = business.gallery;

  return (
    <section id="galeria" className="bg-paper">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Galeria"
          title="Trabalhos de estamparia entregues"
        >
          Peças produzidas na malharia, com serigrafia e sublimação, para
          clientes de toda a Chapada Diamantina.
        </SectionHeading>
        {photos.length > 0 ? (
          <GalleryGrid items={photos} />
        ) : (
          <div className="mt-10 border border-line bg-white px-6 py-12 sm:px-10">
            <p className="max-w-xl text-lg leading-relaxed text-ink">
              As fotos dos trabalhos entregues entram nesta galeria. Enquanto
              isso, o orçamento pode ser pedido pelo WhatsApp.
            </p>
            <div className="mt-6">
              <WhatsAppLink>Pedir orçamento no WhatsApp</WhatsAppLink>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
