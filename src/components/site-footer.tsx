import { business } from "@/config/business";
import { Logo } from "@/components/logo";
import { whatsappHref } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand/25 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_1fr_0.8fr]">
        <div>
          <Logo className="h-12 w-auto" />
          <p className="mt-4 text-base font-semibold text-ink">{business.name}</p>
          <p className="mt-1 text-sm text-muted">
            {business.address.city} ({business.address.region})
          </p>
        </div>
        <div className="text-sm leading-relaxed text-ink-soft">
          <p>{business.address.line}</p>
          <p className="mt-2">{business.hours.summary}</p>
          <p className="mt-2">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink underline decoration-brand/30 underline-offset-4"
            >
              WhatsApp {business.phone.display}
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm font-semibold">
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline decoration-brand/30 underline-offset-4"
          >
            Instagram {business.instagramHandle}
          </a>
          <a
            href={business.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline decoration-brand/30 underline-offset-4"
          >
            Google Maps
          </a>
          {business.nav.map((link) => (
            <a key={link.href} href={link.href} className="text-ink hover:text-brand">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-brand/20">
        <p className="mx-auto w-full max-w-6xl px-5 py-4 text-sm text-muted sm:px-8">
          © {business.copyrightYear} {business.name}. Boninal, BA.
        </p>
      </div>
    </footer>
  );
}
