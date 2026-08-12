from __future__ import annotations

import uuid
from datetime import timedelta

from fastapi import APIRouter, Depends, File, HTTPException, UploadFile, status

from app.deps import get_current_admin
from app.firebase_admin_init import get_bucket

router = APIRouter(prefix="/api/admin", tags=["uploads"])

IMAGE_AND_DOC_TYPES = {
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
    "application/pdf",
}
VIDEO_TYPES = {
    "video/mp4",
    "video/webm",
    "video/quicktime",  # .mov
}
ALLOWED_CONTENT_TYPES = IMAGE_AND_DOC_TYPES | VIDEO_TYPES

MAX_IMAGE_DOC_SIZE = 10 * 1024 * 1024  # 10 MB
MAX_VIDEO_SIZE = 50 * 1024 * 1024  # 50 MB


@router.post("/upload")
async def upload_file(
    file: UploadFile = File(...),
    _admin: dict = Depends(get_current_admin),
):
    content_type = (file.content_type or "").split(";")[0].strip().lower()
    if content_type not in ALLOWED_CONTENT_TYPES:
        raise HTTPException(
            status.HTTP_400_BAD_REQUEST,
            "Nieobsługiwany typ pliku. Dozwolone: obrazki, PDF, MP4, WebM, MOV.",
        )

    max_size = (
        MAX_VIDEO_SIZE if content_type in VIDEO_TYPES else MAX_IMAGE_DOC_SIZE
    )
    contents = await file.read()
    if len(contents) > max_size:
        limit_mb = max_size // (1024 * 1024)
        raise HTTPException(
            status.HTTP_400_BAD_REQUEST,
            f"Plik jest zbyt duży (limit {limit_mb} MB).",
        )

    filename = file.filename or ""
    extension = filename.rsplit(".", 1)[-1].lower() if "." in filename else ""
    # Normalize common video extensions when the browser omits one.
    if not extension and content_type in VIDEO_TYPES:
        extension = {
            "video/mp4": "mp4",
            "video/webm": "webm",
            "video/quicktime": "mov",
        }.get(content_type, "")
    blob_name = f"uploads/{uuid.uuid4()}" + (f".{extension}" if extension else "")

    bucket = get_bucket()
    blob = bucket.blob(blob_name)
    blob.upload_from_string(contents, content_type=content_type)

    # Signed URL rather than public ACL / IAM: works out of the box with just
    # the service account credentials, regardless of uniform bucket-level
    # access (the Firebase Storage default), with no extra bucket setup.
    url = blob.generate_signed_url(expiration=timedelta(days=3650), method="GET")
    return {"url": url}
