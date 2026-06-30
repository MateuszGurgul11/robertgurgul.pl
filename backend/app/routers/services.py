from app.routers.crud_factory import build_crud_router
from app.schemas import Service, ServiceCreate, ServiceUpdate

router = build_crud_router(
    prefix="/api/services",
    tag="services",
    collection="services",
    read_model=Service,
    create_model=ServiceCreate,
    update_model=ServiceUpdate,
)
