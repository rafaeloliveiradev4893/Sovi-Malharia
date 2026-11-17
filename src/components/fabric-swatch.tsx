import type { CSSProperties } from "react";
import type { FabricCategory, FabricColor } from "@/config/malhas";
import { fabricMessage } from "@/config/malhas";
import { whatsappHref } from "@/lib/whatsapp";

function mixHex(hex: string, target: string, amount: number): string {
  const parse = (value: string) => {
    const digits = value.replace("#", "");
    return [
      Number.parseInt(digits.slice(0, 2), 16),
      Number.parseInt(digits.slice(2, 4), 16),
      Number.parseInt(digits.slice(4, 6), 16),
    ] as const;
  };
  const [r, g, b] = parse(hex);
  const [tr, tg, tb] = parse(target);
  const channel = (from: number, to: number) =>
    Math.round(from + (to - from) * amount)
      .toString(16)
      .padStart(2, "0");
  return `#${channel(r, tr)}${channel(g, tg)}${channel(b, tb)}`;
}

function swatchStyle(color: FabricColor): CSSProperties {
  const accent = color.accent ?? "#F4F2EE";
  const pattern = color.pattern ?? "solid";

  if (pattern === "stripe" || pattern === "stripe-fine") {
    const band = pattern === "stripe-fine" ? 2 : 7;
    return {
      backgroundImage: `repeating-linear-gradient(90deg, ${color.hex} 0 ${band}px, ${accent} ${band}px ${band * 2}px)`,
    };
  }

  if (pattern === "check" || pattern === "gingham-fine") {
    const white = accent;
    const orig = color.hex;
    const light = mixHex(orig, white, 0.55);
    const dark = mixHex(orig, "#1A1A1A", 0.38);
    const col = pattern === "gingham-fine" ? 6 : 14;
    const row = 14;
    return {
      backgroundColor: white,
      backgroundImage: `conic-gradient(${orig} 90deg, ${dark} 90deg 180deg, ${white} 180deg 270deg, ${light} 270deg)`,
      backgroundSize: `${col * 2}px ${row * 2}px`,
      backgroundRepeat: "repeat",
    };
  }

  if (pattern === "houndstooth") {
    return {
      backgroundColor: accent,
      backgroundImage: `repeating-linear-gradient(45deg, ${color.hex} 0 6px, ${accent} 6px 12px)`,
    };
  }

  if (pattern === "mesh") {
    return {
      backgroundColor: color.hex,
      backgroundImage: `radial-gradient(circle, ${accent} 28%, transparent 30%)`,
      backgroundSize: "8px 8px",
    };
  }

  if (pattern === "camo") {
    return {
      backgroundColor: color.hex,
      backgroundImage: `radial-gradient(ellipse at 20% 30%, ${accent} 0 18%, transparent 19%), radial-gradient(ellipse at 70% 20%, #2a2a22 0 16%, transparent 17%), radial-gradient(ellipse at 60% 70%, ${accent} 0 22%, transparent 23%), radial-gradient(ellipse at 25% 80%, #1c2414 0 14%, transparent 15%)`,
    };
  }

  if (pattern === "tape" || pattern === "tape-narrow") {
    const band = pattern === "tape-narrow" ? "24%" : "48%";
    const shine = mixHex(color.hex, "#FFFFFF", 0.42);
    const shade = mixHex(color.hex, "#1A1A1A", 0.18);
    return {
      backgroundColor: "#ECEAE6",
      backgroundImage: `linear-gradient(${shine} 0%, ${color.hex} 22%, ${color.hex} 78%, ${shade} 100%)`,
      backgroundSize: `100% ${band}`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
  }

  if (pattern === "heather") {
    return {
      backgroundColor: color.hex,
      backgroundImage: `linear-gradient(${color.hex}, ${color.hex}), url("/images/texturas/mescla.webp")`,
      backgroundSize: "auto, 168px 168px",
      backgroundBlendMode: "color, normal",
      backgroundRepeat: "repeat",
    };
  }

  return { backgroundColor: color.hex };
}

function needsBorder(color: FabricColor): boolean {
  const value = color.hex.replace("#", "");
  if (value.length !== 6) return true;
  const r = Number.parseInt(value.slice(0, 2), 16);
  const g = Number.parseInt(value.slice(2, 4), 16);
  const b = Number.parseInt(value.slice(4, 6), 16);
  return (r + g + b) / 3 > 220;
}

export function FabricSwatch({
  category,
  color,
}: {
  category: FabricCategory;
  color: FabricColor;
}) {
  return (
    <a
      href={whatsappHref(fabricMessage(category.name, color.name))}
      target="_blank"
      rel="noopener noreferrer"
      className="lift block border border-brand/20 bg-white p-3 text-center"
      aria-label={
        category.kind === "tape"
          ? `Pedir orçamento da fita ${color.name} para aplicar na camisa`
          : `Pedir orçamento de ${category.name} na cor ${color.name}`
      }
    >
      <p className="min-h-8 text-[11px] font-semibold uppercase leading-tight tracking-[0.12em] text-brand">
        {category.name}
      </p>
      <span
        className={`mt-2 block aspect-square w-full rounded-sm ${needsBorder(color) || color.pattern === "tape" || color.pattern === "tape-narrow" ? "border border-line" : ""}`}
        style={swatchStyle(color)}
        aria-hidden="true"
      />
      <p className="mt-2 text-sm font-semibold leading-tight text-ink">
        {color.name}
      </p>
    </a>
  );
}
