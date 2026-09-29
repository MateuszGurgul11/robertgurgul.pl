// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { tresci as t } from "@/content/strona-glowna";

export function KontaktCta() {
  return (
    <section id="cta" bg="color" className="section theme_on-color">
      <div className="container">
        <div className="cta-w">
          <div className="cta-s">
            <div data-scroll-reveal="w" className="grid-c mob_8-columns">
              <div parallax="ctn-up" data-scroll-reveal="card" id="w-node-_1bd562d1-f883-7e6d-5686-9faf4ce91bd7-a640d032" className="cta-s_card-w theme_on-light">
                <div className="cta-s_card">
                  <div className="cta-s_card_top">
                    <p className="p6 text-dark a-center">
                      {t.kontaktCta.tekst}
                    </p>
                    <div className="u-24" />
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
                  <div className="cta-s_card_center">
                    <h2 className="h5 text-dark a-center">
                      {t.kontaktCta.tytul}
                    </h2>
                    <div className="u-24" />
                    <div className="btn-list">
                      <div modal-cta-open="cta" className="modal-trigger">
                        <a aria-label={t.kontaktCta.przycisk} hover-btn="" data-wf--btn--variant="med" href="#" className="btn w-inline-block">
                          <div hover="label" className="btn_label">
                            <div className="btn_label_text">
                              <div hover="text" className="p6 text-light">
                                {t.kontaktCta.przycisk}
                              </div>
                            </div>
                          </div>
                          <div hover="hover" className="btn_hover" />
                          <div hover="bg" className="btn_bg" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="cta-s_card_bot">
                    <div className="contact-cms w-dyn-list">
                      <div role="list" className="contact-cms_list w-dyn-items">
                        <div role="listitem" className="contact-cms_list_item w-dyn-item">
                          <a aria-label={t.kontakt.telefon} hover-nav-item-important="" href={t.kontakt.telefonHref} className="nav-item w-inline-block">
                            <div hover="label" className="nav-item_label">
                              <div className="nav-item_label_text">
                                <p hover="text" className="p6 text-dark">
                                  {t.kontakt.telefon}
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div role="listitem" className="contact-cms_list_item w-dyn-item">
                          <a aria-label={t.kontakt.email} hover-nav-item-important="" href={t.kontakt.emailHref} className="nav-item w-inline-block">
                            <div hover="label" className="nav-item_label">
                              <div className="nav-item_label_text">
                                <p hover="text" className="p6 text-dark">
                                  {t.kontakt.email}
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="u-16" />
                    <div data-prevent-flicker="true" hover="line" data-scroll-reveal="line" className="divider">
                      <div hover="line-l" className="line-l" />
                      <div className="line-s" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cta-w_bg">
            <div className="cta-w_bg_transition-t">
              <img src="/assets/media/6b0b9dbe51-697c433cb34f01cb48e5a44e_transition-dark-t-04-4c.svg" loading="eager" alt="" className="img" />
            </div>
            <div parallax="w" className="img-w">
              <img className="img-p" src="/assets/media/kury-tlo-1920.webp" srcSet="/assets/media/kury-tlo-800.webp 800w, /assets/media/kury-tlo-1280.webp 1280w, /assets/media/kury-tlo-1920.webp 1920w" alt={t.kontaktCta.zdjecieAlt} sizes="100vw" parallax="img" loading="eager" />
            </div>
            <div className="cta-w_bg_transition-b">
              <img src="/assets/media/e510680a13-697c43b1823139f755ab2fc5_transition-dark-b-07-4c.svg" loading="eager" alt="" className="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
