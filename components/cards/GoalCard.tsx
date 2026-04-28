import GlassCard from "@/components/ui/GlassCard";
import SubCard from "@/components/ui/SubCard";

const icon = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle
      cx="9"
      cy="9"
      r="7.5"
      stroke="var(--color-teal-200)"
      strokeWidth="1.3"
    />
    <circle
      cx="9"
      cy="9"
      r="4.5"
      stroke="var(--color-teal-200)"
      strokeWidth="1.3"
    />
    <circle cx="9" cy="9" r="1.8" fill="var(--color-teal-200)" />
  </svg>
);

interface Props {
  expanded: boolean;
  onToggle: () => void;
}

export default function GoalCard({ expanded, onToggle }: Props) {
  return (
    <GlassCard
      expanded={expanded}
      onToggle={onToggle}
      icon={icon}
      iconBg="color-mix(in srgb, var(--color-teal-200) 18%, transparent)"
      floatDuration="2.8s"
      floatDelay="1s"
      positionClass="absolute bottom-[10%] left-[4%] md:left-[10%] lg:left-[30%] xl:left-[40%]"
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "color-mix(in srgb, var(--color-teal-200) 18%, transparent)",
              }}
            >
              {icon}
            </div>
            <div>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "white" }}>
                Savings Goal
              </p>
              <p
                style={{
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.5)",
                  marginTop: "3px",
                }}
              >
                Active
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-bold text-white">
              Dream Vacation -{" "}
            </span>
            <span className="text-sm font-bold text-white">$11,250</span>
            <span
              className="ml-auto text-xs font-bold"
              style={{ color: "var(--color-teal-200)" }}
            >
              75%
            </span>
          </div>
          <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: "75%",
                background:
                  "linear-gradient(90deg, var(--color-teal-200), var(--color-purple-400))",
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <SubCard label="Remaining" value="$3,750" />
          <SubCard label="Target Date" value="Dec 2026" />
        </div>
      </div>
    </GlassCard>
  );
}
