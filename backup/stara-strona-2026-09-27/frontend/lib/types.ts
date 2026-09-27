export interface Service {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string | null;
  order: number;
}

export interface GalleryPhoto {
  id: string;
  imageUrl: string;
  alt: string;
  order: number;
}

export interface GalleryVideo {
  id: string;
  title: string;
  videoUrl: string;
  thumbnailUrl: string | null;
  order: number;
}

export type GalleryDocType = "file" | "link";

export interface GalleryDoc {
  id: string;
  title: string;
  type: GalleryDocType;
  url: string;
  order: number;
}

export interface ContactMessage {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export interface ContactFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
