import type { Metadata } from "next";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ContactSection } from "@/components/contact-section";
import { LocationSection } from "@/components/location-section";
import { SITE_CONTACT } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się z Robertem Gurgułem: telefon, e-mail, adres Verkap Plus w Wolicy Koziej i formularz zgłoszeniowy.",
};

const FACTS: {
  icon: typeof Building2;
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    icon: Building2,
    label: "Firma",
    value: SITE_CONTACT.company,
  },
  {
    icon: MapPin,
    label: "Adres",
    value: `${SITE_CONTACT.street}, ${SITE_CONTACT.city}`,
  },
  {
    icon: Phone,
    label: "Telefon",
    href: `tel:${SITE_CONTACT.phoneTel}`,
    value: SITE_CONTACT.phoneDisplay,
  },
  {
    icon: Mail,
    label: "E-mail",
    href: `mailto:${SITE_CONTACT.email}`,
    value: SITE_CONTACT.email,
  },
];

export default function KontaktPage() {
  return (
    <>
      <PageHeader title="Kontakt" />

      <section className="bg-navy-deep py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
                Verkap Plus
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold leading-snug text-offwhite sm:text-3xl">
                Napisz albo przyjedź — odpowiadam osobiście
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-muted sm:text-base">
                Najszybciej zadzwonić lub wysłać formularz. W wiadomości warto
                podać lokalizację fermy, gatunek i wiek stada oraz to, czy
                potrzebujesz audytu, żywienia, mikroklimatu czy sprzętu — wtedy
                od razu wiem, jak przygotować się do rozmowy.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-muted sm:text-base">
                Wizyta na miejscu nie zobowiązuje. Obejrzymy obiekt, porozmawiamy
                o planie i dopiero potem ustalimy zakres współpracy.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {FACTS.map(({ icon: Icon, label, value, href }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 rounded-2xl border border-gold/15 bg-navy-deepest/50 p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-slate-muted">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-offwhite transition-colors hover:text-gold-light"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-offwhite">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection compactHeader />
      <LocationSection />
    </>
  );
}
