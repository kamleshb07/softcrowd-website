# What changed in this redesign

All original page content, copy, services, testimonials, and structure are
untouched — this pass only reworked the visual system.

## New visual identity
- **Color**: replaced the orange-on-near-black scheme with a slate-navy +
  indigo palette (a fresher, less "template" combination).
- **Typography**: headings now use Space Grotesk (bold, geometric — a nod to
  the fact this is a software studio); body copy stays on Plus Jakarta Sans.
  Both are loaded properly via Google Fonts in `src/index.css` (previously
  referenced but never actually imported).
- **Brand mark**: added a `</>` code-bracket mark used in the header, mobile
  menu, and footer as a recurring signature instead of a generic logotype.

## Fixes
- The homepage "stats" section had a lot of layered decoration (per-card
  gradients, glow effects, a fabricated "+12%" badge) that read as generic
  AI-template styling — simplified to a calmer, single-palette treatment.
- Fixed a real bug in `About.jsx`: several sections built Tailwind class
  names dynamically (e.g. `` `bg-${item.color}-500` ``), which Tailwind's
  build-time scanner can't detect, so those classes were silently never
  generated and icons/badges rendered uncolored. Added a documented safelist
  constant so the utilities actually compile.
- Removed a repeated two-tone gradient text effect (indigo → amber) used for
  headline word-accents across every page — the color transition rendered as
  a muddy grey-brown in the middle, and a couple of the animated variants
  referenced `@keyframes` that were never defined. Replaced with a clean
  solid indigo accent everywhere.
- Cleaned up `index.html` (page title, meta description, and a redundant
  4-font-family Google Fonts link that was never used by the site's CSS).

## Running it
```
npm install
npm run dev      # local dev server
npm run build    # production build (verified working)
```
