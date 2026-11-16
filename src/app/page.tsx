import { Audience } from "@/components/audience";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { JsonLd } from "@/components/json-ld";
import { Pricing } from "@/components/pricing";
import { Products } from "@/components/products";
import { ServiceArea } from "@/components/service-area";
import { Techniques } from "@/components/techniques";
import { TrustBar } from "@/components/trust-bar";
import { faqJsonLd } from "@/lib/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <Hero />
      <TrustBar />
      <Products />
      <Techniques />
      <HowItWorks />
      <Pricing />
      <Gallery />
      <Audience />
      <ServiceArea />
      <Faq />
      <FinalCta />
    </>
  );
}
