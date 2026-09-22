type MarkProps = {
  className?: string;
  bodyColor?: string;
  eyeColor?: string;
  trail?: boolean;
  title?: string;
};

/**
 * The KROETE brand mark: a single crouched, leaning silhouette with one
 * eye — reads as a toad mid-leap (coiled energy, matches the FPV/speed
 * identity) without being a literal, cartoonish animal illustration.
 * The optional trailing stroke echoes the flight-path line art used
 * elsewhere on the site (Hero, Work, About backdrops), tying the mark to
 * the rest of the visual system.
 *
 * The eye must always contrast with the body, not with the surrounding
 * page — so both colors are explicit props (swap them together when
 * placing the mark on a dark background) rather than relying on a single
 * currentColor.
 */
export function Mark({
  className,
  bodyColor = "var(--color-forest)",
  eyeColor = "var(--color-cream)",
  trail = false,
  title = "KROETE",
}: MarkProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label={title} fill="none">
      {trail && (
        <path
          d="M10 66 Q-6 80 -16 92"
          stroke="var(--color-sage)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      )}
      <path
        d="M14 60C10 76 26 86 46 84C64 82 76 70 82 54C87 41 80 26 66 24C54 22 44 30 38 40C30 52 18 48 14 60Z"
        fill={bodyColor}
      />
      <circle cx="70" cy="32" r="5" fill={eyeColor} />
    </svg>
  );
}
