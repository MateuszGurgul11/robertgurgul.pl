"use client";

import { useState } from "react";
import { FileText, Pencil, Plus } from "lucide-react";
import { useResource } from "@/hooks/use-resource";
import { docsApi } from "@/lib/api";
import type { GalleryDoc, GalleryDocType } from "@/lib/types";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UploadDropzone } from "@/components/admin/upload-dropzone";
import { ConfirmDeleteButton } from "@/components/admin/confirm-delete-button";

type FormState = { title: string; type: GalleryDocType; url: string };
const EMPTY_FORM: FormState = { title: "", type: "file", url: "" };

export default function AdminDocsPage() {
  const { items, loading, create, update, remove } = useResource<GalleryDoc>(docsApi);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<GalleryDoc | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);

  function openCreate() {
    setEditing(null);
    setForm(EMPTY_FORM);
    setOpen(true);
  }

  function openEdit(doc: GalleryDoc) {
    setEditing(doc);
    setForm({ title: doc.title, type: doc.type, url: doc.url });
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
            Galeria — Dokumenty PDF
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Dokumenty widoczne na podstronie /docs — plik PDF lub link zewnętrzny.
          </p>
        </div>
        <Button onClick={openCreate} className="gap-2 bg-navy-deep text-offwhite hover:bg-navy-mid">
          <Plus className="h-4 w-4" />
          Dodaj dokument
        </Button>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10" />
              <TableHead>Tytuł</TableHead>
              <TableHead>Typ</TableHead>
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
                  Brak dokumentów. Dodaj pierwszą pozycję.
                </TableCell>
              </TableRow>
            ) : (
              items.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>
                    <FileText className="h-4 w-4 text-slate-400" />
                  </TableCell>
                  <TableCell className="font-medium text-slate-700">{doc.title}</TableCell>
                  <TableCell className="text-sm text-slate-500">
                    {doc.type === "file" ? "Plik PDF" : "Link zewnętrzny"}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <button
                        type="button"
                        onClick={() => openEdit(doc)}
                        aria-label={`Edytuj: ${doc.title}`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <ConfirmDeleteButton itemLabel={doc.title} onConfirm={() => remove(doc.id)} />
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
            <DialogTitle>{editing ? "Edytuj dokument" : "Nowy dokument"}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="doc-title">Tytuł</Label>
              <Input
                id="doc-title"
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Typ dokumentu</Label>
              <Select
                value={form.type}
                onValueChange={(value) =>
                  setForm((f) => ({ ...f, type: value as GalleryDocType, url: "" }))
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Wybierz typ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="file">Plik PDF</SelectItem>
                  <SelectItem value="link">Link zewnętrzny</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {form.type === "file" ? (
              <div className="flex flex-col gap-1.5">
                <Label>Plik PDF</Label>
                <UploadDropzone
                  accept="application/pdf"
                  value={form.url}
                  label="Wgraj plik PDF"
                  onUploaded={(url) => setForm((f) => ({ ...f, url }))}
                />
              </div>
            ) : (
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="doc-url">Adres URL</Label>
                <Input
                  id="doc-url"
                  value={form.url}
                  onChange={(e) => setForm((f) => ({ ...f, url: e.target.value }))}
                  placeholder="https://..."
                />
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Anuluj
            </Button>
            <Button
              type="button"
              disabled={saving || !form.title.trim() || !form.url.trim()}
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
