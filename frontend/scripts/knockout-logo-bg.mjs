/**
 * Convert logo PNGs (gold/white on black) to RGBA with transparent background,
 * then trim empty edges.
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "../public/logo");
const THRESHOLD = 28;

const files = ["piktogram.png", "pion.png", "poziom.png"];

async function knockout(file) {
  const input = path.join(dir, file);
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r < THRESHOLD && g < THRESHOLD && b < THRESHOLD) {
      data[i + 3] = 0;
    }
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim({ threshold: 10 })
    .png()
    .toFile(input);

  const meta = await sharp(input).metadata();
  console.log(`Wrote ${file} ${meta.width}x${meta.height}`);
}

for (const file of files) {
  await knockout(file);
}
