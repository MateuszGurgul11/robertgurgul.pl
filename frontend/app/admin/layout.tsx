import type { Metadata, Viewport } from "next";
import "../globals.css";
import "./cms.css";
import { AuthProvider } from "@/lib/firebase/use-auth";
import { Toaster } from "@/components/ui/sonner";
import { fraunces, manrope } from "@/lib/czcionki";

// Główny układ panelu CMS. Tailwind + shadcn/ui z tokenami przestawionymi na motyw nowej strony (cms.css).

export const metadata: Metadata = {
  title: "Panel CMS | Robert Gurgul",
  robots: { index: false, follow: false },
  icons: { icon: "/assets/media/favicon-32.webp" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e2b24",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${fraunces.variable} ${manrope.variable} rg-cms h-full antialiased`}>
      <body className="min-h-full font-body">
        <AuthProvider>
          {children}
          <Toaster richColors position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
