import { motion, useReducedMotion } from "framer-motion";
import { Monogram } from "./Monogram";
import { ViewfinderFrame } from "./ViewfinderFrame";
import { hero } from "../content/site";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative flex h-dvh min-h-[720px] w-full items-end overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        {hero.video ? (
          <video
            className="h-full w-full object-cover opacity-60"
            autoPlay
            muted
            loop
            playsInline
            poster={hero.poster}
          >
            <source src={hero.video} type="video/mp4" />
          </video>
        ) : (
          <GenerativeBackdrop />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent" />
      </div>

      <ViewfinderFrame className="hidden sm:block">
        <div className="absolute left-4 top-20 font-mono text-[10px] tracking-widest text-off/50 xs:left-6 sm:top-24">
          51.1657° N / 10.4515° E
        </div>
        <div className="absolute right-4 top-20 flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-lime xs:right-6 sm:top-24">
          <span className="h-1.5 w-1.5 rounded-full bg-lime motion-safe:animate-pulse" />
          REC
        </div>
      </ViewfinderFrame>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-content px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-off/60 sm:text-xs"
        >
          <span className="h-px w-8 bg-lime" />
          {hero.eyebrow}
        </motion.div>

        <h1 className="font-display font-bold leading-[0.92] tracking-tight text-off [overflow-wrap:anywhere]">
          {hero.headlineLines.map((line, i) => (
            <motion.span
              key={line}
              initial={reduceMotion ? undefined : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="block"
              style={{ fontSize: `clamp(1.75rem, ${(98 / line.length).toFixed(1)}vw, 12rem)` }}
            >
              {i === hero.headlineLines.length - 1 ? (
                <>
                  {line.slice(0, -1)}
                  <span className="text-lime">.</span>
                </>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-6 max-w-md font-body text-sm text-off/70 sm:text-base"
        >
          {hero.sub}
        </motion.p>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href={hero.ctaPrimary.href}
            className="rounded-full bg-lime px-6 py-3.5 font-mono text-xs font-medium tracking-widest text-black transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(223,255,0,0.35)]"
          >
            {hero.ctaPrimary.label.toUpperCase()}
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="rounded-full border border-off/25 px-6 py-3.5 font-mono text-xs tracking-widest text-off transition-colors duration-300 hover:border-off hover:bg-off/5"
          >
            {hero.ctaSecondary.label.toUpperCase()}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-6 right-5 z-10 hidden flex-col items-center gap-2 sm:right-8 sm:flex lg:right-12"
      >
        <span className="font-mono text-[10px] tracking-widest text-off/50 [writing-mode:vertical-lr]">
          SCROLL
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-off/50 to-transparent motion-safe:animate-pulse" />
      </motion.div>
    </section>
  );
}

function GenerativeBackdrop() {
  return (
    <div className="relative h-full w-full bg-graphite grid-overlay">
      <Monogram className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 text-off/[0.035]" />
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-30"
      >
        <path
          d="M -50 700 C 250 500, 450 850, 700 550 S 1100 250, 1500 450"
          fill="none"
          stroke="var(--color-lime)"
          strokeWidth="1.5"
        />
        <path
          d="M -50 300 C 300 150, 550 450, 850 250 S 1250 50, 1500 200"
          fill="none"
          stroke="var(--color-off)"
          strokeOpacity="0.15"
          strokeWidth="1"
        />
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#080808_85%)]" />
    </div>
  );
}
