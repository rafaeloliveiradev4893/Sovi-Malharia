type IconProps = { className?: string };

function svgProps(className?: string) {
  return {
    className: className ?? "h-7 w-7",
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
}

export function ShirtIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M11 7.5 8 9.5 5 8l2.2 6.2L9 16v9h14v-9l1.8-1.8L27 8l-3 1.5-3-2-2.2 2.2a4 4 0 0 1-5.6 0L11 7.5Z" />
    </svg>
  );
}

export function TankIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M12 6.5h8l1.5 3.5H22v15H10V10h.5L12 6.5Z" />
      <path d="M14 6.5c.4 1.4 1.1 2.2 2 2.2s1.6-.8 2-2.2" />
    </svg>
  );
}

export function HoodieIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M10 12.5 8 10 5.5 12.5 8 20v6h16v-6l2.5-7.5L24 10l-2 2.5" />
      <path d="M12 10.5c.6 2.2 1.6 3.4 4 3.4s3.4-1.2 4-3.4" />
      <path d="M16 14v4" />
    </svg>
  );
}

export function UniformIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M17 7.5h5.5l1 2.2h1.2V22H16.2V9.7h.8Z" />
      <path d="M19.2 7.5c.2 1.2.8 1.8 1.5 1.8s1.3-.6 1.5-1.8" />
      <path d="M7.5 11.5h7l1.2 2.4H17V26H6.2V13.9h.6Z" />
      <path d="M10 11.5c.3 1.4 1 2.1 1.8 2.1s1.5-.7 1.8-2.1" />
    </svg>
  );
}

export function ToteIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M8 12.5h16l-1.5 13H9.5L8 12.5Z" />
      <path d="M12 12.5v-2.2a4 4 0 0 1 8 0v2.2" />
    </svg>
  );
}

export const productIcons = {
  camisetas: ShirtIcon,
  regatas: TankIcon,
  moletons: HoodieIcon,
  uniformes: UniformIcon,
  sacolas: ToteIcon,
} as const;
