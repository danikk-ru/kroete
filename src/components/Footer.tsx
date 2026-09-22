import { Wordmark } from "./Wordmark";
import { Mark } from "./Mark";
import { nav, brand, socials, footerLegal } from "../content/site";

export function Footer() {
  const allLinks = [...nav.links, { label: "Contact", href: "#contact" }];

  return (
    <footer className="border-t border-forest bg-deep pb-7 pt-12 text-cream">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <a href="#top" aria-label="KROETE, home" className="flex items-center gap-3 sm:gap-5">
            <Mark variant="dark" className="h-[46px] w-auto sm:h-[74px] lg:h-[112px]" />
            <Wordmark className="text-[68px] leading-[0.8] sm:text-[110px] lg:text-[170px]" />
          </a>

          <div className="flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-[0.06em]">
            {allLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-opacity hover:opacity-60">
                {link.label}
              </a>
            ))}
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-60">
                {s.label} ↗
              </a>
            ))}
            <a href={footerLegal.impressum.href} className="transition-opacity hover:opacity-60">
              {footerLegal.impressum.label}
            </a>
            <a href={footerLegal.datenschutz.href} className="transition-opacity hover:opacity-60">
              {footerLegal.datenschutz.label}
            </a>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-2.5 border-t border-forest pt-6 font-mono text-[9px] uppercase leading-relaxed tracking-[0.02em] text-sage sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {brand.fullName}</span>
          <span>{brand.tagline}</span>
          <span>Demo — add legal notice &amp; privacy policy before launch</span>
        </div>
      </div>
    </footer>
  );
}
