/* eslint-disable @next/next/no-css-tags --
   arkusz podstron ładuje React 19 przez precedence tylko tam, gdzie jest potrzebny. */
import { podstrony as p } from "@/content/podstrony";
import { Naglowek } from "@/components/strona/naglowek";
import { Podpowiedzi, OknoFormularza, OknoMenu, Cookies } from "@/components/strona/okna";
import { Preloader } from "@/components/strona/preloader";
import { MasterPreloader, Szum, Przejscie, ObrocTelefon } from "@/components/strona/ramy";
import { Stopka } from "@/components/strona/stopka";
import { SzablonSkrypty } from "@/components/szablon/szablon-skrypty";
import { SKRYPTY } from "@/components/szablon/skrypty";
import { Etykieta, Linia, LinkTekst } from "@/components/podstrona/szablon-ui";

// Podstrony galerii (/photos, /videos, /docs): ten sam nagłówek, menu, stopka, preloader, okno kontaktu
// i skrypty co strona główna — zmienia się tylko treść w środku. Style treści: public/assets/css/podstrony.css.

type Props = {
  etykieta: string;
  tytulLewy: string;
  tytulPrawy: string;
  wstep: string;
  licznik?: string;
  /** false na samym hubie /media — tam ścieżka nie ma poziomu „Media” */
  wMediach?: boolean;
  children: React.ReactNode;
};

export function Podstrona({ etykieta, tytulLewy, tytulPrawy, wstep, licznik, wMediach = true, children }: Props) {
  return (
    <>
      <link rel="stylesheet" href="/assets/css/podstrony.css" precedence="podstrony" />
      <div data-barba="wrapper" className="transition-wrapper">
        <MasterPreloader />
        <Szum />
        <Preloader />
        <Przejscie />
        <div data-barba-namespace="podstrona" data-barba="container" className="transition-container clip">
          <Naglowek podstrona />
          <main className="rgp">
            {/* Nagłówek podstrony: ciemna sekcja jak Lokalizacja / FAQ na stronie głównej */}
            <section className="section bg-light theme_on-dark rgp-hero">
              <div className="container">
                <div className="rgp-hero_odstep" />
                <Etykieta>{etykieta}</Etykieta>
                <div className="u-32" />
                <h1 data-scroll-reveal="h" className="h1 text-dark rg-tytul rgp-title">
                  {tytulLewy} {tytulPrawy}
                </h1>
                <div className="u-48" />
                <Linia />
                <div className="u-24" />
                <div className="rgp-hero_dol">
                  <nav className="rgp-crumbs" aria-label="Ścieżka">
                    <LinkTekst href="/">{p.okruszki}</LinkTekst>
                    <span className="p6 text-gray" aria-hidden="true">/</span>
                    {wMediach ? (
                      <>
                        <LinkTekst href="/media">{p.media.tytul}</LinkTekst>
                        <span className="p6 text-gray" aria-hidden="true">/</span>
                      </>
                    ) : null}
                    <span className="p6 text-dark">{etykieta}</span>
                  </nav>
                  <div className="rgp-hero_opis">
                    <p data-scroll-reveal="p" className="p4 text-dark">{wstep}</p>
                    {licznik ? (
                      <>
                        <div className="u-16" />
                        <p className="p6 text-gray">[ {licznik} ]</p>
                      </>
                    ) : null}
                  </div>
                </div>
                <div className="u-72" />
              </div>
            </section>
            <section className="section bg-light rgp-tresc">
              <div className="container">
                <div className="u-104" />
                {children}
                <div className="u-136" />
              </div>
            </section>
          </main>
          <Stopka />
          <Podpowiedzi />
          <OknoFormularza />
          <OknoMenu podstrona />
          <Cookies />
        </div>
        <ObrocTelefon />
      </div>
      <SzablonSkrypty scripts={SKRYPTY} />
    </>
  );
}

export function Komunikat({ rodzaj, tekst }: { rodzaj: "pusto" | "blad"; tekst: string }) {
  return (
    <div className="rgp-notice" role={rodzaj === "blad" ? "alert" : "status"}>
      <Linia />
      <div className="u-32" />
      <p className={`p6 ${rodzaj === "blad" ? "rgp-notice_blad" : "text-gray"}`}>{rodzaj === "blad" ? "[ ! ]" : "[ — ]"}</p>
      <div className="u-16" />
      <p className="h5 text-dark">{tekst}</p>
    </div>
  );
}
