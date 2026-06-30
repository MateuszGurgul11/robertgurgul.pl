from typing import Type, TypeVar

from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel

from app.deps import get_current_admin
from app.services.firestore_repo import FirestoreRepo

ReadT = TypeVar("ReadT", bound=BaseModel)
CreateT = TypeVar("CreateT", bound=BaseModel)
UpdateT = TypeVar("UpdateT", bound=BaseModel)


def build_crud_router(
    *,
    prefix: str,
    tag: str,
    collection: str,
    read_model: Type[ReadT],
    create_model: Type[CreateT],
    update_model: Type[UpdateT],
) -> APIRouter:
    """Builds a public-read / admin-write CRUD router for a Firestore collection.

    services, gallery photos/videos/docs all share this exact shape, so the
    route wiring is generated once instead of repeated four times.
    """
    router = APIRouter(prefix=prefix, tags=[tag])
    repo = FirestoreRepo(collection)

    @router.get("", response_model=list[read_model])
    def list_items():
        return repo.list_all()

    @router.post("", response_model=read_model, status_code=status.HTTP_201_CREATED)
    def create_item(payload: create_model, _admin: dict = Depends(get_current_admin)):
        return repo.create(payload.model_dump())

    @router.put("/{item_id}", response_model=read_model)
    def update_item(
        item_id: str,
        payload: update_model,
        _admin: dict = Depends(get_current_admin),
    ):
        updated = repo.update(item_id, payload.model_dump(exclude_unset=True))
        if updated is None:
            raise HTTPException(status.HTTP_404_NOT_FOUND, "Nie znaleziono pozycji.")
        return updated

    @router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
    def delete_item(item_id: str, _admin: dict = Depends(get_current_admin)):
        if not repo.delete(item_id):
            raise HTTPException(status.HTTP_404_NOT_FOUND, "Nie znaleziono pozycji.")

    return router
