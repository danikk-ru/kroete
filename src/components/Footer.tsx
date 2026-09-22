import type { ReactNode } from "react";
import { Monogram } from "./Monogram";
import { nav, brand, socials, footerLegal } from "../content/site";

export function Footer() {
  return (
    <footer className="relative border-t border-off/10 bg-black pb-8 pt-16 sm:pt-20">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-12 border-b border-off/10 pb-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-[0.2em] text-off">
              <Monogram className="h-8 w-8 text-lime" />
              {brand.name}
            </a>
            <p className="mt-4 font-body text-sm leading-relaxed text-off/50">
              Independent FPV &amp; creative media production studio. {brand.location.city} —{" "}
              {brand.location.note}.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterColumn title="Navigate">
              {nav.map((item) => (
                <a key={item.href} href={item.href} className="block py-1 text-off/60 transition-colors hover:text-lime">
                  {item.label}
                </a>
              ))}
            </FooterColumn>

            <FooterColumn title="Social">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block py-1 text-off/60 transition-colors hover:text-lime"
                >
                  {s.label}
                  {"note" in s && s.note ? ` (${s.note})` : ""}
                </a>
              ))}
            </FooterColumn>

            <FooterColumn title="Legal">
              <a href={footerLegal.impressum.href} className="block py-1 text-off/60 transition-colors hover:text-lime">
                {footerLegal.impressum.label}
              </a>
              <a href={footerLegal.datenschutz.href} className="block py-1 text-off/60 transition-colors hover:text-lime">
                {footerLegal.datenschutz.label}
              </a>
            </FooterColumn>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 font-mono text-[10px] tracking-widest text-off/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {brand.fullName}. ALL RIGHTS RESERVED.</span>
          <span>{brand.domain.toUpperCase()} — GERMANY</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-3 font-mono text-[10px] tracking-widest text-off/35">{title.toUpperCase()}</p>
      <div className="font-body text-sm">{children}</div>
    </div>
  );
}
