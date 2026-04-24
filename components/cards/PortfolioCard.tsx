import GlassCard from "@/components/ui/GlassCard";
import SubCard from "@/components/ui/SubCard";

const icon = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1"  y="10" width="4" height="7"  rx="1" fill="var(--color-amber-100)" />
    <rect x="7"  y="5"  width="4" height="12" rx="1" fill="var(--color-amber-100)" />
    <rect x="13" y="7"  width="4" height="10" rx="1" fill="var(--color-amber-100)" />
  </svg>
);

const allocations = [
  { label: "Pension", pct: "20%", width: "20%", color: "var(--color-purple-400)", sub: "Low risk" },
  { label: "Bonds",   pct: "50%", width: "50%", color: "var(--color-teal-200)",   sub: "Stable"   },
  { label: "ETF",     pct: "30%", width: "30%", color: "var(--color-amber-100)",  sub: "Growth"   },
];

interface Props { expanded: boolean; onToggle: () => void }

export default function PortfolioCard({ expanded, onToggle }: Props) {
  return (
    <GlassCard
      expanded={expanded}
      onToggle={onToggle}
      icon={icon}
      iconBg="color-mix(in srgb, var(--color-amber-100) 18%, transparent)"
      floatDuration="3.2s"
      floatDelay="0.5s"
      positionClass="absolute top-[35%] right-[4%] md:right-[10%] lg:right-[30%] xl:right-[40%]"
    >
      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: "color-mix(in srgb, var(--color-amber-100) 18%, transparent)" }}
        >
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-bold tracking-[0.15em] text-white/50 uppercase">Portfolio</p>
        </div>
        <span
          style={{
            fontSize: "10px",
            padding: "2px 10px",
            borderRadius: "999px",
            fontWeight: 600,
            background: "color-mix(in srgb, var(--color-purple-400) 25%, transparent)",
            color: "var(--color-purple-200)",
          }}
        >
          Active
        </span>
      </div>

      <div className="flex h-2.5 rounded-full overflow-hidden gap-px mb-7">
        {allocations.map(({ label, width, color }) => (
          <div key={label} style={{ width, background: color }} />
        ))}
      </div>

      <div className="space-y-5 mb-8">
        {allocations.map(({ label, pct, color, sub }) => (
          <div key={label} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: color }} />
              <div>
                <p className="text-xs font-semibold text-white leading-none">{label}</p>
                <p style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>{sub}</p>
              </div>
            </div>
            <span className="text-sm font-bold text-white">{pct}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <SubCard label="Total Value" value="€24,800" />
        <SubCard label="YTD Return"  value="+8.4%"   valueColor="var(--color-teal-200)" />
      </div>
    </GlassCard>
  );
}
