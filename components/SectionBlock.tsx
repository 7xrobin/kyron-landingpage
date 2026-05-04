"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import Image from "next/image";

interface SectionBlockProps {
  label: string;
  title: string;
  description: string;
  ctaText: string;
  onCtaClick?: () => void;
  card: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageFirst?: boolean;
}

export default function SectionBlock({
  label,
  title,
  description,
  ctaText,
  onCtaClick,
  card,
  imageSrc,
  imageAlt,
  imageFirst = false,
}: SectionBlockProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handler = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = rect.top / window.innerHeight;
      setParallaxY(progress * 55);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const textColumn = (
    <div className="flex flex-col justify-center gap-6">
      <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
        {label}
      </span>
      <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-relaxed text-gray-500">{description}</p>
      <button
        onClick={onCtaClick}
        className="w-fit cursor-pointer rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-80"
      >
        {ctaText}
      </button>
    </div>
  );

  const imageColumn = (
    <div className="relative">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px]">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>

      {/* Card with parallax: 10% from bottom, overhanging outside edge by 10% */}
      <div
        className="absolute bottom-[10%] z-10"
        style={
          imageFirst
            ? { right: "-10%", transform: `translateY(${parallaxY}px)` }
            : { left: "-10%", transform: `translateY(${parallaxY}px)` }
        }
      >
        {card}
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-6xl px-6 py-24 grid grid-cols-1 items-center gap-16 md:grid-cols-2"
    >
      {imageFirst ? (
        <>
          {imageColumn}
          {textColumn}
        </>
      ) : (
        <>
          {textColumn}
          {imageColumn}
        </>
      )}
    </section>
  );
}
