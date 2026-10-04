// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { tresci as t } from "@/content/strona-glowna";

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
            <div className="hero-s">
              <div className="grid">
                <div id="w-node-_8269b84d-14af-f805-ea55-26cdad3e4dc8-a640d032" className="hero-s_content">
                  <div className="grid _10-columns">
                    <div id="w-node-c538301d-cef2-c6b6-1873-5b3807b1e8ba-a640d032" className="hero-s_content_title">
                      <h1 data-intro="p" className="p3 text-dark a-center">
                        {t.hero.etykieta}
                      </h1>
                    </div>
                  </div>
                  <div className="u-72" />
                  <div className="hero-s_content_logo">
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
                  <div className="u-72" />
                  <div data-intro="ctn" className="grid _10-columns">
                    <div id="w-node-_6ccd605a-5560-6e26-c7ef-a13e663f6531-a640d032" className="hero-s_content_info-l">
                      <p className="p5 text-dark">
                        {t.hero.lewy1}
                      </p>
                      <div className="p6-list">
                        <div className="hero-s_content_info-l_logo" />
                        <p className="p5 text-dark">
                          {t.hero.lewy2}
                        </p>
                      </div>
                    </div>
                    <div id="w-node-fa5e0799-9c3b-5b09-337e-b329c8886b8c-a640d032" className="hero-s_content_info-c b-desk">
                      <h2 className="p5 text-dark a-center mob_a-right">
                        {t.hero.srodek1}
                        <br />
                        {t.hero.srodek2}
                      </h2>
                    </div>
                    <div id="w-node-_69168170-fa43-c3d7-af45-3a6abe852c06-a640d032" className="hero-s_content_info-r">
                      <p className="p5 text-dark a-right">
                        {t.hero.prawy1}
                        <br />
                        {t.hero.prawy2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-intro="ctn" className="hero-s_btn">
                <div modal-cta-open="cta" className="modal-trigger">
                  <div className="b-mob">
                    <a aria-label={t.hero.ctaMobile} data-magnetic-strength="" href="#" className="btn-circle w-inline-block">
                      <div className="btn-circle_bg" />
                      <div data-magnetic-inner-target="" className="btn-circle_label">
                        <div className="btn-circle_label_text">
                          <div hover="text" className="p6 text-dark">
                            {t.hero.ctaMobile}
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="b-desk">
                    <a aria-label={t.hero.cta} data-magnetic-strength="" href="#" className="btn-circle w-inline-block">
                      <div className="btn-circle_bg" />
                      <div data-magnetic-inner-target="" className="btn-circle_label">
                        <div className="btn-circle_label_text">
                          <div hover="text" className="p6 text-dark">
                            {t.hero.cta}
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
