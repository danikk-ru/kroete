import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Reveal } from "./Reveal";
import { services } from "../content/services";

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" className="relative bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="mb-14 grid gap-8 sm:mb-20 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <div className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-lime">
              <span className="h-px w-8 bg-lime" />
              SERVICES
            </div>
            <h2 className="max-w-2xl font-display text-4xl font-medium leading-[1.02] tracking-tight text-off sm:text-5xl lg:text-6xl">
              One production offering. Four ways it shows up.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm font-body text-sm text-off/60">
              We don't split into departments — every project is handled end-to-end by
              the same small, focused team.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-off/10">
          {services.map((service, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={service.index} className="border-b border-off/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center gap-4 py-6 text-left sm:gap-8 sm:py-8"
                >
                  <span className="font-mono text-sm text-off/40 sm:text-base">{service.index}</span>
                  <span
                    className={clsx(
                      "flex-1 font-display text-2xl font-medium tracking-tight transition-colors duration-300 sm:text-3xl lg:text-4xl",
                      isOpen ? "text-lime" : "text-off group-hover:text-off/80",
                    )}
                  >
                    {service.title}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-off/20 text-lg text-off sm:h-10 sm:w-10"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 pb-8 pl-0 sm:grid-cols-[1fr_1fr] sm:pl-16 lg:pl-24">
                        <p className="max-w-md font-body text-sm leading-relaxed text-off/70 sm:text-base">
                          {service.description}
                        </p>
                        <ul className="grid grid-cols-1 gap-2 xs:grid-cols-2">
                          {service.capabilities.map((cap) => (
                            <li
                              key={cap}
                              className="flex items-center gap-2 font-mono text-xs tracking-wide text-off/60"
                            >
                              <span className="h-1 w-1 flex-none rounded-full bg-lime" />
                              {cap}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
