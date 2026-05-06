"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import HeroAiChat from "./HeroAiChat";

export default function Hero() {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    document.body.style.overflow = showChat && isMobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showChat]);

  return (
    <section className="relative w-full overflow-hidden rounded-b-[60px] min-h-[100dvh] flex items-center justify-center">
      <Image
        src="/Kyron-Hero-page-mockup.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay — fades out when chat opens */}
      <div
        className={`absolute inset-0 bg-black/25 transition-opacity duration-500 ${
          showChat ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Hero titles + CTA */}
      <div
        className={`absolute inset-x-0 top-[13%] flex flex-col items-center px-6 text-center z-10 transition-all duration-500 ${
          showChat
            ? "opacity-0 pointer-events-none -translate-y-4"
            : "opacity-100 translate-y-0"
        }`}
      >
        <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
          Feel in control of your money,{" "}
          <span className="whitespace-nowrap">anywhere in the world</span>
        </h1>
        <p className="mt-4 max-w-md text-base font-semibold text-white/75">
          Connect accounts from different countries and see your entire
          financial picture, all in one place, in any currency.
        </p>
        <button
          onClick={() => setShowChat(true)}
          className="mt-8 flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
          style={{ background: "white", color: "var(--color-gray-900)" }}
        >
          Talk with Kyron
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M6.5 0L7.9 4.6L13 6.5L7.9 8.4L6.5 13L5.1 8.4L0 6.5L5.1 4.6L6.5 0Z" fill="#f04e7a" />
          </svg>
        </button>
      </div>

      {/* Chat card — z-[60] overrides nav's z-50 when open */}
      <div
        className={`relative w-full flex items-center justify-center sm:px-4 sm:py-8 transition-all duration-500 ${
          showChat
            ? "opacity-100 scale-100 z-[60]"
            : "opacity-0 pointer-events-none scale-95 z-10"
        }`}
      >
        <HeroAiChat onClose={() => setShowChat(false)} />
      </div>
    </section>
  );
}
