"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { FileText, Film, ImagePlus, Loader2 } from "lucide-react";
import { useAuth } from "@/lib/firebase/use-auth";
import { ApiError, uploadFile } from "@/lib/api";
import { cn } from "@/lib/utils";

interface UploadDropzoneProps {
  value?: string | null;
  onUploaded: (url: string) => void;
  accept?: string;
  label?: string;
}

/** Short, readable label for signed Storage URLs (avoids blowing up modal layout). */
function fileLabel(url: string): string {
  try {
    const path = new URL(url).pathname;
    const name = decodeURIComponent(path.split("/").pop() ?? "");
    if (name) return name.length > 48 ? `${name.slice(0, 45)}…` : name;
  } catch {
    /* not a URL */
  }
  return url.length > 48 ? `${url.slice(0, 45)}…` : url;
}

export function UploadDropzone({
  value,
  onUploaded,
  accept = "image/*",
  label = "Wgraj plik",
}: UploadDropzoneProps) {
  const { getToken } = useAuth();
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const isImage = accept.startsWith("image");
  const isVideo = accept.startsWith("video");

  async function handleFile(file: File) {
    setUploading(true);
    try {
      const token = await getToken();
      const { url } = await uploadFile(file, token);
      onUploaded(url);
      toast.success("Plik wgrany.");
    } catch (err) {
      const message =
        err instanceof ApiError
          ? err.message
          : "Nie udało się wgrać pliku.";
      toast.error(message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragOver(false);
        const file = e.dataTransfer.files?.[0];
        if (file) handleFile(file);
      }}
      onClick={() => inputRef.current?.click()}
      role="button"
      tabIndex={0}
      className={cn(
        "flex min-h-32 w-full min-w-0 cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-dashed px-4 py-6 text-center transition-colors duration-150",
        dragOver
          ? "border-gold-deep bg-gold/5"
          : "border-slate-200 hover:border-slate-300"
      )}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = "";
        }}
      />
      {uploading ? (
        <Loader2 className="h-6 w-6 animate-spin text-slate-400" />
      ) : value && isImage ? (
        <>
          <div className="relative h-20 w-20 overflow-hidden rounded-lg">
            <Image src={value} alt="" fill sizes="80px" className="object-cover" />
          </div>
          <p className="text-xs text-slate-500">Kliknij, aby zmienić plik</p>
        </>
      ) : value ? (
        <>
          {isVideo ? (
            <Film className="h-6 w-6 shrink-0 text-slate-400" aria-hidden />
          ) : (
            <FileText className="h-6 w-6 shrink-0 text-slate-400" aria-hidden />
          )}
          <p
            className="w-full min-w-0 truncate px-1 text-xs font-medium text-slate-700"
            title={value}
          >
            {fileLabel(value)}
          </p>
          <p className="text-xs text-slate-500">Kliknij, aby zmienić plik</p>
        </>
      ) : (
        <>
          {isVideo ? (
            <Film className="h-6 w-6 text-slate-400" />
          ) : (
            <ImagePlus className="h-6 w-6 text-slate-400" />
          )}
          <p className="text-xs text-slate-500">{label}</p>
        </>
      )}
    </div>
  );
}
