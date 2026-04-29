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
        <span
          className="text-xl font-extrabold tracking-widest uppercase"
          style={{
            background: "linear-gradient(90deg, #f04e7a 0%, #f97316 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Kyron
        </span>

        {/* Links */}
        <div className="flex items-center gap-7">
          {["Product", "Goals", "Trust"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm font-medium text-gray-800 hover:opacity-70 transition-opacity"
              style={{ color: "#1a1a1a" }}
            >
              {label}
            </a>
          ))}
        </div>

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
