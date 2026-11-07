// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { tresci as t } from "@/content/strona-glowna";
import { IkonaKury } from "@/components/strona/ikona-kury";

export function Galeria({ zdjecia }: { zdjecia: { src: string; alt: string }[] }) {
  return (
    <section id="gallery" bg="dark" className="section">
      <div className="container">
        <div className="gallery-w">
          <div className="gallery-s">
            <div className="u-16" />
            <h2 data-scroll-reveal="h" className="h2 text-dark rg-tytul">
              {t.galeria.tytul1} {t.galeria.tytul2}
            </h2>
            <div className="u-16" />
            <div slider="gallery" className="gallery-s_cms theme_on-dark">
              <div slider="pag" className="slider_pag">
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
              <div className="over-gradient-bot" />
              <div className="gallery-cms w-dyn-list">
                <div role="list" className="gallery-cms_list w-dyn-items">
                  {zdjecia.map((z, i) => (
                      <div key={i} slider="slide" role="listitem" className="gallery-cms_list_item w-dyn-item">
                        <div className="gallery-slide">
                          <img src={z.src} loading="lazy" slider="img" alt={z.alt} className="img" />
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid-c">
              <div parallax="w" id="w-node-_831aa1a3-90a3-5b2e-a7f7-ba72de77f1b8-a640d032" className="gallery-s_card-w theme_on-light">
                <div parallax="img" className="gallery-s_card">
                  <div className="gallery-s_card_btn">
                    <div className="btn-list">
                      <div modal-cta-open="cta" className="modal-trigger">
                        <a aria-label={t.galeria.przycisk} hover-btn="" data-wf--btn--variant="med" href="#" className="btn w-inline-block">
                          <div hover="label" className="btn_label">
                            <div className="btn_label_text">
                              <div hover="text" className="p6 text-light">
                                {t.galeria.przycisk}
                              </div>
                            </div>
                          </div>
                          <div hover="hover" className="btn_hover" />
                          <div hover="bg" className="btn_bg" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="grid _4-columns">
                    <div id="w-node-_5ed37a24-1f1c-7a5e-8d6d-95383f44cdeb-a640d032" className="gallery-s_card_desc">
                      <div className="logo-diagram text-dark w-embed">
                        <IkonaKury />
                      </div>
                      <div className="u-32" />
                      <p className="p6 text-dark">
                        {t.galeria.podsumowanie}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-16" />
          </div>
          <div className="gallery-w_bg">
            <div className="gallery-w_bg_transition">
              <img src="/assets/media/d5cc2bc85d-697c3eec307d786c260b8c0f_transition-dark-03-4c.svg" loading="lazy" alt="" className="img" />
            </div>
            <div className="gallery-w_bg_b" />
          </div>
        </div>
      </div>
    </section>
  );
}
