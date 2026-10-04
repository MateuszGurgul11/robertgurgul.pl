// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { tresci as t } from "@/content/strona-glowna";

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
                  <svg width="100%" height="100%" viewBox="0 0 88 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M61.7044 17.64H59.7283V62.1955H61.7044V17.64Z" fill="currentColor" />
                    <path d="M85.3971 32.9122H84.0764V46.9134H85.3971V32.9122Z" fill="currentColor" />
                    <path d="M82.6167 37.9368H81.2961V46.9233H82.6167V37.9368Z" fill="currentColor" />
                    <path d="M79.8364 39.6348H78.5157V46.9233H79.8364V39.6348Z" fill="currentColor" />
                    <path d="M77.056 40.6973H75.7353V46.9233H77.056V40.6973Z" fill="currentColor" />
                    <path d="M74.2657 40.6973H72.945V46.9233H74.2657V40.6973Z" fill="currentColor" />
                    <path d="M71.4853 39.6348H70.1646V46.9233H71.4853V39.6348Z" fill="currentColor" />
                    <path d="M68.7049 37.9368H67.3843V46.9233H68.7049V37.9368Z" fill="currentColor" />
                    <path d="M65.9246 32.9122H64.6039V46.9134H65.9246V32.9122Z" fill="currentColor" />
                    <path d="M85.3971 48.1844H84.0764V62.1856H85.3971V48.1844Z" fill="currentColor" />
                    <path d="M82.6167 53.199H81.2961V62.1856H82.6167V53.199Z" fill="currentColor" />
                    <path d="M79.8364 54.897H78.5157V62.1856H79.8364V54.897Z" fill="currentColor" />
                    <path d="M77.056 55.9595H75.7353V62.1856H77.056V55.9595Z" fill="currentColor" />
                    <path d="M74.2657 55.9595H72.945V62.1856H74.2657V55.9595Z" fill="currentColor" />
                    <path d="M71.4853 54.897H70.1646V62.1856H71.4853V54.897Z" fill="currentColor" />
                    <path d="M68.7049 53.199H67.3843V62.1856H68.7049V53.199Z" fill="currentColor" />
                    <path d="M65.9246 48.1844H64.6039V62.1856H65.9246V48.1844Z" fill="currentColor" />
                    <path d="M56.8387 32.9122H55.518V46.9134H56.8387V32.9122Z" fill="currentColor" />
                    <path d="M54.0583 37.9368H52.7377V46.9233H54.0583V37.9368Z" fill="currentColor" />
                    <path d="M51.268 39.6348H49.9474V46.9233H51.268V39.6348Z" fill="currentColor" />
                    <path d="M48.4877 40.6973H47.167V46.9233H48.4877V40.6973Z" fill="currentColor" />
                    <path d="M45.7073 40.6973H44.3866V46.9233H45.7073V40.6973Z" fill="currentColor" />
                    <path d="M42.9269 39.6348H41.6062V46.9233H42.9269V39.6348Z" fill="currentColor" />
                    <path d="M40.1366 37.9368H38.8159V46.9233H40.1366V37.9368Z" fill="currentColor" />
                    <path d="M37.3562 32.9122H36.0356V46.9134H37.3562V32.9122Z" fill="currentColor" />
                    <path d="M56.8387 17.64H55.518V31.6412H56.8387V17.64Z" fill="currentColor" />
                    <path d="M54.0583 22.6546H52.7377V31.6412H54.0583V22.6546Z" fill="currentColor" />
                    <path d="M51.268 24.3526H49.9474V31.6412H51.268V24.3526Z" fill="currentColor" />
                    <path d="M48.4877 25.4152H47.167V31.6412H48.4877V25.4152Z" fill="currentColor" />
                    <path d="M45.7073 25.4152H44.3866V31.6412H45.7073V25.4152Z" fill="currentColor" />
                    <path d="M42.9269 24.3526H41.6062V31.6412H42.9269V24.3526Z" fill="currentColor" />
                    <path d="M40.1366 22.6546H38.8159V31.6412H40.1366V22.6546Z" fill="currentColor" />
                    <path d="M37.3562 17.64H36.0356V31.6412H37.3562V17.64Z" fill="currentColor" />
                    <path d="M56.8387 48.1844H55.518V62.1856H56.8387V48.1844Z" fill="currentColor" />
                    <path d="M54.0583 53.199H52.7377V62.1856H54.0583V53.199Z" fill="currentColor" />
                    <path d="M51.268 54.897H49.9474V62.1856H51.268V54.897Z" fill="currentColor" />
                    <path d="M48.4877 55.9595H47.167V62.1856H48.4877V55.9595Z" fill="currentColor" />
                    <path d="M45.7073 55.9595H44.3866V62.1856H45.7073V55.9595Z" fill="currentColor" />
                    <path d="M42.9269 54.897H41.6062V62.1856H42.9269V54.897Z" fill="currentColor" />
                    <path d="M40.1366 53.199H38.8159V62.1856H40.1366V53.199Z" fill="currentColor" />
                    <path d="M37.3562 48.1844H36.0356V62.1856H37.3562V48.1844Z" fill="currentColor" />
                    <path d="M4.57761 2.32812H2.60156V62.1955H4.57761V2.32812Z" fill="currentColor" />
                    <path d="M33.146 2.37777H31.1699V62.1856H33.146V2.37777Z" fill="currentColor" />
                    <path d="M8.79782 32.9122H7.47715V46.9134H8.79782V32.9122Z" fill="currentColor" />
                    <path d="M11.5782 37.9368H10.2575V46.9233H11.5782V37.9368Z" fill="currentColor" />
                    <path d="M14.3586 39.6348H13.0379V46.9233H14.3586V39.6348Z" fill="currentColor" />
                    <path d="M17.1489 40.6973H15.8282V46.9233H17.1489V40.6973Z" fill="currentColor" />
                    <path d="M19.9292 40.6973H18.6086V46.9233H19.9292V40.6973Z" fill="currentColor" />
                    <path d="M22.7096 39.6348H21.3889V46.9233H22.7096V39.6348Z" fill="currentColor" />
                    <path d="M25.49 37.9368H24.1693V46.9233H25.49V37.9368Z" fill="currentColor" />
                    <path d="M28.2803 32.9122H26.9596V46.9134H28.2803V32.9122Z" fill="currentColor" />
                    <path d="M8.79782 17.65H7.47715V31.6511H8.79782V17.65Z" fill="currentColor" />
                    <path d="M11.5782 22.6745H10.2575V31.6611H11.5782V22.6745Z" fill="currentColor" />
                    <path d="M14.3586 24.3725H13.0379V31.6611H14.3586V24.3725Z" fill="currentColor" />
                    <path d="M17.1489 25.4251H15.8282V31.6511H17.1489V25.4251Z" fill="currentColor" />
                    <path d="M19.9292 25.4251H18.6086V31.6511H19.9292V25.4251Z" fill="currentColor" />
                    <path d="M22.7096 24.3725H21.3889V31.6611H22.7096V24.3725Z" fill="currentColor" />
                    <path d="M25.49 22.6745H24.1693V31.6611H25.49V22.6745Z" fill="currentColor" />
                    <path d="M28.2803 17.65H26.9596V31.6511H28.2803V17.65Z" fill="currentColor" />
                    <path d="M8.79782 2.37777H7.47715V16.3789H8.79782V2.37777Z" fill="currentColor" />
                    <path d="M11.5782 7.40231H10.2575V16.3889H11.5782V7.40231Z" fill="currentColor" />
                    <path d="M14.3586 9.10031H13.0379V16.3889H14.3586V9.10031Z" fill="currentColor" />
                    <path d="M17.1489 10.1628H15.8282V16.3889H17.1489V10.1628Z" fill="currentColor" />
                    <path d="M19.9292 10.1628H18.6086V16.3889H19.9292V10.1628Z" fill="currentColor" />
                    <path d="M22.7096 9.10031H21.3889V16.3889H22.7096V9.10031Z" fill="currentColor" />
                    <path d="M25.49 7.40231H24.1693V16.3889H25.49V7.40231Z" fill="currentColor" />
                    <path d="M28.2803 2.37777H26.9596V16.3789H28.2803V2.37777Z" fill="currentColor" />
                    <path d="M8.79782 48.1844H7.47715V62.1856H8.79782V48.1844Z" fill="currentColor" />
                    <path d="M11.5782 53.199H10.2575V62.1856H11.5782V53.199Z" fill="currentColor" />
                    <path d="M14.3586 54.897H13.0379V62.1856H14.3586V54.897Z" fill="currentColor" />
                    <path d="M17.1489 55.9595H15.8282V62.1856H17.1489V55.9595Z" fill="currentColor" />
                    <path d="M19.9292 55.9595H18.6086V62.1856H19.9292V55.9595Z" fill="currentColor" />
                    <path d="M22.7096 54.897H21.3889V62.1856H22.7096V54.897Z" fill="currentColor" />
                    <path d="M25.49 53.199H24.1693V62.1856H25.49V53.199Z" fill="currentColor" />
                    <path d="M28.2803 48.1844H26.9596V62.1856H28.2803V48.1844Z" fill="currentColor" />
                    <path d="M85.3971 63.7049H2.60156V65.6809H85.3971V63.7049Z" fill="currentColor" />
                  </svg>
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
