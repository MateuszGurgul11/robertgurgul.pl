// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { tresci as t } from "@/content/strona-glowna";

export function Materialy({ dokumenty, linki }: { dokumenty: { tytul: string; href: string }[]; linki: { etykieta: string; tytul: string; href: string }[] }) {
  return (
    <section id="blog" bg="dark" className="section bg-light theme_on-dark clip">
      <div className="container">
        <div className="blog-w">
          <div data-last-updated="" data-tabs="" className="blog-s">
            <div className="u-136" />
            <div className="blog-s_title rg-lewo">
              <div data-scroll-reveal="ctn" className="title">
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
                  {t.materialy.etykieta}
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
              <h3 data-scroll-reveal="h" className="h2 text-dark rg-tytul">
                {t.materialy.tytul}
              </h3>
              <div className="u-48" />
              <div data-scroll-reveal="ctn" className="blog-s_title_sub">
                <div className="blog-s_title_sub_left b-desk">
                  <div className="p4 text-dark">
                    {t.materialy.najnowsze}
                  </div>
                </div>
                <div data-tabs-hilight="" className="tabs">
                  <div className="tabs_list">
                    <div data-tab-hilight="" className="tabs_list_hilight" />
                    <div data-tab="" data-tab-trigger="news" className="tab-trigger is-active theme_on-light">
                      <a aria-label={t.materialy.zakladkaDokumenty} href="#" className="tab w-inline-block">
                        <div hover="label" className="tab_label">
                          <div className="tab_label_text">
                            <div hover="text" className="p6 text-dark">
                              {t.materialy.zakladkaDokumenty}
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div data-tab="" data-tab-trigger="stages" className="tab-trigger">
                      <a aria-label={t.materialy.zakladkaFilmy} href="#" className="tab w-inline-block">
                        <div hover="label" className="tab_label">
                          <div className="tab_label_text">
                            <div hover="text" className="p6 text-dark">
                              {t.materialy.zakladkaFilmy}
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="blog-s_title_sub_left b-desk">
                  <div data-target="" className="p4 text-dark a-right" />
                </div>
              </div>
            </div>
            <div className="u-104" />
            <div className="tab-content-list">
              <div data-view-all="w" data-tab-content="news" slider-id="news" className="tab-content is-1">
                <div floating-tip-btn="drag" className="news-slider-cms swiper w-dyn-list">
                  <div data-slider-reveal="true" role="list" className="news-slider-cms_list swiper-wrapper w-dyn-items">
                    {dokumenty.map((d, i) => (
                        <div key={i} data-view-all="item" role="listitem" className="news-slider-cms_list_item swiper-slide w-dyn-item">
                          <div hover-divider="" hover-img-card="" className="news-card">
                            <a aria-label={d.tytul} data-barba-prevent="all" href={d.href} className="news-card_link w-inline-block" />
                            <div className="news-card_img">
                              <div className="img-w">
                                <img hover="img" loading="eager" alt={t.materialy.okladki[i % t.materialy.okladki.length].alt} src={t.materialy.okladki[i % t.materialy.okladki.length].src} className="img" />
                              </div>
                            </div>
                            <div className="u-24" />
                            <div className="news-card_info">
                              <div data-prevent-flicker="true" hover="line" data-scroll-reveal="line" className="divider">
                                <div hover="line-l" className="line-l" />
                                <div className="line-s" />
                              </div>
                              <div className="u-16" />
                              <h4 className="h5 text-dark">
                                {d.tytul}
                              </h4>
                              <div className="u-24" />
                              <div className="divider-48">
                                <div data-prevent-flicker="true" hover="line" data-scroll-reveal="line" className="divider">
                                  <div hover="line-l" className="line-l" />
                                  <div className="line-s" />
                                </div>
                              </div>
                              <div className="u-24" />
                              <p className="p6 text-dark">
                                {t.materialy.dokumentOpis}
                              </p>
                            </div>
                          </div>
                          <div data-source="" className="d-none">
                            {t.materialy.dokumentTyp}
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
                <div className="u-72" />
                <div data-view-all="btn" data-scroll-reveal="ctn" className="blog-s_cms_link">
                  <a hover-divider="" hover-nav-item="" data-barba-prevent="all" href={t.materialy.dokumentyLink} className="nav-item w-inline-block">
                    <div hover="label" className="nav-item_label">
                      <div className="nav-item_label_text">
                        <div hover="text" className="p3 text-dark">
                          {t.materialy.zobaczWszystkie}
                        </div>
                      </div>
                      <div className="nav-item_label_text is-2">
                        <div hover="text" className="p3 text-dark">
                          {t.materialy.zobaczWszystkie}
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
              <div data-view-all="w" data-tab-content="stages" className="tab-content">
                <div className="line-s" />
                <div className="stages-cms w-dyn-list">
                  <div role="list" className="stages-cms_list w-dyn-items">
                    {linki.map((l, i) => (
                        <div key={i} data-view-all="item" role="listitem" className="stages-cms_list_item w-dyn-item">
                          <div hover-divider="" className="stages-card">
                            <a aria-label={l.tytul} data-barba-prevent="all" href={l.href} className="news-card_link w-inline-block" />
                            <div className="u-24" />
                            <div className="grid">
                              <div id="w-node-_2a8b811d-3573-b661-be6b-5d4437f5468f-37f5468b" className="stages-card_date">
                                <div className="p4 text-dark">
                                  {l.etykieta}
                                </div>
                              </div>
                              <div id="w-node-_2a8b811d-3573-b661-be6b-5d4437f54691-37f5468b" className="stages-card_title">
                                <h4 className="p4 text-dark">
                                  {l.tytul}
                                </h4>
                                <div className="ico-24 mob_ico-20 text-dark">
                                  <div className="ico w-embed">
                                    <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M5.0413 14.2788L4.66797 13.8788L8.3213 7.93208L4.66797 2.11875L5.0413 1.71875L11.8413 7.93208L5.0413 14.2788Z" fill="currentColor" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="u-24" />
                            <div className="stages-card_divider">
                              <div data-prevent-flicker="true" hover="line" data-scroll-reveal="line" className="divider">
                                <div hover="line-l" className="line-l" />
                                <div className="line-s" />
                              </div>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
                <div className="u-32" />
                <div data-view-all="btn" className="blog-s_cms_link right">
                  <a hover-divider="" hover-nav-item="" data-barba-prevent="all" href={t.materialy.filmyLink} className="nav-item w-inline-block">
                    <div hover="label" className="nav-item_label">
                      <div className="nav-item_label_text">
                        <div hover="text" className="p3 text-dark">
                          {t.materialy.zobaczWszystkie}
                        </div>
                      </div>
                      <div className="nav-item_label_text is-2">
                        <div hover="text" className="p3 text-dark">
                          {t.materialy.zobaczWszystkie}
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
            <div className="u-72" />
          </div>
        </div>
      </div>
    </section>
  );
}
