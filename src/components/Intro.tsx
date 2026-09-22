import { Reveal } from "./Reveal";
import { intro } from "../content/site";

export function Intro() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-content gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.75fr] lg:gap-[8vw] lg:px-12">
        <Reveal>
          <div className="mb-9 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.1em] text-forest/70">
            <span className="h-px w-6 bg-current" />
            {intro.eyebrow}
          </div>
          <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            {intro.headingLines.map((line, i) => (
              <span key={line} className={i === intro.headingLines.length - 1 ? "text-forest/45" : undefined}>
                {line}
                <br />
              </span>
            ))}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed tracking-tight sm:text-xl">{intro.paragraphs[0]}</p>
            <p className="text-sm leading-relaxed text-forest/60">{intro.paragraphs[1]}</p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.08em] text-forest/70">
            <span>{intro.thinRow[0]}</span>
            <span>{intro.thinRow[1]}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
