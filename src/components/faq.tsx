import { business } from "@/config/business";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function Faq() {
  return (
    <section id="faq" className="bg-white">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Dúvidas"
          title="Perguntas frequentes sobre camisetas personalizadas"
        />
        <div className="mt-8 max-w-3xl border-t border-brand/20">
          {business.faq.map((item) => (
            <details key={item.question} className="group border-b border-brand/15">
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-base font-semibold text-ink">
                {item.question}
                <span className="faq-mark text-xl leading-none text-accent" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="faq-panel">
                <div>
                  <p className="pb-5 pr-8 text-base leading-relaxed text-ink-soft">
                    {item.answer}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
