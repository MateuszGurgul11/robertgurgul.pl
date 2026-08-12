#!/usr/bin/env bash
# Aggressively re-encode hero videos for web delivery.
# Originals are backed up to media-originals/ (gitignored) — never overwritten.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HERO="$ROOT/frontend/public/hero"
BACKUP="$ROOT/media-originals/hero"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "Error: ffmpeg is required. Install with: brew install ffmpeg" >&2
  exit 1
fi

mkdir -p "$BACKUP"

backup_if_needed() {
  local file="$1"
  local dest="$BACKUP/$(basename "$file")"
  if [[ -f "$file" && ! -f "$dest" ]]; then
    echo "==> Backing up $(basename "$file") -> media-originals/hero/"
    cp "$file" "$dest"
  fi
}

encode_connector() {
  local src="$BACKUP/connector.mp4"
  local tmp="$HERO/connector.optimized.mp4"
  local webm="$HERO/connector.webm"

  if [[ ! -f "$src" ]]; then
    src="$HERO/connector.mp4"
  fi
  if [[ ! -f "$src" ]]; then
    echo "Skip connector: source not found" >&2
    return 0
  fi

  echo "==> Encoding connector (12 s loop, 720p, 25 fps)..."
  ffmpeg -y -hide_banner -loglevel error \
    -i "$src" \
    -t 12 \
    -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,fps=25" \
    -c:v libx264 -crf 30 -preset slow -pix_fmt yuv420p \
    -an -movflags +faststart \
    "$tmp"
  mv "$tmp" "$HERO/connector.mp4"

  echo "==> Encoding connector.webm (VP9)..."
  ffmpeg -y -hide_banner -loglevel error \
    -i "$HERO/connector.mp4" \
    -c:v libvpx-vp9 -crf 35 -b:v 0 -row-mt 1 \
    -an \
    "$webm"
}

encode_ferma() {
  local src="$BACKUP/ferma.mp4"
  local tmp="$HERO/ferma.optimized.mp4"
  local webm="$HERO/ferma.webm"

  if [[ ! -f "$src" ]]; then
    src="$HERO/ferma.mp4"
  fi
  if [[ ! -f "$src" ]]; then
    echo "Skip ferma: source not found" >&2
    return 0
  fi

  echo "==> Encoding ferma (720p, dense keyframes for scrubbing)..."
  ffmpeg -y -hide_banner -loglevel error \
    -i "$src" \
    -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2" \
    -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p \
    -g 10 -keyint_min 10 \
    -an -movflags +faststart \
    "$tmp"
  mv "$tmp" "$HERO/ferma.mp4"

  echo "==> Encoding ferma.webm (VP9)..."
  ffmpeg -y -hide_banner -loglevel error \
    -i "$HERO/ferma.mp4" \
    -c:v libvpx-vp9 -crf 32 -b:v 0 -row-mt 1 \
    -g 10 \
    -an \
    "$webm"
}

backup_if_needed "$HERO/connector.mp4"
backup_if_needed "$HERO/ferma.mp4"
encode_connector
encode_ferma

echo
echo "Done. Sizes:"
ls -lh "$HERO"/*.mp4 "$HERO"/*.webm 2>/dev/null | awk '{print $5, $9}'
echo
echo "Originals preserved in media-originals/hero/ (restore with cp if needed)."
