import type { Metadata } from "next";
import { AuthProvider } from "@/lib/firebase/use-auth";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Panel CMS",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        {children}
      </div>
      <Toaster richColors position="top-right" />
    </AuthProvider>
  );
}
