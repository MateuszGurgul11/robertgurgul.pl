from __future__ import annotations

from typing import Any

from app.firebase_admin_init import get_firestore_client


class FirestoreRepo:
    def __init__(self, collection: str):
        self.collection = collection

    @property
    def _col(self):
        return get_firestore_client().collection(self.collection)

    def list_all(self, order_by: str | None = "order") -> list[dict[str, Any]]:
        query = self._col.order_by(order_by) if order_by else self._col
        return [{"id": doc.id, **doc.to_dict()} for doc in query.stream()]

    def get(self, doc_id: str) -> dict[str, Any] | None:
        snap = self._col.document(doc_id).get()
        return {"id": snap.id, **snap.to_dict()} if snap.exists else None

    def create(self, data: dict[str, Any]) -> dict[str, Any]:
        ref = self._col.document()
        ref.set(data)
        return {"id": ref.id, **data}

    def update(self, doc_id: str, data: dict[str, Any]) -> dict[str, Any] | None:
        ref = self._col.document(doc_id)
        if not ref.get().exists:
            return None
        ref.update(data)
        snap = ref.get()
        return {"id": snap.id, **snap.to_dict()}

    def delete(self, doc_id: str) -> bool:
        ref = self._col.document(doc_id)
        if not ref.get().exists:
            return False
        ref.delete()
        return True
