import type { ReactNode } from "react";
import { whatsappHref } from "@/lib/whatsapp";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 5.5h2l1.2 3-1.4 1a12 12 0 0 0 4.2 4.2l1-1.4 3 1.2v2A1.5 1.5 0 0 1 17 17 12.5 12.5 0 0 1 5 7a1.5 1.5 0 0 1 1.5-1.5h2Z" />
    </svg>
  );
}

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary:
    "border border-brand/30 bg-white text-brand hover:bg-brand-soft",
  quiet:
    "border border-line bg-white text-brand hover:border-brand/40 hover:bg-brand-soft",
} as const;

export function WhatsAppLink({
  message,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
  compact = false,
}: {
  message?: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  ariaLabel?: string;
  compact?: boolean;
}) {
  const size = compact ? "h-11 px-3" : "h-12 px-5";

  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center gap-2 rounded-md text-center text-sm font-semibold ${size} ${variants[variant]} ${className}`}
    >
      {variant === "primary" ? <PhoneIcon /> : null}
      {compact ? (
        <span className="hidden min-[380px]:inline">{children}</span>
      ) : (
        children
      )}
    </a>
  );
}
