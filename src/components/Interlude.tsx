import { Reveal } from "./Reveal";
import { interlude } from "../content/site";

export function Interlude() {
  return (
    <div className="bg-forest py-16 text-cream sm:py-20">
      <Reveal>
        <div className="mx-auto flex max-w-content flex-col justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-end lg:px-12">
          <strong className="font-display text-4xl font-semibold leading-none tracking-tight sm:text-6xl lg:text-7xl">
            {interlude.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </strong>
          <span className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.1em] text-sage">
            {interlude.eyebrowLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        </div>
      </Reveal>
    </div>
  );
}
