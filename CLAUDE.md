# Sushi Empire — Pitch Demo Site

## Project context

This is a **pitch demo** built by ElevateAI (social + web agency, Funchal, Madeira) to close **Sushi Empire**, a Japanese/Chinese fusion AYCE restaurant on Estrada Monumental, Funchal. It is not a production site — mock data is used where real photography and copy will be swapped in post-signing.

Benchmark: dark, cinematic, editorial restaurant sites (Cuisine Wave / Delici). Anti-benchmark: generic Tailwind templates, "Welcome to our restaurant" energy.

## The restaurant

- **Name:** Sushi Empire (寿司帝国)
- **Address:** Estrada Monumental 340H, São Martinho, 9000-250 Funchal
- **Phone:** 291 112 963
- **Cuisine:** Japanese + Chinese fusion, AYCE €30–35 pp
- **Rating:** 4.2 ★ · 110 Google reviews
- **Hours:** Daily 12:00 – 23:00 *(editable in `lib/restaurant.ts`)*
- **Interior cues:** near-black walls, green leather booths, circular mirrored installations, neon-green ambient light, modern upscale Japanese

## Design system

### Color tokens
| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#0a0b0a` | page background |
| `ink-2` | `#111311` | elevated surfaces |
| `ink-3` | `#1a1d1a` | borders / strokes |
| `neon` | `#39ff88` | primary accent, CTAs, hover states |
| `neon-dim` | `#1fa35a` | pressed / subtle neon |
| `bone` | `#f5f1e8` | primary text on dark |
| `bone-dim` | `#a8a69c` | secondary text |
| `gold` | `#c9a96e` | occasional ornamental accent |

### Typography
- **Display:** Fraunces (variable, optical size) — editorial serif for headers, numerals, hero
- **Body:** Inter (variable) — navigation, descriptions, metadata
- **Accent:** Noto Serif JP — for 寿司帝国 and other kanji flourishes

### Motion
Framer Motion only. Single idiom: fade + 16px translate-Y on scroll reveal, 600ms, `easeOut`. Hover: 150ms neon border-glow on dish cards. No page-wide parallax, no carousels.

### Grain / noise
SVG feTurbulence overlay fixed on `body::after` at ~4% opacity, `mix-blend-overlay`. Prevents the "perfect CSS gradient" AI-slop look.

## Architecture

Next.js 16 (Turbopack) + App Router + React 19 + TypeScript + Tailwind CSS + Framer Motion 12. Single route (`app/page.tsx`) composed of anchor sections. No DB. No auth. No API routes needed for the demo.

```
app/
  layout.tsx          root layout, fonts, metadata
  page.tsx            section composition
  globals.css         tailwind layers, grain, scroll behavior
components/
  nav.tsx             sticky nav, mobile drawer
  hero.tsx            full-viewport editorial hero
  intro.tsx           about-ish section w/ interior image
  menu/
    index.tsx         menu container + tab switcher
    dish-card.tsx     individual dish
    chefs-selection.tsx
  reviews.tsx         Google reviews block
  visit.tsx           map + hours + contact
  footer.tsx
  grain.tsx           noise overlay
  reveal.tsx          framer-motion scroll-reveal wrapper
lib/
  restaurant.ts       hours, address, phone, socials — single source of truth
  menu-data.ts        dishes grouped by category
  reviews-data.ts     Google review cards
  images.ts           curated Unsplash URLs w/ TODO markers
```

## Image strategy

Placeholder imagery via Unsplash CDN (`images.unsplash.com`). All marked with `// TODO: replace with real photo` in `lib/images.ts`. `next.config.js` allows `images.unsplash.com` as a remote pattern.

## Accessibility

- Semantic landmarks (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`)
- All images have descriptive alt text
- Neon accent used as accent only — text uses `bone` on `ink` (contrast ratio > 15:1)
- Focus-visible rings in neon
- Mobile drawer traps focus and closes on `Escape`

## Current state

- [x] Project scaffolded (Next 16, React 19, TS, Tailwind, Framer Motion 12)
- [x] Design system + fonts + grain overlay
- [x] Navigation (desktop + mobile drawer)
- [x] Hero
- [x] Intro
- [x] Menu (tab switcher, dish grid, chef's selection)
- [x] Reviews
- [x] Visit (map embed + hours + CTAs)
- [x] Footer
- [ ] Real photography (post-pitch)
- [ ] Reservation system (post-pitch — likely TheFork integration)

## Running locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploying to Vercel

```bash
npm install -g vercel   # if not installed
vercel                  # follow prompts, link to a new project
vercel --prod           # deploy production URL for the pitch meeting
```

Or: push this branch, import the repo in the Vercel dashboard, it auto-detects Next.js. No env vars required for the demo.
