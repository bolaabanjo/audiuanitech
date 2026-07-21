# Audiuani Technologies

Marketing site for Audiuani Technologies — autonomous power, compute and connectivity infrastructure for critical systems.

A deliberately minimal single page: the wordmark and three statements (company, mission, vision), left-aligned on black.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page auto-updates as you edit.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4** — configured in `app/globals.css` via `@theme inline`, no `tailwind.config.js`
- **TypeScript**
- **Geist** via `next/font`

## Structure

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | The entire page. Copy lives in the `lines` array at the top. |
| `app/layout.tsx` | Root layout, fonts, metadata. |
| `app/globals.css` | Theme tokens (`--background`, `--foreground`, `--muted`). |
| `docs/brand.md` | Source of truth for positioning, product naming and copy. |
| `public/audiuani.png` | Original logo, 1254×1254. |
| `public/audiuani-wordmark.png` | Cropped wordmark used on the page, 1060×320. |

## Editing copy

Edit the `lines` array in `app/page.tsx`. Keep it to three statements — the design depends on the restraint. Substantive wording changes should be reflected in `docs/brand.md` too.

Copy uses British spellings (*synchronise*, *centres*, *specialised*) and typographic apostrophes (`’`), matching `docs/brand.md`.

## Logo

`public/audiuani-wordmark.png` has **no alpha channel** — its black background is baked in. It blends against the current `#000000` page, but changing `--background` will reveal a black rectangle around it. Use a transparent-background source if the theme ever changes.

## Scripts

```bash
npm run dev     # development server
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Notes

This project targets Next.js 16, which differs from earlier versions in meaningful ways. See `AGENTS.md` — consult the bundled docs in `node_modules/next/dist/docs/` rather than relying on older Next.js knowledge.
