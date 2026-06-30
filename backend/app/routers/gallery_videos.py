from app.routers.crud_factory import build_crud_router
from app.schemas import GalleryVideo, GalleryVideoCreate, GalleryVideoUpdate

router = build_crud_router(
    prefix="/api/gallery/videos",
    tag="gallery-videos",
    collection="gallery_videos",
    read_model=GalleryVideo,
    create_model=GalleryVideoCreate,
    update_model=GalleryVideoUpdate,
)
