import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Monogram } from "./Monogram";
import { nav } from "../content/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open ? "bg-black/80 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-display text-sm font-semibold tracking-[0.2em] text-off"
        >
          <Monogram className="h-7 w-7 text-lime transition-transform duration-500 group-hover:rotate-6" />
          KROETE
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative font-mono text-xs tracking-widest text-off/70 transition-colors hover:text-off after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-lime after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label.toUpperCase()}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-lime/60 px-4 py-2 font-mono text-xs tracking-widest text-lime transition-colors hover:bg-lime hover:text-black"
          >
            START A PROJECT
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
            className="h-px w-6 bg-off"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
            className="h-px w-6 bg-off"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-0 flex h-dvh flex-col justify-between bg-black px-6 pb-10 pt-24 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="border-b border-off/10 py-5 font-display text-4xl font-medium tracking-tight text-off xs:text-5xl"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="flex items-center justify-between font-mono text-xs tracking-widest text-off/50">
              <span>KROETE.GROUP</span>
              <span>DE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
