import { marquee } from "../content/site";

/**
 * Infinite horizontal ticker. The track is duplicated once so the
 * translateX(-50%) loop is seamless; reduced-motion users get a static
 * (non-scrolling, wrapped) row instead via the animate-marquee utility
 * being disabled globally in index.css.
 */
export function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-line bg-paper py-4">
      <div className="flex w-max animate-marquee motion-reduce:flex-wrap motion-reduce:animate-none">
        {items.map((item, i) => (
          <span key={i} className="whitespace-nowrap px-7 font-mono text-[10px] tracking-[0.12em] text-forest">
            {item} <b className="font-normal text-sage">✳</b>
          </span>
        ))}
      </div>
    </div>
  );
}
