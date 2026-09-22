import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Reveal } from "./Reveal";
import { PlaceholderVisual } from "./PlaceholderVisual";
import { categories, projects, type Category } from "../content/projects";

export function Work() {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="work" className="relative bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="mb-12 flex flex-col justify-between gap-8 sm:mb-16 md:flex-row md:items-end">
          <Reveal>
            <div className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-lime">
              <span className="h-px w-8 bg-lime" />
              SELECTED WORK
            </div>
            <h2 className="max-w-xl font-display text-4xl font-medium leading-[1.02] tracking-tight text-off sm:text-5xl lg:text-6xl">
              A studio in motion, early in its reel.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={clsx(
                    "rounded-full border px-4 py-2 font-mono text-[11px] tracking-widest transition-colors duration-300",
                    active === cat
                      ? "border-lime bg-lime text-black"
                      : "border-off/20 text-off/60 hover:border-off/50 hover:text-off",
                  )}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mb-10 rounded-lg border border-lime/20 bg-lime/[0.04] px-4 py-3 font-mono text-[11px] leading-relaxed tracking-wide text-lime/80 sm:px-5">
          NOTE — the projects below are placeholder entries illustrating the intended
          portfolio layout. No real clients or completed productions are represented yet.
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <Reveal delay={Math.min(index * 0.06, 0.3)} y={20}>
      <motion.article
        whileHover="hover"
        initial="rest"
        animate="rest"
        className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-off/10 bg-graphite"
      >
        <motion.div
          variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <PlaceholderVisual category={project.category} index={index + 1} className="h-full w-full" />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

        <motion.div
          variants={{ rest: { opacity: 0, y: 8 }, hover: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-lime/60 bg-black/40 backdrop-blur-sm">
            <svg viewBox="0 0 24 24" className="h-5 w-5 translate-x-0.5 fill-lime">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="mb-2 flex items-center gap-2 font-mono text-[10px] tracking-widest text-lime">
            <span>{project.category.toUpperCase()}</span>
            <span className="text-off/30">/</span>
            <span className="text-off/50">{project.year}</span>
          </div>
          <h3 className="font-display text-xl font-medium text-off">{project.title}</h3>
          <p className="mt-1 font-mono text-[11px] text-off/50">{project.role} — {project.location}</p>
        </div>
      </motion.article>
    </Reveal>
  );
}
