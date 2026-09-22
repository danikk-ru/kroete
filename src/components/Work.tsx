import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Reveal } from "./Reveal";
import { PlaceholderVisual } from "./PlaceholderVisual";
import { RoundLink } from "./RoundLink";
import { categories, projects, type Category, type Project } from "../content/projects";
import { workIntro } from "../content/site";

export function Work() {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="work" className="bg-cream pb-24 pt-14 sm:pb-32">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mb-9 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.1em] text-forest/70">
            <span className="h-px w-6 bg-current" />
            {workIntro.eyebrow}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              {workIntro.headingLines.map((line, i) => (
                <span key={line} className={i === workIntro.headingLines.length - 1 ? "text-forest/45" : undefined}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
            <p className="max-w-[340px] text-sm leading-relaxed text-forest/60">{workIntro.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div role="group" aria-label="Filter project concepts" className="my-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={clsx(
                  "border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.06em] transition-colors",
                  active === cat ? "border-forest bg-forest text-cream" : "border-line hover:border-forest",
                )}
              >
                {cat === "All" ? `All / ${String(projects.length).padStart(2, "0")}` : cat}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-3.5 sm:grid-cols-2"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="mt-5 max-w-2xl font-mono text-[10px] uppercase leading-relaxed tracking-[0.04em] text-forest/50">
          Portfolio preview — concept titles and generated placeholder visuals. Replace with own or licensed
          project media before publication.
        </p>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const spanFull = (index + 1) % 3 === 0;

  return (
    <Reveal
      delay={Math.min(index * 0.06, 0.3)}
      y={20}
      className={spanFull ? "sm:col-span-2" : undefined}
    >
      <article
        className={clsx(
          "group relative flex min-h-[425px] flex-col justify-between overflow-hidden p-6 text-cream sm:min-h-[550px]",
          spanFull && "sm:min-h-[420px]",
        )}
      >
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.045]">
          <PlaceholderVisual category={project.category} index={index + 1} className="h-full w-full" />
        </div>

        <div className="relative flex items-start justify-between gap-4">
          <span className="bg-dark/75 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.08em]">
            {String(index + 1).padStart(2, "0")} / {project.category}
          </span>
          <span className="bg-dark/75 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.08em]">
            Visual concept
          </span>
        </div>

        <div className="relative flex items-end justify-between gap-5">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-cream/75">
              {project.descriptor}
            </span>
            <h3 className="mt-2 font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              {project.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>
          </div>
          <RoundLink size="sm" href="#contact" aria-label={`Inquire about ${project.title.join(" ")}`} />
        </div>
      </article>
    </Reveal>
  );
}
