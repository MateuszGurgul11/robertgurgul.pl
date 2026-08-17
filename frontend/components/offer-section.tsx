import { servicesApi } from "@/lib/api";
import { OfferRail } from "@/components/offer-rail";
import { ParallaxBand } from "@/components/parallax-band";
import { SpecialtyMarquee } from "@/components/specialty-marquee";
import { DEFAULT_SERVICES } from "@/lib/offer";

export async function OfferSection() {
  const services = await servicesApi.list({ revalidate: 300 }).catch(() => []);
  const items = services.length ? services : DEFAULT_SERVICES;

  return (
    <>
      <OfferRail services={items} />
      <ParallaxBand />
      <div className="bg-navy-deep pb-20 pt-20 sm:pb-28 sm:pt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SpecialtyMarquee />
        </div>
      </div>
    </>
  );
}
