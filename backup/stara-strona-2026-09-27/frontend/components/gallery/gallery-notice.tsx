import { AlertTriangle, Inbox } from "lucide-react";

export function GalleryNotice({
  variant,
  message,
}: {
  variant: "empty" | "error";
  message: string;
}) {
  const Icon = variant === "error" ? AlertTriangle : Inbox;
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl border border-dashed border-navy-mid/20 bg-light-bg px-8 py-14 text-center">
      <Icon
        className={
          variant === "error"
            ? "h-8 w-8 text-red-500"
            : "h-8 w-8 text-gold-deep"
        }
        strokeWidth={1.5}
      />
      <p className="text-sm font-medium text-navy-mid">{message}</p>
    </div>
  );
}
