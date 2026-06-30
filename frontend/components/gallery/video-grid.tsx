"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { PlaceholderArt } from "@/components/placeholder-art";
import { Reveal } from "@/components/reveal";
import type { GalleryVideo } from "@/lib/types";

function getEmbed(url: string): { type: "iframe" | "video"; src: string } {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const id = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/)?.[1];
    return {
      type: "iframe",
      src: id ? `https://www.youtube.com/embed/${id}?autoplay=1` : url,
    };
  }
  if (url.includes("vimeo.com")) {
    const id = url.match(/vimeo\.com\/(\d+)/)?.[1];
    return {
      type: "iframe",
      src: id ? `https://player.vimeo.com/video/${id}?autoplay=1` : url,
    };
  }
  return { type: "video", src: url };
}

function VideoTile({ video }: { video: GalleryVideo }) {
  const [playing, setPlaying] = useState(false);
  const embed = playing ? getEmbed(video.videoUrl) : null;

  return (
    <div className="overflow-hidden rounded-2xl border border-gold/15 bg-navy-deep/40">
      <div className="relative aspect-video w-full">
        {embed ? (
          embed.type === "iframe" ? (
            <iframe
              src={embed.src}
              title={video.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <video
              src={embed.src}
              controls
              autoPlay
              className="absolute inset-0 h-full w-full bg-black"
            />
          )
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Odtwórz: ${video.title}`}
            className="group absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center"
          >
            {video.thumbnailUrl ? (
              <Image
                src={video.thumbnailUrl}
                alt={video.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            ) : (
              <PlaceholderArt
                icon={PlayCircle}
                label={video.title}
                className="h-full w-full"
              />
            )}
            <span className="absolute inset-0 bg-navy-deepest/30 transition-colors duration-300 group-hover:bg-navy-deepest/10" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold bg-navy-deep/70 text-gold transition-transform duration-300 group-hover:scale-110">
              <PlayCircle className="h-8 w-8" strokeWidth={1.5} />
            </span>
          </button>
        )}
      </div>
      <div className="px-5 py-4">
        <p className="font-heading text-base font-semibold text-offwhite">
          {video.title}
        </p>
        {!playing ? (
          <p className="mt-1 text-xs text-slate-muted">
            Kliknij, aby załadować wideo
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function VideoGrid({ videos }: { videos: GalleryVideo[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video, i) => (
        <Reveal key={video.id} delay={(i % 6) * 0.08}>
          <VideoTile video={video} />
        </Reveal>
      ))}
    </div>
  );
}
