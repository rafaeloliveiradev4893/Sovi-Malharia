import { business, publicSiteUrl } from "../config/business.ts";

export function localBusinessJsonLd() {
  const siteUrl = publicSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: business.description,
    foundingDate: String(business.foundingYear),
    telephone: `+${business.phone.country}-${business.phone.area}-${business.phone.local}`,
    currenciesAccepted: "BRL",
    paymentAccepted: business.payments.join(", "),
    priceRange: `R$ ${business.price.from}–R$ ${business.price.to}`,
    image: siteUrl ? `${siteUrl}${business.logo.src}` : undefined,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    openingHoursSpecification: business.hours.blocks.map((block) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: block.days,
      opens: block.opens,
      closes: block.closes,
    })),
    areaServed: [
      {
        "@type": "City",
        name: business.address.city,
      },
      {
        "@type": "AdministrativeArea",
        name: business.region.name,
      },
      ...business.region.cities.map((city) => ({
        "@type": "City",
        name: city,
      })),
    ],
    hasMap: business.maps,
    sameAs: [business.instagram, business.maps],
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: business.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
