import GlassCard from "@/components/ui/GlassCard";

const icon = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="7.5" stroke="var(--color-teal-200)" strokeWidth="1.3" />
    <circle cx="9" cy="9" r="4.5" stroke="var(--color-teal-200)" strokeWidth="1.3" />
    <circle cx="9" cy="9" r="1.8" fill="var(--color-teal-200)" />
  </svg>
);

const goals = [
  { name: "Dream Vacation", target: "$11,250", pct: 75, gradient: "linear-gradient(90deg, var(--color-teal-200), var(--color-purple-400))" },
  { name: "House",          target: "$85,000", pct: 23, gradient: "linear-gradient(90deg, var(--color-purple-400), var(--color-amber-400))" },
  { name: "Emergency Fund", target: "$10,000", pct: 60, gradient: "linear-gradient(90deg, var(--color-teal-200), var(--color-purple-400))" },
];

interface Props { expanded: boolean; onToggle: () => void }

export default function GoalCard({ expanded, onToggle }: Props) {
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
      <div className="flex flex-col gap-3 md:gap-5">
        <div className="flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "color-mix(in srgb, var(--color-teal-200) 38%, transparent)" }}
          >
            {icon}
          </div>
          <div>
            <p style={{ fontSize: "14px", fontWeight: 700, color: "white" }}>Savings Goals</p>
            <p style={{ fontSize: "10px", fontWeight: 600, color: "white", marginTop: "3px" }}>3 active</p>
          </div>
        </div>

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
      </div>
    </GlassCard>
  );
}
