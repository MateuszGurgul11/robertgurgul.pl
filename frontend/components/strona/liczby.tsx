// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { tresci as t } from "@/content/strona-glowna";

export function Liczby() {
  return (
    <section id="factoids" bg="dark" className="section bg-light theme_on-dark">
      <div className="container">
        <div className="factoids-w">
          <div className="factoids-s">
            <div className="u-136" />
            <div className="grid">
              <div mob="false" parallax="ctn-up" id="w-node-d67d39fc-d97b-d754-75f9-0bfe8a603000-a640d032" className="factoid-card">
                <div id="w-node-f8b00adb-d517-07c4-59a5-0d18cc483f97-cc483f97" className="factoid-card">
                  <div className="mob_factoid-card_line b-mob">
                    <div className="line-s" />
                  </div>
                  <div className="factoid-card_number b-desk">
                    <h3 data-scroll-reveal="h" className="h1 text-dark a-center">
                      {t.liczby[0].liczba}
                    </h3>
                    <div className="u-48" />
                  </div>
                  <div className="factoid-card_desc b-desk">
                    <p data-scroll-reveal="p" className="p6 text-dark a-center">
                      {t.liczby[0].opis}
                    </p>
                  </div>
                  <div className="factoid-card_desc b-mob">
                    <p data-scroll-reveal="p" className="p6 text-dark">
                      {t.liczby[0].opis}
                    </p>
                  </div>
                  <div className="factoid-card_number b-mob">
                    <p data-scroll-reveal="h" className="h2 text-dark a-right">
                      {t.liczby[0].liczba}
                    </p>
                  </div>
                </div>
              </div>
              <div mob="false" parallax="ctn-down" id="w-node-cce14ccb-e200-1455-c215-5b160e474786-a640d032" className="factoid-card">
                <div id="w-node-f8b00adb-d517-07c4-59a5-0d18cc483f97-cc483f97" className="factoid-card">
                  <div className="mob_factoid-card_line b-mob">
                    <div className="line-s" />
                  </div>
                  <div className="factoid-card_number b-desk">
                    <h3 data-scroll-reveal="h" className="h1 text-dark a-center">
                      {t.liczby[1].liczba}
                    </h3>
                    <div className="u-48" />
                  </div>
                  <div className="factoid-card_desc b-desk">
                    <p data-scroll-reveal="p" className="p6 text-dark a-center">
                      {t.liczby[1].opis}
                    </p>
                  </div>
                  <div className="factoid-card_desc b-mob">
                    <p data-scroll-reveal="p" className="p6 text-dark">
                      {t.liczby[1].opis}
                    </p>
                  </div>
                  <div className="factoid-card_number b-mob">
                    <p data-scroll-reveal="h" className="h2 text-dark a-right">
                      {t.liczby[1].liczba}
                    </p>
                  </div>
                </div>
              </div>
              <div mob="false" parallax="ctn-up" id="w-node-_45d30098-06f8-df43-1267-81f19d293b91-a640d032" className="factoid-card">
                <div id="w-node-f8b00adb-d517-07c4-59a5-0d18cc483f97-cc483f97" className="factoid-card">
                  <div className="mob_factoid-card_line b-mob">
                    <div className="line-s" />
                  </div>
                  <div className="factoid-card_number b-desk">
                    <h3 data-scroll-reveal="h" className="h1 text-dark a-center">
                      {t.liczby[2].liczba}
                    </h3>
                    <div className="u-48" />
                  </div>
                  <div className="factoid-card_desc b-desk">
                    <p data-scroll-reveal="p" className="p6 text-dark a-center">
                      {t.liczby[2].opis}
                    </p>
                  </div>
                  <div className="factoid-card_desc b-mob">
                    <p data-scroll-reveal="p" className="p6 text-dark">
                      {t.liczby[2].opis}
                    </p>
                  </div>
                  <div className="factoid-card_number b-mob">
                    <p data-scroll-reveal="h" className="h2 text-dark a-right">
                      {t.liczby[2].liczba}
                    </p>
                  </div>
                </div>
              </div>
              <div mob="false" parallax="ctn-down" id="w-node-cdd8efdd-bc2c-1fa6-f3b3-1a2aab29869d-a640d032" className="factoid-card">
                <div id="w-node-f8b00adb-d517-07c4-59a5-0d18cc483f97-cc483f97" className="factoid-card">
                  <div className="mob_factoid-card_line b-mob">
                    <div className="line-s" />
                  </div>
                  <div className="factoid-card_number b-desk">
                    <h3 data-scroll-reveal="h" className="h1 text-dark a-center">
                      {t.liczby[3].liczba}
                    </h3>
                    <div className="u-48" />
                  </div>
                  <div className="factoid-card_desc b-desk">
                    <p data-scroll-reveal="p" className="p6 text-dark a-center">
                      {t.liczby[3].opis}
                    </p>
                  </div>
                  <div className="factoid-card_desc b-mob">
                    <p data-scroll-reveal="p" className="p6 text-dark">
                      {t.liczby[3].opis}
                    </p>
                  </div>
                  <div className="factoid-card_number b-mob">
                    <p data-scroll-reveal="h" className="h2 text-dark a-right">
                      {t.liczby[3].liczba}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-16" />
            <div className="factoids-s_scene">
              <div className="factoids-s_scene_c">
                <canvas data-factoid-scene="" className="scene" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
