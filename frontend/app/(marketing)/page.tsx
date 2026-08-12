import { Suspense } from "react";
import { Hero } from "@/components/hero";
import { HalftoneBand } from "@/components/halftone-band";
import { QuoteSection } from "@/components/quote-section";
import { WhyMeSection } from "@/components/why-me-section";
import { OfferSection } from "@/components/offer-section";
import { OfferSectionSkeleton } from "@/components/offer-section-skeleton";
import { ProcessSection } from "@/components/process-section";
import { AboutSection } from "@/components/about-section";
import { LocationSection } from "@/components/location-section";
import { ContactSection } from "@/components/contact-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HalftoneBand />
      <QuoteSection />
      <WhyMeSection />
      <Suspense fallback={<OfferSectionSkeleton />}>
        <OfferSection />
      </Suspense>
      <ProcessSection />
      <AboutSection />
      <LocationSection />
      <ContactSection />
    </>
  );
}
