"""Firebase Admin SDK initialization.

All Firestore/Storage access goes through this module, exclusively from the
backend (the Admin SDK has full trust and bypasses Firestore/Storage security
rules — the frontend never talks to Firebase directly except for Auth login).
"""

from __future__ import annotations

import json
import os
from functools import lru_cache

import firebase_admin
from firebase_admin import auth as firebase_auth
from firebase_admin import credentials
from firebase_admin import storage as firebase_storage
from google.auth.credentials import AnonymousCredentials
from google.cloud import firestore as gcf


def _is_firestore_emulated() -> bool:
    return bool(os.getenv("FIRESTORE_EMULATOR_HOST"))


def _project_id() -> str:
    return os.getenv("FIREBASE_PROJECT_ID", "demo-robertgurgul")


@lru_cache
def get_app() -> firebase_admin.App:
    options: dict = {"projectId": _project_id()}
    bucket = os.getenv("FIREBASE_STORAGE_BUCKET")
    if bucket:
        options["storageBucket"] = bucket

    raw_service_account = os.getenv("FIREBASE_SERVICE_ACCOUNT_JSON")
    if raw_service_account:
        raw = raw_service_account.strip()
        if raw.startswith("{"):
            cred = credentials.Certificate(json.loads(raw))
        else:
            path = raw
            if not os.path.isabs(path):
                backend_root = os.path.abspath(
                    os.path.join(os.path.dirname(__file__), "..")
                )
                path = os.path.join(backend_root, path)
            cred = credentials.Certificate(path)
    elif os.getenv("GOOGLE_APPLICATION_CREDENTIALS") or os.getenv(
        "FIREBASE_AUTH_EMULATOR_HOST"
    ) or _is_firestore_emulated():
        # Lazily-resolved; for emulator-only local dev this is never actually
        # invoked (see get_firestore_client / verify_id_token below).
        cred = credentials.ApplicationDefault()
    else:
        raise RuntimeError(
            "Brak danych uwierzytelniających Firebase. Ustaw "
            "FIREBASE_SERVICE_ACCOUNT_JSON (produkcja) lub "
            "FIRESTORE_EMULATOR_HOST/FIREBASE_AUTH_EMULATOR_HOST (lokalnie) — "
            "zob. backend/.env.example."
        )
    return firebase_admin.initialize_app(cred, options)


@lru_cache
def get_firestore_client() -> gcf.Client:
    if _is_firestore_emulated():
        # firebase_admin.firestore.client() eagerly resolves real
        # ApplicationDefault credentials even when targeting the emulator,
        # which fails in environments with no ambient GCP credentials.
        # google-cloud-firestore's own client auto-substitutes anonymous
        # credentials for the emulator, so we instantiate it directly.
        return gcf.Client(project=_project_id(), credentials=AnonymousCredentials())

    get_app()
    from firebase_admin import firestore as firebase_firestore

    return firebase_firestore.client()


def get_bucket():
    app = get_app()
    return firebase_storage.bucket(app=app)


def verify_id_token(token: str) -> dict:
    get_app()
    return firebase_auth.verify_id_token(token)
