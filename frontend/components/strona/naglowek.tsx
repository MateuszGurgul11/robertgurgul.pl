// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { tresci as t } from "@/content/strona-glowna";

export function Naglowek() {
  return (
    <div className="theme_on-dark">
      <nav className="header reference-header" aria-label="Menu główne">
        <div className="reference-nav-shell">
          <a href="#hero" className="reference-brand" aria-label="Robert Gurgul — strona główna">
            <span className="reference-monogram" aria-hidden="true">
              {"rg"}
              <span>
                {"."}
              </span>
            </span>
            <span className="reference-brand-name">
              {"ROBERT"}
              <br />
              {"GURGUL"}
            </span>
          </a>
          <div className="reference-links">
            {t.naglowek.menu.map((m, i) => (
                <a key={i} className="reference-link" href={m.href}>
                  {m.etykieta}
                </a>
            ))}
          </div>
          <a href="#" className="reference-contact" modal-cta-open="cta" modal-menu-close="menu" aria-label="Konsultacja">
            <span>
              {t.naglowek.cta}
            </span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
          <div hover-nav-item-trigger="" modal-menu-open="menu" className="menu-btn reference-menu-toggle" role="button" tabIndex={0} aria-label="Otwórz menu" aria-expanded="false">
            <div className="menu-btn_ico b-desk">
              <div className="menu-btn_ico_line top w-embed">
                <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 12.3281V10.998L32 10.998V12.3281L0 12.3281Z" fill="currentColor" />
                </svg>
              </div>
              <div className="menu-btn_ico_line bot w-embed">
                <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 19.6719V21.002H0V19.6719H32Z" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div className="menu-btn_ico b-mob">
              <div className="mob_menu-btn_ico_line top w-embed">
                <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 8.33594V9.66602H2V8.33594H30Z" fill="currentColor" />
                </svg>
              </div>
              <div className="mob_menu-btn_ico_line center w-embed">
                <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 15.3359V16.666H2V15.3359H30Z" fill="currentColor" />
                </svg>
              </div>
              <div className="mob_menu-btn_ico_line bot w-embed">
                <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 22.3359V23.666H2V22.3359H30Z" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div className="menu-btn_label-w f-desk">
              <div className="menu-btn_label">
                <a aria-label="Menu" hover-nav-item="" href="#" className="nav-item w-inline-block">
                  <div hover="label" className="nav-item_label">
                    <div className="nav-item_label_text">
                      <div hover="text" className="p6 text-dark">
                        {"Menu"}
                      </div>
                    </div>
                    <div className="nav-item_label_text is-2">
                      <div hover="text" className="p6 text-dark">
                        {"Menu"}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="menu-btn_label d-none">
                <a aria-label="Zamknij" hover-nav-item="" href="#" className="nav-item w-inline-block">
                  <div hover="label" className="nav-item_label">
                    <div className="nav-item_label_text">
                      <div hover="text" className="p6 text-dark">
                        {"Zamknij"}
                      </div>
                    </div>
                    <div className="nav-item_label_text is-2">
                      <div hover="text" className="p6 text-dark">
                        {"Zamknij"}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header_bg" aria-hidden="true" />
      </nav>
    </div>
  );
}
