import { useState, type FormEvent, type ReactNode } from "react";
import { Reveal } from "./Reveal";
import { contact } from "../content/site";

const PROJECT_TYPES = ["FPV / Aerial", "Automotive", "Motorsport", "Commercial", "Film / Other"];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const type = String(data.get("type") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`New inquiry — ${type || "Project"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${type}\n\n${message}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40 mask-fade-b" />
      <div className="relative mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <div className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-lime">
                <span className="h-px w-8 bg-lime" />
                {contact.eyebrow}
              </div>
              <h2 className="max-w-md font-display text-4xl font-medium leading-[1.02] tracking-tight text-off sm:text-5xl">
                {contact.heading}
              </h2>
              <p className="mt-6 max-w-sm font-body text-sm leading-relaxed text-off/60 sm:text-base">
                {contact.sub}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <dl className="mt-12 space-y-5 border-t border-off/10 pt-8">
                <ContactRow label="Email" value={contact.email} href={`mailto:${contact.email}`} />
                <ContactRow label="Instagram" value={contact.instagram.handle} href={contact.instagram.url} />
                <ContactRow label="Location" value={contact.location} />
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-off/10 bg-graphite/60 p-6 sm:p-8">
              <Field label="Name">
                <input name="name" type="text" required className={inputClass} placeholder="Your name" />
              </Field>
              <Field label="Email">
                <input name="email" type="email" required className={inputClass} placeholder="you@company.com" />
              </Field>
              <Field label="Project type">
                <select name="type" className={inputClass} defaultValue={PROJECT_TYPES[0]}>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-graphite">
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Message">
                <textarea
                  name="message"
                  required
                  rows={4}
                  className={inputClass}
                  placeholder="Tell us about the project, timeline, and location."
                />
              </Field>

              <button
                type="submit"
                className="w-full rounded-full bg-lime py-3.5 font-mono text-xs font-medium tracking-widest text-black transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(223,255,0,0.3)]"
              >
                {status === "sent" ? "OPENING EMAIL CLIENT…" : "SEND INQUIRY"}
              </button>

              <p className="font-mono text-[10px] leading-relaxed tracking-wide text-off/35">
                This form opens your email client with the details pre-filled. {contact.formEndpointNote}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-lg border border-off/15 bg-black/40 px-4 py-3 font-body text-sm text-off placeholder:text-off/30 outline-none transition-colors focus:border-lime";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] tracking-widest text-off/50">
        {label.toUpperCase()}
      </span>
      {children}
    </label>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <span className="font-display text-lg text-off transition-colors group-hover:text-lime sm:text-xl">
      {value}
    </span>
  );
  return (
    <div className="group flex items-baseline justify-between gap-4">
      <dt className="font-mono text-[10px] tracking-widest text-off/40">{label.toUpperCase()}</dt>
      <dd>{href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{content}</a> : content}</dd>
    </div>
  );
}
