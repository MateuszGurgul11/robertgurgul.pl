"use client";

import { useState } from "react";
import Image from "next/image";
import { Pencil, Plus } from "lucide-react";
import { useResource } from "@/hooks/use-resource";
import { photosApi } from "@/lib/api";
import type { GalleryPhoto } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { UploadDropzone } from "@/components/admin/upload-dropzone";
import { ConfirmDeleteButton } from "@/components/admin/confirm-delete-button";

type FormState = { imageUrl: string; alt: string };
const EMPTY_FORM: FormState = { imageUrl: "", alt: "" };

export default function AdminPhotosPage() {
  const { items, loading, create, update, remove } = useResource<GalleryPhoto>(photosApi);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<GalleryPhoto | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);

  function openCreate() {
    setEditing(null);
    setForm(EMPTY_FORM);
    setOpen(true);
  }

  function openEdit(photo: GalleryPhoto) {
    setEditing(photo);
    setForm({ imageUrl: photo.imageUrl, alt: photo.alt });
    setOpen(true);
  }

  async function onSubmit() {
    if (!form.imageUrl) return;
    setSaving(true);
    try {
      if (editing) {
        await update(editing.id, form);
      } else {
        await create({ ...form, order: items.length });
      }
      setOpen(false);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-semibold text-slate-800">
            Galeria — Zdjęcia
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Zdjęcia widoczne na podstronie /photos.
          </p>
        </div>
        <Button onClick={openCreate} className="gap-2 bg-navy-deep text-offwhite hover:bg-navy-mid">
          <Plus className="h-4 w-4" />
          Dodaj zdjęcie
        </Button>
      </div>

      {loading ? (
        <p className="text-sm text-slate-400">Wczytywanie...</p>
      ) : items.length === 0 ? (
        <p className="text-sm text-slate-400">Brak zdjęć. Dodaj pierwszą pozycję.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-xl border border-slate-200">
              <div className="relative aspect-square w-full">
                <Image src={photo.imageUrl} alt={photo.alt} fill sizes="200px" className="object-cover" />
              </div>
              <div className="absolute inset-0 flex items-start justify-end gap-1 bg-navy-deepest/0 p-2 opacity-0 transition-opacity duration-150 group-hover:bg-navy-deepest/40 group-hover:opacity-100">
                <button
                  type="button"
                  onClick={() => openEdit(photo)}
                  aria-label={`Edytuj: ${photo.alt}`}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-slate-600 hover:bg-white cursor-pointer"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <ConfirmDeleteButton itemLabel={photo.alt} onConfirm={() => remove(photo.id)} />
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{editing ? "Edytuj zdjęcie" : "Nowe zdjęcie"}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label>Zdjęcie</Label>
              <UploadDropzone
                value={form.imageUrl}
                onUploaded={(url) => setForm((f) => ({ ...f, imageUrl: url }))}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="photo-alt">Opis (alt)</Label>
              <Input
                id="photo-alt"
                value={form.alt}
                onChange={(e) => setForm((f) => ({ ...f, alt: e.target.value }))}
                placeholder="np. Ferma kurcząt rzeźnych"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Anuluj
            </Button>
            <Button
              type="button"
              disabled={saving || !form.imageUrl || !form.alt.trim()}
              onClick={onSubmit}
              className="bg-navy-deep text-offwhite hover:bg-navy-mid"
            >
              Zapisz
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
