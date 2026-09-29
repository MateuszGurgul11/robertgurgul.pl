// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { tresci as t } from "@/content/strona-glowna";

export function Wspolpraca() {
  return (
    <section id="finance" bg="dark" className="section bg-light theme_on-dark">
      <div className="container">
        <div className="fin-w">
          <div className="fin-s">
            <div className="u-16" />
            <div className="fin-s_title">
              <div data-prevent-flicker="true" hover="line" data-scroll-reveal="line" className="divider">
                <div hover="line-l" className="line-l" />
                <div className="line-s" />
              </div>
              <div className="u-16" />
              <div data-marquee="" className="fin-s_title_marquee">
                <div data-marquee="list" className="fin-s_title_marquee_list">
                  <h2 className="h5 text-dark">
                    {t.wspolpraca.naglowek}
                  </h2>
                  <div className="ico-16 text-dark">
                    <div className="ico w-embed">
                      <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 4C2.20914 4 4 2.20914 4 0C4 2.20914 5.79086 4 8 4C5.79086 4 4 5.79086 4 8C4 5.79086 2.20914 4 0 4Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div className="h5 text-dark">
                    {t.wspolpraca.naglowek}
                  </div>
                  <div className="ico-16 text-dark">
                    <div className="ico w-embed">
                      <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 4C2.20914 4 4 2.20914 4 0C4 2.20914 5.79086 4 8 4C5.79086 4 4 5.79086 4 8C4 5.79086 2.20914 4 0 4Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div className="h5 text-dark">
                    {t.wspolpraca.naglowek}
                  </div>
                  <div className="ico-16 text-dark">
                    <div className="ico w-embed">
                      <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 4C2.20914 4 4 2.20914 4 0C4 2.20914 5.79086 4 8 4C5.79086 4 4 5.79086 4 8C4 5.79086 2.20914 4 0 4Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-marquee="list" className="fin-s_title_marquee_list">
                  <div className="h5 text-dark">
                    {t.wspolpraca.naglowek}
                  </div>
                  <div className="ico-16 text-dark">
                    <div className="ico w-embed">
                      <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 4C2.20914 4 4 2.20914 4 0C4 2.20914 5.79086 4 8 4C5.79086 4 4 5.79086 4 8C4 5.79086 2.20914 4 0 4Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div className="h5 text-dark">
                    {t.wspolpraca.naglowek}
                  </div>
                  <div className="ico-16 text-dark">
                    <div className="ico w-embed">
                      <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 4C2.20914 4 4 2.20914 4 0C4 2.20914 5.79086 4 8 4C5.79086 4 4 5.79086 4 8C4 5.79086 2.20914 4 0 4Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div className="h5 text-dark">
                    {t.wspolpraca.naglowek}
                  </div>
                  <div className="ico-16 text-dark">
                    <div className="ico w-embed">
                      <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 4C2.20914 4 4 2.20914 4 0C4 2.20914 5.79086 4 8 4C5.79086 4 4 5.79086 4 8C4 5.79086 2.20914 4 0 4Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-16" />
              <div data-prevent-flicker="true" hover="line" data-scroll-reveal="line" className="divider">
                <div hover="line-l" className="line-l" />
                <div className="line-s" />
              </div>
            </div>
            <div className="u-48" />
            <div className="grid">
              <div id="w-node-_30f45dfe-c77b-ff98-374e-db553de724aa-a640d032" className="fin-s_left">
                <h3 data-scroll-reveal="p" className="p6 text-dark">
                  {t.wspolpraca.krok.etykieta}
                </h3>
                <div className="u-24" />
                <h4 data-scroll-reveal="h" className="h3 text-dark">
                  {t.wspolpraca.krok.wartosc1}
                  <br />
                  {t.wspolpraca.krok.wartosc2}
                </h4>
                <div className="u-32 b-mob">
                  <div className="div-block" />
                </div>
              </div>
              <div id="w-node-_305534a3-3971-bd57-4782-2c29d3c76d35-a640d032" className="fin-s_right">
                <div className="data">
                  <div className="data-list">
                    <div data-scroll-reveal="ctn" className="data-card">
                      <div className="data-card_title">
                        <h3 className="p6 text-dark">
                          {t.wspolpraca.zakres.etykieta}
                        </h3>
                      </div>
                      <div className="unit-8" />
                      <div className="data-card_data">
                        <p className="p3 text-dark">
                          {t.wspolpraca.zakres.wartosc}
                        </p>
                      </div>
                    </div>
                    <div data-scroll-reveal="ctn" className="data-card">
                      <div className="data-card_title">
                        <h3 className="p6 text-dark">
                          {t.wspolpraca.specjalizacje.etykieta}
                        </h3>
                        <div className="data-card_title_info">
                          <div hover-btn-info="" className="btn-info">
                            <div hover="label" className="btn-info_label">
                              <h1 className="p6 text-dark">
                                {"(?)"}
                              </h1>
                            </div>
                            <div hover="tool-tip" className="tool-tip">
                              <p className="p6 text-light">
                                {t.wspolpraca.specjalizacje.podpowiedz}
                              </p>
                              <div className="tool-tip_caret text-dark w-embed">
                                <svg width="100%" height="100%" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M16 0H0L8 8L16 0Z" fill="currentColor" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="unit-8" />
                      <div className="data-card_data">
                        <p className="p3 text-dark">
                          {t.wspolpraca.specjalizacje.wartosc}
                        </p>
                      </div>
                    </div>
                    <div data-scroll-reveal="ctn" className="data-card">
                      <div className="data-card_title">
                        <h3 className="p6 text-dark">
                          {t.wspolpraca.etapy.etykieta}
                        </h3>
                      </div>
                      <div className="unit-8" />
                      <div className="data-card_data">
                        <p className="p3 text-dark">
                          {t.wspolpraca.etapy.wartosc}
                        </p>
                      </div>
                    </div>
                    <div data-scroll-reveal="ctn" className="data-card">
                      <div className="data-card_title">
                        <h3 className="p6 text-dark">
                          {t.wspolpraca.kontakt.etykieta}
                        </h3>
                      </div>
                      <div className="unit-8" />
                      <div className="data-card_data">
                        <p className="p3 text-dark">
                          {t.wspolpraca.kontakt.wartosc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mob_fin-s_scene b-mob">
              <div className="mob_fin-s_scene_c">
                <canvas data-fin-scene="" parallax="ctn-down" className="scene" />
              </div>
            </div>
            <div className="u-104" />
            <div className="grid">
              <div id="w-node-fdc302b6-b2e1-db0a-b92f-546c22c0e1f9-a640d032" className="fin-s_left">
                <div className="table">
                  <h2 data-scroll-reveal="p" className="p4 text-dark">
                    {t.wspolpraca.oczekiwania.tytul}
                  </h2>
                  <div className="u-24" />
                  <div data-scroll-reveal="line" className="line-s bg-dark" />
                  <div className="table_list">
                    <div data-scroll-reveal="ctn" className="table-card">
                      <div className="u-16" />
                      <div data-scroll-reveal="" className="table-card_info">
                        <div className="table-card_info_title">
                          <p className="p6 text-dark">
                            {t.wspolpraca.oczekiwania.diagnoza}
                          </p>
                        </div>
                        <div className="table-card_info_data">
                          <p className="p6 text-dark a-right">
                            {t.wspolpraca.oczekiwania.diagnozaWartosc}
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
                            {t.wspolpraca.oczekiwania.plan}
                          </p>
                        </div>
                        <div className="table-card_info_data">
                          <p className="p6 text-dark a-right">
                            {t.wspolpraca.oczekiwania.planWartosc}
                          </p>
                        </div>
                      </div>
                      <div className="u-16" />
                    </div>
                  </div>
                </div>
                <div className="u-48 b-mob" />
              </div>
              <div id="w-node-fdc302b6-b2e1-db0a-b92f-546c22c0e20e-a640d032" className="fin-s_right">
                <div className="table">
                  <h2 data-scroll-reveal="p" className="p4 text-dark">
                    {t.wspolpraca.wartosci.tytul}
                  </h2>
                  <div className="u-24" />
                  <div data-scroll-reveal="line" className="line-s bg-dark" />
                  <div className="table_list">
                    <div data-scroll-reveal="ctn" className="table-card">
                      <div className="u-16" />
                      <div data-scroll-reveal="" className="table-card_info">
                        <div className="table-card_info_title">
                          <p className="p6 text-dark">
                            {t.wspolpraca.wartosci.jakosc}
                          </p>
                        </div>
                        <div className="table-card_info_data">
                          <p className="p6 text-dark a-right" />
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
                            {t.wspolpraca.wartosci.srodowisko}
                          </p>
                        </div>
                        <div className="table-card_info_data">
                          <p className="p6 text-dark a-right" />
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
                            {t.wspolpraca.wartosci.partnerstwo}
                          </p>
                        </div>
                        <div className="table-card_info_data">
                          <p className="p6 text-dark a-right" />
                        </div>
                      </div>
                      <div className="u-16" />
                    </div>
                  </div>
                </div>
                <div className="u-48" />
                <div className="fin-s_right_btn">
                  <div className="btn-list">
                    <div modal-cta-open="cta" className="modal-trigger">
                      <a aria-label={t.wspolpraca.przycisk} hover-btn="" data-wf--btn--variant="med" href="#" className="btn w-inline-block">
                        <div hover="label" className="btn_label">
                          <div className="btn_label_text">
                            <div hover="text" className="p6 text-light">
                              {t.wspolpraca.przycisk}
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
            <div className="u-136" />
          </div>
          <div className="fin-w_scene-bg b-desk">
            <canvas data-fin-scene="" parallax="ctn-down" className="scene" />
          </div>
        </div>
      </div>
    </section>
  );
}
