from __future__ import annotations

import uuid
from datetime import timedelta

from fastapi import APIRouter, Depends, File, HTTPException, UploadFile, status

from app.deps import get_current_admin
from app.firebase_admin_init import get_bucket

router = APIRouter(prefix="/api/admin", tags=["uploads"])

ALLOWED_CONTENT_TYPES = {
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
    "application/pdf",
}
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB


@router.post("/upload")
async def upload_file(
    file: UploadFile = File(...),
    _admin: dict = Depends(get_current_admin),
):
    if file.content_type not in ALLOWED_CONTENT_TYPES:
        raise HTTPException(status.HTTP_400_BAD_REQUEST, "Nieobsługiwany typ pliku.")

    contents = await file.read()
    if len(contents) > MAX_FILE_SIZE:
        raise HTTPException(
            status.HTTP_400_BAD_REQUEST, "Plik jest zbyt duży (limit 10 MB)."
        )

    filename = file.filename or ""
    extension = filename.rsplit(".", 1)[-1] if "." in filename else ""
    blob_name = f"uploads/{uuid.uuid4()}" + (f".{extension}" if extension else "")

    bucket = get_bucket()
    blob = bucket.blob(blob_name)
    blob.upload_from_string(contents, content_type=file.content_type)

    # Signed URL rather than public ACL / IAM: works out of the box with just
    # the service account credentials, regardless of uniform bucket-level
    # access (the Firebase Storage default), with no extra bucket setup.
    url = blob.generate_signed_url(expiration=timedelta(days=3650), method="GET")
    return {"url": url}
