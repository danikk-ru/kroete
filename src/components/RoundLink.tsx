import clsx from "clsx";
import type { AnchorHTMLAttributes } from "react";

type RoundLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  size?: "md" | "sm";
  tone?: "light" | "dark";
};

/**
 * Circular arrow link used as the recurring "go" affordance — hero CTA,
 * project cards, etc. Rotates on hover to suggest forward motion.
 */
export function RoundLink({ size = "md", tone = "light", className, children, ...props }: RoundLinkProps) {
  return (
    <a
      className={clsx(
        "group flex flex-none items-center justify-center rounded-full border transition-all duration-300 hover:-rotate-45",
        size === "md" ? "h-[62px] w-[62px] text-2xl" : "h-[50px] w-[50px] text-xl",
        tone === "light"
          ? "border-cream text-cream hover:bg-cream hover:text-forest"
          : "border-forest text-forest hover:bg-forest hover:text-cream",
        className,
      )}
      {...props}
    >
      {children ?? "↗"}
    </a>
  );
}
