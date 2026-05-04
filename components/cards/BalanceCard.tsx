"use client";

import { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";

const icon = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="7.5" stroke="var(--color-purple-200)" strokeWidth="1.3" />
    <path
      d="M9 1.5C7.5 3.5 6.5 6 6.5 9C6.5 12 7.5 14.5 9 16.5M9 1.5C10.5 3.5 11.5 6 11.5 9C11.5 12 10.5 14.5 9 16.5"
      stroke="var(--color-purple-200)"
      strokeWidth="1.3"
    />
    <line x1="1.5" y1="9" x2="16.5" y2="9" stroke="var(--color-purple-200)" strokeWidth="1.3" />
  </svg>
);

const regions = [
  { flag: "🇪🇺", name: "Europe", amount: "€8,430", bar: 70, color: "var(--color-purple-400)" },
  { flag: "🇧🇷", name: "Brasil", amount: "R$12,750", bar: 100, color: "var(--color-teal-200)" },
];

const accounts = [
  {
    icon: "🏦",
    name: "Wise",
    sub: "EUR Checking",
    amount: "€5,200",
    bar: 48,
    color: "var(--color-purple-400)",
    negative: false,
  },
  {
    icon: "🏛️",
    name: "N26",
    sub: "DE Savings",
    amount: "€3,230",
    bar: 30,
    color: "var(--color-teal-200)",
    negative: false,
  },
  {
    icon: "💳",
    name: "Revolut",
    sub: "Credit Card",
    amount: "-€460",
    bar: 18,
    color: "var(--color-amber-400)",
    negative: true,
  },
];

interface Props {
  expanded: boolean;
  onToggle: () => void;
}

export default function BalanceCard({ expanded, onToggle }: Props) {
  const [view, setView] = useState<"currency" | "accounts">("currency");

  return (
    <GlassCard
      expanded={expanded}
      onToggle={onToggle}
      icon={icon}
      iconBg="color-mix(in srgb, var(--color-purple-400) 18%, transparent)"
      floatDuration="3.5s"
      floatDelay="0s"
      positionClass=""
    >
      <div className="flex flex-col gap-5">
        {/* Header row with dropdown */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "color-mix(in srgb, var(--color-purple-400) 18%, transparent)" }}
          >
            {icon}
          </div>
          <div className="flex-1">
            <p style={{ fontSize: "14px", fontWeight: 700, color: "white" }}>Balance</p>
          </div>
          <select
            value={view}
            onChange={(e) => setView(e.target.value as "currency" | "accounts")}
            onClick={(e) => e.stopPropagation()}
            style={{
              fontSize: "10px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.7)",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "8px",
              padding: "4px 6px",
              cursor: "pointer",
              outline: "none",
              appearance: "none",
              WebkitAppearance: "none",
              paddingRight: "18px",
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='5' viewBox='0 0 8 5'%3E%3Cpath d='M0 0l4 5 4-5z' fill='rgba(255,255,255,0.5)'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 5px center",
            }}
          >
            <option value="currency" style={{ background: "#1a1a2e", color: "white" }}>
              Currency
            </option>
            <option value="accounts" style={{ background: "#1a1a2e", color: "white" }}>
              Accounts
            </option>
          </select>
        </div>

        {/* Currency view */}
        {view === "currency" && (
          <div className="flex flex-col gap-5">
            {regions.map(({ flag, name, amount, bar, color }) => (
              <div key={name}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{flag}</span>
                    <span className="text-xs text-white/70">{name}</span>
                  </div>
                  <span className="text-xs font-semibold text-white">{amount}</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10">
                  <div className="h-full rounded-full" style={{ width: `${bar}%`, background: color }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Accounts view */}
        {view === "accounts" && (
          <div className="flex flex-col gap-4">
            {accounts.map(({ icon: emoji, name, sub, amount, bar, color, negative }) => (
              <div key={name}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{emoji}</span>
                    <div>
                      <span className="text-xs font-semibold text-white">{name}</span>
                      <span className="text-[10px] text-white/40 ml-1">{sub}</span>
                    </div>
                  </div>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: negative ? "var(--color-amber-400)" : "white" }}
                  >
                    {amount}
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10">
                  <div className="h-full rounded-full" style={{ width: `${bar}%`, background: color }} />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[10px] text-white/40">Combined (EUR)</span>
          <span className="text-sm font-bold" style={{ color: "var(--color-purple-200)" }}>
            €10,765
          </span>
        </div>
      </div>
    </GlassCard>
  );
}
