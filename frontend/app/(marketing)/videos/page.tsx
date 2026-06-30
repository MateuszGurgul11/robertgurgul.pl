import type { Metadata } from "next";
import { videosApi } from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { VideoGrid } from "@/components/gallery/video-grid";
import { GalleryNotice } from "@/components/gallery/gallery-notice";

export const metadata: Metadata = {
  title: "Filmy",
};

export default async function VideosPage() {
  let videos: Awaited<ReturnType<typeof videosApi.list>> = [];
  let errored = false;
  try {
    videos = await videosApi.list();
  } catch {
    errored = true;
  }

  return (
    <>
      <PageHeader title="Filmy" />
      <section className="bg-navy-deep py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {errored ? (
            <GalleryNotice
              variant="error"
              message="Wystąpił błąd podczas pobierania filmów."
            />
          ) : videos.length === 0 ? (
            <GalleryNotice
              variant="empty"
              message="Galeria filmów zostanie uzupełniona wkrótce."
            />
          ) : (
            <VideoGrid videos={videos} />
          )}
        </div>
      </section>
    </>
  );
}
