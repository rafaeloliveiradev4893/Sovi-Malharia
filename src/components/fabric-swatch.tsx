import type { CSSProperties } from "react";
import type { FabricCategory, FabricColor } from "@/config/malhas";
import { fabricMessage } from "@/config/malhas";
import { whatsappHref } from "@/lib/whatsapp";

function hexChannels(hex: string) {
  const digits = hex.replace("#", "");
  return [
    Number.parseInt(digits.slice(0, 2), 16),
    Number.parseInt(digits.slice(2, 4), 16),
    Number.parseInt(digits.slice(4, 6), 16),
  ] as const;
}

function mixHex(hex: string, target: string, amount: number): string {
  const [r, g, b] = hexChannels(hex);
  const [tr, tg, tb] = hexChannels(target);
  const channel = (from: number, to: number) =>
    Math.round(from + (to - from) * amount)
      .toString(16)
      .padStart(2, "0");
  return `#${channel(r, tr)}${channel(g, tg)}${channel(b, tb)}`;
}

function camoPalette(hex: string, accent: string) {
  return [
    hex,
    accent,
    mixHex(hex, "#0B0B0B", 0.58),
    mixHex(accent, mixHex(hex, "#D6CBA8", 0.45), 0.4),
  ];
}

function camoWoodland(hex: string, accent: string, seed: number) {
  const bins = camoPalette(hex, accent).map((value) =>
    hexChannels(value).map((channel) => (channel / 255).toFixed(3)),
  );
  const svg = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">
      <filter id="c" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.028" numOctaves="4" seed="${seed}" stitchTiles="stitch" result="t"/>
        <feColorMatrix in="t" type="matrix" values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 0 1" result="g"/>
        <feComponentTransfer in="g">
          <feFuncR type="discrete" tableValues="${bins.map((c) => c[0]).join(" ")}"/>
          <feFuncG type="discrete" tableValues="${bins.map((c) => c[1]).join(" ")}"/>
          <feFuncB type="discrete" tableValues="${bins.map((c) => c[2]).join(" ")}"/>
        </feComponentTransfer>
      </filter>
      <rect width="100%" height="100%" filter="url(#c)"/>
    </svg>`,
  );
  return {
    backgroundColor: hex,
    backgroundImage: `url("data:image/svg+xml,${svg}")`,
    backgroundSize: "180px 180px",
    backgroundRepeat: "repeat",
  } satisfies CSSProperties;
}

function camoDigital(hex: string, accent: string) {
  const palette = camoPalette(hex, accent);
  const cell = 7;
  const cols = 12;
  const map = [
    0, 0, 1, 2, 2, 0, 3, 1, 1, 2, 0, 0, 2, 3, 3, 1, 0, 0, 2, 2, 1, 3, 3, 0, 1,
    1, 0, 0, 3, 2, 2, 1, 0, 3, 3, 1, 1, 1, 0, 2, 2, 0, 0, 3, 1, 2, 2, 3, 0, 0,
    1, 1, 2, 3, 3, 0, 0, 1, 2, 2, 3, 1, 1, 0, 0, 2, 3, 3, 1, 1, 0, 2, 2, 0, 0,
    3, 1, 1, 2, 2, 0, 0, 3, 3, 1, 0, 0, 2, 2, 1, 3, 3, 0, 1, 1, 2, 0, 0, 3, 2,
    2, 1, 1, 0, 0, 3, 3, 2, 1, 1, 0, 2, 2, 3, 0, 0, 1, 1, 2, 3, 3, 0, 1, 2, 2,
    0, 0, 3, 1, 1, 2, 0, 0, 3, 3, 1, 2, 2, 0, 0, 1, 3, 3, 2, 1, 0,
  ];
  const rects = map
    .map((tone, index) => {
      const x = (index % cols) * cell;
      const y = Math.floor(index / cols) * cell;
      return `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" fill="${palette[tone]}"/>`;
    })
    .join("");
  const svg = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${cols * cell}" height="${Math.ceil(map.length / cols) * cell}" shape-rendering="crispEdges">${rects}</svg>`,
  );
  return {
    backgroundColor: hex,
    backgroundImage: `url("data:image/svg+xml,${svg}")`,
    backgroundSize: `${cols * cell}px ${Math.ceil(map.length / cols) * cell}px`,
    backgroundRepeat: "repeat",
  } satisfies CSSProperties;
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
    const seed = [...color.name].reduce((total, char) => total + char.charCodeAt(0), 0);
    if (/digital/i.test(color.name)) {
      return camoDigital(color.hex, accent);
    }
    return camoWoodland(color.hex, accent, seed % 17);
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
    const digits = color.hex.replace("#", "");
    const luma =
      (Number.parseInt(digits.slice(0, 2), 16) +
        Number.parseInt(digits.slice(2, 4), 16) +
        Number.parseInt(digits.slice(4, 6), 16)) /
      3;
    const lightHeather = luma > 165;
    return {
      backgroundColor: color.hex,
      backgroundImage: lightHeather
        ? `linear-gradient(${color.hex}, ${color.hex}), url("/images/texturas/mescla.webp")`
        : `url("/images/texturas/mescla.webp")`,
      backgroundSize: lightHeather ? "auto, 168px 168px" : "168px 168px",
      backgroundBlendMode: lightHeather ? "screen, normal" : "overlay",
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
