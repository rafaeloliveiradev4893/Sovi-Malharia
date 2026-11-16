import { business } from "@/config/business";
import { Container } from "@/components/container";
import { productIcons } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { productMessage } from "@/lib/whatsapp";

export function Products() {
  return (
    <section id="produtos" className="bg-paper">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Produtos"
          title="Camisetas, regatas, moletons, uniformes e sacolas"
        >
          Camisetas personalizadas e outras peças em malha, produzidas em
          Boninal para pedidos a partir de {business.price.minimumPieces}{" "}
          unidades.
        </SectionHeading>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {business.products.map((product) => {
            const Icon = productIcons[product.id as keyof typeof productIcons];
            return (
              <li
                key={product.id}
                className="flex flex-col border border-line bg-white p-6"
              >
                <span className="text-brand">
                  <Icon />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-ink">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-ink-soft">
                  {product.description}
                </p>
                <WhatsAppLink
                  variant="quiet"
                  message={productMessage(product.orderName)}
                  ariaLabel={`Pedir orçamento de ${product.name.toLowerCase()}`}
                  className="mt-6 w-full"
                >
                  Pedir orçamento
                </WhatsAppLink>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft">
          Trabalhamos com todos os segmentos. O tecido entra na conversa do
          pedido: malhas como PV, poliéster e outras, escolhidas pela qualidade
          e pelo uso da peça.
        </p>
      </Container>
    </section>
  );
}
