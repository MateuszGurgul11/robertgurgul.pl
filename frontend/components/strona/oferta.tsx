// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { tresci as t } from "@/content/strona-glowna";

export function OfertaWstep() {
  return (
    <section bg="dark" className="section bg-light theme_on-dark">
      <div className="container">
        <div className="u-136 b-desk" />
      </div>
    </section>
  );
}

export function Oferta() {
  return (
    <section className="section">
      <div className="container">
        <div className="benefits-w">
          <div className="benefits-s">
            <div className="benefits-s_intro-gap b-desk" />
            <div className="benefits-s_title-w">
              <div className="grid">
                <div id="w-node-_63065f4f-f010-a620-06d3-c793c5c7900d-a640d032" className="benefits-s_title">
                  <div className="title">
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
                    <h2 className="p6 text-dark a-center">
                      {t.oferta.etykieta}
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
                  <div className="u-32" />
                  <h3 className="h3 text-dark a-center">
                    {t.oferta.tytul}
                  </h3>
                </div>
              </div>
            </div>
            <div className="benefits-s_scene-intro">
              <div className="benefits-s_scene-intro_c">
                <canvas data-benefits-intro-scene="" className="scene" />
              </div>
            </div>
            <div id="benefits" className="benefits-s_gap" />
            <div device="mob" data-load-more="" className="benefits-s_cms test">
              <div className="benefits-cms test w-dyn-list">
                <div data-load-more="list" role="list" className="benefits-cms_list test w-dyn-items">
                  {t.oferta.uslugi.map((u, i) => (
                      <div key={i} id="w-node-c4d09b19-4037-2a37-b1ce-e1aadea27dc7-a640d032" role="listitem" className="benefits-cms_list_item w-dyn-item">
                        <div hover-img-card="" hover-benefit-card="" hover-btn-ico-trigger="" className="benefit-card theme_on-color test">
                          <div hover="name" className="benefit-card_name">
                            <div className="benefit-card_name_c">
                              <h4 className="p6 text-dark">
                                {u.tytul}
                              </h4>
                            </div>
                            <div className="benefit-card_btn">
                              <div className="btn-list">
                                <div hover-btn-ico="" className="btn-ico">
                                  <a aria-label="Więcej" href="#" className="btn-ico_link w-inline-block" />
                                  <div className="ico-16">
                                    <div hover="ico" className="btn-ico_icon text-dark">
                                      <div className="ico">
                                        <div className="ico-plus_hor w-embed">
                                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 11V13H5V11H19Z" fill="currentColor" />
                                          </svg>
                                        </div>
                                        <div hover="ico-ver" className="ico-plus_ver w-embed">
                                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 5H13V19H11V5Z" fill="currentColor" />
                                          </svg>
                                        </div>
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
                          <div hover="info" data-lenis-scroll="" className="benefit-card_info theme_on-dark scrollbar-none">
                            <div className="benefit-card_info_title">
                              <h5 hover="h" className="h6 text-dark">
                                {u.wstep}
                              </h5>
                              <div className="text-item_gap b-desk" />
                            </div>
                            <div className="u-48" />
                            <div className="benefit-card_info_line">
                              <div data-prevent-flicker="true" hover="line" data-scroll-reveal="line" className="divider">
                                <div hover="line-l" className="line-l" />
                                <div className="line-s" />
                              </div>
                            </div>
                            <div index-w="" className="benefit-card_info_list">
                              {u.punkty.map((p, j) => (
                                  <div key={j} className="benefit-card_info_list_item">
                                    <div className="text-item">
                                      <div className="u-16" />
                                      <div className="text-item_">
                                        <p hover="p" className="p6 text-dark">
                                          {p}
                                        </p>
                                      </div>
                                      <div className="u-16" />
                                      <div hover="line" className="line-s" />
                                    </div>
                                  </div>
                              ))}
                            </div>
                            <div className="benefit-card_info_grad-over" />
                          </div>
                          <div className="benefit-card_bg test">
                            <div className="over-gradient-bot" />
                            <div className="img-w test">
                              <img src={u.zdjecie.src} srcSet={u.zdjecie.srcSet} loading="eager" hover="img" alt={u.zdjecie.alt} sizes="100vw" className="img" />
                            </div>
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
              <div className="benefits-s_cms_btn b-mob">
                <div className="u-32" />
                <div className="btn-list">
                  <div data-load-more="btn" className="load-more-trigger">
                    <a hover-divider="" hover-nav-item="" href="#" className="nav-item w-inline-block">
                      <div hover="label" className="nav-item_label">
                        <div className="nav-item_label_text">
                          <div hover="text" className="p3 text-dark">
                            {t.oferta.pokazWiecej}
                          </div>
                        </div>
                        <div className="nav-item_label_text is-2">
                          <div hover="text" className="p3 text-dark">
                            {t.oferta.pokazWiecej}
                          </div>
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
              <div className="benefits-s_scene-outro b-desk">
                <canvas data-benefits-outro-scene="" className="scene" />
              </div>
              <div className="benefits-cms-gap b-desk w-dyn-list">
                <div role="list" className="benefits-cms-gap_list w-dyn-items">
                  <div id="w-node-f761f3f7-3be2-e75f-e0c6-2042e37376e3-a640d032" role="listitem" className="benefits-cms-gap_list_item w-dyn-item" />
                  <div id="w-node-f761f3f7-3be2-e75f-e0c6-2042e37376e3-a640d032" role="listitem" className="benefits-cms-gap_list_item w-dyn-item" />
                  <div id="w-node-f761f3f7-3be2-e75f-e0c6-2042e37376e3-a640d032" role="listitem" className="benefits-cms-gap_list_item w-dyn-item" />
                  <div id="w-node-f761f3f7-3be2-e75f-e0c6-2042e37376e3-a640d032" role="listitem" className="benefits-cms-gap_list_item w-dyn-item" />
                  <div id="w-node-f761f3f7-3be2-e75f-e0c6-2042e37376e3-a640d032" role="listitem" className="benefits-cms-gap_list_item w-dyn-item" />
                  <div id="w-node-f761f3f7-3be2-e75f-e0c6-2042e37376e3-a640d032" role="listitem" className="benefits-cms-gap_list_item w-dyn-item" />
                  <div id="w-node-f761f3f7-3be2-e75f-e0c6-2042e37376e3-a640d032" role="listitem" className="benefits-cms-gap_list_item w-dyn-item" />
                  <div id="w-node-f761f3f7-3be2-e75f-e0c6-2042e37376e3-a640d032" role="listitem" className="benefits-cms-gap_list_item w-dyn-item" />
                </div>
              </div>
            </div>
          </div>
          <div className="benefits_themes">
            <div bg="dark" className="benefits_themes_dark-1" />
            <div bg="light" className="benefits_themes_light-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
