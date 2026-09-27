"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
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

function isHostedFile(url: string) {
  return (
    !url.includes("youtube.com") &&
    !url.includes("youtu.be") &&
    !url.includes("vimeo.com")
  );
}

function VideoPoster({ video }: { video: GalleryVideo }) {
  if (video.thumbnailUrl) {
    return (
      <Image
        src={video.thumbnailUrl}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
    );
  }

  if (isHostedFile(video.videoUrl)) {
    return (
      <video
        src={video.videoUrl}
        muted
        playsInline
        preload="metadata"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
    );
  }

  return (
    <div
      className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-mid to-navy-deepest bg-dot-grid"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deepest/80 via-transparent to-navy-deepest/30" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gold/10 to-transparent" />
    </div>
  );
}

function VideoTile({ video }: { video: GalleryVideo }) {
  const [playing, setPlaying] = useState(false);
  const embed = playing ? getEmbed(video.videoUrl) : null;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-navy-deepest shadow-[0_20px_50px_-30px_rgba(0,0,0,0.8)]">
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
              playsInline
              className="absolute inset-0 h-full w-full bg-black object-contain"
            />
          )
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Odtwórz: ${video.title}`}
            className="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center text-left"
          >
            <VideoPoster video={video} />

            <span className="absolute inset-0 bg-gradient-to-t from-navy-deepest via-navy-deepest/25 to-navy-deepest/20 transition-opacity duration-300 group-hover:from-navy-deepest/90" />

            <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-gold/70 bg-navy-deepest/55 text-gold backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold/15 sm:h-16 sm:w-16">
              <Play className="ml-0.5 h-6 w-6 fill-current sm:h-7 sm:w-7" strokeWidth={0} />
            </span>

            <span className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
              <span className="block font-heading text-base font-semibold uppercase tracking-[0.04em] text-offwhite sm:text-lg">
                {video.title}
              </span>
            </span>
          </button>
        )}
      </div>

      {playing ? (
        <div className="flex items-center justify-between gap-3 border-t border-gold/10 px-4 py-3 sm:px-5">
          <p className="min-w-0 truncate font-heading text-sm font-semibold text-offwhite">
            {video.title}
          </p>
          <button
            type="button"
            onClick={() => setPlaying(false)}
            className="shrink-0 cursor-pointer font-body text-[11px] font-medium uppercase tracking-[0.18em] text-gold-light transition-colors hover:text-gold"
          >
            Zamknij
          </button>
        </div>
      ) : null}
    </article>
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
