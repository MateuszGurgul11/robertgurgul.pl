import { podstrony as p, odmiana } from "@/content/podstrony";
import { Foto } from "./foto";
import { Linia, LinkTekst } from "./szablon-ui";

// Hub /media: trzy działy (zdjęcia, filmy, dokumenty) z licznikami i podglądem najnowszych pozycji z CMS.
// Klocki szablonu: podwójna linia, nagłówek Bodoni, link z podkreśleniem. Style: podstrony.css (.rgp-hub).

export type DzialMediow = {
  klucz: "zdjecia" | "filmy" | "dokumenty";
  liczba: number | null; // null = nie udało się pobrać z CMS
  podglad: { src?: string; tytul: string }[];
};

const LICZNIK = {
  zdjecia: ["zdjęcie", "zdjęcia", "zdjęć"],
  filmy: ["film", "filmy", "filmów"],
  dokumenty: ["dokument", "dokumenty", "dokumentów"],
};

const nr = (n: number) => String(n).padStart(2, "0");

function Podglad({ dzial }: { dzial: DzialMediow }) {
  if (!dzial.podglad.length) return null;
  if (dzial.klucz === "dokumenty") {
    return (
      <ul className="rgp-hub_docs">
        {dzial.podglad.map((d, i) => (
          <li key={i} className="rgp-hub_doc">
            <span className="p6 text-gray">PDF</span>
            <span className="p4 text-dark">{d.tytul}</span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className={`rgp-hub_foto rgp-hub_foto--${dzial.klucz}`}>
      {dzial.podglad.map((f, i) => (
        <li key={i} className="rgp-hub_kafel img-w">
          {f.src ? <Foto src={f.src} alt={f.tytul} fill sizes="(max-width: 767px) 33vw, 15vw" /> : null}
          {dzial.klucz === "filmy" ? (
            <span className="rgp-hub_play" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function HubMediow({ dzialy }: { dzialy: DzialMediow[] }) {
  const m = p.media;
  return (
    <ul className="rgp-hub">
      {dzialy.map((dzial, i) => {
        const tekst = m.dzialy[dzial.klucz];
        return (
          <li key={dzial.klucz} hover-divider="" className="rgp-hub_wiersz">
            {i === 0 ? <Linia /> : null}
            <a href={tekst.href} className="rgp-hub_link" aria-label={`${tekst.tytul} — ${m.zobacz}`} />
            <div className="rgp-hub_siatka">
              <div className="rgp-hub_nr">
                <span className="p4 text-dark">{nr(i + 1)}</span>
                {dzial.liczba !== null ? (
                  <span className="p6 text-gray">[ {dzial.liczba} {odmiana(dzial.liczba, LICZNIK[dzial.klucz])} ]</span>
                ) : null}
              </div>
              <div className="rgp-hub_tekst">
                <h2 className="h2 text-dark rgp-hub_tytul">{tekst.tytul}</h2>
                <div className="u-16" />
                <p className="p4 text-dark rgp-hub_opis">{tekst.opis}</p>
              </div>
              <div className="rgp-hub_prawa">
                <Podglad dzial={dzial} />
                <div className="rgp-hub_cta">
                  <LinkTekst href={tekst.href}>{m.zobacz}</LinkTekst>
                </div>
              </div>
            </div>
            <Linia />
          </li>
        );
      })}
    </ul>
  );
}
