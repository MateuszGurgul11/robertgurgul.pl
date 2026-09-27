import { Suspense } from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { QuoteSection } from "@/components/quote-section";
import { WhyMeSection } from "@/components/why-me-section";
import { OfferSection } from "@/components/offer-section";
import { OfferSectionSkeleton } from "@/components/offer-section-skeleton";
import { ProcessSection } from "@/components/process-section";
import { AboutSection } from "@/components/about-section";
import { LocationSection } from "@/components/location-section";
import { ContactSection } from "@/components/contact-section";

// Kopia poprzedniej strony głównej (przed przeniesieniem nowego projektu). Bez indeksowania.
export const metadata: Metadata = {
  title: "Poprzednia wersja strony",
  robots: { index: false, follow: false },
};

export default function StaraStronaPage() {
  return (
    <>
      <Hero />
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
