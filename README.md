# KROETE — Website

Marketing site for **KROETE**, an independent FPV and creative media
production studio. Built with React 19, TypeScript, Tailwind CSS v4, and
Framer Motion.

## Design decisions

- **Type system.** [Manrope](https://fonts.google.com/specimen/Manrope)
  carries the wordmark and all display headlines — geometric but warm,
  it reads as editorial/cinematic rather than corporate.
  [DM Sans](https://fonts.google.com/specimen/DM+Sans) handles body copy.
  [DM Mono](https://fonts.google.com/specimen/DM+Mono) is used exclusively
  for technical labels (nav, eyebrows, category tags, form labels) —
  a quiet "instrumentation" layer under the editorial type.
- **Palette.** Forest/cream instead of a dark UI: `#EFEEE7` cream,
  `#E6E6DB` paper (alternating section background), `#19372B` forest
  (primary text/accent), `#10241C` dark and `#081711` deep (hero/contact
  backgrounds), `#9CAE9B` sage (muted accent, second headline lines).
  Light, editorial, and nature-toned rather than an "industrial" dark UI.
- **Wordmark.** A lowercase text mark, `kroete.`, with the trailing period
  colored sage — a small, deliberate accent repeated in the nav and the
  oversized footer signature (`src/components/Wordmark.tsx`).
- **No fake portfolio.** Per the brief, no real clients, awards, or
  completed productions are implied anywhere. Project cards use a
  generated abstract visual (category-coded line art over a technical
  grid) instead of stock photography or broken image links, explicitly
  labeled "VISUAL CONCEPT" and captioned below the grid as placeholder.
  Founder cards are explicitly labeled placeholder portraits.
- **Contact form is functional, not decorative.** It builds a `mailto:`
  link from the filled fields and hands off to the visitor's email
  client. This works today with zero backend, but is not a real lead
  pipeline — see "Wiring up the contact form" below.
- **Motion.** A looping marquee ticker, scroll-triggered reveals, a
  filterable portfolio grid, and a full-screen mobile menu, all built
  with Framer Motion. Every animated component reads
  `prefers-reduced-motion` (via `useReducedMotion`) and renders
  statically for users who've asked for reduced motion.

## Project structure

```
src/
  content/
    site.ts       # nav, brand, hero/intro/interlude/about/contact copy, footer/legal
    services.ts   # the 4 service offerings
    projects.ts   # portfolio entries (all currently placeholder=true)
  components/      # one file per section + shared visual primitives
```

All editable copy lives in `src/content/*.ts` — you should not need to
touch component code to update text, add a project, or change a service
description.

## Replacing placeholder content

### 1. Contact details (`src/content/site.ts`)
- `contact.email` — currently `hello@kroete.media`
- `contact.instagram` — handle + URL
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
  and/or `video`.
- Recommended still specs: 1600×2000px (4:5), JPG/WebP, optimized (~200KB).
- Once an entry has `image` set, swap `<PlaceholderVisual>` for a real
  `<img>`/background-image in `Work.tsx`'s `ProjectCard` — left as a
  manual step so no broken `<img>` tags ship before real media exists.
- Title is `string[]` (1–2 lines) to control the stacked poetic headline
  layout, e.g. `["After", "hours."]`.

### 4. Hero & about imagery (`src/content/site.ts`)
Set `hero.image` (and/or `hero.video`) and `about.image` to paths under
`public/` once real photography/footage exists. Until then, both use a
generated forest-toned line-art backdrop — this is a deliberate fallback,
not a bug.

### 5. Founders (`src/content/site.ts` → `about.founders`)
Replace the placeholder `note` once names and short bios are agreed. The
compact founder row in `src/components/About.tsx` can be swapped for real
portraits (recommended 1:1 or 3:4 crop) once available.

### 6. Domain & social (`src/content/site.ts` → `brand`, `socials`)
`brand.domain` is used in `index.html`'s canonical URL — update if
`kroete.media` isn't secured.

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
390px (mobile) and 1440px (desktop) viewports. The hero headline (and the
footer/interlude big-type moments) size themselves fluidly per line
length so long words don't overflow narrow screens — see the `fontSize`
calc in `src/components/Hero.tsx` if you change the headline copy to
something significantly longer.
