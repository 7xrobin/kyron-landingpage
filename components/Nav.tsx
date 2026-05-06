"use client";

function SparkleIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path
        d="M6.5 0L7.9 4.6L13 6.5L7.9 8.4L6.5 13L5.1 8.4L0 6.5L5.1 4.6L6.5 0Z"
        fill="#f04e7a"
      />
    </svg>
  );
}

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
          className="flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "var(--color-gray-900)" }}
        >
          Join waitlist
          <SparkleIcon />
        </button>
      </div>
    </nav>
  );
}
