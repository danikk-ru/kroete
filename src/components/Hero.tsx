import { motion, useReducedMotion } from "framer-motion";
import { RoundLink } from "./RoundLink";
import { hero } from "../content/site";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[750px] h-[100svh] max-h-[1120px] items-end overflow-hidden bg-dark text-cream"
    >
      <div className="absolute inset-0">
        {hero.image ? (
          <div
            className="h-full w-full bg-cover bg-center motion-safe:animate-[slowzoom_22s_ease-out_both]"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(6,20,14,.73) 0%, rgba(6,20,14,.11) 100%), linear-gradient(0deg, rgba(6,20,14,.85), transparent 50%), url(${hero.image})`,
            }}
            role="img"
            aria-label="Atmospheric landscape — illustrative placeholder photography"
          />
        ) : (
          <GenerativeBackdrop />
        )}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-content px-5 pb-[85px] pt-40 sm:px-8 lg:px-12">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.1em] text-cream/85"
        >
          <span className="h-px w-9 bg-current" />
          {hero.eyebrow}
        </motion.div>

        <h1 className="mb-9 max-w-[1200px] font-display font-semibold leading-[0.87] tracking-tight">
          {hero.headlineLines.map((line, i) => (
            <motion.span
              key={line}
              initial={reduceMotion ? undefined : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={i === 1 ? "block text-sage" : "block"}
              style={{ fontSize: `clamp(1.75rem, ${(98 / line.length).toFixed(1)}vw, 12rem)` }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <p className="max-w-[440px] text-base leading-relaxed sm:text-lg md:text-xl">{hero.sub}</p>
          <RoundLink href={hero.cta.href} aria-label={hero.cta.label} />
        </motion.div>
      </div>

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="absolute inset-x-0 bottom-6 z-10 hidden justify-between px-5 font-mono text-[10px] uppercase tracking-[0.1em] text-cream/65 sm:flex sm:px-8 lg:px-12"
      >
        <span>{hero.footTag}</span>
        <span>{hero.footScroll}</span>
      </motion.div>
    </section>
  );
}

function GenerativeBackdrop() {
  return (
    <div className="relative h-full w-full bg-dark">
      <div className="absolute inset-0 opacity-[0.07]" style={{ filter: "invert(1)" }}>
        <div className="grid-overlay h-full w-full" />
      </div>
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full opacity-40">
        <path
          d="M -50 700 C 250 500, 450 850, 700 550 S 1100 250, 1500 450"
          fill="none"
          stroke="var(--color-sage)"
          strokeWidth="1.5"
        />
        <path
          d="M -50 300 C 300 150, 550 450, 850 250 S 1250 50, 1500 200"
          fill="none"
          stroke="var(--color-cream)"
          strokeOpacity="0.12"
          strokeWidth="1"
        />
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#10241c_88%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
    </div>
  );
}
