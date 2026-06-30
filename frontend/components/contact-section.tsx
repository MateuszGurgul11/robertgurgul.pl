import { Mail, Phone } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { ContactForm } from "@/components/contact-form";
import { ConnectIllustration } from "@/components/illustrations";
import { VerticalHalftoneSilhouette, treeProfile } from "@/components/pixel-silhouette";
import { Reveal } from "@/components/reveal";

const TREE_PROFILE = treeProfile(14, 10);

export function ContactSection() {
  return (
    <section id="connect" className="relative overflow-hidden bg-light-bg py-20 sm:py-28">
      <div
        className="pointer-events-none absolute right-0 bottom-0 text-gold-deep/10"
        aria-hidden="true"
      >
        <VerticalHalftoneSilhouette profile={TREE_PROFILE} className="h-28 w-auto sm:h-36" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Kontakt"
          title="Skontaktuj się ze mną"
          subtitle="Masz pytanie o żywienie, mikroklimat albo po prostu chcesz pogadać o swojej fermie? Napisz — odpowiadam osobiście."
          align="left"
          tone="light"
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-navy-mid/10 bg-white p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="relative overflow-hidden rounded-2xl border border-gold-deep/20">
                <ConnectIllustration className="aspect-[4/3] w-full" />
              </div>
              <div className="flex flex-col gap-4 rounded-2xl border border-navy-mid/10 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold-deep">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-navy-mid/60">
                      Telefon
                    </p>
                    <p className="border-b border-dashed border-gold-deep/40 text-sm text-navy-deep/50">
                      dane uzupełnione wkrótce
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold-deep">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-navy-mid/60">
                      E-mail
                    </p>
                    <p className="border-b border-dashed border-gold-deep/40 text-sm text-navy-deep/50">
                      dane uzupełnione wkrótce
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
