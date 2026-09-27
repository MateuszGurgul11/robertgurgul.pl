"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { useAuth } from "@/lib/firebase/use-auth";

interface ResourceApi<T> {
  list: () => Promise<T[]>;
  create: (data: Partial<T>, token: string) => Promise<T>;
  update: (id: string, data: Partial<T>, token: string) => Promise<T>;
  remove: (id: string, token: string) => Promise<void>;
}

export function useResource<T extends { id: string }>(api: ResourceApi<T>) {
  const { getToken } = useAuth();
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      setItems(await api.list());
    } catch {
      toast.error("Nie udało się wczytać danych.");
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- initial fetch on mount
    refresh();
  }, [refresh]);

  async function create(data: Partial<T>) {
    const token = await getToken();
    const created = await api.create(data, token);
    setItems((prev) => [...prev, created]);
    toast.success("Dodano pozycję.");
    return created;
  }

  async function update(id: string, data: Partial<T>) {
    const token = await getToken();
    const updated = await api.update(id, data, token);
    setItems((prev) => prev.map((item) => (item.id === id ? updated : item)));
    toast.success("Zapisano zmiany.");
    return updated;
  }

  async function remove(id: string) {
    const token = await getToken();
    await api.remove(id, token);
    setItems((prev) => prev.filter((item) => item.id !== id));
    toast.success("Usunięto pozycję.");
  }

  return { items, loading, refresh, create, update, remove };
}
