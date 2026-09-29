import { tresci as t } from "@/content/strona-glowna";
import { podstrony as p } from "@/content/podstrony";

// Wspólny układ podstron galerii (/photos, /videos, /docs) w motywie strony głównej.
// Bez skryptów szablonu: zwykłe linki <a> (pełne przeładowanie przy powrocie na stronę główną,
// żeby animacje site.js startowały od zera). Style: public/assets/css/podstrony.css.

type Props = {
  aktywna: string;
  etykieta: string;
  tytulLewy: string;
  tytulPrawy: string;
  wstep: string;
  licznik?: string;
  children: React.ReactNode;
};

function Naglowek({ aktywna }: { aktywna: string }) {
  return (
    <header className="rgp-header">
      <div className="rgp-header_in">
        <a href="/" className="rgp-brand" aria-label="Robert Gurgul — strona główna">
          <span className="rgp-monogram" aria-hidden="true">rg<span>.</span></span>
          <span className="rgp-brand_name">ROBERT<br />GURGUL</span>
        </a>
        <nav className="rgp-nav" aria-label="Menu">
          {p.nawigacja.map((l) => (
            <a key={l.href} href={l.href} className="rgp-nav_link" aria-current={l.href === aktywna ? "page" : undefined}>
              {l.etykieta}
            </a>
          ))}
        </nav>
        <a href={t.kontakt.telefonHref} className="rgp-call">
          <span>{p.zadzwon}</span>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </a>
      </div>
    </header>
  );
}

function Stopka() {
  return (
    <footer className="rgp-footer">
      <div className="rgp-wrap">
        <p className="rgp-footer_motto">{p.stopka.haslo}</p>
        <div className="rgp-footer_grid">
          <div>
            <p className="rgp-label">{t.stopka.kontaktEtykieta}</p>
            <a href={t.kontakt.telefonHref} className="rgp-footer_link">{t.kontakt.telefon}</a>
            <a href={t.kontakt.emailHref} className="rgp-footer_link">{t.kontakt.email}</a>
          </div>
          <div>
            <p className="rgp-label">{t.stopka.lokalizacjaEtykieta}</p>
            <a href={t.kontakt.mapa} target="_blank" rel="noopener noreferrer" className="rgp-footer_link">
              {t.kontakt.adresLinia1}<br />{t.kontakt.adresLinia2}
            </a>
          </div>
          <div>
            <p className="rgp-label">Galeria</p>
            {p.nawigacja.slice(1, 4).map((l) => (
              <a key={l.href} href={l.href} className="rgp-footer_link">{l.etykieta}</a>
            ))}
          </div>
        </div>
        <p className="rgp-footer_name" aria-hidden="true">{t.nazwa}</p>
        <div className="rgp-footer_bot">
          <span>{p.stopka.prawa}</span>
          <a href="/" className="rgp-footer_link">← {p.stopka.powrot}</a>
        </div>
      </div>
    </footer>
  );
}

export function Podstrona({ aktywna, etykieta, tytulLewy, tytulPrawy, wstep, licznik, children }: Props) {
  return (
    <>
      <link rel="stylesheet" href="/assets/css/podstrony.css" precedence="podstrony" />
      <div className="rgp">
        <Naglowek aktywna={aktywna} />
        <main>
          <section className="rgp-hero rgp-wrap">
            <div className="rgp-hero_top">
              <nav className="rgp-crumbs" aria-label="Ścieżka">
                <a href="/">{p.okruszki}</a>
                <span aria-hidden="true">/</span>
                <span>{etykieta}</span>
              </nav>
              {licznik ? <p className="rgp-label">[ {licznik} ]</p> : null}
            </div>
            <h1 className="rgp-title">
              <span>{tytulLewy}</span>
              <span className="rgp-title_r">{tytulPrawy}</span>
            </h1>
            <div className="rgp-hero_bot">
              <span className="rgp-line" />
              <p className="rgp-intro">{wstep}</p>
            </div>
          </section>
          <section className="rgp-content rgp-wrap">{children}</section>
        </main>
        <Stopka />
      </div>
    </>
  );
}

export function Komunikat({ rodzaj, tekst }: { rodzaj: "pusto" | "blad"; tekst: string }) {
  return (
    <div className={`rgp-notice${rodzaj === "blad" ? " is-error" : ""}`} role={rodzaj === "blad" ? "alert" : "status"}>
      <p className="rgp-label">{rodzaj === "blad" ? "[ ! ]" : "[ — ]"}</p>
      <p className="rgp-notice_text">{tekst}</p>
    </div>
  );
}
