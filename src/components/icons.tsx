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

export function OversizeIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M10 6.5 6.5 9 3.5 7.2 6.2 14.5 8 16.5v9.5h16V16.5l1.8-2 2.7-7.3L25.5 9 22 6.5l-2.5 2.4a4.6 4.6 0 0 1-7 0L10 6.5Z" />
      <path d="M11 25.5h10" />
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

export function ArtIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M7 25.5 18.5 6.5l7 4.2L14 25.5H7Z" />
      <path d="M16.2 10.2 21.8 13.6" />
      <path d="M7 25.5h7" />
    </svg>
  );
}

export function DetailsIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M9 7.5h14v17H9z" />
      <path d="M12.5 13h7M12.5 17h7M12.5 21h4.5" />
      <path d="M12.5 9.5h4" />
    </svg>
  );
}

export function ScheduleIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M8 9.5h16v15H8z" />
      <path d="M12 7.5v4M20 7.5v4M8 14.5h16" />
      <path d="M13 19.5h2v2h-2zM17 19.5h2v2h-2z" />
    </svg>
  );
}

export function DepositIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M16 6.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19Z" />
      <path d="M13.5 12.2v7.6L20.2 16l-6.7-3.8Z" />
    </svg>
  );
}

export function DeliveryIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M5.5 12.5h13v10h-13z" />
      <path d="M18.5 15.5h5.5l2.5 4v3h-8v-7Z" />
      <path d="M10 24.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 24.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  );
}

export const productIcons = {
  camisetas: ShirtIcon,
  oversize: OversizeIcon,
  regatas: TankIcon,
  moletons: HoodieIcon,
  uniformes: UniformIcon,
  sacolas: ToteIcon,
} as const;

export const stepIcons = {
  arte: ArtIcon,
  detalhes: DetailsIcon,
  prazo: ScheduleIcon,
  entrada: DepositIcon,
  entrega: DeliveryIcon,
} as const;
