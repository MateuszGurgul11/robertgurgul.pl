// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { tresci as t } from "@/content/strona-glowna";

export function Motto() {
  return (
    <section id="prolog" bg="dark" className="section bg-light theme_on-dark">
      <div className="container">
        <div className="prolog-w">
          <div className="prolog-s">
            <div className="grid fill">
              <div id="w-node-_4148c1d2-4896-87fe-c087-165667681925-a640d032" className="about-s_content">
                <div className="u-136" />
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
                  <h2 className="p6 text-dark a-center">
                    {t.motto.etykieta}
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
                <div className="about-s_content_lead">
                  <h3 data-scroll-reveal="h" data-highlight-text="" className="h5 text-dark a-center text-pretty">
                    {t.motto.cytat}
                  </h3>
                </div>
                <div className="u-32" />
                <div data-scroll-reveal="ctn" className="btn-list">
                  <a aria-label={t.motto.przycisk} hover-btn="" data-wf--btn--variant="med" href={t.motto.link} target="_blank" className="btn w-inline-block">
                    <div hover="label" className="btn_label">
                      <div className="btn_label_text">
                        <div hover="text" className="p6 text-light">
                          {t.motto.przycisk}
                        </div>
                      </div>
                    </div>
                    <div hover="hover" className="btn_hover" />
                    <div hover="bg" className="btn_bg" />
                  </a>
                </div>
                <div className="u-48" />
              </div>
            </div>
          </div>
          <div parallax="ctn-down" className="prolog-w_scene b-desk">
            <canvas data-prolog-scene="" className="scene" />
          </div>
        </div>
      </div>
    </section>
  );
}
