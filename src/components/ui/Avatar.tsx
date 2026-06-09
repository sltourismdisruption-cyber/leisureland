// Small initials avatar matching the design system's review author chip.
function initials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export default function Avatar({ name }: { name: string }) {
  return (
    <span
      aria-hidden="true"
      style={{
        flex: "none",
        width: 44,
        height: 44,
        borderRadius: "var(--radius-circle)",
        background: "var(--jungle-100)",
        color: "var(--jungle-800)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "var(--text-sm)",
        boxShadow: "0 0 0 2px var(--cream-50), 0 0 0 4px var(--jungle-200)",
      }}
    >
      {initials(name)}
    </span>
  );
}
