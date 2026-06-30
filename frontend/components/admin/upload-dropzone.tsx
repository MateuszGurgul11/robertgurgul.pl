"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { ImagePlus, Loader2 } from "lucide-react";
import { useAuth } from "@/lib/firebase/use-auth";
import { uploadFile } from "@/lib/api";
import { cn } from "@/lib/utils";

interface UploadDropzoneProps {
  value?: string | null;
  onUploaded: (url: string) => void;
  accept?: string;
  label?: string;
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

  async function handleFile(file: File) {
    setUploading(true);
    try {
      const token = await getToken();
      const { url } = await uploadFile(file, token);
      onUploaded(url);
      toast.success("Plik wgrany.");
    } catch {
      toast.error("Nie udało się wgrać pliku.");
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
        "flex min-h-32 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-6 text-center transition-colors duration-150",
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
          <p className="max-w-full truncate text-xs text-slate-600">{value}</p>
          <p className="text-xs text-slate-500">Kliknij, aby zmienić plik</p>
        </>
      ) : (
        <>
          <ImagePlus className="h-6 w-6 text-slate-400" />
          <p className="text-xs text-slate-500">{label}</p>
        </>
      )}
    </div>
  );
}
