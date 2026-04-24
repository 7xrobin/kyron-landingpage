import GlassCard from "@/components/ui/GlassCard";
import SubCard from "@/components/ui/SubCard";

const icon = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1.5" y="4.5" width="15" height="11" rx="2" stroke="var(--color-amber-100)" strokeWidth="1.3" />
    <path d="M1.5 7.5h15" stroke="var(--color-amber-100)" strokeWidth="1.3" />
    <rect x="11" y="10" width="4" height="3" rx="1" stroke="var(--color-amber-100)" strokeWidth="1.1" />
    <path d="M4.5 2.5h9" stroke="var(--color-amber-100)" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const periods = [
  { label: "This Week",  spent:   340, total:   500, pct: 68, color: "var(--color-amber-400)" },
  { label: "This Month", spent: 1_820, total: 2_500, pct: 73, color: "var(--color-teal-200)"  },
];

interface Props { expanded: boolean; onToggle: () => void }

export default function BudgetCard({ expanded, onToggle }: Props) {
  return (
    <GlassCard
      expanded={expanded}
      onToggle={onToggle}
      icon={icon}
      iconBg="color-mix(in srgb, var(--color-amber-400) 20%, transparent)"
      floatDuration="3.0s"
      floatDelay="1.4s"
      positionClass="absolute bottom-[10%] right-[4%] md:right-[10%] lg:right-[30%] xl:right-[40%]"
    >
      {/* header */}
      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: "color-mix(in srgb, var(--color-amber-400) 20%, transparent)" }}
        >
          {icon}
        </div>
        <div>
          <p className="text-[10px] font-bold tracking-[0.15em] text-white/50 uppercase">Budget</p>
          <p className="text-[10px] text-white/40">Overview</p>
        </div>
      </div>

      {/* periods */}
      <div className="space-y-6">
        {periods.map(({ label, spent, total, pct, color }) => (
          <div key={label}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-white/70">{label}</span>
              <span className="text-xs font-semibold text-white">
                ${spent.toLocaleString()}
                <span className="text-white/40 font-normal"> / ${total.toLocaleString()}</span>
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10">
              <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
            </div>
          </div>
        ))}
      </div>

      {/* sub-cards */}
      <div className="mt-8 grid grid-cols-2 gap-3">
        <SubCard label="Saved"  value="$680"     valueColor="var(--color-teal-200)" />
        <SubCard label="Status" value="On Track" />
      </div>
    </GlassCard>
  );
}
