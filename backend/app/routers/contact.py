from __future__ import annotations

from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException, status

from app.deps import get_current_admin
from app.schemas import ContactCreate, ContactMessage, ContactReadUpdate
from app.services.email import send_contact_notification
from app.services.firestore_repo import FirestoreRepo

router = APIRouter(prefix="/api/contact", tags=["contact"])
repo = FirestoreRepo("messages")


@router.post("", response_model=ContactMessage, status_code=status.HTTP_201_CREATED)
def submit_contact(payload: ContactCreate):
    data = payload.model_dump()
    data["createdAt"] = datetime.now(timezone.utc).isoformat()
    data["read"] = False
    created = repo.create(data)
    send_contact_notification(data)
    return created


@router.get("", response_model=list[ContactMessage])
def list_messages(_admin: dict = Depends(get_current_admin)):
    return repo.list_all(order_by=None)


@router.patch("/{message_id}/read", response_model=ContactMessage)
def set_read(
    message_id: str,
    payload: ContactReadUpdate,
    _admin: dict = Depends(get_current_admin),
):
    updated = repo.update(message_id, {"read": payload.read})
    if updated is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Nie znaleziono wiadomości.")
    return updated
