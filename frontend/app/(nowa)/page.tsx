import { readFile } from "node:fs/promises";
import path from "node:path";
import { SzablonSkrypty, type SzablonSkrypt } from "@/components/szablon/szablon-skrypty";

// Strona główna — etap przejściowy przenosin: treść i animacje pochodzą z projektu w Szablon/
// (Szablon/scripts/eksport-nextjs.py → content/strona-glowna.*). Kolejne sekcje będą
// zastępowane komponentami React i danymi z CMS.

type Manifest = { scripts: SzablonSkrypt[]; jsonLd: Record<string, unknown> | null };

async function loadContent() {
  const dir = path.join(process.cwd(), "content");
  const [html, manifest] = await Promise.all([
    readFile(path.join(dir, "strona-glowna.html"), "utf8"),
    readFile(path.join(dir, "strona-glowna.json"), "utf8").then((t) => JSON.parse(t) as Manifest),
  ]);
  return { html, manifest };
}

export default async function HomePage() {
  const { html, manifest } = await loadContent();
  return (
    <>
      {manifest.jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(manifest.jsonLd) }}
        />
      )}
      {/* display: contents — kontener nie zmienia układu szablonu */}
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />
      <SzablonSkrypty scripts={manifest.scripts} />
    </>
  );
}
