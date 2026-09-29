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
                <h2 parallax="h1" data-scroll-reveal="h" className="h1 text-dark location-s">
                  <span id="" className="location-s_title_row-1">
                    <span>
                      {t.lokalizacja.naglowek1}
                    </span>
                  </span>
                  <span id="" className="location-s_title_row-2">
                    <span className="p1">
                      {t.lokalizacja.naglowek2}
                    </span>
                    <span>
                      {t.lokalizacja.naglowek3}
                    </span>
                  </span>
                  <span id="" className="location-s_title_row-3">
                    <span>
                      {t.lokalizacja.naglowek4}
                    </span>
                  </span>
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
              </div>
            </div>
            <div className="b-desk">
              <div className="u-136" />
              <div className="grid-c">
                <div parallax="ctn-down" slider-text="locations" id="w-node-f7c45a6c-6886-9264-49c3-f1452637f900-a640d032" className="location-s_slider theme_on-light">
                  <div className="location-s_slider_title">
                    <h3 className="p6 text-dark">
                      {t.lokalizacja.specjalizacjeTytul}
                    </h3>
                  </div>
                  <div className="locations-cms w-dyn-list">
                    <div role="list" className="locations-cms_list w-dyn-items">
                      {t.lokalizacja.specjalizacje.map((s, i) => (
                          <div key={i} slider="slide" role="listitem" className="locations-cms_list_item w-dyn-item">
                            <div className="location-slide">
                              <div className="location-slide_min-w">
                                <div className="location-slide_min">
                                  <div className="location-slide_min_label">
                                    <h4 slider="ctn" className="h1 text-dark">
                                      <span>
                                        {s.numer}
                                      </span>
                                      <span className="h5" />
                                    </h4>
                                  </div>
                                  <div slider="circle" className="location-slide_min_bg">
                                    <div className="location-slide_min_bg_line w-embed">
                                      <svg width="100%" height="100%" viewBox="0 0 360 360">
                                        <circle slider="progress-line" cx="180" cy="180" r="179.5" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(-90 180 180)" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="u-32" />
                              <div className="location-slide_info">
                                <h4 slider="p" className="p4 text-dark a-center">
                                  <span className="location-slide_info_row">
                                    {s.etykieta}
                                  </span>
                                  <span className="location-slide_info_row">
                                    {s.nazwa}
                                  </span>
                                </h4>
                              </div>
                            </div>
                          </div>
                      ))}
                    </div>
                  </div>
                  <div slider="pag" className="slider_pag location">
                    <div className="slider_pag_count">
                      <div className="slider_pag_count_current">
                        <div slider="current" className="p6 text-dark a-center">
                          {"00"}
                        </div>
                      </div>
                      <div className="nav-item-divider bg-dark" />
                      <div className="slider_pag_count_total">
                        <div slider="total" className="p6 text-dark a-center">
                          {"00"}
                        </div>
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
              </div>
              <div className="grid-c">
                <div id="w-node-_96362884-09e0-a2f8-fd36-c81b34dd4942-a640d032" className="location-s_cta-w">
                  <div className="location-s_cta">
                    <div className="container">
                      <div className="location-s_cta_">
                        <div className="location-s_cta_-_address">
                          <div className="u-16" />
                          <h3 className="p6 text-gray">
                            {t.lokalizacja.adresEtykieta}
                          </h3>
                          <div className="unit-4" />
                          <a aria-label={t.kontakt.adres} hover-nav-item-important="" href={t.kontakt.mapa} target="_blank" className="nav-item w-inline-block">
                            <div hover="label" className="nav-item_label">
                              <div className="nav-item_label_text">
                                <p hover="text" className="p6 text-dark">
                                  {t.kontakt.adres}
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="u-24" />
                        </div>
                        <div className="u-72" />
                        <div className="location-s_cta_btn">
                          <div modal-cta-open="cta" className="modal-trigger">
                            <a aria-label={t.lokalizacja.przycisk2} data-magnetic-strength="" href="#" className="btn-circle w-inline-block">
                              <div className="btn-circle_bg" />
                              <div data-magnetic-inner-target="" className="btn-circle_label">
                                <div className="btn-circle_label_text">
                                  <div hover="text" className="p6 text-dark">
                                    {t.lokalizacja.przycisk2}
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div parallax="ctn-up" id="w-node-fa108e41-30f6-ba76-9105-4ad4e5a8e630-a640d032" className="location-s_img">
                  <div className="img-w">
                    <img src="/assets/media/cms-15-960.webp" srcSet="/assets/media/cms-15-800.webp 800w, /assets/media/cms-15-960.webp 960w" loading="eager" sizes="100vw" alt="Ferma Kogut" className="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="b-mob">
              <div slider-id="benefits" parallax="ctn-down" className="mob_location-s_slider theme_on-light">
                <div className="mob_location-cms swiper w-dyn-list">
                  <div role="list" className="mob_location-cms_list swiper-wrapper w-dyn-items">
                    {t.lokalizacja.specjalizacje.map((s, i) => (
                        <div key={i} slider="slide" role="listitem" className="mob_location-cms_list_item swiper-slide w-dyn-item">
                          <div className="mob_location-card">
                            <h1 slider="ctn" className="h2 text-dark">
                              <span>
                                {s.numer}
                              </span>
                              <span className="h6" />
                            </h1>
                            <p slider="p" className="p6 text-dark">
                              <span className="location-slide_info_row">
                                {`${s.etykieta} `}
                              </span>
                              <span className="location-slide_info_row">
                                {s.nazwa}
                              </span>
                            </p>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="u-104" />
              <div className="location-s_cta_-_address">
                <div className="p6 text-gray">
                  {t.lokalizacja.adresEtykieta}
                </div>
                <div className="unit-4" />
                <a aria-label={t.kontakt.adres} hover-nav-item-important="" href={t.kontakt.mapa} target="_blank" className="nav-item w-inline-block">
                  <div hover="label" className="nav-item_label">
                    <div className="nav-item_label_text">
                      <p hover="text" className="p6 text-dark">
                        {t.kontakt.adres}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="u-136" />
          </div>
        </div>
      </div>
    </section>
  );
}
