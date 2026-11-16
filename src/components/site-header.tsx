import { business } from "@/config/business";
import { HeaderShadow } from "@/components/header-shadow";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function SiteHeader() {
  return (
    <header id="topo" className="sticky top-0 z-40 border-b border-brand/25 bg-white/95 backdrop-blur">
      <HeaderShadow />
      <div className="brand-rule h-1.5 bg-brand" aria-hidden="true">
        <div className="ml-auto h-full w-2/5 bg-accent" />
      </div>
      <div className="relative mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-5 sm:px-8">
        <a href="#inicio" className="mr-auto min-w-0 shrink">
          <Logo priority className="h-8 w-auto max-w-[42vw] sm:h-9 sm:max-w-none" />
        </a>
        <nav aria-label="Seções" className="hidden items-center gap-6 md:flex">
          {business.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-semibold text-ink hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <WhatsAppLink compact ariaLabel="Pedir orçamento no WhatsApp">
          Pedir orçamento
        </WhatsAppLink>
        <MobileNav links={business.nav} />
      </div>
    </header>
  );
}
