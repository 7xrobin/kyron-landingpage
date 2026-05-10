"use client";

import { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import SubCard from "@/components/ui/SubCard";

const icon = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="7.5" stroke="rgba(255,255,255,0.85)" strokeWidth="1.3" />
    <circle cx="9" cy="9" r="4.5" stroke="rgba(255,255,255,0.85)" strokeWidth="1.3" />
    <circle cx="9" cy="9" r="1.8" fill="rgba(255,255,255,0.85)" />
  </svg>
);

const goals = [
  { name: "Dream Vacation", target: "$11,250", pct: 75, gradient: "linear-gradient(90deg, var(--color-teal-200), var(--color-purple-400))" },
  { name: "House",          target: "$85,000", pct: 23, gradient: "linear-gradient(90deg, var(--color-teal-200), var(--color-purple-400))" },
  { name: "Emergency Fund", target: "$10,000", pct: 60, gradient: "linear-gradient(90deg, var(--color-teal-200), var(--color-purple-400))" },
];

const budgetPeriods = [
  { label: "This Week",  spent: 340,   total: 500,   pct: 68, color: "var(--color-amber-400)" },
  { label: "This Month", spent: 1_820, total: 2_500, pct: 73, color: "var(--color-teal-200)"  },
];

interface Props { expanded: boolean; onToggle: () => void }

export default function GoalCard({ expanded, onToggle }: Props) {
  const [view, setView] = useState<"goals" | "budget">("goals");

  return (
    <GlassCard
      expanded={expanded}
      onToggle={onToggle}
      icon={icon}
      iconBg="color-mix(in srgb, var(--color-teal-200) 38%, transparent)"
      floatDuration="2.8s"
      floatDelay="1s"
      positionClass=""
    >
      <div className="flex flex-col gap-3 md:gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "color-mix(in srgb, var(--color-teal-200) 38%, transparent)" }}
          >
            {icon}
          </div>
          <div className="flex-1">
            <p style={{ fontSize: "14px", fontWeight: 700, color: "white" }}>
              {view === "goals" ? "Savings Goals" : "Budget"}
            </p>
          </div>
          <select
            value={view}
            onChange={(e) => setView(e.target.value as "goals" | "budget")}
            onClick={(e) => e.stopPropagation()}
            style={{
              fontSize: "10px",
              fontWeight: 700,
              color: "white",
              background: "color-mix(in srgb, var(--color-teal-200) 38%, transparent)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "8px",
              padding: "4px 6px",
              paddingRight: "18px",
              cursor: "pointer",
              outline: "none",
              appearance: "none",
              WebkitAppearance: "none",
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='5' viewBox='0 0 8 5'%3E%3Cpath d='M0 0l4 5 4-5z' fill='white'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 5px center",
            }}
          >
            <option value="goals"  style={{ background: "#1a1a2e", color: "white" }}>Goals</option>
            <option value="budget" style={{ background: "#1a1a2e", color: "white" }}>Budget</option>
          </select>
        </div>

        {view === "goals" && (
          <div className="flex flex-col gap-3">
            {goals.map(({ name, target, pct, gradient }) => (
              <div key={name}>
                <div className="flex items-center justify-between mb-1.5">
                  <div>
                    <span className="text-xs font-bold text-white">{name}</span>
                    <span className="text-[10px] font-semibold ml-1.5 text-white">{target}</span>
                  </div>
                  <span className="text-[11px] font-bold text-white">{pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, background: gradient }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {view === "budget" && (
          <>
            <div className="flex flex-col gap-3">
              {budgetPeriods.map(({ label, spent, total, pct, color }) => (
                <div key={label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white">{label}</span>
                    <span className="text-xs font-bold text-white">
                      ${spent.toLocaleString()}
                      <span className="font-semibold"> / ${total.toLocaleString()}</span>
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10">
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden md:grid grid-cols-2 gap-3">
              <SubCard label="Saved" value="$680" />
              <SubCard label="Status" value="On Track" />
            </div>
          </>
        )}
      </div>
    </GlassCard>
  );
}
