import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Wordmark } from "./Wordmark";
import { nav } from "../content/site";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[78px] border-b border-line bg-cream/92 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-content items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-6" aria-label="KROETE, home">
          <Wordmark className="text-[28px]" />
          <span className="hidden border-l border-line pl-5 font-mono text-[10px] uppercase tracking-[0.11em] text-forest/60 md:inline">
            {nav.eyebrow}
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.035em] transition-opacity hover:opacity-50"
            >
              {item.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            className="bg-forest px-[18px] py-[13px] font-mono text-[11px] uppercase tracking-[0.035em] text-cream transition-colors hover:bg-dark"
          >
            {nav.cta.label}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="flex h-11 w-11 items-center justify-center border border-line text-xl md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[78px] flex h-[calc(100dvh-78px)] flex-col justify-center gap-6 bg-cream px-8 py-[8vw] md:hidden"
          >
            {nav.links.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.06 }}
                className="font-display text-5xl font-semibold tracking-tight"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href={nav.cta.href}
              onClick={handleNavClick}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + nav.links.length * 0.06 }}
              className="mt-4 bg-forest px-6 py-4 text-center font-mono text-xs uppercase tracking-widest text-cream"
            >
              {nav.cta.label}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
