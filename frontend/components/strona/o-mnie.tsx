// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { tresci as t } from "@/content/strona-glowna";

export function PrzejscieOMnie() {
  return (
    <div className="about-s_transition">
      <img src="/assets/media/968eec43e7-6a84d7bda6314e15c2a414ef_transition-light-01-3c.svg" loading="eager" alt="" className="img" />
      <div className="about-s_transition_bg" />
    </div>
  );
}

export function OMnie() {
  return (
    <section id="about" bg="light" className="section bg-light theme_on-light">
      <div className="container">
        <div className="about-w">
          <div className="about-s rg-about">
            <div className="u-136" />
            <div className="rg-about_head">
              <div className="rg-about_label">
                <p data-scroll-reveal="p" className="p3 text-dark">
                  {t.oMnie.etykieta}
                </p>
                <div className="u-16" />
                <div className="divider-48">
                  <div data-prevent-flicker="true" hover="line" data-scroll-reveal="line" className="divider">
                    <div hover="line-l" className="line-l" />
                    <div className="line-s" />
                  </div>
                </div>
              </div>
              <div className="about-s_title">
                <div className="about-s_title_">
                  <h2 data-scroll-reveal="h" className="h1 text-dark">
                    {t.oMnie.imie}
                  </h2>
                </div>
                <div className="u-32" />
                <div data-scroll-reveal="ctn" className="p3-list">
                  <p className="p3 text-dark">
                    {t.oMnie.rola}
                  </p>
                </div>
              </div>
            </div>
            <div className="u-104" />
            <div className="rg-about_body">
              <h3 data-scroll-reveal="h" className="h5 text-dark rg-about_lead">
                {t.oMnie.lead}
              </h3>
              <div className="rg-about_cols">
                {t.oMnie.kolumny.map((k, i) => (
                    <div key={i} className="rg-about_col">
                      <p data-scroll-reveal="p" className="p6 text-dark rg-about_kicker">
                        <span className="rg-about_num">
                          {k.numer}
                        </span>
                        {k.tytul}
                      </p>
                      <div className="divider-48">
                        <div data-prevent-flicker="true" hover="line" data-scroll-reveal="line" className="divider">
                          <div hover="line-l" className="line-l" />
                          <div className="line-s" />
                        </div>
                      </div>
                      <div className="u-24" />
                      <p data-scroll-reveal="p" className="rg-about_text">
                        {k.tekst}
                      </p>
                    </div>
                ))}
              </div>
              <div className="rg-about_foot">
                <div className="rg-about_foot-l">
                  <p className="p6 text-gray">
                    {t.oMnie.specjalizacjaEtykieta}
                  </p>
                  <div className="u-16" />
                  <div data-scroll-reveal="ctn" className="rg-about_tags">
                    {t.oMnie.gatunki.map((g, i) => (
                        <div key={i} className="tag rg-tag">
                          <p className="p6 text-dark">
                            {g.nazwa}
                          </p>
                        </div>
                    ))}
                  </div>
                  <div className="u-32" />
                  <div data-scroll-reveal="ctn" className="btn-list">
                    <div modal-cta-open="cta" className="modal-trigger">
                      <a aria-label={t.oMnie.przycisk} hover-btn="" data-wf--btn--variant="med" href="#" className="btn w-inline-block">
                        <div hover="label" className="btn_label">
                          <div className="btn_label_text">
                            <div hover="text" className="p6 text-light">
                              {t.oMnie.przycisk}
                            </div>
                          </div>
                        </div>
                        <div hover="hover" className="btn_hover" />
                        <div hover="bg" className="btn_bg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="rg-about_foot-r">
                  <a data-scroll-reveal="ctn" hover-nav-item="" hover-img-card="" href={t.oMnie.filmyLink} target="_blank" rel="noopener" className="video-card w-inline-block">
                    <div data-video="playpause" className="video-card_c">
                      <div className="video-card_line-l" />
                      <div className="video-card_line-s" />
                      <div className="video-card_ico text-dark theme_on-color">
                        <div className="ico-24">
                          <div className="ico w-embed">
                            <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.918 8.27821L5.85222 12.9887C5.69904 13.0908 5.49208 13.0494 5.38996 12.8963C5.35346 12.8415 5.33398 12.7771 5.33398 12.7113V3.29036C5.33398 3.10626 5.48322 2.95703 5.66732 2.95703C5.73312 2.95703 5.79746 2.97651 5.85222 3.01301L12.918 7.72348C13.0711 7.82561 13.1125 8.03261 13.0104 8.18574C12.986 8.22234 12.9546 8.25381 12.918 8.27821Z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="video-card_video-w">
                        <video muted loop webkit-playsinline="webkit-playsinline" playsInline hover="img" className="video" poster="/assets/media/hero-ferma-000.webp">
                          <source src="/assets/media/ferma-krotki.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                    <div className="unit-8" />
                    <div hover="label" className="video-card_label">
                      <div className="video-card_label_text">
                        <div hover="text" className="p6 text-dark">
                          {t.oMnie.filmy}
                        </div>
                      </div>
                      <div className="video-card_label_text is-2">
                        <div hover="text" className="p6 text-dark">
                          {t.oMnie.filmy}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="about-s_img">
              <div className="img-w">
                <img src="/assets/media/ferma-paralaxa.webp" loading="eager" sizes="100vw" srcSet="/assets/media/ferma-paralaxa-800.webp 800w, /assets/media/ferma-paralaxa-1280.webp 1280w, /assets/media/ferma-paralaxa.webp 1920w" alt="Nowoczesna ferma drobiu: dwa kurniki z silosami paszowymi po obu stronach drogi" className="img" />
              </div>
              <div className="about-s_img_transition">
                <img src="/assets/media/357a81f2a9-697c3acf6bad09a0bb8d9339_ab67727487cf44f099170cdb0cd7ef0a_transition-dark-04.svg" loading="eager" alt="" className="img" />
              </div>
            </div>
          </div>
          <div parallax="ctn-down" className="about-w_scene b-desk">
            <canvas data-about-scene="" className="scene" />
          </div>
        </div>
      </div>
    </section>
  );
}
