# Wdrożenie: Vercel (frontend) + Render (backend)

Krok po kroku dla monorepo `robertgurgul.pl`. Większość kroków to panele Firebase / Render / Vercel — kod jest już przygotowany (`Dockerfile`, `render.yaml`, healthcheck `/health`).

## Architektura

```
Przeglądarka → Vercel (Next.js) → Render (FastAPI) → Firebase (Auth, Firestore, Storage)
                     ↘ Firebase Auth (logowanie /admin)
```

| Część | Platforma | Root directory |
|-------|-----------|----------------|
| `frontend/` | Vercel | `frontend` |
| `backend/` | Render | `backend` |

---

## Faza 0 — Przed startem

```bash
# Z katalogu głównego repo
chmod +x scripts/*.sh backend/run-dev.sh
./scripts/verify-deploy-prep.sh
```

- Repo na GitHubie, **bez** `backend/.env`, `frontend/.env.local`, `*-firebase-adminsdk-*.json` w git.
- Jeśli klucz Firebase trafił do historii commitów → **obróć go** w Google Cloud Console przed deployem.

---

## Faza 1 — Firebase (produkcja)

Projekt: `robertgurgul-2da28` (lub własny).

1. **Authentication** → Email/Password → włącz → dodaj użytkownika admina.
2. **Firestore** + **Storage** → utwórz (region np. europe-west).
3. Wdróż reguły:

```bash
./scripts/deploy-firebase-rules.sh robertgurgul-2da28
```

4. **Service account** → Generate new private key → JSON **nie commituj**.
5. Zapisz **Web app config** (`apiKey`, `authDomain`, `projectId`) na później (Vercel).
6. **Authorized domains** (Auth → Settings): `localhost`, `*.vercel.app`, `robertgurgul.pl`, `www.robertgurgul.pl`.

---

## Faza 2 — Backend na Render

1. [render.com](https://render.com) → połącz GitHub.
2. **Blueprint** → wskaż [`backend/render.yaml`](backend/render.yaml)  
   **lub** ręcznie: Web Service, **Root Directory** `backend`, Runtime **Docker**, Health Check `/health`, region **Frankfurt**.
3. Zmienne środowiskowe (patrz [`backend/.env.example`](backend/.env.example)):

| Zmienna | Przykład |
|---------|----------|
| `FIREBASE_PROJECT_ID` | `robertgurgul-2da28` |
| `FIREBASE_STORAGE_BUCKET` | `robertgurgul-2da28.firebasestorage.app` |
| `FIREBASE_SERVICE_ACCOUNT_JSON` | cały JSON service account w **jednej linii** |
| `CORS_ALLOWED_ORIGINS` | `https://twoja-app.vercel.app` (później + domena) |
| `RESEND_API_KEY` | opcjonalnie |
| `CONTACT_EMAIL_TO` | opcjonalnie |
| `CONTACT_EMAIL_FROM` | opcjonalnie |

4. Po deployu zapisz URL, np. `https://robertgurgul-backend.onrender.com`.

```bash
curl https://TWOJ-BACKEND.onrender.com/health
# {"status":"ok"}
```

Plan **free**: cold start ~30–60 s po bezczynności.

---

## Faza 3 — Frontend na Vercel

1. [vercel.com](https://vercel.com) → Import repo GitHub.
2. **Root Directory:** `frontend`
3. Zmienne (Production), patrz [`frontend/.env.example`](frontend/.env.example):

| Zmienna | Wartość |
|---------|---------|
| `NEXT_PUBLIC_API_URL` | URL Render **bez** końcowego `/` |
| `NEXT_PUBLIC_SITE_URL` | `https://robertgurgul.pl` lub URL Vercel |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | z Firebase Console |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | `robertgurgul-2da28.firebaseapp.com` |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | `robertgurgul-2da28` |
| `NEXT_PUBLIC_USE_FIREBASE_EMULATOR` | `false` |

4. Deploy. Po zmianie `NEXT_PUBLIC_*` → **Redeploy** (wbudowane przy buildzie).

CLI (opcjonalnie):

```bash
cd frontend
npx vercel link
npx vercel env pull .env.local
npx vercel --prod
```

---

## Faza 4 — Połączenie

1. **Render** → `CORS_ALLOWED_ORIGINS`:

```
https://twoja-app.vercel.app,https://robertgurgul.pl,https://www.robertgurgul.pl
```

2. **Firebase** → Authorized domains (jak wyżej).
3. Test E2E:

```bash
export RENDER_HEALTH_URL=https://twoj-backend.onrender.com
export VERCEL_URL=https://twoja-app.vercel.app
./scripts/verify-deploy-prep.sh
```

Ręcznie: `/`, `/photos`, `/admin/login`, formularz kontaktowy, upload w CMS.

---

## Faza 5 — Domena `robertgurgul.pl` (opcjonalnie)

1. Vercel → Domains → dodaj `robertgurgul.pl` + `www`.
2. DNS u rejestratora wg Vercel.
3. `NEXT_PUBLIC_SITE_URL=https://robertgurgul.pl` → Redeploy Vercel.
4. Dopisz domenę do `CORS_ALLOWED_ORIGINS` na Render.

API może zostać na `*.onrender.com` (`NEXT_PUBLIC_API_URL`).

---

## Faza 6 — Treści

1. `/admin/login` → uzupełnij Ofertę i Galerię.
2. Sprawdź formularz kontaktowy na produkcji.

---

## Typowe problemy

| Problem | Rozwiązanie |
|---------|-------------|
| CORS w konsoli | Dopisz origin frontendu do `CORS_ALLOWED_ORIGINS` |
| Login admin nie działa | Authorized domains w Firebase |
| API 500 na starcie | Sprawdź `FIREBASE_SERVICE_ACCOUNT_JSON` (jedna linia, poprawny JSON) |
| Wolne API | Render free cold start |
| Push odrzucony (GH013) | Usuń klucz Firebase z historii git, obróć klucz |

---

## Checklist

- [ ] `./scripts/verify-deploy-prep.sh` OK
- [ ] Firebase: Auth, Firestore, Storage, reguły
- [ ] Render: `/health` OK
- [ ] Vercel: build OK
- [ ] `NEXT_PUBLIC_API_URL` + CORS
- [ ] Authorized domains
- [ ] Admin login + CMS
- [ ] (Opcja) DNS domeny
