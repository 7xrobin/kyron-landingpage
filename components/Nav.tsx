"use client";

export default function Nav() {
  return (
    <nav className="absolute top-2 left-1/2 -translate-x-1/2 z-50 w-[82%] max-w-2xl p-2">
      <div
        className="flex items-center justify-between rounded-full px-4 py-1.5"
        style={{
          background: "rgba(255,255,255,0.65)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 2px 24px rgba(0,0,0,0.08)",
        }}
      >
        {/* Logo */}
        <img src="/logo.svg" alt="Kyron" height={20} className="h-5 w-auto" />

        {/* Links */}
        <div className="flex items-center gap-7"></div>

        {/* CTA */}
        <button
          className="rounded-full px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(90deg, #f04e7a 0%, #f97316 100%)",
          }}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
