import GlassCard from "@/components/ui/GlassCard";

const icon = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle
      cx="9"
      cy="9"
      r="7.5"
      stroke="var(--color-purple-200)"
      strokeWidth="1.3"
    />
    <path
      d="M9 1.5C7.5 3.5 6.5 6 6.5 9C6.5 12 7.5 14.5 9 16.5M9 1.5C10.5 3.5 11.5 6 11.5 9C11.5 12 10.5 14.5 9 16.5"
      stroke="var(--color-purple-200)"
      strokeWidth="1.3"
    />
    <line
      x1="1.5"
      y1="9"
      x2="16.5"
      y2="9"
      stroke="var(--color-purple-200)"
      strokeWidth="1.3"
    />
  </svg>
);

const regions = [
  {
    flag: "🇪🇺",
    name: "Europe",
    amount: "€8,430",
    bar: 70,
    color: "var(--color-purple-400)",
  },
  {
    flag: "🇧🇷",
    name: "Brasil",
    amount: "R$12,750",
    bar: 100,
    color: "var(--color-teal-200)",
  },
];

interface Props {
  expanded: boolean;
  onToggle: () => void;
}

export default function BalanceCard({ expanded, onToggle }: Props) {
  return (
    <GlassCard
      expanded={expanded}
      onToggle={onToggle}
      icon={icon}
      iconBg="color-mix(in srgb, var(--color-purple-400) 18%, transparent)"
      floatDuration="3.5s"
      floatDelay="0s"
      positionClass="absolute top-[35%] left-[4%] md:left-[10%] lg:left-[30%] xl:left-[40%]"
    >
      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{
            background:
              "color-mix(in srgb, var(--color-purple-400) 18%, transparent)",
          }}
        >
          {icon}
        </div>
        <div>
          <p className="text-[10px] font-bold tracking-[0.15em] text-white/50 uppercase">
            Balance
          </p>
          <p
            style={{
              fontSize: "10px",
              color: "rgba(255,255,255,0.4)",
              marginTop: "3px",
            }}
          >
            by region
          </p>
        </div>
      </div>

      <div className="space-y-6">
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
              <div
                className="h-full rounded-full"
                style={{ width: `${bar}%`, background: color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
        <span className="text-[10px] text-white/40">Combined (EUR)</span>
        <span
          className="text-sm font-bold"
          style={{ color: "var(--color-purple-200)" }}
        >
          €10,765
        </span>
      </div>
    </GlassCard>
  );
}
