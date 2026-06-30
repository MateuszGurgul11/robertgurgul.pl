"use client";

import { useState } from "react";
import Image from "next/image";
import { Pencil, Plus } from "lucide-react";
import { useResource } from "@/hooks/use-resource";
import { videosApi } from "@/lib/api";
import type { GalleryVideo } from "@/lib/types";
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UploadDropzone } from "@/components/admin/upload-dropzone";
import { ConfirmDeleteButton } from "@/components/admin/confirm-delete-button";

type FormState = { title: string; videoUrl: string; thumbnailUrl: string | null };
const EMPTY_FORM: FormState = { title: "", videoUrl: "", thumbnailUrl: null };

export default function AdminVideosPage() {
  const { items, loading, create, update, remove } = useResource<GalleryVideo>(videosApi);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<GalleryVideo | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);

  function openCreate() {
    setEditing(null);
    setForm(EMPTY_FORM);
    setOpen(true);
  }

  function openEdit(video: GalleryVideo) {
    setEditing(video);
    setForm({ title: video.title, videoUrl: video.videoUrl, thumbnailUrl: video.thumbnailUrl });
    setOpen(true);
  }

  async function onSubmit() {
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
            Galeria — Filmy
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Filmy widoczne na podstronie /videos (YouTube, Vimeo lub plik wideo).
          </p>
        </div>
        <Button onClick={openCreate} className="gap-2 bg-navy-deep text-offwhite hover:bg-navy-mid">
          <Plus className="h-4 w-4" />
          Dodaj film
        </Button>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-20">Miniatura</TableHead>
              <TableHead>Tytuł</TableHead>
              <TableHead>Adres URL</TableHead>
              <TableHead className="w-24 text-right">Akcje</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} className="py-8 text-center text-sm text-slate-400">
                  Wczytywanie...
                </TableCell>
              </TableRow>
            ) : items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="py-8 text-center text-sm text-slate-400">
                  Brak filmów. Dodaj pierwszą pozycję.
                </TableCell>
              </TableRow>
            ) : (
              items.map((video) => (
                <TableRow key={video.id}>
                  <TableCell>
                    {video.thumbnailUrl ? (
                      <div className="relative h-12 w-20 overflow-hidden rounded-lg">
                        <Image src={video.thumbnailUrl} alt="" fill sizes="80px" className="object-cover" />
                      </div>
                    ) : (
                      <div className="h-12 w-20 rounded-lg bg-slate-100" />
                    )}
                  </TableCell>
                  <TableCell className="font-medium text-slate-700">{video.title}</TableCell>
                  <TableCell className="max-w-xs truncate text-sm text-slate-500">
                    {video.videoUrl}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <button
                        type="button"
                        onClick={() => openEdit(video)}
                        aria-label={`Edytuj: ${video.title}`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <ConfirmDeleteButton itemLabel={video.title} onConfirm={() => remove(video.id)} />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{editing ? "Edytuj film" : "Nowy film"}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="video-title">Tytuł</Label>
              <Input
                id="video-title"
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="video-url">Adres URL (YouTube, Vimeo lub plik wideo)</Label>
              <Input
                id="video-url"
                value={form.videoUrl}
                onChange={(e) => setForm((f) => ({ ...f, videoUrl: e.target.value }))}
                placeholder="https://www.youtube.com/watch?v=..."
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Miniatura (opcjonalnie)</Label>
              <UploadDropzone
                value={form.thumbnailUrl}
                onUploaded={(url) => setForm((f) => ({ ...f, thumbnailUrl: url }))}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Anuluj
            </Button>
            <Button
              type="button"
              disabled={saving || !form.title.trim() || !form.videoUrl.trim()}
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
