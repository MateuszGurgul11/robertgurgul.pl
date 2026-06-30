import type { Metadata } from "next";
import { photosApi } from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { PhotoGrid } from "@/components/gallery/photo-grid";
import { GalleryNotice } from "@/components/gallery/gallery-notice";

export const metadata: Metadata = {
  title: "Zdjęcia",
};

export default async function PhotosPage() {
  let photos: Awaited<ReturnType<typeof photosApi.list>> = [];
  let errored = false;
  try {
    photos = await photosApi.list();
  } catch {
    errored = true;
  }

  return (
    <>
      <PageHeader title="Zdjęcia" />
      <section className="bg-navy-deep py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {errored ? (
            <GalleryNotice
              variant="error"
              message="Wystąpił błąd podczas pobierania zdjęć. Proszę spróbować ponownie później."
            />
          ) : photos.length === 0 ? (
            <GalleryNotice
              variant="empty"
              message="Galeria zdjęć zostanie uzupełniona wkrótce."
            />
          ) : (
            <PhotoGrid photos={photos} />
          )}
        </div>
      </section>
    </>
  );
}
