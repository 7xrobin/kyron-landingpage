interface SubCardProps {
  label: string;
  value: string;
  valueColor?: string;
}

export default function SubCard({ label, value, valueColor }: SubCardProps) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        padding: "14px 12px",
      }}
    >
      <p style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", marginBottom: "6px", letterSpacing: "0.05em" }}>
        {label}
      </p>
      <p style={{ fontSize: "14px", fontWeight: 700, color: valueColor ?? "white" }}>
        {value}
      </p>
    </div>
  );
}
