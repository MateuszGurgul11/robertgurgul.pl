#!/usr/bin/env bash
# Pre-deploy checks for robertgurgul.pl (run from repo root).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "==> Checking tracked secrets..."
if git ls-files | rg -q 'firebase-adminsdk|backend/\.env$|frontend/\.env\.local'; then
  echo "FAIL: secret or env file is tracked by git"
  git ls-files | rg 'firebase-adminsdk|backend/\.env$|frontend/\.env\.local' || true
  exit 1
fi
echo "OK: no obvious secrets in git index"

echo "==> Frontend build..."
(cd frontend && npm run build)
echo "OK: frontend build"

echo "==> Backend tests..."
(cd backend && python3 -m venv .venv-check 2>/dev/null || true)
if [[ -d backend/.venv ]]; then
  # shellcheck disable=SC1091
  source backend/.venv/bin/activate
elif [[ -d backend/.venv-check ]]; then
  # shellcheck disable=SC1091
  source backend/.venv-check/bin/activate
  pip install -q -r backend/requirements-dev.txt
fi
(cd backend && pytest -q)
echo "OK: backend tests"

if [[ -n "${RENDER_HEALTH_URL:-}" ]]; then
  echo "==> Render health: $RENDER_HEALTH_URL"
  curl -fsS "$RENDER_HEALTH_URL/health" | rg -q '"status"[[:space:]]*:[[:space:]]*"ok"'
  echo "OK: Render /health"
fi

if [[ -n "${VERCEL_URL:-}" ]]; then
  echo "==> Vercel: $VERCEL_URL"
  curl -fsS -o /dev/null -w "%{http_code}" "$VERCEL_URL" | rg -q '^200$'
  echo "OK: Vercel homepage"
fi

echo ""
echo "Prep checks passed. See DEPLOYMENT.md for Render + Vercel steps."
