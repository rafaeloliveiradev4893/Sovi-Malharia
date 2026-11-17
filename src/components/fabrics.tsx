import Link from "next/link";
import { Container } from "@/components/container";
import { FabricSwatch } from "@/components/fabric-swatch";
import { SectionHeading } from "@/components/section-heading";
import {
  fabricCategories,
  fabricColorCount,
  findFabricColor,
  homeFabricSamples,
} from "@/config/malhas";

export function Fabrics() {
  const samples = homeFabricSamples.flatMap((sample) => {
    const match = findFabricColor(sample.categoryId, sample.name);
    return match ? [match] : [];
  });

  return (
    <section id="malhas" className="bg-white">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Malhas"
          title="Cores e malhas para o pedido"
        >
          Amostra das cores mais usadas. O catálogo completo tem{" "}
          {fabricColorCount()} opções em {fabricCategories.length} malhas. A
          cor na tela é aproximada; no orçamento confirmamos a malha e o tom.
        </SectionHeading>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {samples.map(({ category, color }) => (
            <li key={`${category.id}-${color.name}`}>
              <FabricSwatch category={category} color={color} />
            </li>
          ))}
        </ul>
        <p className="mt-8 mb-4">
          <Link
            href="/malhas"
            className="motion-link inline-flex h-12 items-center justify-center rounded-md border border-brand/30 bg-white px-5 text-sm font-semibold text-brand hover:bg-brand-soft"
          >
            Ver catálogo completo de malhas
          </Link>
        </p>
      </Container>
    </section>
  );
}
