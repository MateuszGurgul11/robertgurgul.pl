import type { Metadata } from "next";
import { docsApi } from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { DocList } from "@/components/gallery/doc-list";
import { GalleryNotice } from "@/components/gallery/gallery-notice";

export const metadata: Metadata = {
  title: "Dokumentacja PDF",
};

export default async function DocsPage() {
  let docs: Awaited<ReturnType<typeof docsApi.list>> = [];
  let errored = false;
  try {
    docs = await docsApi.list();
  } catch {
    errored = true;
  }

  return (
    <>
      <PageHeader title="Dokumentacja PDF" />
      <section className="bg-navy-deep py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {errored ? (
            <GalleryNotice
              variant="error"
              message="Wystąpił błąd podczas pobierania dokumentów."
            />
          ) : docs.length === 0 ? (
            <GalleryNotice
              variant="empty"
              message="Dokumenty zostaną uzupełnione wkrótce."
            />
          ) : (
            <DocList docs={docs} />
          )}
        </div>
      </section>
    </>
  );
}
