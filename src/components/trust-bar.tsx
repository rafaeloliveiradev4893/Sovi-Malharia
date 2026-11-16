import { business } from "@/config/business";

export function TrustBar() {
  return (
    <section aria-label="Dados do atendimento" className="border-y border-line bg-white">
      <ul className="mx-auto grid w-full max-w-6xl grid-cols-2 md:grid-cols-5">
        {business.trust.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 border-line px-4 py-4 text-[13px] font-semibold leading-snug text-ink last:col-span-2 md:last:col-span-1 md:border-l md:px-3 [&:nth-child(n+3)]:border-t md:[&:nth-child(n+3)]:border-t-0 md:[&:first-child]:border-l-0"
          >
            <span className="h-2 w-2 shrink-0 bg-brand" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
