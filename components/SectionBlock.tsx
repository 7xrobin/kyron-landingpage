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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handler = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = rect.top / window.innerHeight;
      // No parallax on mobile — keeps card position stable and avoids overflow
      setParallaxY(isMobile ? 0 : progress * 55);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [isMobile]);

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

  // Mobile: centered. Desktop: overhang the outside edge by 5%.
  const cardPositionClass = imageFirst
    ? "left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[-5%]"
    : "left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[-5%]";

  const imageColumn = (
    <div className="relative">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px]">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>

      <div className={`absolute bottom-[10%] z-10 ${cardPositionClass}`}>
        <div style={{ transform: `translateY(${parallaxY}px)` }}>
          {card}
        </div>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid grid-cols-1 items-center gap-10 md:gap-16 md:grid-cols-2"
    >
      {/* Text always first in DOM → appears first on mobile */}
      <div className={imageFirst ? "md:order-2" : ""}>{textColumn}</div>
      <div className={imageFirst ? "md:order-1" : ""}>{imageColumn}</div>
    </section>
  );
}
