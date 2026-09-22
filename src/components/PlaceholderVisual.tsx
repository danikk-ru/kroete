import type { Category } from "../content/projects";

type PlaceholderVisualProps = {
  category: Category;
  index: number;
  className?: string;
};

/**
 * Generated abstract visual used until real project stills/video are
 * available. Deterministic per category so each card feels intentional
 * rather than a broken image link.
 */
const paths: Record<Category, string> = {
  FPV: "M -10 80 C 40 20, 90 140, 160 40 S 260 10, 320 70",
  Automotive: "M -10 100 L 90 100 L 120 60 L 220 60 L 250 100 L 320 100",
  Motorsport: "M -10 60 Q 80 10 150 70 T 320 50",
  Commercial: "M -10 90 L 100 90 L 130 30 L 190 30 L 220 90 L 320 90",
  Film: "M -10 70 C 60 130, 140 10, 200 70 S 300 120, 320 60",
};

export function PlaceholderVisual({ category, index, className }: PlaceholderVisualProps) {
  const path = paths[category];
  return (
    <div
      className={`relative overflow-hidden bg-graphite grid-overlay ${className ?? ""}`}
      aria-hidden="true"
    >
      <span className="absolute -bottom-6 -left-2 font-display text-[7rem] font-bold leading-none text-off/[0.05] xs:text-[9rem]">
        {String(index).padStart(2, "0")}
      </span>
      <svg
        viewBox="0 0 320 160"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-40"
      >
        <path d={path} fill="none" stroke="var(--color-lime)" strokeWidth="1.2" />
      </svg>
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 font-mono text-[10px] tracking-widest text-off/40">
        <span>{category.toUpperCase()}</span>
        <span>MEDIA PENDING</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
    </div>
  );
}
