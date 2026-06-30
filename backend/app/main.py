import os
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

load_dotenv(Path(__file__).resolve().parent.parent / ".env")

from app.routers import contact, gallery_docs, gallery_photos, gallery_videos, services, uploads

app = FastAPI(title="Robert Gurgul API", version="1.0.0")

allowed_origins = [
    origin.strip()
    for origin in os.getenv("CORS_ALLOWED_ORIGINS", "http://localhost:3000").split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(services.router)
app.include_router(gallery_photos.router)
app.include_router(gallery_videos.router)
app.include_router(gallery_docs.router)
app.include_router(contact.router)
app.include_router(uploads.router)


@app.get("/health")
def health():
    return {"status": "ok"}
