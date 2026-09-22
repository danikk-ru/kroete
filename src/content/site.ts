/**
 * Global, editable site content.
 * Replace placeholder values (marked "TBC" / example.com / +49 ...) with
 * confirmed brand details before launch. See README.md for the full list.
 */

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const brand = {
  name: "KROETE",
  fullName: "KROETE Group",
  tagline: "FPV & Creative Media Production",
  domain: "kroete.group",
  founded: "2024",
  location: { city: "Germany", note: "Studio location TBC" },
};

export const hero = {
  eyebrow: "FPV / AERIAL / MOTORSPORT / FILM",
  headlineLines: ["DIFFERENT", "PERSPECTIVES."],
  sub: "An independent production studio building cinematic FPV, automotive, and commercial films from the ground up — and everywhere above it.",
  ctaPrimary: { label: "View Work", href: "#work" },
  ctaSecondary: { label: "Start a Project", href: "#contact" },
  /**
   * Optional showreel background. Drop an .mp4 into /public/video/ and set
   * the path here (e.g. "/video/hero-reel.mp4"). Leave undefined to use
   * the generative fallback background — see README.md for specs.
   */
  video: undefined as string | undefined,
  poster: undefined as string | undefined,
};

export const about = {
  eyebrow: "ABOUT",
  heading: "Built by pilots. Run like a studio.",
  paragraphs: [
    "KROETE is an independent creative production studio based in Germany, formed around a simple belief: the most compelling footage comes from perspectives nobody else is flying, driving, or standing in.",
    "We work at the intersection of FPV piloting, automotive culture, and commercial filmmaking — combining technical flight precision with a cinematographer's eye for pace, light, and story.",
    "We're early. This is a young studio built by two founders who fly, shoot, and edit everything themselves — not a large production house. What we lack in scale, we make up for in obsession over the shot.",
  ],
  founders: [
    {
      name: "Founder One",
      role: "FPV Pilot / Director of Photography",
      note: "Name & bio pending — placeholder portrait slot below.",
    },
    {
      name: "Founder Two",
      role: "Producer / Editor",
      note: "Name & bio pending — placeholder portrait slot below.",
    },
  ],
};

export const contact = {
  eyebrow: "CONTACT",
  heading: "Let's build something worth watching.",
  sub: "Tell us about your project, timeline, and location. We'll get back to you within a few days.",
  email: "hello@kroete.group",
  instagram: { handle: "@kroete.group", url: "https://instagram.com/kroete.group" },
  location: "Germany — available for travel",
  formEndpointNote:
    "Replace with a real backend (Formspree, Resend, or a custom API route) before launch — see README.md.",
};

export const footerLegal = {
  impressum: { label: "Impressum", href: "#", note: "TBC — legal entity details pending" },
  datenschutz: { label: "Datenschutzerklärung", href: "#", note: "TBC — privacy policy pending" },
};

export const socials = [
  { label: "Instagram", href: "https://instagram.com/kroete.group" },
  { label: "YouTube", href: "#", note: "TBC" },
] as const;
