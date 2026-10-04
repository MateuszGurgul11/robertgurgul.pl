import { podstrony as p } from "@/content/podstrony";
import type { GalleryDoc } from "@/lib/types";
import { Linia, LinkTekst, Przycisk } from "./szablon-ui";

const nr = (n: number) => String(n).padStart(2, "0");

/** Nazwa pliku z tytułu: „Rejestr wizyt” → rejestr-wizyt.pdf */
function nazwaPliku(tytul: string, url: string) {
  const ext = url.split("?")[0].match(/\.(\w{2,5})$/)?.[1]?.toLowerCase() ?? "pdf";
  const slug = tytul
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l")
    .replace(/Ł/g, "L")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${slug || "dokument"}.${ext}`;
}

// Pliki leżą w Google Cloud Storage (inna domena), więc atrybut download jest ignorowany przez przeglądarki.
// Podpisane linki Storage przyjmują response-content-disposition — wtedy plik się pobiera zamiast otwierać.
function linkPobierania(url: string, tytul: string) {
  try {
    const u = new URL(url);
    if (!/(^|\.)(storage\.googleapis\.com|firebasestorage\.googleapis\.com)$/.test(u.hostname)) return url;
    u.searchParams.set("response-content-disposition", `attachment; filename="${nazwaPliku(tytul, url)}"`);
    return u.toString();
  } catch {
    return url;
  }
}

// Dokumenty z CMS: plik (PDF w Storage) — podgląd i pobranie; link zewnętrzny — otwarcie w nowej karcie.
export function ListaDokumentow({ dokumenty }: { dokumenty: GalleryDoc[] }) {
  const d = p.dokumenty;
  return (
    <ul className="rgp-docs">
      {dokumenty.map((doc, i) => {
        const plik = doc.type === "file";
        const tytul = doc.title.trim();
        return (
          <li key={doc.id} hover-divider="" className="rgp-doc">
            <div className="u-24" />
            <div className="rgp-doc_wiersz">
              <div className="rgp-doc_nr">
                <span className="p4 text-dark">{nr(i + 1)}</span>
                <span className="p6 text-gray">{plik ? d.typPlik : d.typLink}</span>
              </div>
              <a href={doc.url} target="_blank" rel="noopener noreferrer" className="h5 text-dark rgp-doc_title">
                {tytul}
              </a>
              <div className="rgp-doc_actions">
                {plik ? (
                  <>
                    <LinkTekst href={doc.url} nowaKarta>{d.podglad}</LinkTekst>
                    <Przycisk href={linkPobierania(doc.url, tytul)} download={nazwaPliku(tytul, doc.url)}>{d.pobierz}</Przycisk>
                  </>
                ) : (
                  <Przycisk href={doc.url} nowaKarta>{d.otworz}</Przycisk>
                )}
              </div>
            </div>
            <div className="u-24" />
            <Linia />
          </li>
        );
      })}
    </ul>
  );
}
