// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { tresci as t } from "@/content/strona-glowna";

export function Faq() {
  return (
    <section id="faq" bg="dark" className="section bg-light theme_on-dark">
      <div className="container">
        <div className="faq-w">
          <div className="faq-s">
            <div className="faq-s_title">
              <div className="grid">
                <div data-scroll-reveal="h" id="w-node-df907bce-6b90-57ee-e8f7-fd487ceef2f3-a640d032" className="faq-s_title_c">
                  <div className="faq-s_title_letter">
                    <div className="h1 text-dark">
                      {"F"}
                    </div>
                  </div>
                  <div className="faq-s_title_desc-1">
                    <h3 className="p6 text-dark">
                      {t.faq.tytul1}
                      <br />
                      {t.faq.tytul2}
                    </h3>
                  </div>
                  <div className="faq-s_title_letter">
                    <div className="h1 text-dark">
                      {"A"}
                    </div>
                  </div>
                  <div className="faq-s_title_desc-2 f-desk">
                    <h3 className="p6 text-dark a-center">
                      {t.faq.tytul3}
                      <br />
                      {t.faq.tytul4}
                    </h3>
                  </div>
                  <div className="faq-s_title_letter">
                    <div className="h1 text-dark">
                      {"Q"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-s_scenes">
              <canvas id="" data-faq-scene="" className="scene" />
            </div>
            <div className="u-136" />
            <div className="u-32" />
            <div id="w-node-df907bce-6b90-57ee-e8f7-fd487ceef308-a640d032" className="faq-s_cms">
              <div className="grid">
                <div id="w-node-df907bce-6b90-57ee-e8f7-fd487ceef30a-a640d032" className="faq-s_cms_line">
                  <div className="line-s" />
                </div>
                <div id="w-node-df907bce-6b90-57ee-e8f7-fd487ceef30c-a640d032" className="faq-cms w-dyn-list">
                  <div index-w="" role="list" className="faq-cms_list w-dyn-items">
                    {t.faq.pytania.map((f, i) => (
                        <div key={i} data-scroll-reveal="ctn" role="listitem" className="faq-cms_list_item w-dyn-item">
                          <a aria-label={f.pytanie} hover-faq="" hover-divider="" accordion-btn={`pytanie-${i + 1}`} id="w-node-df907bce-6b90-57ee-e8f7-fd487ceef30f-a640d032" href="#" className="faq-card w-inline-block">
                            <div className="u-24" />
                            <div className="grid _8-columns">
                              <div id="w-node-df907bce-6b90-57ee-e8f7-fd487ceef312-a640d032" className="faq-card_index">
                                <div index="text" className="p4 text-dark">
                                  {"00"}
                                </div>
                              </div>
                              <div id="w-node-df907bce-6b90-57ee-e8f7-fd487ceef315-a640d032" className="faq-card_title">
                                <h4 className="p4 text-dark">
                                  {f.pytanie}
                                </h4>
                                <div className="faq-card_ico text-dark">
                                  <div className="faq-card_ico_hor">
                                    <div className="ico w-embed">
                                      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 11V13H5V11H19Z" fill="currentColor" />
                                      </svg>
                                    </div>
                                  </div>
                                  <div accordion-icon-ver={`pytanie-${i + 1}`} className="faq-card_ico_ver">
                                    <div className="ico w-embed">
                                      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 5H13V19H11V5Z" fill="currentColor" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="grid _8-columns">
                              <div accordion-desc={`pytanie-${i + 1}`} id="w-node-df907bce-6b90-57ee-e8f7-fd487ceef31d-a640d032" className="faq-card_desc">
                                <div className="u-104" />
                                <p accordion-paragraph={`pytanie-${i + 1}`} className="p6 text-dark">
                                  {f.odpowiedz}
                                </p>
                              </div>
                            </div>
                            <div className="u-24" />
                            <div className="faq-card_divider">
                              <div data-prevent-flicker="true" hover="line" data-scroll-reveal="line" className="divider">
                                <div hover="line-l" className="line-l" />
                                <div className="line-s" />
                              </div>
                            </div>
                          </a>
                        </div>
                    ))}
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
