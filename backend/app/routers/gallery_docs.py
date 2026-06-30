from app.routers.crud_factory import build_crud_router
from app.schemas import GalleryDoc, GalleryDocCreate, GalleryDocUpdate

router = build_crud_router(
    prefix="/api/gallery/docs",
    tag="gallery-docs",
    collection="gallery_docs",
    read_model=GalleryDoc,
    create_model=GalleryDocCreate,
    update_model=GalleryDocUpdate,
)
