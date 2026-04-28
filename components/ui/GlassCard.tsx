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
          className="relative cursor-pointer overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(48px) saturate(160%)",
            WebkitBackdropFilter: "blur(48px) saturate(160%)",
            border: "1px solid rgba(255, 255, 255, 0.28)",
            boxShadow: [
              "0 8px 40px rgba(0, 0, 0, 0.18)",
              "inset 0 1px 0 rgba(255, 255, 255, 0.45)",
            ].join(", "),
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
          {/* specular top-edge gradient — Apple material highlight */}
          <div
            className="absolute inset-x-0 top-0 pointer-events-none"
            style={{
              height: "40%",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0) 100%)",
              borderRadius: "inherit",
            }}
          />

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
              padding: "1rem",
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
