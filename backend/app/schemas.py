from __future__ import annotations

from typing import Literal

from pydantic import BaseModel, EmailStr, Field

GalleryDocType = Literal["file", "link"]


class ServiceBase(BaseModel):
    title: str
    description: str | None = None
    imageUrl: str | None = None
    order: int = 0


class ServiceCreate(ServiceBase):
    pass


class ServiceUpdate(BaseModel):
    title: str | None = None
    description: str | None = None
    imageUrl: str | None = None
    order: int | None = None


class Service(ServiceBase):
    id: str


class GalleryPhotoBase(BaseModel):
    imageUrl: str
    alt: str
    order: int = 0


class GalleryPhotoCreate(GalleryPhotoBase):
    pass


class GalleryPhotoUpdate(BaseModel):
    imageUrl: str | None = None
    alt: str | None = None
    order: int | None = None


class GalleryPhoto(GalleryPhotoBase):
    id: str


class GalleryVideoBase(BaseModel):
    title: str
    videoUrl: str
    thumbnailUrl: str | None = None
    order: int = 0


class GalleryVideoCreate(GalleryVideoBase):
    pass


class GalleryVideoUpdate(BaseModel):
    title: str | None = None
    videoUrl: str | None = None
    thumbnailUrl: str | None = None
    order: int | None = None


class GalleryVideo(GalleryVideoBase):
    id: str


class GalleryDocBase(BaseModel):
    title: str
    type: GalleryDocType
    url: str
    order: int = 0


class GalleryDocCreate(GalleryDocBase):
    pass


class GalleryDocUpdate(BaseModel):
    title: str | None = None
    type: GalleryDocType | None = None
    url: str | None = None
    order: int | None = None


class GalleryDoc(GalleryDocBase):
    id: str


class ContactCreate(BaseModel):
    firstName: str = Field(min_length=1, max_length=80)
    lastName: str = Field(min_length=1, max_length=80)
    email: EmailStr
    phone: str = Field(min_length=6, max_length=20)
    message: str = Field(min_length=5, max_length=4000)


class ContactMessage(ContactCreate):
    id: str
    createdAt: str
    read: bool


class ContactReadUpdate(BaseModel):
    read: bool
