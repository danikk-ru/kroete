type MarkProps = {
  className?: string;
  variant?: "light" | "dark";
};

/**
 * The KROETE brand mark: a shell-crested toad, sitting — resolves the
 * toad-vs-turtle naming question by being both. Shipped as a raster
 * (design source only exists as artwork, not vector paths); "light" is
 * forest-on-transparent for cream/paper backgrounds, "dark" is
 * cream-on-transparent for the forest/deep backgrounds.
 */
export function Mark({ className, variant = "light" }: MarkProps) {
  const src = variant === "dark" ? "/kroete-mark-dark.png" : "/kroete-mark-light.png";
  return <img src={src} alt="" aria-hidden="true" className={className} />;
}
