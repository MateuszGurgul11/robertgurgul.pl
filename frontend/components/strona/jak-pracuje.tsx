// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { tresci as t } from "@/content/strona-glowna";

export function JakPracuje() {
  return (
    <section id="commissioning" bg="light" className="section">
      <div className="container">
        <div className="commissioning-w">
          <div className="commissioning-s">
            <div className="u-136" />
            <h2 data-scroll-reveal="h" className="h2 text-dark rg-tytul">
              {t.jakPracuje.tytul1} {t.jakPracuje.tytul2}
            </h2>
            <div className="commissioning-s_img-w">
              <div className="u-16 b-desk" />
              <div className="commissioning-s_img">
                <div className="img-w">
                  <img src="/assets/media/cms-08-1920.webp" srcSet="/assets/media/cms-08-800.webp 800w, /assets/media/cms-08-1280.webp 1280w, /assets/media/cms-08-1920.webp 1920w" loading="eager" sizes="100vw" alt="Ferma Kogut" className="img" />
                </div>
              </div>
              <div className="u-16 b-desk" />
            </div>
            <div className="grid-c mob_8-columns">
              <div parallax="w" id="w-node-_8ca0bc14-e622-6890-c6a0-c6aadf64986e-a640d032" className="commissioning-s_card-w theme_on-dark">
                <div parallax="img" className="commissioning-s_card">
                  <div data-scroll-reveal="h" className="commissioning-s_card_title">
                    <div className="h3 text-dark">
                      {t.jakPracuje.od}
                    </div>
                    <div className="commissioning-s_card_title_divider text-dark w-embed">
                      <svg width="100%" height="100%" viewBox="0 0 74 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_g_491_1697)">
                          <path d="M73 2.5V5.5H1V2.5H73Z" fill="currentColor" />
                        </g>
                        <defs>
                          <filter id="filter0_g_491_1697" x="0" y="1.5" width="74" height="5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feTurbulence type="fractalNoise" baseFrequency="0.25 0.25" numOctaves="3" seed="3604" />
                            <feDisplacementMap in="shape" scale="2" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
                            <feMerge result="effect1_texture_491_1697">
                              <feMergeNode in="displacedImage" />
                            </feMerge>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <div className="h3 text-dark a-right">
                      {t.jakPracuje.do}
                    </div>
                  </div>
                  <div className="u-72" />
                  <div className="table">
                    <div data-scroll-reveal="line" className="line-s" />
                    <div className="table_list">
                      <div data-scroll-reveal="ctn" className="table-card">
                        <div className="u-16" />
                        <div data-scroll-reveal="" className="table-card_info">
                          <div className="table-card_info_title">
                            <p className="p6 text-dark">
                              {t.jakPracuje.kroki[0].tytul}
                            </p>
                          </div>
                          <div className="table-card_info_data">
                            <p className="p6 text-dark a-right">
                              {t.jakPracuje.kroki[0].kiedy}
                            </p>
                          </div>
                        </div>
                        <div className="u-16" />
                        <div data-scroll-reveal="line" className="line-s" />
                      </div>
                      <div data-scroll-reveal="ctn" className="table-card">
                        <div className="u-16" />
                        <div data-scroll-reveal="" className="table-card_info">
                          <div className="table-card_info_title">
                            <p className="p6 text-dark">
                              {t.jakPracuje.kroki[1].tytul}
                            </p>
                          </div>
                          <div className="table-card_info_data">
                            <p className="p6 text-dark a-right">
                              {t.jakPracuje.kroki[1].kiedy}
                            </p>
                          </div>
                        </div>
                        <div className="u-16" />
                        <div data-scroll-reveal="line" className="line-s" />
                      </div>
                      <div data-scroll-reveal="ctn" className="table-card">
                        <div className="u-16" />
                        <div data-scroll-reveal="" className="table-card_info">
                          <div className="table-card_info_title">
                            <p className="p6 text-dark">
                              {t.jakPracuje.kroki[2].tytul}
                            </p>
                          </div>
                          <div className="table-card_info_data">
                            <p className="p6 text-dark a-right">
                              {t.jakPracuje.kroki[2].kiedy}
                            </p>
                          </div>
                        </div>
                        <div className="u-16" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-136 b-desk" />
          </div>
        </div>
      </div>
    </section>
  );
}
