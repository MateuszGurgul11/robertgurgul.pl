"use client";

import { useState, type FormEvent } from "react";
import { contactApi } from "@/lib/api";
import { tresci as t } from "@/content/strona-glowna";

// Formularz w oknie „Konsultacja” / „Porozmawiajmy”. Wysyła wiadomość do backendu
// (POST /api/contact → Firestore + powiadomienie e-mail). Klasy i atrybuty modal-cta-*
// pochodzą z szablonu: site.js animuje okno i po kliknięciu [data-form-btn] wywołuje
// form.requestSubmit(), co trafia do onSubmit poniżej.

type Pola = { imie: string; nazwisko: string; email: string; telefon: string; wiadomosc: string };
type Bledy = Partial<Record<keyof Pola, string>>;
type Stan = "edycja" | "wysylanie" | "wyslane" | "blad";

const PUSTE: Pola = { imie: "", nazwisko: "", email: "", telefon: "", wiadomosc: "" };

function waliduj(p: Pola): Bledy {
  const b: Bledy = {};
  const e = t.formularz.bledy;
  if (!p.imie.trim()) b.imie = e.wymagane;
  if (!p.nazwisko.trim()) b.nazwisko = e.wymagane;
  if (!/^\S+@\S+\.\S+$/.test(p.email.trim())) b.email = e.email;
  if (!/^[0-9+\-\s()]{6,20}$/.test(p.telefon.trim())) b.telefon = e.telefon;
  if (p.wiadomosc.trim().length < 5) b.wiadomosc = e.wiadomosc;
  return b;
}

function ZamknijPrzycisk() {
  return (
    <div modal-cta-close="cta" className="modal-trigger">
      <a aria-label="Zamknij" hover-btn-close="" href="#" className="btn-close w-inline-block">
        <div className="h6 text-dark">[</div>
        <div hover="label" className="btn-close_label">
          <div hover="icon" className="btn-close_icon"><div className="h6 text-dark">x</div></div>
          <div hover="icon" className="btn-close_icon"><div className="h6 text-dark">x</div></div>
        </div>
        <div className="h6 text-dark">]</div>
      </a>
    </div>
  );
}

