import { Reveal } from "./Reveal";
import { about } from "../content/site";

export function About() {
  return (
    <section id="about" className="relative bg-graphite py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <div className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-lime">
                <span className="h-px w-8 bg-lime" />
                {about.eyebrow}
              </div>
              <h2 className="font-display text-4xl font-medium leading-[1.02] tracking-tight text-off sm:text-5xl">
                {about.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 space-y-5">
                {about.paragraphs.map((p) => (
                  <p key={p} className="max-w-lg font-body text-sm leading-relaxed text-off/70 sm:text-base">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-5 xs:grid-cols-2">
            {about.founders.map((founder, i) => (
              <Reveal key={founder.role} delay={0.1 + i * 0.1}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-lg border border-off/10 bg-black">
                  <div className="absolute inset-0 grid-overlay opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl font-bold text-off/10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 top-0 p-3">
                    <span className="rounded-full border border-off/15 px-2.5 py-1 font-mono text-[9px] tracking-widest text-off/50">
                      PORTRAIT PENDING
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4">
                    <p className="font-display text-base font-medium text-off">{founder.role}</p>
                    <p className="mt-1 font-mono text-[10px] tracking-wide text-off/45">{founder.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
