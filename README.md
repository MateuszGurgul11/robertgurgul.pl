# robertgurgul.pl

Strona + CMS dla Roberta Gurgula (doradztwo zootechniczne i żywieniowe dla
ferm drobiu).

## Architektura

```
przeglądarka
  │
  ├─ Next.js (frontend) ── strona publiczna (SSR) + panel /admin (CMS, SPA)
  │     │                       │
  │     │ fetch /api/*          │ Firebase Auth (logowanie, tylko to)
  │     ▼                       ▼
  └─ FastAPI (backend) ◄─── ID token (Bearer)
        │
        ▼
   Firebase Admin SDK
        │
        ├─ Firestore   (services, gallery_photos, gallery_videos, gallery_docs, messages)
        └─ Storage     (zdjęcia, PDFy — upload + signed URL)
```

Kluczowa zasada: **Firestore i Storage są dostępne wyłącznie z backendu**
(Admin SDK, pełne zaufanie, reguły bezpieczeństwa = `deny all` jako defense in
depth). Frontend nigdy nie czyta/pisze do Firebase poza logowaniem (Firebase
Auth). Wszystkie dane (publiczne i CMS) przechodzą przez REST API w FastAPI.

## Struktura repo

- `frontend/` — Next.js 16 (App Router), TypeScript, Tailwind v4, shadcn/ui,
  Framer Motion. Strona publiczna (`/`, `/photos`, `/videos`, `/docs`) + panel
  CMS (`/admin/*`, chroniony Firebase Auth).
- `backend/` — FastAPI (Python). REST API: publiczny odczyt oferty/galerii,
  zapis tylko dla zalogowanego admina (token Firebase zweryfikowany przez
  Admin SDK), formularz kontaktowy (zapis do Firestore + e-mail przez Resend),
  upload plików do Storage.
- `firebase/` — `firestore.rules`, `storage.rules`, `firebase.json`
  (konfiguracja emulatorów: Auth 9099, Firestore 8080, Storage 9199, UI 4000).

## Lokalny development

Wymagane: Node 20+, Python 3.12+, Firebase CLI (`npm i -g firebase-tools`).

### 1. Firebase Local Emulator Suite

Nie trzeba mieć prawdziwego projektu Firebase, żeby developować lokalnie —
emulatory działają z dowolnym "demo" project ID.

```bash
cd firebase
firebase emulators:start --project demo-robertgurgul --only auth,firestore,storage
```

UI emulatorów: http://127.0.0.1:4000 — zakładka „Auth” pozwala ręcznie
dodać użytkownika-admina do testowania logowania w CMS bez curl/REST.

### 2. Backend

```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements-dev.txt

export FIREBASE_PROJECT_ID=demo-robertgurgul
export FIRESTORE_EMULATOR_HOST=127.0.0.1:8080
export FIREBASE_AUTH_EMULATOR_HOST=127.0.0.1:9099
export CORS_ALLOWED_ORIGINS=http://localhost:3000

uvicorn app.main:app --reload --port 8000
```

Testy: `pytest` (hermetyczne, nie potrzebują działających emulatorów).

### 3. Frontend

```bash
cd frontend
npm install
cp .env.example .env.local
# w .env.local ustaw NEXT_PUBLIC_USE_FIREBASE_EMULATOR=true
# oraz NEXT_PUBLIC_FIREBASE_PROJECT_ID=demo-robertgurgul
npm run dev
```

Strona: http://localhost:3000, panel CMS: http://localhost:3000/admin/login
(zaloguj się użytkownikiem dodanym w kroku 1).

Zweryfikowane end-to-end w tym repo: logowanie (Auth emulator), CRUD na
ofercie/galerii z weryfikacją tokenu, formularz kontaktowy → Firestore,
SSR strony głównej i podstron galerii odzwierciedlające realne dane z
Firestore przez backend.

## Wdrożenie (checklist — kroki do wykonania przez Ciebie)

**Pełny przewodnik krok po kroku:** [DEPLOYMENT.md](DEPLOYMENT.md)  
**Skrypt weryfikacji przed deployem:** `./scripts/verify-deploy-prep.sh`