export function FormularzKontaktowy() {
  const [pola, setPola] = useState<Pola>(PUSTE);
  const [bledy, setBledy] = useState<Bledy>({});
  const [stan, setStan] = useState<Stan>("edycja");
  const f = t.formularz;

  const zmien = (k: keyof Pola) => (e: { target: { value: string } }) => {
    // telefon: tylko cyfry, +, -, spacje i nawiasy
    const v = k === "telefon" ? e.target.value.replace(/[^\d+\-\s()]/g, "") : e.target.value;
    setPola((p) => ({ ...p, [k]: v }));
    if (bledy[k]) setBledy((b) => ({ ...b, [k]: undefined }));
  };

  async function wyslij(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (stan === "wysylanie") return;
    const b = waliduj(pola);
    setBledy(b);
    if (Object.keys(b).length) return;
    setStan("wysylanie");
    try {
      await contactApi.submit({
        firstName: pola.imie.trim(),
        lastName: pola.nazwisko.trim(),
        email: pola.email.trim(),
        phone: pola.telefon.trim(),
        message: pola.wiadomosc.trim(),
      });
      setStan("wyslane");
      setPola(PUSTE);
    } catch {
      setStan("blad");
    }
  }

  const pole = (k: keyof Pola, etykieta: string, props: Record<string, unknown>) => (
    <div modal-cta-line="cta" className="input">
      <div className="input_label">
        <label htmlFor={`kontakt-${k}`} className="p6 text-dark">{etykieta}</label>
      </div>
      {k === "wiadomosc" ? (
        <textarea
          id={`kontakt-${k}`}
          className="input_field p4 text-dark w-input rg-textarea"
          value={pola[k]}
          onChange={zmien(k)}
          aria-invalid={!!bledy[k]}
          aria-describedby={bledy[k] ? `kontakt-${k}-blad` : undefined}
          {...props}
        />
      ) : (
        <input
          id={`kontakt-${k}`}
          className="input_field p4 text-dark w-input"
          value={pola[k]}
          onChange={zmien(k)}
          aria-invalid={!!bledy[k]}
          aria-describedby={bledy[k] ? `kontakt-${k}-blad` : undefined}
          {...props}
        />
      )}
      {bledy[k] && (
        <p id={`kontakt-${k}-blad`} className="p6 rg-form-blad" role="alert">{bledy[k]}</p>
      )}
    </div>
  );

  return (
    // bez klasy w-form: runtime Webflow nie przechwytuje tego formularza
    <div modal-cta-main="cta" className="modal_cta-form">
      <form
        id="phone-form"
        className="modal_cta-form_form theme_on-light"
        noValidate
        onSubmit={wyslij}
        style={{ display: stan === "wyslane" ? "none" : undefined }}
      >
        <div className="modal_cta-form_form_top">
          <div className="grid _4-columns">
            <div id="w-node-_1591a5e0-e0d1-2517-5418-ac4086299dbc-86299db4" className="modal_cta-form_form_title">
              <div modal-cta-headline="cta" className="h6 text-dark">{f.naglowek}</div>
            </div>
            <div modal-cta-container="cta" className="modal_cta-form_form_close">
              <ZamknijPrzycisk />
            </div>
          </div>
          <div className="u-32" />
          <div className="input-list">
            {pole("imie", f.pola.imie, { type: "text", name: "imie", autoComplete: "given-name", maxLength: 80, required: true })}
            {pole("nazwisko", f.pola.nazwisko, { type: "text", name: "nazwisko", autoComplete: "family-name", maxLength: 80, required: true })}
            {pole("email", f.pola.email, { type: "email", name: "email", autoComplete: "email", maxLength: 120, required: true })}
            {pole("telefon", f.pola.telefon, { type: "tel", name: "telefon", autoComplete: "tel", maxLength: 20, required: true })}
            {pole("wiadomosc", f.pola.wiadomosc, { name: "wiadomosc", rows: 3, maxLength: 4000, required: true })}
            <div className="u-16" />
            <div modal-cta-container="cta" className="p6 text-dark">
              {f.zgoda}{" "}
              <a href="#" target="_blank" className="text-link">{f.polityka}</a>.
            </div>
          </div>
        </div>
        <div className="modal_cta-form_form_bot">
          <div className="u-48" />
          {stan === "blad" && (
            <div className="modal_cta-form_error theme_on-color w-form-fail" style={{ display: "block" }} role="alert">
              <div className="p5 text-dark">{f.blad}</div>
            </div>
          )}
          <div modal-cta-container="cta" className="modal_cta-form_form_btn">
            <div className="btn-list">
              <div data-form-btn="" className="form-trigger">
                <a aria-label={f.wyslij} hover-btn="" data-wf--btn--variant="med" href="#" className="btn w-inline-block"
                   aria-disabled={stan === "wysylanie"}>
                  <div hover="label" className="btn_label">
                    <div className="btn_label_text">
                      <div hover="text" className="p6 text-light">
                        {stan === "wysylanie" ? f.wysylanie : f.wyslij}
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
      </form>
      <div
        className="modal_cta-form_success a-left theme_on-dark w-form-done"
        style={{ display: stan === "wyslane" ? "block" : "none" }}
        role="status"
      >
        <div className="modal_cta-form_success_c">
          <div className="modal_cta-form_success_top">
            <div className="grid _4-columns">
              <div id="w-node-_1591a5e0-e0d1-2517-5418-ac4086299dda-86299db4" className="modal_cta-form_form_close">
                <ZamknijPrzycisk />
              </div>
            </div>
          </div>
          <div className="modal_cta-form_success_center">
            <div className="grid">
              <div id="w-node-_2b6bb6cd-22dd-63a2-e3ae-4f8bfba56ea5-86299db4" className="modal_cta-form_success_title">
                <div className="h2 text-dark">{f.sukcesTytul}</div>
              </div>
            </div>
            <div className="u-48" />
            <div className="grid _4-columns">
              <div id="w-node-_1591a5e0-e0d1-2517-5418-ac4086299de2-86299db4" className="modal_cta-form_success_desc">
                <div className="p6 text-dark">{f.sukcesTekst}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
