import type {
  ContactFormInput,
  ContactMessage,
  GalleryDoc,
  GalleryPhoto,
  GalleryVideo,
} from "@/lib/types";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "http://127.0.0.1:8000";

const GET_TIMEOUT_MS = 4000;

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

type RequestOptions = RequestInit & {
  token?: string;
  /** When set on public GET requests, enables ISR instead of no-store. */
  revalidate?: number;
};

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { token, headers, revalidate, signal, cache: _cache, next: _next, ...rest } = options;
  const method = rest.method ?? "GET";
  const isGet = method === "GET" || method === "HEAD";
  const useCache = revalidate !== undefined && !token && isGet;

  const fetchOptions: RequestInit = {
    ...rest,
    headers: {
      ...(rest.body && !(rest.body instanceof FormData)
        ? { "Content-Type": "application/json" }
        : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    signal: signal ?? (isGet && !token ? AbortSignal.timeout(GET_TIMEOUT_MS) : undefined),
  };

  if (useCache) {
    Object.assign(fetchOptions, { next: { revalidate } });
  } else {
    fetchOptions.cache = "no-store";
  }

  const res = await fetch(`${API_URL}${path}`, fetchOptions);

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new ApiError(res.status, body.detail ?? res.statusText);
  }
  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

function resourceClient<T extends { id: string }>(resourcePath: string) {
  return {
    list: (opts?: { revalidate?: number }) =>
      request<T[]>(resourcePath, { revalidate: opts?.revalidate }),
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
