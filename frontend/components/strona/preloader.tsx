// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { tresci as t } from "@/content/strona-glowna";
import { IkonaKury } from "@/components/strona/ikona-kury";

export function Preloader() {
  return (
    <div data-preloader="" className="preloader theme_on-dark">
      <div preloader="c" className="preloader_c">
        <div className="preloader_c_c">
          <div className="preloader_top">
            <div className="u-136" />
            <div className="grid">
              <div id="w-node-d98746c6-f24a-7335-0b70-a4261484e4c9-1484e4c4" className="preloader_top_desc">
                <div data-preloader="ctn" className="logo-diagram text-dark w-embed">
                  <IkonaKury />
                </div>
                <div className="u-32" />
                <p data-preloader="p" className="p6 text-dark">
                  {t.preloader.motto1}
                  <br />
                  {t.preloader.motto2}
                </p>
              </div>
            </div>
          </div>
          <div className="preloader_bot">
            <div className="grid">
              <div id="w-node-d98746c6-f24a-7335-0b70-a4261484e4d3-1484e4c4" className="preloader_desc-r">
                <div data-preloader="p" className="p6 text-dark a-right">
                  {t.preloader.ladowanie1}
                  <br />
                  {t.preloader.ladowanie2}
                </div>
              </div>
              <div id="w-node-d98746c6-f24a-7335-0b70-a4261484e4d8-1484e4c4" className="preloader_desc-l">
                <div data-preloader="p" className="p6 text-dark">
                  {t.preloader.etykieta1}
                  <br />
                  {t.preloader.etykieta2}
                </div>
              </div>
            </div>
            <div className="unit-8" />
            <div className="hero-s_content_logo">
              <div className="logo-w" />
            </div>
            <div className="unit-8" />
          </div>
        </div>
        <div data-preloader="bg" className="preloader_bg">
          <div className="preloader_bg_c">
            <div data-preloader="scene" className="preloader_bg_scene">
              <video preload="auto" webkit-playsinline="" playsInline muted autoPlay loop poster="/assets/media/kury-preloader-paski.webp" className="video">
                <source src="/assets/media/kury-preloader-paski.mp4" type="video/mp4" />
              </video>
              <div className="preloader_bg_scene_label b-mob">
                <div data-preloader-percent="" data-preloader="p" className="p6 text-dark a-center">
                  {"0%"}
                </div>
                <div data-preloader="p" className="p6 text-dark a-center">
                  {t.preloader.wczytano}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="preloader_logo">
        <div className="hero-s_content_logo">
          <div className="logo-w">
            <div data-preloader="logo" className="logo-w theme_on-dark">
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
        <div className="unit-8" />
      </div>
    </div>
  );
}