Nic z poniższego nie zostało jeszcze zrobione — żadne konto/projekt nie
istnieje, więc nie mogłem tego wykonać za Ciebie.

### A. Firebase (baza danych + Auth)

1. Utwórz projekt w [Firebase Console](https://console.firebase.google.com).
2. Włącz **Authentication** → metoda logowania „E-mail/hasło” → dodaj
   jednego użytkownika-admina (e-mail + hasło do logowania w `/admin`).
3. Włącz **Firestore Database** (mode: production) i **Storage**.
4. Wdróż reguły: `firebase deploy --only firestore:rules,storage:rules`
   (po `firebase use --add` i wybraniu projektu w `firebase/`).
5. Wygeneruj klucz service account: Project settings → Service accounts →
   Generate new private key. Zawartość pliku JSON → zmienna
   `FIREBASE_SERVICE_ACCOUNT_JSON` na Render (cała zawartość jako string).
6. Skopiuj Web app config (apiKey, authDomain, projectId) do zmiennych
   `NEXT_PUBLIC_FIREBASE_*` na Vercel/Firebase Hosting.

### B. Backend → Render

1. Nowy „Web Service” na [Render](https://render.com), wskaż katalog
   `backend/` (Render wykryje `Dockerfile`), albo użyj `backend/render.yaml`
   jako Blueprint.
2. Ustaw zmienne środowiskowe z `backend/.env.example`
   (`FIREBASE_PROJECT_ID`, `FIREBASE_SERVICE_ACCOUNT_JSON`,
   `FIREBASE_STORAGE_BUCKET`, `CORS_ALLOWED_ORIGINS` — docelowa domena
   frontendu, opcjonalnie `RESEND_API_KEY`/`CONTACT_EMAIL_TO` do e-maili z
   formularza).
3. Po wdrożeniu zapisz publiczny URL (np. `https://robertgurgul-backend.onrender.com`)
   — to wartość `NEXT_PUBLIC_API_URL` dla frontendu.

### C. Frontend → Vercel **albo** Firebase Hosting

**Rekomendacja: Vercel.** Next.js jest tworzony przez Vercel, więc ma tam
natywne wsparcie dla SSR/ISR/obrazów bez dodatkowej konfiguracji, prostszy
CI (`git push` → preview deploy automatycznie) i hojny darmowy plan.
Firebase Hosting (App Hosting) też potrafi hostować Next.js z SSR, ma sens
głównie jeśli chcesz mieć wszystko (hosting + baza + auth) w jednym
rachunku/projekcie Firebase — kosztem nieco większego tarcia konfiguracji.
Obie opcje działają z kodem w tym repo bez zmian.

- **Vercel:** zaimportuj repo, root directory `frontend/`, ustaw zmienne z
  `frontend/.env.example` (`NEXT_PUBLIC_API_URL` = URL z Render,
  `NEXT_PUBLIC_FIREBASE_*` z kroku A.6, `NEXT_PUBLIC_USE_FIREBASE_EMULATOR=false`).
- **Firebase App Hosting:** `firebase init apphosting` w `frontend/`, te
  same zmienne środowiskowe co wyżej.

### D. Po wdrożeniu

- Zaktualizuj `CORS_ALLOWED_ORIGINS` na Render o finalną domenę frontendu.
- Zaloguj się do `/admin/login` użytkownikiem z kroku A.2 i uzupełnij Ofertę,
  Galerię (zdjęcia/filmy/dokumenty) — strona startuje z pustą bazą (Oferta ma
  wbudowany fallback z 8 domyślnymi nazwami usług z brief'u, widoczny dopóki
  nie dodasz realnych pozycji w CMS).

## Uwaga dotycząca tekstu „O Firmie”

Wklejony brief miał dwa miejsca z ubytkami tekstu (skróty typu „Profeównież
służę” i „wysokich nobstancje do środowiska”). Uzupełniłem je najbardziej
sensownym, gramatycznie spójnym dociągnięciem sensu — **proszę zweryfikować
ten akapit w `frontend/components/about-section.tsx`**, bo nie jest on
edytowalny z CMS (zgodnie z ustalonym zakresem CMS) i ewentualna poprawka
wymaga edycji kodu.
