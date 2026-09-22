import type { ReactNode } from "react";
import clsx from "clsx";

type ViewfinderFrameProps = {
  className?: string;
  cornerClassName?: string;
  children?: ReactNode;
};

/**
 * Camera-viewfinder-style corner brackets, absolutely positioned over a
 * relative parent. Purely decorative (aria-hidden).
 */
export function ViewfinderFrame({ className, cornerClassName, children }: ViewfinderFrameProps) {
  const corner = clsx("absolute h-5 w-5 xs:h-6 xs:w-6", cornerClassName);
  return (
    <div className={clsx("pointer-events-none absolute inset-0", className)} aria-hidden="true">
      <span className={clsx(corner, "top-3 left-3 border-t border-l xs:top-4 xs:left-4")} />
      <span className={clsx(corner, "top-3 right-3 border-t border-r xs:top-4 xs:right-4")} />
      <span className={clsx(corner, "bottom-3 left-3 border-b border-l xs:bottom-4 xs:left-4")} />
      <span className={clsx(corner, "bottom-3 right-3 border-b border-r xs:bottom-4 xs:right-4")} />
      {children}
    </div>
  );
}
