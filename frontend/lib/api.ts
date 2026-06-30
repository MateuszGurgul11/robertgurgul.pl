import type {
  ContactFormInput,
  ContactMessage,
  GalleryDoc,
  GalleryPhoto,
  GalleryVideo,
  Service,
} from "@/lib/types";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "http://127.0.0.1:8000";

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

async function request<T>(
  path: string,
  options: RequestInit & { token?: string } = {}
): Promise<T> {
  const { token, headers, ...rest } = options;
  const res = await fetch(`${API_URL}${path}`, {
    ...rest,
    cache: "no-store",
    headers: {
      ...(rest.body && !(rest.body instanceof FormData)
        ? { "Content-Type": "application/json" }
        : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new ApiError(res.status, body.detail ?? res.statusText);
  }
  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

function resourceClient<T extends { id: string }>(resourcePath: string) {
  return {
    list: () => request<T[]>(resourcePath),
    create: (data: Partial<T>, token: string) =>
      request<T>(resourcePath, {
        method: "POST",
        body: JSON.stringify(data),
        token,
      }),
    update: (id: string, data: Partial<T>, token: string) =>
      request<T>(`${resourcePath}/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        token,
      }),
    remove: (id: string, token: string) =>
      request<void>(`${resourcePath}/${id}`, { method: "DELETE", token }),
  };
}

export const servicesApi = resourceClient<Service>("/api/services");
export const photosApi = resourceClient<GalleryPhoto>("/api/gallery/photos");
export const videosApi = resourceClient<GalleryVideo>("/api/gallery/videos");
export const docsApi = resourceClient<GalleryDoc>("/api/gallery/docs");

export const contactApi = {
  submit: (data: ContactFormInput) =>
    request<{ id: string }>("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  list: (token: string) =>
    request<ContactMessage[]>("/api/contact", { token }),
  markRead: (id: string, read: boolean, token: string) =>
    request<ContactMessage>(`/api/contact/${id}/read`, {
      method: "PATCH",
      body: JSON.stringify({ read }),
      token,
    }),
};

export async function uploadFile(
  file: File,
  token: string
): Promise<{ url: string }> {
  const formData = new FormData();
  formData.append("file", file);
  return request<{ url: string }>("/api/admin/upload", {
    method: "POST",
    body: formData,
    token,
  });
}
