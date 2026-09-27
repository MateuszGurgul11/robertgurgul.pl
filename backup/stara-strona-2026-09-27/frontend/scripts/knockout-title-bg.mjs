/**
 * One-off: convert hero title JPEG (misnamed .png) to real PNG with alpha.
 * Dark pixels (R,G,B below threshold) become transparent.
 */
import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.join(__dirname, "../public/hero/title.png");
const output = input;
const THRESHOLD = 40;

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
  .png()
  .toFile(output);

console.log(`Wrote transparent PNG: ${output} (${info.width}x${info.height})`);
