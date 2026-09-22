import { useState, type FormEvent, type ReactNode } from "react";
import { Reveal } from "./Reveal";
import { contact } from "../content/site";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const project = String(data.get("project") ?? "").trim();

    const subject = encodeURIComponent(`KROETE project inquiry — ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject:\n${project}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="bg-deep py-24 text-cream sm:py-32">
      <div className="mx-auto grid max-w-content gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-[9vw] lg:px-12">
        <Reveal>
          <div className="mb-9 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.1em] text-sage">
            <span className="h-px w-6 bg-current" />
            {contact.eyebrow}
          </div>
          <h2 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-8xl">
            {contact.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-[400px] text-lg leading-relaxed text-cream/70">{contact.sub}</p>

          <div className="mt-9 flex gap-6">
            <a href={contact.instagram.url} target="_blank" rel="noreferrer" className="border-b border-sage/70 pb-1.5 font-mono text-[11px] uppercase tracking-[0.04em]">
              {contact.instagram.handle} ↗
            </a>
            <a href={`mailto:${contact.email}`} className="border-b border-sage/70 pb-1.5 font-mono text-[11px] uppercase tracking-[0.04em]">
              Email ↗
            </a>
          </div>

          <p className="mt-8 max-w-[420px] font-mono text-[10px] uppercase leading-relaxed tracking-[0.03em] text-cream/45">
            {contact.demoNote}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-forest bg-forest/40 p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between border-b border-forest pb-5">
              <strong className="font-mono text-[10px] uppercase tracking-[0.08em] text-cream/85">
                Start a project
              </strong>
              <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-cream/50">↗ 001</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Field id="contact-name" label="Your name *">
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="Your name"
                  className={inputClass}
                />
              </Field>
              <Field id="contact-email" label="Email address *">
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={150}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </Field>
              <Field id="contact-project" label="Your project *">
                <textarea
                  id="contact-project"
                  name="project"
                  required
                  maxLength={3000}
                  rows={4}
                  placeholder="Tell us about the idea, timeline, and location…"
                  className={inputClass}
                />
              </Field>

              <button
                type="submit"
                className="w-full bg-cream py-[18px] font-mono text-[11px] uppercase tracking-[0.08em] text-forest transition-colors hover:bg-sage"
              >
                {status === "sent" ? "Opening email app…" : "Compose email ↗"}
              </button>

              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.02em] text-cream/45">
                Opens your email app with a pre-filled message. Nothing is sent directly from this page.{" "}
                {contact.formEndpointNote}
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const inputClass =
  "block w-full border-0 border-b border-forest bg-transparent py-3 font-body text-base text-cream outline-none transition-colors placeholder:text-cream/30 focus:border-sage";

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <label htmlFor={id} className="block font-mono text-[10px] uppercase tracking-[0.06em] text-cream/70">
      {label}
      <span className="mt-2.5 block">{children}</span>
    </label>
  );
}
