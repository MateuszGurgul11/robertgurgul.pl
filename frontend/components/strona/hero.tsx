// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { tresci as t } from "@/content/strona-glowna";
import { Etykieta } from "@/components/podstrona/szablon-ui";

export function Hero() {
  return (
    <section id="hero" className="section theme_on-dark clip">
      <div className="container">
        <div data-scroll-video-container="" className="hero-scroll-area">
          <div className="mob_hero-w_bg b-mob">
            <div className="mob_hero-w_bg_img">
              <div className="img-w">
                <div data-hero-img="" className="hero-img light" />
              </div>
            </div>
            <div className="over-gradient-top" />
            <div className="over-gradient-bot" />
            <div className="over" />
          </div>
          <div className="hero-w">
            {/* Układ hero: lewa góra — etykieta + ROBERT GURGUL (cel animacji logo z preloadera),
                prawa góra — liczby; lewy dół — hasło, rząd informacji z wyróżnieniami; prawy dół — kulka CTA.
                Style: public/assets/css/uklad.css (.rg-hero). */}
            <div className="hero-s rg-hero">
              <div className="rg-hero_gora">
                <div className="rg-hero_lewa">
                  <Etykieta as="h1" klasa="rg-hero_etykieta">{t.hero.etykieta}</Etykieta>
                  <div className="u-24" />
                  <div className="hero-s_content_logo rg-hero_logo">
                    <div preloader="logo-w-finish" className="logo-w">
                      <div preloader="logo-static" className="hero-s_content_logo_c">
                        <div className="logo w-embed">
                          <svg width="100%" height="100%" viewBox="0 -12 280 52" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Robert Gurgul" preserveAspectRatio="xMidYMid meet">
                            <text x="0" y="28" fill="currentColor" style={{"fontFamily": "var(--_fonts---font-display, Arial, Helvetica, sans-serif)"}} fontSize="30" textLength="280" lengthAdjust="spacing">
                              {t.nazwa}
                            </text>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-intro="ctn" className="rg-hero_liczby">
                  {t.hero.liczby.map((l) => (
                    <div key={l.liczba + l.opis1} className="rg-hero_liczba">
                      <p className="rg-hero_liczba_w text-dark">{l.liczba}</p>
                      <p className="p6 text-dark">
                        {l.opis1}
                        <br />
                        {l.opis2}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rg-hero_dol">
                <div className="rg-hero_dol_lewa">
                  <h2 data-intro="p" className="h6 text-dark rg-hero_haslo">
                    {t.hero.haslo.map((w, i) => (
                      <span key={i} className="rg-hero_haslo_w">{w}</span>
                    ))}
                  </h2>
                  <div data-intro="ctn" className="rg-hero_info">
                    {t.hero.info.map((x) => {
                      const w1 = x.wyroznij === 1 ? <span className="rg-chip">{x.wiersz1}</span> : x.wiersz1;
                      const w2 = x.wyroznij === 2 ? <span className="rg-chip">{x.wiersz2}</span> : x.wiersz2;
                      const tresc = (
                        <>
                          <span className="rg-hero_info_w">{w1}</span>
                          <span className="rg-hero_info_w">{w2}</span>
                        </>
                      );
                      return x.href ? (
                        <a key={x.wiersz1} href={x.href} className="p6 text-dark rg-hero_info_el rg-hero_info_link">{tresc}</a>
                      ) : (
                        <p key={x.wiersz1} className="p6 text-dark rg-hero_info_el">{tresc}</p>
                      );
                    })}
                  </div>
                </div>
                <div data-intro="ctn" className="rg-hero_cta">
                  <div modal-cta-open="cta" className="modal-trigger">
                    <a aria-label={t.hero.cta} data-magnetic-strength="" href="#" className="btn-circle w-inline-block">
                      <div className="btn-circle_bg" />
                      <div data-magnetic-inner-target="" className="btn-circle_label">
                        <div className="btn-circle_label_text">
                          <div hover="text" className="p6 text-dark">
                            <span className="b-desk">{t.hero.cta}</span>
                            <span className="b-mob">{t.hero.ctaMobile}</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div data-intro="video" className="hero-w_bg b-desk">
              <div className="img-w">
                <canvas data-scroll-video="" className="scroll-video light" />
              </div>
              <div className="over-gradient-top" />
              <div className="over-gradient-bot" />
              <div className="over" />
            </div>
          </div>
          <div className="hero-w_scene-over">
            <div className="hero-w_scene-over_c">
              <canvas data-intro-over-scene="" className="scene" />
            </div>
          </div>
          <div className="hero-w_scene-bg b-desk">
            <canvas data-intro-bg-scene="" className="scene" />
          </div>
          <div className="hero_themes">
            <div bg="dark" className="hero_themes_dark-1" />
            <div bg="light" className="hero_themes_light-1" />
            <div bg="dark" className="hero_themes_dark-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
