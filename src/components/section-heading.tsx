import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
        {eyebrow}
      </p>
      <span
        className="mt-3 flex h-1 w-14 overflow-hidden"
        aria-hidden="true"
      >
        <span className="h-full w-2/3 bg-brand" />
        <span className="h-full w-1/3 bg-accent" />
      </span>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{children}</p>
      ) : null}
    </div>
  );
}
