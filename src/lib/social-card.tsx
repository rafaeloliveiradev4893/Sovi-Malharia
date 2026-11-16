import { ImageResponse } from "next/og";

export const socialImageSize = { width: 1200, height: 630 };
export const socialImageAlt =
  "Sovi Malharia — camisetas personalizadas na Chapada Diamantina, em Boninal (BA)";
export const socialImageContentType = "image/png";

export function renderSocialCard() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f7f5f2",
          color: "#1c1b19",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 64,
              height: 64,
              border: "3px solid #1f4460",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1f4460",
              fontSize: 32,
              fontWeight: 700,
              backgroundColor: "#ffffff",
            }}
          >
            S
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginLeft: 18 }}>
            <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: 3 }}>
              SOVI
            </div>
            <div style={{ fontSize: 16, letterSpacing: 4, color: "#1f4460" }}>
              MALHARIA
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 56,
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -1,
            maxWidth: 980,
          }}
        >
          Camisetas personalizadas na Chapada Diamantina
        </div>
        <div style={{ marginTop: 24, fontSize: 28, color: "#3e3a36" }}>
          Boninal (BA). Desde 2007. Serigrafia e sublimação.
        </div>
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#1f4460" }}>
            A partir de R$ 36 por peça
          </div>
          <div style={{ display: "flex", marginTop: 22, height: 8, width: "100%" }}>
            <div style={{ display: "flex", flex: 3, backgroundColor: "#1f4460" }} />
            <div style={{ display: "flex", flex: 1, backgroundColor: "#8c3e3a" }} />
          </div>
        </div>
      </div>
    ),
    { ...socialImageSize },
  );
}
