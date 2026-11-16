import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import { Suspense } from "react";
import { headers } from "next/headers";
import { connection } from "next/server";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppBar } from "@/components/whatsapp-bar";
import { business, publicSiteUrl } from "@/config/business";
import { localBusinessJsonLd } from "@/lib/json-ld";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
});

function requestOrigin(headerList: Headers): URL | undefined {
  const configured = publicSiteUrl();
  if (configured) return new URL(configured);

  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const hostname = host?.split(",")[0]?.trim().toLowerCase();
  if (!hostname || !/^[a-z0-9.-]+(?::\d+)?$/.test(hostname)) return undefined;

  const forwarded = headerList.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const proto =
    forwarded === "http" || forwarded === "https"
      ? forwarded
      : hostname.startsWith("localhost") || hostname.startsWith("127.0.0.1")
        ? "http"
        : "https";

  return new URL(`${proto}://${hostname}`);
}

export async function generateMetadata(): Promise<Metadata> {
  const origin = requestOrigin(await headers());
  const canonical = publicSiteUrl();

  return {
    metadataBase: origin,
    title: business.title,
    description: business.description,
    applicationName: business.name,
    authors: [{ name: business.name, url: business.instagram }],
    creator: business.name,
    alternates: canonical ? { canonical: "/" } : undefined,
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
    openGraph: {
      title: business.title,
      description: business.description,
      locale: "pt_BR",
      type: "website",
      siteName: business.name,
      url: canonical ?? origin?.origin,
    },
    twitter: {
      card: "summary_large_image",
      title: business.title,
      description: business.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

async function DynamicMarker() {
  await connection();
  return null;
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${sans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col pb-28 md:pb-0">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a href="#conteudo" className="skip-link">
          Ir para o conteúdo
        </a>
        <JsonLd data={localBusinessJsonLd()} />
        <SiteHeader />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Suspense fallback={null}>
          <DynamicMarker />
        </Suspense>
        <SiteFooter />
        <WhatsAppBar />
      </body>
    </html>
  );
}
