// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { tresci as t } from "@/content/strona-glowna";
import { FormularzKontaktowy } from "./formularz-kontaktowy";

export function Podpowiedzi() {
  return (
    <div className="floating-tips">
      <div className="floating-tips_list">
        <div floating-tip="drag" className="floating-tip theme_on-dark">
          <div className="tag prim">
            <p className="p6 text-light">
              {t.okna.przeciagnij}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OknoFormularza() {
  return (
    <div modal-cta="cta" className="modal">
      <div className="modal_c">
        <div className="grid-c">
          <div id="w-node-_1591a5e0-e0d1-2517-5418-ac4086299db7-86299db4" className="modal_cta-form-w">
            <FormularzKontaktowy />
          </div>
        </div>
      </div>
      <div modal-cta-close="cta" modal-cta-over="cta" className="modal_over" />
    </div>
  );
}

export function OknoWideo() {
  return (
    <div modal-media="video" className="modal media">
      <div className="modal_c">
        <div className="modal_video theme_on-color">
          <div className="modal_video_close">
            <div modal-media-close="video" className="modal-trigger">
              <a aria-label="Zamknij" hover-btn-close="" href="#" className="btn-close w-inline-block">
                <div className="h6 text-dark">
                  {"["}
                </div>
                <div hover="label" className="btn-close_label">
                  <div hover="icon" className="btn-close_icon">
                    <div className="h6 text-dark">
                      {"x"}
                    </div>
                  </div>
                  <div hover="icon" className="btn-close_icon">
                    <div className="h6 text-dark">
                      {"x"}
                    </div>
                  </div>
                </div>
                <div className="h6 text-dark">
                  {"]"}
                </div>
              </a>
            </div>
          </div>
          <video muted loop webkit-playsinline="webkit-playsinline" playsInline hover="img" modal-media-video="video" className="video mob_modal_video" />
        </div>
      </div>
    </div>
  );
}

export function OknoMenu() {
  return (
    <div modal-menu="menu" className="modal menu">
      <div className="modal_c theme_on-dark">
        <div className="modal_menu_top" />
        <div className="modal_menu_center">
          <div className="grid">
            <div data-nav="" index-w="" id="w-node-_7445bffa-2061-a06e-ddea-17b3d67e1961-d67e195c" className="modal_menu_nav">
              {t.menu.linki.map((m, i) => (
                  <a key={i} aria-label="O mnie" hover-menu-item="" modal-menu-headline="menu" modal-menu-close="menu" href={m.href} className="nav-item w-inline-block">
                    <div hover="label" className="nav-item_label">
                      <div className="nav-item_label_text">
                        <div hover="text" className="h5 text-dark">
                          {m.etykieta}
                        </div>
                      </div>
                    </div>
                  </a>
              ))}
            </div>
          </div>
        </div>
        <div className="modal_menu_center b-mob">
          <div className="grid">
            <div modal-menu-ctn="menu" id="w-node-_335d7034-ed62-0d4b-6345-08ba41a051b2-d67e195c" className="modal_menu_nav">
              <div className="u-32" />
              <a aria-label={t.menu.dodatkowyLink} hover-nav-item="" href={t.menu.dodatkowyLinkHref} target="_blank" className="nav-item w-inline-block">
                <div hover="label" className="nav-item_label">
                  <div className="nav-item_label_text">
                    <div hover="text" className="p6 text-dark">
                      {t.menu.dodatkowyLink}
                    </div>
                  </div>
                  <div className="nav-item_label_text is-2">
                    <div hover="text" className="p6 text-dark">
                      {t.menu.dodatkowyLink}
                    </div>
                  </div>
                </div>
              </a>
              <div className="u-32" />
            </div>
          </div>
        </div>
        <div className="modal_menu_bot">
          <div className="grid">
            <div id="w-node-_7445bffa-2061-a06e-ddea-17b3d67e19ac-d67e195c" className="modal_menu_contact">
              <div className="contact-cms w-dyn-list">
                <div role="list" className="contact-cms_list w-dyn-items">
                  <div modal-menu-ctn="menu" role="listitem" className="contact-cms_list_item menu w-dyn-item">
                    <div className="p6 text-gray a-center">
                      {t.menu.telefonEtykieta}
                    </div>
                    <a aria-label={t.kontakt.telefon} hover-nav-item-important="" href={t.kontakt.telefonHref} className="nav-item w-inline-block">
                      <div hover="label" className="nav-item_label">
                        <div className="nav-item_label_text">
                          <p hover="text" className="p6 text-dark">
                            {t.kontakt.telefon}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div modal-menu-ctn="menu" role="listitem" className="contact-cms_list_item menu w-dyn-item">
                    <div className="p6 text-gray a-center">
                      {t.menu.emailEtykieta}
                    </div>
                    <a aria-label={t.kontakt.email} hover-nav-item-important="" href={t.kontakt.emailHref} className="nav-item w-inline-block">
                      <div hover="label" className="nav-item_label">
                        <div className="nav-item_label_text">
                          <p hover="text" className="p6 text-dark">
                            {t.kontakt.email}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="u-32" />
              <div className="b-mob">
                <div modal-menu-ctn="menu" className="modal_menu_btn">
                  <div modal-menu-close="menu" modal-cta-open="cta" className="modal-trigger">
                    <a aria-label={t.menu.przycisk} hover-btn="" data-wf--btn--variant="med" href="#" className="btn w-inline-block">
                      <div hover="label" className="btn_label">
                        <div className="btn_label_text">
                          <div hover="text" className="p6 text-light">
                            {t.menu.przycisk}
                          </div>
                        </div>
                      </div>
                      <div hover="hover" className="btn_hover" />
                      <div hover="bg" className="btn_bg" />
                    </a>
                  </div>
                </div>
                <div className="ico-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal_bg menu">
        <div className="modal_bg_scene b-desk">
          <canvas data-prolog-scene="" className="scene" />
        </div>
      </div>
    </div>
  );
}

export function Cookies() {
  return (
    <div fs-cc="banner" className="cookies">
      <div className="container">
        <div className="grid-c">
          <div data-prevent-flicker="true" cookies="" id="w-node-_4ce046ef-68ba-50ce-46c1-82f735f46f3c-35f46f3a" className="cookies_card theme_on-light">
            <div className="cookies_card_title">
              <div className="h6 text-dark">
                {t.cookies.tytul}
              </div>
              <div fs-cc="close" className="cookies_card_btn-close">
                <a aria-label="Zamknij" hover-btn-close="" href="#" className="btn-close w-inline-block">
                  <div className="h6 text-dark">
                    {"["}
                  </div>
                  <div hover="label" className="btn-close_label">
                    <div hover="icon" className="btn-close_icon">
                      <div className="h6 text-dark">
                        {"x"}
                      </div>
                    </div>
                    <div hover="icon" className="btn-close_icon">
                      <div className="h6 text-dark">
                        {"x"}
                      </div>
                    </div>
                  </div>
                  <div className="h6 text-dark">
                    {"]"}
                  </div>
                </a>
              </div>
            </div>
            <div className="u-16" />
            <div data-prevent-flicker="true" hover="line" data-scroll-reveal="line" className="divider">
              <div hover="line-l" className="line-l" />
              <div className="line-s" />
            </div>
            <div className="u-16" />
            <div className="p6">
              {t.cookies.tekst}
              <a href="#" className="text-link">
                {t.cookies.link}
              </a>
            </div>
            <div className="u-16" />
            <div className="cookies_card_btn-w">
              <div fs-cc="close" className="cookies_card_btn">
                <a aria-label="Ок" hover-nav-item="" hover-divider="" href="#" className="nav-item w-inline-block">
                  <div hover="label" className="nav-item_label">
                    <div className="nav-item_label_text">
                      <div hover="text" className="p4 text-dark">
                        {t.cookies.ok}
                      </div>
                    </div>
                    <div className="nav-item_label_text is-2">
                      <div hover="text" className="p4 text-dark">
                        {t.cookies.ok}
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
        </div>
      </div>
    </div>
  );
}
