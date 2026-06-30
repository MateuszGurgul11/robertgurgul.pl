"use client";

import { useState } from "react";
import Image from "next/image";
import { Pencil, Plus } from "lucide-react";
import { useResource } from "@/hooks/use-resource";
import { servicesApi } from "@/lib/api";
import type { Service } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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

type FormState = { title: string; description: string; imageUrl: string | null };
const EMPTY_FORM: FormState = { title: "", description: "", imageUrl: null };

export default function AdminOfferPage() {
  const { items, loading, create, update, remove } = useResource<Service>(servicesApi);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Service | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);

  function openCreate() {
    setEditing(null);
    setForm(EMPTY_FORM);
    setOpen(true);
  }

  function openEdit(service: Service) {
    setEditing(service);
    setForm({
      title: service.title,
      description: service.description ?? "",
      imageUrl: service.imageUrl,
    });
    setOpen(true);
  }

  async function onSubmit() {
    setSaving(true);
    try {
      const payload = { ...form, description: form.description.trim() || null };
      if (editing) {
        await update(editing.id, payload);
      } else {
        await create({ ...payload, order: items.length });
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
            Oferta
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Bloki usług wyświetlane w sekcji „Oferta” na stronie głównej.
          </p>
        </div>
        <Button onClick={openCreate} className="gap-2 bg-navy-deep text-offwhite hover:bg-navy-mid">
          <Plus className="h-4 w-4" />
          Dodaj usługę
        </Button>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-20">Zdjęcie</TableHead>
              <TableHead>Nazwa usługi</TableHead>
              <TableHead className="w-24 text-right">Akcje</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={3} className="py-8 text-center text-sm text-slate-400">
                  Wczytywanie...
                </TableCell>
              </TableRow>
            ) : items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="py-8 text-center text-sm text-slate-400">
                  Brak usług. Dodaj pierwszą pozycję.
                </TableCell>
              </TableRow>
            ) : (
              items.map((service) => (
                <TableRow key={service.id}>
                  <TableCell>
                    {service.imageUrl ? (
                      <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                        <Image src={service.imageUrl} alt="" fill sizes="48px" className="object-cover" />
                      </div>
                    ) : (
                      <div className="h-12 w-12 rounded-lg bg-slate-100" />
                    )}
                  </TableCell>
                  <TableCell className="font-medium text-slate-700">
                    <p>{service.title}</p>
                    {service.description ? (
                      <p className="mt-0.5 max-w-md truncate text-xs text-slate-400">
                        {service.description}
                      </p>
                    ) : null}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <button
                        type="button"
                        onClick={() => openEdit(service)}
                        aria-label={`Edytuj: ${service.title}`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <ConfirmDeleteButton
                        itemLabel={service.title}
                        onConfirm={() => remove(service.id)}
                      />
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
            <DialogTitle>{editing ? "Edytuj usługę" : "Nowa usługa"}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="service-title">Nazwa usługi</Label>
              <Input
                id="service-title"
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="service-description">
                Krótki opis{" "}
                <span className="text-slate-400">(jedna-dwie linijki, opcjonalnie)</span>
              </Label>
              <Textarea
                id="service-description"
                rows={3}
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Zdjęcie</Label>
              <UploadDropzone
                value={form.imageUrl}
                onUploaded={(url) => setForm((f) => ({ ...f, imageUrl: url }))}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Anuluj
            </Button>
            <Button
              type="button"
              disabled={saving || !form.title.trim()}
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
