import type { FabricSpecs } from "@/config/malhas";

export function FabricSpecsBlock({ specs }: { specs: FabricSpecs }) {
  const facts = [
    specs.composition ? ["Composição", specs.composition] : null,
    specs.weight ? ["Gramatura", specs.weight] : null,
    specs.width ? ["Largura", specs.width] : null,
    specs.yield ? ["Rendimento", specs.yield] : null,
  ].filter((item): item is [string, string] => item !== null);

  if (
    facts.length === 0 &&
    !specs.notes?.length &&
    !specs.care?.length
  ) {
    return null;
  }

  return (
    <div className="mt-4 max-w-3xl border border-brand/15 bg-paper px-4 py-4 sm:px-5">
      {facts.length > 0 ? (
        <dl className="grid gap-2 text-sm sm:grid-cols-2">
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                {label}
              </dt>
              <dd className="mt-1 text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      {specs.notes?.length ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {specs.notes.map((note) => (
            <li
              key={note}
              className="rounded-md border border-brand/20 bg-white px-2 py-1 text-xs font-semibold text-brand"
            >
              {note}
            </li>
          ))}
        </ul>
      ) : null}
      {specs.care?.length ? (
        <div className={facts.length || specs.notes?.length ? "mt-4" : ""}>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
            Cuidados
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-soft">
            {specs.care.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
