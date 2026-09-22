import { Reveal } from "./Reveal";
import { services } from "../content/services";
import { servicesIntro } from "../content/site";

export function Services() {
  return (
    <section id="services" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-content gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[8vw] lg:px-12">
        <Reveal>
          <div className="mb-9 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.1em] text-forest/70">
            <span className="h-px w-6 bg-current" />
            {servicesIntro.eyebrow}
          </div>
          <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            {servicesIntro.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-[340px] text-sm leading-relaxed text-forest/60">{servicesIntro.description}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-t border-line">
            {services.map((service) => (
              <div
                key={service.index}
                className="grid grid-cols-[37px_1fr_22px] gap-4 border-b border-line py-7"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-forest/60">
                  {service.index}
                </span>
                <div>
                  <h3 className="mb-1.5 font-display text-2xl font-semibold leading-[1.2] tracking-tight sm:text-3xl lg:text-4xl">
                    {service.title}
                  </h3>
                  <p className="max-w-[470px] text-sm leading-relaxed text-forest/60">{service.description}</p>
                </div>
                <span aria-hidden="true" className="text-xl">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
