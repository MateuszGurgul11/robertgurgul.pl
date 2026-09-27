import type { Metadata } from "next";
import "../globals.css";
import { AuthProvider } from "@/lib/firebase/use-auth";
import { Toaster } from "@/components/ui/sonner";
import { OldRootHtml, siteMetadata, siteViewport } from "@/lib/stara-strona-root";

export const metadata: Metadata = {
  ...siteMetadata,
  title: "Panel CMS",
  robots: { index: false, follow: false },
};
export const viewport = siteViewport;

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OldRootHtml>
      <AuthProvider>
        <div className="min-h-screen bg-slate-50 text-slate-900">
          {children}
        </div>
        <Toaster richColors position="top-right" />
      </AuthProvider>
    </OldRootHtml>
  );
}
