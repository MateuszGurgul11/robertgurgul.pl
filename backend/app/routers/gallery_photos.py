from app.routers.crud_factory import build_crud_router
from app.schemas import GalleryPhoto, GalleryPhotoCreate, GalleryPhotoUpdate

router = build_crud_router(
    prefix="/api/gallery/photos",
    tag="gallery-photos",
    collection="gallery_photos",
    read_model=GalleryPhoto,
    create_model=GalleryPhotoCreate,
    update_model=GalleryPhotoUpdate,
)
