// Klocki z szablonu strony głównej (te same klasy i atrybuty hover=…, które obsługuje public/assets/js/site.js),
// żeby podstrony wyglądały jak reszta strony: etykieta z gwiazdkami, podwójna linia, przyciski, link z podkreśleniem.

const Gwiazdka = () => (
  <div className="ico-8-12">
    <div className="ico w-embed">
      <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 4C2.20914 4 4 2.20914 4 0C4 2.20914 5.79086 4 8 4C5.79086 4 4 5.79086 4 8C4 5.79086 2.20914 4 0 4Z" fill="currentColor" />
      </svg>
    </div>
  </div>
);

/** +++ ETYKIETA +++ */
export function Etykieta({ children, as: Tag = "p" }: { children: React.ReactNode; as?: "p" | "h2" }) {
  return (
    <div data-scroll-reveal="ctn" className="title rgp-etykieta">
      <div className="title_stars text-dark"><Gwiazdka /><Gwiazdka /><Gwiazdka /></div>
      <Tag className="p6 text-dark">{children}</Tag>
      <div className="title_stars text-dark"><Gwiazdka /><Gwiazdka /><Gwiazdka /></div>
    </div>
  );
}

/** Podwójna linia szablonu (gruba + cienka). */
export function Linia() {
  return (
    <div data-prevent-flicker="true" hover="line" data-scroll-reveal="line" className="divider">
      <div hover="line-l" className="line-l" />
      <div className="line-s" />
    </div>
  );
}

type PrzyciskProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  download?: string;
  nowaKarta?: boolean;
};

/** Złoty przycisk szablonu (.btn). */
export function Przycisk({ children, href, onClick, download, nowaKarta }: PrzyciskProps) {
  const wnetrze = (
    <>
      <div hover="label" className="btn_label">
        <div className="btn_label_text">
          <div hover="text" className="p6 text-light">{children}</div>
        </div>
      </div>
      <div hover="hover" className="btn_hover" />
      <div hover="bg" className="btn_bg" />
    </>
  );
  if (href) {
    return (
      <a
        hover-btn=""
        data-wf--btn--variant="med"
        href={href}
        download={download}
        target={nowaKarta ? "_blank" : undefined}
        rel={nowaKarta ? "noopener noreferrer" : undefined}
        className="btn w-inline-block"
      >
        {wnetrze}
      </a>
    );
  }
  return (
    <button type="button" hover-btn="" data-wf--btn--variant="med" onClick={onClick} className="btn w-inline-block rgp-btn-reset">
      {wnetrze}
    </button>
  );
}

/** Link tekstowy z podkreśleniem (.nav-item), jak „Zobacz wszystkie” na stronie głównej. */
export function LinkTekst({ children, href, nowaKarta, klasa = "p6" }: { children: React.ReactNode; href: string; nowaKarta?: boolean; klasa?: string }) {
  return (
    <a
      hover-divider=""
      hover-nav-item=""
      href={href}
      target={nowaKarta ? "_blank" : undefined}
      rel={nowaKarta ? "noopener noreferrer" : undefined}
      className="nav-item w-inline-block"
    >
      <div hover="label" className="nav-item_label">
        <div className="nav-item_label_text">
          <div hover="text" className={`${klasa} text-dark`}>{children}</div>
        </div>
        <div className="nav-item_label_text is-2">
          <div hover="text" className={`${klasa} text-dark`}>{children}</div>
        </div>
      </div>
      <div className="nav-item_line">
        <Linia />
      </div>
    </a>
  );
}

const STRZALKA = {
  lewo: "M10.9587 14.2788L11.332 13.8788L7.6787 7.93208L11.332 2.11875L10.9587 1.71875L4.1587 7.93208L10.9587 14.2788Z",
  prawo: "M5.0413 14.2788L4.66797 13.8788L8.3213 7.93208L4.66797 2.11875L5.0413 1.71875L11.8413 7.93208L5.0413 14.2788Z",
};

/** Okrągły przycisk ze strzałką (.btn-ico), jak w sliderach szablonu. */
export function PrzyciskStrzalka({ kierunek, etykieta, onClick }: { kierunek: "lewo" | "prawo"; etykieta: string; onClick: () => void }) {
  return (
    <button type="button" hover-btn-ico="" className="btn-ico rgp-btn-reset" aria-label={etykieta} onClick={onClick}>
      <div className="ico-16">
        <div hover="ico" className="btn-ico_icon text-dark">
          <div className="ico w-embed">
            <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d={STRZALKA[kierunek]} fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
      <div hover="bg" className="btn-ico_bg sec">
        <div hover="bg-fill" className="btn-ico_bg_fill prim" />
      </div>
    </button>
  );
}

/** [ x ] — przycisk zamknięcia z okien szablonu. */
export function PrzyciskZamknij({ etykieta, onClick }: { etykieta: string; onClick: () => void }) {
  return (
    <button type="button" hover-btn-close="" className="btn-close w-inline-block rgp-btn-reset" aria-label={etykieta} onClick={onClick}>
      <div className="h6 text-dark">[</div>
      <div hover="label" className="btn-close_label">
        <div hover="icon" className="btn-close_icon"><div className="h6 text-dark">x</div></div>
        <div hover="icon" className="btn-close_icon"><div className="h6 text-dark">x</div></div>
      </div>
      <div className="h6 text-dark">]</div>
    </button>
  );
}
