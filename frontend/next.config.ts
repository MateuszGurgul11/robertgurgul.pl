import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  // Adresy z poprzedniej wersji strony → sekcje nowej strony głównej.
  async redirects() {
    return [
      { source: "/oferta", destination: "/#benefits", permanent: true },
      { source: "/kontakt", destination: "/#footer", permanent: true },
      { source: "/stara-strona", destination: "/", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
      { protocol: "https", hostname: "storage.googleapis.com" },
      { protocol: "http", hostname: "127.0.0.1", port: "9199" },
      { protocol: "http", hostname: "localhost", port: "9199" },
    ],
  },
};

export default nextConfig;
