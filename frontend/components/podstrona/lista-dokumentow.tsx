import { podstrony as p } from "@/content/podstrony";
import type { GalleryDoc } from "@/lib/types";

const nr = (n: number) => String(n).padStart(2, "0");

// Dokumenty z CMS: plik (PDF w Storage) — podgląd i pobranie; link zewnętrzny — otwarcie w nowej karcie.
export function ListaDokumentow({ dokumenty }: { dokumenty: GalleryDoc[] }) {
  const d = p.dokumenty;
  return (
    <ul className="rgp-docs">
      {dokumenty.map((doc, i) => {
        const plik = doc.type === "file";
        return (
          <li key={doc.id} className="rgp-doc">
            <span className="rgp-label rgp-doc_nr">{nr(i + 1)}</span>
            <a href={doc.url} target="_blank" rel="noopener noreferrer" className="rgp-doc_title">
              {doc.title}
            </a>
            <span className="rgp-label rgp-doc_type">{plik ? d.typPlik : d.typLink}</span>
            <span className="rgp-doc_actions">
              {plik ? (
                <>
                  <a href={doc.url} target="_blank" rel="noopener noreferrer" className="rgp-bracket">[ {d.podglad} ]</a>
                  <a href={doc.url} download className="rgp-btn">
                    <span>{d.pobierz}</span>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4v13m0 0-5-5m5 5 5-5M5 20h14" stroke="currentColor" strokeWidth="1.5" /></svg>
                  </a>
                </>
              ) : (
                <a href={doc.url} target="_blank" rel="noopener noreferrer" className="rgp-btn">
                  <span>{d.otworz}</span>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" /></svg>
                </a>
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
