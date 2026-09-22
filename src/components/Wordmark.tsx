import clsx from "clsx";

type WordmarkProps = {
  className?: string;
  dotClassName?: string;
};

/**
 * Lowercase text wordmark with a sage-colored period, e.g. nav mark and
 * footer signature. Kept as a component (not raw text) so the dot color
 * stays consistent everywhere it's used.
 */
export function Wordmark({ className, dotClassName }: WordmarkProps) {
  return (
    <span className={clsx("font-display font-extrabold tracking-tight", className)}>
      kroete
      <span className={clsx("text-sage", dotClassName)}>.</span>
    </span>
  );
}
