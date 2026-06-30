# Hero assets

| File | Purpose |
|------|---------|
| `ferma.webm` / `ferma.mp4` | Scroll-scrubbed hero video |
| `ferma.jpg` | Video poster (optional) |
| `connector.mp4` | Film band between hero and quote section |
| `connector.jpg` | Connector poster |
| **`title.png`** | **Hero title lockup** — PNG with transparency (1024×125) |

Place your exported title graphic at `title.png`. **Must be a real PNG with alpha** — do not save JPEG as `.png` (no transparency → black rectangle in hero).

Re-export from Figma/Canva: PNG, transparency on. To fix a flat JPEG once: `node scripts/knockout-title-bg.mjs` from `frontend/`.

Verify: `file public/hero/title.png` should report `PNG image data` and `RGBA`.
