import { Reveal } from "./Reveal";
import { about } from "../content/site";

export function About() {
  return (
    <section id="about" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-[9vw] lg:items-center">
          <Reveal>
            <div
              className="relative min-h-[420px] bg-dark lg:min-h-[650px]"
              style={
                about.image
                  ? {
                      backgroundImage: `linear-gradient(0deg, rgba(16,36,29,.5), transparent 55%), url(${about.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : undefined
              }
              role="img"
              aria-label="Forest scene — placeholder for studio imagery"
            >
              {!about.image && (
                <>
                  <div className="absolute inset-0 opacity-[0.12]" style={{ filter: "invert(1)" }}>
                    <div className="grid-overlay h-full w-full" />
                  </div>
                  <svg viewBox="0 0 400 650" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-40">
                    <path
                      d="M -20 480 C 80 380, 140 560, 220 420 S 340 180, 420 260"
                      fill="none"
                      stroke="var(--color-sage)"
                      strokeWidth="1.5"
                    />
                  </svg>
                </>
              )}
              <span className="absolute bottom-5 left-5 bg-cream px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.06em] text-forest">
                {about.imageCaption}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mb-9 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.1em] text-forest/70">
              <span className="h-px w-6 bg-current" />
              {about.eyebrow}
            </div>
            <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              {about.headingLines.map((line, i) => (
                <span key={line} className={i === about.headingLines.length - 1 ? "text-forest/45" : undefined}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
            <div className="mt-6 space-y-5">
              {about.paragraphs.map((p) => (
                <p key={p} className="text-base leading-relaxed text-forest/70">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {about.tags.map((tag, i) => (
                <span key={tag} className="border border-line px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.04em]">
                  {String(i + 1).padStart(2, "0")} / {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-1 gap-4 xs:grid-cols-2 sm:mt-20">
            {about.founders.map((founder, i) => (
              <div key={founder.role} className="flex items-center gap-4 border border-line p-4">
                <span className="flex h-14 w-14 flex-none items-center justify-center bg-paper font-display text-lg font-semibold text-forest/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-base font-semibold leading-tight">{founder.role}</p>
                  <p className="mt-1 font-mono text-[10px] tracking-wide text-forest/50">{founder.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col justify-between gap-6 border-t border-line pt-10 sm:mt-16 md:flex-row md:items-end">
            <strong className="font-display text-3xl font-semibold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">
              {about.endHeadingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </strong>
            <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-forest/60">
              {about.endEyebrow}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
