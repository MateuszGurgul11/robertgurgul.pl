// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { tresci as t } from "@/content/strona-glowna";

export function Lokalizacja() {
  return (
    <section id="location" bg="dark" className="section bg-light theme_on-dark">
      <div className="container">
        <div className="location-w">
          <div className="location-s">
            <div className="u-136" />
            <div className="grid">
              <div id="w-node-_7f2bd78c-88fc-d632-a4a9-cde3ece97582-a640d032" className="location-s_title">
                <h2 data-scroll-reveal="h" className="h2 text-dark rg-tytul">
                  {t.lokalizacja.naglowek1} {t.lokalizacja.naglowek2} {t.lokalizacja.naglowek3} {t.lokalizacja.naglowek4}
                </h2>
              </div>
            </div>
            <div className="u-104" />
            <div className="grid">
              <div id="w-node-_9aa3edfa-e162-c544-2728-ad132459384b-a640d032" className="location-s_desc_map">
                <div map="" className="map-w">
                  <img src="/assets/media/mapa-fermy.svg" loading="eager" alt="Mapa okolicy fermy w Wolicy Koziej koło Nowego Miasta nad Wartą (dane © OpenStreetMap)" className="map" />
                  <div className="map-w_pin is-0" style={{"inset": "auto", "left": "calc(50.0% - 6px)", "top": "calc(51.7% - 6px)"}}>
                    <div pin="" className="map-pin map-pin--ferma">
                      <div className="map-pin_label">
                        <h2 className="p6 pin text-dark">
                          {t.lokalizacja.pinezki.ferma1}
                          <br />
                          {t.lokalizacja.pinezki.ferma2}
                        </h2>
                      </div>
                      <div className="map-pin_ico w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 12 12">
                          <circle cx="6" cy="6" r="5.5" fill="none" stroke="currentColor" strokeWidth="1" />
                          <circle cx="6" cy="6" r="3" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="map-w_pin is-1" style={{"inset": "auto", "left": "calc(33.9% - 6px)", "top": "calc(45.1% - 6px)"}}>
                    <div data-scroll-reveal="ctn" pin="" data-wf--map-pin--variant="center" className="map-pin">
                      <div className="map-pin_label">
                        <h2 className="p6 pin text-dark">
                          {t.lokalizacja.pinezki.wolicaKozia}
                        </h2>
                      </div>
                      <div className="map-pin_ico w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 12 12">
                          <circle cx="6" cy="6" r="5.5" fill="none" stroke="currentColor" strokeWidth="1" />
                          <circle cx="6" cy="6" r="3" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="map-w_pin is-2" style={{"inset": "auto", "left": "calc(84.6% - 6px)", "top": "calc(18.4% - 6px)"}}>
                    <div data-scroll-reveal="ctn" pin="" data-wf--map-pin--variant="center" className="map-pin">
                      <div className="map-pin_label">
                        <h2 className="p6 pin text-dark">
                          {t.lokalizacja.pinezki.debno}
                        </h2>
                      </div>
                      <div className="map-pin_ico w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 12 12">
                          <circle cx="6" cy="6" r="5.5" fill="none" stroke="currentColor" strokeWidth="1" />
                          <circle cx="6" cy="6" r="3" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="map-w_pin is-3" style={{"inset": "auto", "left": "calc(20.3% - 6px)", "top": "calc(28.2% - 6px)"}}>
                    <div data-scroll-reveal="ctn" pin="" data-wf--map-pin--variant="right" className="map-pin">
                      <div className="map-pin_label w-variant-b522eeb3-6bf0-70d7-f8e3-03aadf66f93c">
                        <h2 className="p6 pin text-dark">
                          {t.lokalizacja.pinezki.hermanow}
                        </h2>
                      </div>
                      <div className="map-pin_ico w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 12 12">
                          <circle cx="6" cy="6" r="5.5" fill="none" stroke="currentColor" strokeWidth="1" />
                          <circle cx="6" cy="6" r="3" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="map-w_pin is-5" style={{"top": "30%"}}>
                    <div pin="" className="map-pin">
                      <div className="map-pin_vector-r_label">
                        <h2 className="p6 pin text-dark a-right">
                          {t.lokalizacja.pinezki.lutynia}
                        </h2>
                        <div className="p6 pin text-gray a-right">
                          {t.lokalizacja.pinezki.lutyniaOdleglosc}
                        </div>
                      </div>
                      <div className="map-pin_ico w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 12 12">
                          <circle cx="6" cy="6" r="5.5" fill="none" stroke="currentColor" strokeWidth="1" />
                          <circle cx="6" cy="6" r="3" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="map-pin_vector is-2 w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M38.4216 19.9981L35.2565 14.0195L34.0781 14.6434L36.913 19.9981L34.0781 25.3529L35.2565 25.9767L38.4216 19.9981Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="map-w_pin is-6" style={{"top": "39%"}}>
                    <div pin="" className="map-pin">
                      <div className="map-pin_vector-l_label">
                        <h2 className="p6 pin text-dark">
                          {t.lokalizacja.pinezki.noweMiasto}
                        </h2>
                        <div className="p6 pin text-gray">
                          {t.lokalizacja.pinezki.noweMiastoOdleglosc}
                        </div>
                      </div>
                      <div className="map-pin_ico w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 12 12">
                          <circle cx="6" cy="6" r="5.5" fill="none" stroke="currentColor" strokeWidth="1" />
                          <circle cx="6" cy="6" r="3" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="map-pin_vector is-1 w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M38.4216 19.9981L35.2565 14.0195L34.0781 14.6434L36.913 19.9981L34.0781 25.3529L35.2565 25.9767L38.4216 19.9981Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="map-w_pin is-7" style={{"inset": "auto", "left": "calc(40.9% - 6px)", "top": "calc(68.5% - 6px)"}}>
                    <div data-scroll-reveal="ctn" pin="" data-wf--map-pin--variant="right" className="map-pin">
                      <div className="map-pin_label w-variant-b522eeb3-6bf0-70d7-f8e3-03aadf66f93c">
                        <h2 className="p6 pin text-dark">
                          {t.lokalizacja.pinezki.wolicaNowa}
                        </h2>
                      </div>
                      <div className="map-pin_ico w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 12 12">
                          <circle cx="6" cy="6" r="5.5" fill="none" stroke="currentColor" strokeWidth="1" />
                          <circle cx="6" cy="6" r="3" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Miasta poza kadrem mapy: znacznik przy krawędzi, strzałka w kierunku miasta (odległość w linii prostej). */}
                  {[
                    { klucz: "sroda", nazwa: t.lokalizacja.pinezki.sroda, km: t.lokalizacja.pinezki.srodaOdleglosc, left: "13%", top: "9%", kat: -128 },
                    { klucz: "jarocin", nazwa: t.lokalizacja.pinezki.jarocin, km: t.lokalizacja.pinezki.jarocinOdleglosc, left: "62%", top: "91%", kat: 77 },
                  ].map((m) => (
                    <div key={m.nazwa} className={`map-w_pin rg-pin-daleko rg-pin-${m.klucz}`} style={{ inset: "auto", left: `calc(${m.left} - 6px)`, top: `calc(${m.top} - 6px)` }}>
                      <div data-scroll-reveal="ctn" pin="" className="map-pin">
                        <div className="map-pin_vector-l_label">
                          <h2 className="p6 pin text-dark">{m.nazwa}</h2>
                          <div className="p6 pin text-gray">{m.km}</div>
                        </div>
                        <div className="map-pin_ico w-embed">
                          <svg width="100%" height="100%" viewBox="0 0 12 12">
                            <circle cx="6" cy="6" r="5.5" fill="none" stroke="currentColor" strokeWidth="1" />
                            <circle cx="6" cy="6" r="3" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="map-pin_vector w-embed" style={{ transform: `rotate(${m.kat}deg)` }}>
                          <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.4216 19.9981L35.2565 14.0195L34.0781 14.6434L36.913 19.9981L34.0781 25.3529L35.2565 25.9767L38.4216 19.9981Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div id="w-node-b94c8769-f4ba-22f2-2c76-c4acbaa7f3fa-a640d032" className="location-s_desc">
                <p data-scroll-reveal="p" className="p4 text-dark">
                  {t.lokalizacja.tekst}
                </p>
                <div className="u-32" />
                <div className="location-s_desc_btn">
                  <div data-scroll-reveal="ctn" className="btn-list">
                    <div modal-cta-open="cta" className="modal-trigger">
                      <a aria-label={t.lokalizacja.przycisk} hover-btn="" data-wf--btn--variant="med" href="#" className="btn w-inline-block">
                        <div hover="label" className="btn_label">
                          <div className="btn_label_text">
                            <div hover="text" className="p6 text-light">
                              {t.lokalizacja.przycisk}
                            </div>
                          </div>
                        </div>
                        <div hover="hover" className="btn_hover" />
                        <div hover="bg" className="btn_bg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="u-72" />
                {/* Specjalizacje: numerowany spis obok zdjęcia (własny układ, style: public/assets/css/uklad.css) */}
                <div className="rg-spec">
                  <figure className="rg-spec_foto">
                    <div className="img-w">
                      <img src="/assets/media/cms-15-960.webp" srcSet="/assets/media/cms-15-800.webp 800w, /assets/media/cms-15-960.webp 960w" loading="lazy" sizes="(max-width: 991px) 100vw, 42vw" alt="Ferma Kogut" className="img" />
                    </div>
                    <figcaption className="p6 rg-spec_podpis">[ Ferma Kogut ]</figcaption>
                  </figure>
                  <div className="rg-spec_karta theme_on-light">
                    <div className="rg-spec_top">
                      <h3 className="p6 text-dark">{t.lokalizacja.specjalizacjeTytul}</h3>
                      <span className="p6 text-gray">[ {String(t.lokalizacja.specjalizacje.length).padStart(2, "0")} ]</span>
                    </div>
                    <ol className="rg-spec_lista">
                      {t.lokalizacja.specjalizacje.map((s) => (
                        <li key={s.numer} data-scroll-reveal="ctn" className="rg-spec_item">
                          <span className="p6 rg-spec_nr">{s.numer}</span>
                          <span className="h5 text-dark rg-spec_nazwa">{s.nazwa}</span>
                          <span className="rg-spec_gw text-dark">
                          <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 4C2.20914 4 4 2.20914 4 0C4 2.20914 5.79086 4 8 4C5.79086 4 4 5.79086 4 8C4 5.79086 2.20914 4 0 4Z" fill="currentColor" />
                          </svg>
                          </span>
                        </li>
                      ))}
                    </ol>
                    <div className="rg-spec_dol">
                      <div className="rg-spec_adres">
                        <h3 className="p6 text-gray">{t.lokalizacja.adresEtykieta}</h3>
                        <div className="unit-4" />
                        <a aria-label={t.kontakt.adres} hover-nav-item-important="" href={t.kontakt.mapa} target="_blank" className="nav-item w-inline-block">
                          <div hover="label" className="nav-item_label">
                            <div className="nav-item_label_text">
                              <p hover="text" className="p6 text-dark">
                                {t.kontakt.adresLinia1}
                                <br />
                                {t.kontakt.adresLinia2}
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="btn-list">
                        <div modal-cta-open="cta" className="modal-trigger">
                          <a aria-label={t.lokalizacja.przycisk2} hover-btn="" data-wf--btn--variant="med" href="#" className="btn w-inline-block">
                            <div hover="label" className="btn_label">
                              <div className="btn_label_text">
                                <div hover="text" className="p6 text-light">
                                  {t.lokalizacja.przycisk2}
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
              </div>
            </div>
            <div className="u-136" />
          </div>
        </div>
      </div>
    </section>
  );
}
