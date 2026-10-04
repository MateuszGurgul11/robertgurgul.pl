// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { tresci as t } from "@/content/strona-glowna";

export function Kompetencje() {
  return (
    <section className="section bg-light">
      <div className="container">
        <div className="apartments-w">
          <div data-tabs="" className="apartments-s">
            {/* Kompetencje na jeden ekran: lewa kolumna — opis + pionowa lista obszarów (zakładki),
                prawa — zdjęcia obszaru z panelem opisu. Przełączanie: initTabs (data-tab-trigger / data-tab-content),
                zdjęcia: initSlider. Style: public/assets/css/uklad.css (.rg-komp). */}
            <div id="apartments" className="rg-komp">
              <div className="rg-komp_lewa">
                <div data-scroll-reveal="ctn" className="title rg-komp_etykieta">
                      <div className="title_stars text-dark">
                        <div className="ico-8-12">
                          <div className="ico w-embed">
                            <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0 4C2.20914 4 4 2.20914 4 0C4 2.20914 5.79086 4 8 4C5.79086 4 4 5.79086 4 8C4 5.79086 2.20914 4 0 4Z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                        <div className="ico-8-12">
                          <div className="ico w-embed">
                            <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0 4C2.20914 4 4 2.20914 4 0C4 2.20914 5.79086 4 8 4C5.79086 4 4 5.79086 4 8C4 5.79086 2.20914 4 0 4Z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                        <div className="ico-8-12">
                          <div className="ico w-embed">
                            <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0 4C2.20914 4 4 2.20914 4 0C4 2.20914 5.79086 4 8 4C5.79086 4 4 5.79086 4 8C4 5.79086 2.20914 4 0 4Z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <h2 className="p6 text-dark">
                        {t.kompetencje.tytul}
                      </h2>
                      <div className="title_stars text-dark">
                        <div className="ico-8-12">
                          <div className="ico w-embed">
                            <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0 4C2.20914 4 4 2.20914 4 0C4 2.20914 5.79086 4 8 4C5.79086 4 4 5.79086 4 8C4 5.79086 2.20914 4 0 4Z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                        <div className="ico-8-12">
                          <div className="ico w-embed">
                            <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0 4C2.20914 4 4 2.20914 4 0C4 2.20914 5.79086 4 8 4C5.79086 4 4 5.79086 4 8C4 5.79086 2.20914 4 0 4Z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                        <div className="ico-8-12">
                          <div className="ico w-embed">
                            <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0 4C2.20914 4 4 2.20914 4 0C4 2.20914 5.79086 4 8 4C5.79086 4 4 5.79086 4 8C4 5.79086 2.20914 4 0 4Z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                <p data-scroll-reveal="p" className="rg-komp_opis text-dark">
                  {t.kompetencje.opis}
                </p>
                <div className="rg-komp_lista" role="tablist" aria-label={t.kompetencje.zakladkiEtykieta}>
                  {t.kompetencje.obszary.map((o, i) => (
                    <button
                      key={o.klucz}
                      type="button"
                      role="tab"
                      data-tab-trigger={o.klucz}
                      className={`rg-komp_tab${i === 0 ? " is-active" : ""}`}
                    >
                      <span className="p6 rg-komp_tab_nr">{o.numer}</span>
                      <span className="rg-komp_tab_nazwa text-dark">{o.zakladka}</span>
                    </button>
                  ))}
                </div>
                <p className="p6 text-gray rg-komp_podpis">
                  {t.kompetencje.podpis}
                </p>
              </div>
              <div className="rg-obszary_karty">
                  {t.kompetencje.obszary.map((o) => (
                    <div key={o.klucz} data-tab-content={o.klucz} role="tabpanel" className="rg-obszar">
                      <div className="rg-obszar_siatka">
                        <div slider={o.klucz} className="rg-obszar_galeria theme_on-dark">
                          {o.zdjecia.map((z, j) => (
                            <div key={j} slider="slide" className="rg-obszar_slajd">
                              <img src={z.src} srcSet={z.srcSet} loading="lazy" slider="img" alt={z.alt} sizes="(max-width: 991px) 100vw, 58vw" className="img" />
                            </div>
                          ))}
                          <div slider="pag" className="rg-obszar_pag">
                            <div className="slider_pag_count">
                              <div className="slider_pag_count_current">
                                <div slider="current" className="p6 text-dark a-center">{"00"}</div>
                              </div>
                              <div className="nav-item-divider bg-dark" />
                              <div className="slider_pag_count_total">
                                <div slider="total" className="p6 text-dark a-center">{"00"}</div>
                              </div>
                            </div>
                            <div className="btn-list">
                              <div slider="prev" className="btn-prev">
                                <div hover-btn-ico="" className="btn-ico">
                                  <a aria-label="Wstecz" href="#" className="btn-ico_link w-inline-block" />
                                  <div className="ico-16">
                                    <div hover="ico" className="btn-ico_icon text-dark">
                                      <div className="ico w-embed">
                                        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M10.9587 14.2788L11.332 13.8788L7.6787 7.93208L11.332 2.11875L10.9587 1.71875L4.1587 7.93208L10.9587 14.2788Z" fill="currentColor" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div hover="bg" className="btn-ico_bg sec">
                                    <div hover="bg-fill" className="btn-ico_bg_fill prim" />
                                  </div>
                                </div>
                              </div>
                              <div slider="next" className="btn-next">
                                <div hover-btn-ico="" className="btn-ico">
                                  <a aria-label="Dalej" href="#" className="btn-ico_link w-inline-block" />
                                  <div className="ico-16">
                                    <div hover="ico" className="btn-ico_icon text-dark">
                                      <div className="ico w-embed">
                                        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M5.0413 14.2788L4.66797 13.8788L8.3213 7.93208L4.66797 2.11875L5.0413 1.71875L11.8413 7.93208L5.0413 14.2788Z" fill="currentColor" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div hover="bg" className="btn-ico_bg sec">
                                    <div hover="bg-fill" className="btn-ico_bg_fill prim" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rg-obszar_info">
                          <span className="rg-obszar_numer" aria-hidden="true">{o.numer}</span>
                          <p className="p6 text-gray">
                            {t.kompetencje.obszarEtykieta} {o.numer} — {o.grupa}
                          </p>
                          <div className="u-16" />
                          <h3 className="h4 text-dark">{o.tytul}</h3>
                          <div className="u-24" />
                          <div className="tag-list">
                            {o.tagi.map((tag, j) => (
                              <div key={j} className="tag sec">
                                <p className="p6 text-dark">{tag}</p>
                              </div>
                            ))}
                          </div>
                          <div className="u-24" />
                          <div className="description-text text-dark w-richtext">
                            <p>{o.opis}</p>
                          </div>
                          <div className="u-32" />
                          <div className="btn-list">
                            <div modal-cta-open="cta" className="modal-trigger">
                              <a aria-label={t.kompetencje.przycisk} hover-btn="" data-wf--btn--variant="med" href="#" className="btn w-inline-block">
                                <div hover="label" className="btn_label">
                                  <div className="btn_label_text">
                                    <div hover="text" className="p6 text-light">
                                      {t.kompetencje.przycisk}
                                    </div>
                                  </div>
                                </div>
                                <div hover="hover" className="btn_hover" />
                                <div hover="bg" className="btn_bg" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            <div className="u-72 b-desk" />
            <div className="u-72 b-mob" />
            <div className="commissioning-s_transition">
              <img src="/assets/media/5934e42448-697c3da7844f5fc2f9b5d44d_transition-dark-02-4c.svg" loading="eager" alt="" className="img" />
            </div>
          </div>
          <div className="commissioning_themes">
            <div bg="light" className="commissioning_themes_light-1" />
            <div bg="dark" className="commissioning_themes_dark-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
