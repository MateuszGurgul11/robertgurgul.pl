// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { tresci as t } from "@/content/strona-glowna";

export function Stopka() {
  return (
    <div className="footer clip">
      <section className="section bg-light theme_on-dark">
        <div className="container">
          <div className="footer_scroll-area">
            <div className="footer-w">
              <div className="footer-s">
                <div className="u-136" />
                <div className="footer-s_c">
                  <div className="footer-s_top">
                    <div className="grid">
                      <div id="w-node-_50d4bf81-750e-6eac-7da5-0d76d7aa7c2b-d7aa7c22" className="footer-s_top_desc">
                        <div className="footer-s_top_info_address-l">
                          <h3 className="p6 text-gray">
                            {t.stopka.lokalizacjaEtykieta}
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
                        <div className="btn-list">
                          <div className="social-cms w-dyn-list" />
                        </div>
                        <div className="u-24" />
                      </div>
                      <div id="w-node-_50d4bf81-750e-6eac-7da5-0d76d7aa7c32-d7aa7c22" className="footer-s_top_info">
                        <div className="footer-s_top_info_address-r a-right">
                          <h3 className="p6 text-gray">
                            {t.stopka.kontaktEtykieta}
                            <br />
                          </h3>
                          <div className="unit-4" />
                          <a aria-label={t.kontakt.adresLinia1} hover-nav-item-important="" href={t.kontakt.mapa} target="_blank" className="nav-item w-inline-block">
                            <div hover="label" className="nav-item_label">
                              <div className="nav-item_label_text">
                                <p hover="text" className="p6 text-dark">
                                  {t.kontakt.adresLinia1}
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="u-24" />
                        </div>
                        <div className="footer-s_top_info_address-r a-right">
                          <h4 className="p6 text-gray">
                            {t.stopka.miasto}
                          </h4>
                          <div className="unit-4" />
                          <a aria-label={t.kontakt.adresLinia2} hover-nav-item-important="" href={t.kontakt.mapa} target="_blank" className="nav-item w-inline-block">
                            <div hover="label" className="nav-item_label">
                              <div className="nav-item_label_text">
                                <p hover="text" className="p6 text-dark">
                                  {t.kontakt.adresLinia2}
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="u-24" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer-s_center">
                    <div className="contact-cms w-dyn-list">
                      <div role="list" className="contact-cms_list w-dyn-items">
                        <div role="listitem" className="contact-cms_list_item w-dyn-item">
                          <a aria-label={t.kontakt.telefon} hover-divider="" href={t.kontakt.telefonHref} className="nav-item w-inline-block">
                            <div hover="label" className="nav-item_label">
                              <div className="nav-item_label_text">
                                <div hover="text" className="p2 text-dark">
                                  {t.kontakt.telefon}
                                </div>
                              </div>
                              <div className="nav-item_label_text is-2">
                                <p hover="text" className="p2 text-dark">
                                  {t.kontakt.telefon}
                                </p>
                              </div>
                            </div>
                            <div className="nav-item_line">
                              <div data-prevent-flicker="true" hover="line" data-scroll-reveal="line" className="divider">
                                <div hover="line-l" className="line-l" />
                                <div className="line-s" />
                              </div>
                            </div>
                          </a>
                        </div>
                        <div role="listitem" className="contact-cms_list_item w-dyn-item">
                          <a aria-label={t.kontakt.email} hover-divider="" href={t.kontakt.emailHref} className="nav-item w-inline-block">
                            <div hover="label" className="nav-item_label">
                              <div className="nav-item_label_text">
                                <div hover="text" className="p2 text-dark">
                                  {t.kontakt.email}
                                </div>
                              </div>
                              <div className="nav-item_label_text is-2">
                                <p hover="text" className="p2 text-dark">
                                  {t.kontakt.email}
                                </p>
                              </div>
                            </div>
                            <div className="nav-item_line">
                              <div data-prevent-flicker="true" hover="line" data-scroll-reveal="line" className="divider">
                                <div hover="line-l" className="line-l" />
                                <div className="line-s" />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mob_footer-s_scene-gap b-mob" />
                  <div className="footer-s_bot theme_on-light">
                    <div className="nav-item-list">
                      <div className="sound b-desk" />
                      <div className="p6 text-dark">
                        {t.stopka.prawa}
                      </div>
                    </div>
                    <div className="nav-item-list">
                      <div className="sound b-desk" />
                      <a aria-label={t.stopka.polityka} hover-nav-item="" href="#" target="_blank" className="nav-item w-inline-block">
                        <div hover="label" className="nav-item_label">
                          <div className="nav-item_label_text">
                            <div hover="text" className="p6 text-dark">
                              {t.stopka.polityka}
                              <br />
                            </div>
                          </div>
                          <div className="nav-item_label_text is-2">
                            <div hover="text" className="p6 text-dark">
                              {t.stopka.polityka}
                              <br />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="u-16" />
              </div>
              <div className="footer-w_bg">
                <div className="footer-w_bg_scene">
                  <canvas data-footer-scene="" className="scene" />
                </div>
                <div className="transition-bg" />
              </div>
            </div>
            <div id="footer" className="footer_scroll-trigger" />
          </div>
        </div>
      </section>
      <div className="footer_themes">
        <div bg="dark" className="footer_themes_dark-1" />
        <div bg="light" className="footer_themes_light-1" />
      </div>
    </div>
  );
}
