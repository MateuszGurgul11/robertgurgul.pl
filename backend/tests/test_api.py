import os

os.environ.setdefault("FIREBASE_PROJECT_ID", "demo-test")
os.environ.setdefault("FIREBASE_AUTH_EMULATOR_HOST", "127.0.0.1:9099")

from fastapi.testclient import TestClient

from app.main import app
from app.services.firestore_repo import FirestoreRepo

client = TestClient(app)


def test_health():
    res = client.get("/health")
    assert res.status_code == 200
    assert res.json() == {"status": "ok"}


def test_list_services_is_public(monkeypatch):
    monkeypatch.setattr(
        FirestoreRepo,
        "list_all",
        lambda self, order_by="order": [
            {"id": "1", "title": "Test", "imageUrl": None, "order": 0}
        ],
    )
    res = client.get("/api/services")
    assert res.status_code == 200
    assert res.json()[0]["title"] == "Test"


def test_create_service_requires_auth():
    res = client.post("/api/services", json={"title": "Nowa usługa"})
    assert res.status_code == 401


def test_create_service_rejects_invalid_token():
    res = client.post(
        "/api/services",
        json={"title": "Nowa usługa"},
        headers={"Authorization": "Bearer not-a-real-token"},
    )
    assert res.status_code == 401


def test_contact_submit_does_not_require_auth(monkeypatch):
    monkeypatch.setattr(
        FirestoreRepo, "create", lambda self, data: {"id": "abc", **data}
    )
    monkeypatch.setattr(
        "app.routers.contact.send_contact_notification", lambda data: None
    )
    res = client.post(
        "/api/contact",
        json={
            "firstName": "Jan",
            "lastName": "Kowalski",
            "email": "jan@example.com",
            "phone": "123456789",
            "message": "Wiadomość testowa o odpowiedniej długości.",
        },
    )
    assert res.status_code == 201
    body = res.json()
    assert body["read"] is False
    assert "createdAt" in body


def test_contact_list_requires_auth():
    res = client.get("/api/contact")
    assert res.status_code == 401


def test_upload_requires_auth():
    res = client.post(
        "/api/admin/upload", files={"file": ("test.png", b"fake", "image/png")}
    )
    assert res.status_code == 401
