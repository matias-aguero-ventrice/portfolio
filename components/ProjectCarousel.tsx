"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = { src: string; alt: string };

type Props = {
  slides: Slide[];
  prevLabel: string;
  nextLabel: string;
  liveLabel: string;
};

export function ProjectCarousel({ slides, prevLabel, nextLabel, liveLabel }: Props) {
  const [index, setIndex] = useState(0);
  const go = (delta: number) => setIndex((i) => (i + delta + slides.length) % slides.length);

  return (
    <div
      className="relative overflow-hidden rounded-lg border"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}
      role="group"
      aria-roledescription="carousel"
    >
      <div
        className="flex items-center justify-between border-b px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em]"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)", color: "var(--accent)" }}
        aria-hidden="true"
      >
        <span>{String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
        <span>{liveLabel}</span>
      </div>

      <div className="relative aspect-[8/5] w-full">
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            className={`object-cover object-top transition-opacity duration-300 ${i === index ? "opacity-100" : "opacity-0"}`}
            aria-hidden={i !== index}
            priority={i === 0}
          />
        ))}
      </div>

      <div
        className="flex items-center justify-between gap-3 border-t px-3 py-2"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
      >
        <p className="text-xs" style={{ color: "var(--text-secondary)" }} aria-live="polite">
          {slides[index].alt}
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={prevLabel}
            className="rounded-full border p-1 transition-colors hover:text-[var(--accent)]"
            style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <div className="flex gap-1.5">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${i + 1} / ${slides.length}`}
              aria-current={i === index}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === index ? 18 : 6,
                backgroundColor: i === index ? "var(--accent)" : "var(--border)",
              }}
            />
          ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={nextLabel}
            className="rounded-full border p-1 transition-colors hover:text-[var(--accent)]"
            style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
