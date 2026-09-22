# KROETE — Website

Marketing site for **KROETE**, an independent FPV and creative media
production studio. Built with React 19, TypeScript, Tailwind CSS v4, and
Framer Motion.

## Design decisions

- **Type system.** [Unbounded](https://fonts.google.com/specimen/Unbounded)
  carries the KROETE wordmark and all headlines — it's wide, geometric, and
  reads as "industrial performance" without tipping into gaming/futuristic
  cliché. [Inter](https://fonts.google.com/specimen/Inter) handles body
  copy for readability. [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
  is used exclusively for technical labels (nav items, category tags,
  coordinates, form labels) to reinforce the "camera/flight instrumentation"
  feel.
- **Palette.** Strict to the brief: `#080808` black, `#1A1A1A` graphite,
  `#EDEDE6` off-white, `#DFFF00` lime — lime is reserved for accents,
  active states, and the monogram, never large fills.
- **Monogram.** A single angular "K" glyph (`src/components/Monogram.tsx`)
  with two recessed notches in the negative space — a restrained,
  abstract nod to the toad motif (wide-set eyes) rather than an illustrated
  toad.
- **No fake portfolio.** Per the brief, no real clients, awards, or
  completed productions are implied anywhere. Project cards use a
  generated abstract visual (category-coded line art over a technical
  grid, labeled "MEDIA PENDING") instead of stock photography or broken
  image links, so the layout demonstrates the intended editorial grid
  without pretending to be real work. Founder cards are explicitly
  labeled "PORTRAIT PENDING."
- **Contact form is functional, not decorative.** It builds a `mailto:`
  link from the filled fields and hands off to the visitor's email
  client. This works today with zero backend, but is not a real lead
  pipeline — see "Wiring up the contact form" below.
- **Motion.** Scroll-triggered reveals, an accordion services list, filterable
  portfolio grid, and a cinematic mobile menu, all built with Framer Motion.
  Every animated component reads `prefers-reduced-motion` (via
  `useReducedMotion`) and renders statically for users who've asked for
  reduced motion.

## Project structure

```
src/
  content/
    site.ts       # nav, brand, hero copy, about copy, contact info, footer/legal
    services.ts   # the 4 service offerings
    projects.ts   # portfolio entries (all currently placeholder=true)
  components/      # one file per section + shared visual primitives
```

All editable copy lives in `src/content/*.ts` — you should not need to
touch component code to update text, add a project, or change a service
description.

## Replacing placeholder content

### 1. Contact details (`src/content/site.ts`)
- `contact.email` — currently `hello@kroete.group`
- `contact.instagram` — handle + URL
- `contact.location`
- `brand.location.note`, `brand.founded`

### 2. Legal (`src/content/site.ts` → `footerLegal`)
German sites need an **Impressum** and **Datenschutzerklärung**. Both are
currently `href: "#"` placeholders. Either link to standalone pages/routes
or point at hosted documents once drafted (a lawyer or a service like
e-recht24 can generate compliant text once the legal entity is finalized).

### 3. Portfolio (`src/content/projects.ts`)
Each entry has `placeholder: true`. As real productions are ready:
- Set `placeholder: false`.
- Add `image` (a poster/still, e.g. `/work/project-01.jpg` in `public/`)
  and/or `video` (an mp4 or hosted embed — the current card only wires up
  a still + play icon affordance; extending it to open a lightbox/video
  is a small follow-up in `src/components/Work.tsx`).
- Recommended still specs: 1600×2000px (4:5), JPG/WebP, optimized (~200KB).
- Once an entry has `image` set, swap `<PlaceholderVisual>` for a real
  `<img>` in `Work.tsx`'s `ProjectCard` — left as a manual step so no
  broken `<img>` tags ship before real media exists.

### 4. Hero showreel (`src/content/site.ts` → `hero`)
Set `hero.video` to a path under `public/video/` (e.g.
`/video/hero-reel.mp4`) and optionally `hero.poster` to a still frame.
Until then, the hero uses a generated grid/line-art backdrop — this is a
deliberate fallback, not a bug.

### 5. Founders (`src/content/site.ts` → `about.founders`)
Replace `name`/placeholder `note` once names and short bios are agreed.
For portraits, replace the placeholder block in `src/components/About.tsx`
(`PORTRAIT PENDING` badge + index number) with an `<img>` per founder —
recommended 3:4 portrait crop, consistent lighting/background across both.

### 6. Domain & social (`src/content/site.ts` → `brand`, `socials`)
`brand.domain` is used in the footer and `index.html`'s canonical URL —
update if `kroete.group` isn't secured.

## Wiring up the contact form

The form currently opens `mailto:` with a pre-filled subject/body. To turn
this into an actual lead pipeline without a custom backend, the fastest
options are:

- **[Formspree](https://formspree.io)** — point the form's `action` at
  your Formspree endpoint, remove the `onSubmit` handler in
  `src/components/Contact.tsx`.
- **[Resend](https://resend.com)** — keep the `onSubmit` handler, replace
  the `mailto:` redirect with a `fetch()` to a small serverless function
  (Vercel/Netlify function or Cloudflare Worker) that calls Resend's API.
- **Custom API route** — same shape as above, pointed at your own backend.

## Development

```bash
npm install
npm run dev       # dev server
npm run build     # typecheck + production build
npm run preview   # serve the production build locally
npm run lint       # oxlint
```

## Browser/device support

Responsive from ~360px mobile up through ultrawide desktop. Tested at
390px (mobile), and 1440px (desktop) viewports. The hero headline sizes
itself fluidly per line length so long words don't overflow narrow
screens — see the `fontSize` calc in `src/components/Hero.tsx` if you
change the headline copy to something significantly longer.
