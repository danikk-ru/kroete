type MonogramProps = {
  className?: string;
  title?: string;
};

/**
 * Angular "K" monogram. The negative space between the upper strokes
 * carries a pair of subtle recessed notches — a restrained, abstract nod
 * to the toad motif (wide-set eyes) without illustrating a toad directly.
 */
export function Monogram({ className, title = "KROETE" }: MonogramProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="63" height="63" rx="2" stroke="currentColor" strokeOpacity="0.18" />
      <path d="M16 10H24V28.5L38 10H48L32.5 30L49 54H39L27 36.5L24 40.5V54H16V10Z" fill="currentColor" />
      <circle cx="30" cy="17" r="1.6" fill="currentColor" fillOpacity="0.35" />
      <circle cx="41" cy="17" r="1.6" fill="currentColor" fillOpacity="0.35" />
    </svg>
  );
}
