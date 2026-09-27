"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ConfirmDeleteButton({
  itemLabel,
  onConfirm,
}: {
  itemLabel: string;
  onConfirm: () => Promise<void> | void;
}) {
  const [open, setOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Usuń: ${itemLabel}`}
        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors duration-150 hover:bg-red-50 hover:text-red-600 cursor-pointer"
      >
        <Trash2 className="h-4 w-4" />
      </button>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Usunąć pozycję?</DialogTitle>
          <DialogDescription>
            Czy na pewno chcesz usunąć „{itemLabel}”? Tej operacji nie można
            odwrócić.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Anuluj
          </Button>
          <Button
            type="button"
            disabled={deleting}
            className="bg-red-600 text-white hover:bg-red-700"
            onClick={async () => {
              setDeleting(true);
              await onConfirm();
              setDeleting(false);
              setOpen(false);
            }}
          >
            Usuń
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
