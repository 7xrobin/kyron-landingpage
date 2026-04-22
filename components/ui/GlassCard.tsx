"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  expanded: boolean;
  onToggle: () => void;
  icon: ReactNode;
  iconBg: string;
  floatDuration?: string;
  floatDelay?: string;
  positionClass: string;
  children: ReactNode;
}

export default function GlassCard({
  expanded,
  onToggle,
  icon,
  iconBg,
  floatDuration = "3s",
  floatDelay = "0s",
  positionClass,
  children,
}: GlassCardProps) {
  return (
    <div className={positionClass}>
      {/* float wrapper — only animates when collapsed */}
      <div
        style={{
          animation: expanded
            ? "none"
            : `float ${floatDuration} ${floatDelay} ease-in-out infinite`,
        }}
      >
        {/* glass shell — transitions between circle and card */}
        <div
          className="relative cursor-pointer overflow-hidden shadow-2xl"
          style={{
            background: "rgba(12, 8, 35, 0.55)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.14)",
            width: expanded ? "260px" : "52px",
            maxHeight: expanded ? "600px" : "52px",
            borderRadius: expanded ? "24px" : "26px",
            transition: [
              "width 500ms cubic-bezier(0.34,1.56,0.64,1)",
              "max-height 500ms cubic-bezier(0.34,1.56,0.64,1)",
              "border-radius 400ms ease",
            ].join(", "),
          }}
          onClick={onToggle}
        >
          {/* icon — fills the full circle, fades out on expand */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              background: iconBg,
              opacity: expanded ? 0 : 1,
              transition: "opacity 200ms",
            }}
          >
            {icon}
          </div>

          {/* card content — fades in on expand, inline padding to avoid class conflicts */}
          <div
            style={{
              padding: "1.5rem",
              opacity: expanded ? 1 : 0,
              transition: "opacity 300ms 200ms",
              pointerEvents: expanded ? "auto" : "none",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
