/**
 * Global, editable site content.
 * Replace placeholder values (marked "TBC" / example.com / +49 ...) with
 * confirmed brand details before launch. See README.md for the full list.
 */

export const nav = {
  links: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Studio", href: "#about" },
  ],
  eyebrow: "Independent production studio",
  cta: { label: "Let's talk ↗", href: "#contact" },
} as const;

export const brand = {
  name: "KROETE",
  fullName: "KROETE Group",
  tagline: "FPV & Creative Production",
  domain: "kroete.group",
  founded: "2024",
  location: { city: "Germany", note: "Studio location TBC" },
};

export const hero = {
  eyebrow: "FPV & CREATIVE PRODUCTION / GERMANY",
  headlineLines: ["See things", "differently."],
  sub: "Independent creative production for movement, atmosphere, and the moments in between.",
  cta: { label: "Explore work", href: "#work" },
  footTag: "KROETE / MOTION & MEDIA",
  footScroll: "SCROLL TO EXPLORE ↓",
  /**
   * Optional showreel background image/video. Drop a file into public/ and
   * set the path here (e.g. "/video/hero-reel.mp4" or "/img/hero.jpg").
   * Leave undefined to use the generative fallback backdrop.
   */
  image: undefined as string | undefined,
  video: undefined as string | undefined,
};

export const marquee = [
  "FPV CINEMATOGRAPHY",
  "AERIAL PRODUCTION",
  "AUTOMOTIVE & MOTORSPORT",
  "CREATIVE FILM",
];

export const intro = {
  eyebrow: "01 / OUR PERSPECTIVE",
  headingLines: ["Beyond the", "expected", "frame."],
  paragraphs: [
    "The best images make you feel like you're there. We pair technical precision with cinematic intuition to create perspectives that move people.",
    "From flowing FPV sequences to considered commercial filmmaking, every shot is built around the story — never the gear alone.",
  ],
  thinRow: ["INDEPENDENT BY DESIGN", "BASED IN GERMANY ↗"],
};

export const workIntro = {
  eyebrow: "02 / SELECTED DIRECTIONS",
  headingLines: ["Images in", "motion."],
  description:
    "Visual directions that reflect the kinds of projects we want to create. Real commissioned work will take their place.",
};

export const interlude = {
  headingLines: ["Made for", "the moment."],
  eyebrowLines: ["MOTION / MEDIA / PRODUCTION", "EVERY PERSPECTIVE HAS A STORY ↗"],
};

export const servicesIntro = {
  eyebrow: "03 / WHAT WE DO",
  headingLines: ["Crafted", "to move."],
  description:
    "From the first creative idea to the final frame, we shape each production around the subject, audience, and feeling.",
};

export const about = {
  eyebrow: "04 / THE STUDIO",
  headingLines: ["Curiosity", "is our", "compass."],
  paragraphs: [
    "KROETE is an emerging independent FPV and creative production studio based in Germany, built around an obsession with perspective, movement, and detail.",
    "We bring cinematic ambition together with a practical technical mindset. Small and flexible by design, open to projects that challenge the usual frame.",
  ],
  tags: ["CURIOSITY", "PRECISION", "MOVEMENT", "PERSPECTIVE"],
  imageCaption: "ALWAYS LOOKING CLOSER ↗",
  image: undefined as string | undefined,
  endHeadingLines: ["Different angles.", "Lasting feeling."],
  endEyebrow: "KROETE / INDEPENDENT PRODUCTION ↗",
  founders: [
    {
      role: "FPV Pilot / Director of Photography",
      note: "Name & bio pending — placeholder portrait.",
    },
    {
      role: "Producer / Editor",
      note: "Name & bio pending — placeholder portrait.",
    },
  ],
};

export const contact = {
  eyebrow: "05 / GET IN TOUCH",
  headingLines: ["Let's make", "something."],
  sub: "A film, a moving image, a different kind of idea — tell us what you have in mind.",
  email: "hello@kroete.group",
  instagram: { handle: "Instagram", url: "https://instagram.com/kroete.group" },
  demoNote: "Proposed contact details. Confirm domain, inbox, and social handle before launch.",
  formEndpointNote:
    "Replace with a real backend (Formspree, Resend, or a custom API route) before launch — see README.md.",
};

export const footerLegal = {
  impressum: { label: "Impressum", href: "#", note: "TBC — legal entity details pending" },
  datenschutz: { label: "Datenschutzerklärung", href: "#", note: "TBC — privacy policy pending" },
};

export const socials = [
  { label: "Instagram", href: "https://instagram.com/kroete.group" },
] as const;
