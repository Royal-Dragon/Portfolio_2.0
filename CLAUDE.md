# Portfolio 2.0 — Claude Code Instructions

## Project Overview
Personal portfolio site for Abhiram Royals. Built with React + Vite, features 3D models (Three.js), animated background (WebGL displacement sphere), and a contact form via EmailJS.

Live: https://royal-dragon.github.io/Portfolio_2.0/

## Tech Stack
- **Framework:** React 18 + Vite 5
- **Styling:** Tailwind CSS v3 (JIT), custom CSS in `src/index.css`
- **3D / Animation:** Three.js, @react-three/fiber, @react-three/drei, framer-motion
- **Routing:** react-router-dom v7
- **Contact form:** @emailjs/browser (keys hardcoded in `Contact.jsx` — move to `.env` eventually)
- **Deploy:** GitHub Pages via `gh-pages`

## Dev Commands
```bash
npm run dev       # start dev server at http://localhost:3000/Portfolio_2.0/
npm run build     # production build → dist/
npm run preview   # preview production build
npm run deploy    # build + push to gh-pages branch
```

### Test on mobile (same WiFi)
`host: true` is set in vite.config.js — the Network URL prints on `npm run dev`.
Current local IP: `http://192.168.1.29:3000/Portfolio_2.0/`

## Project Structure
```
src/
  App.jsx                  # root, section order
  main.jsx                 # ReactDOM entry
  style.js                 # shared Tailwind class strings
  config.json              # name, role, social links
  index.css                # global CSS + Tailwind directives
  constant/index.js        # all data (navLinks, services, experiences, projects, technologies)
  assets/                  # images, icons, tech logos
  components/
    Hero.jsx               # hero section (typewriter + displacement sphere + 3D model)
    Navbar.jsx             # top nav + mobile hamburger
    About.jsx              # intro + service cards
    Experience.jsx         # vertical timeline
    Tech.jsx               # tech ball grid (WebGL per ball)
    Works.jsx              # project cards
    Contact.jsx            # EmailJS form + rocket model
    canvas/
      Computers.jsx        # desktop PC 3D model (hidden on mobile ≤768px)
      Earth.jsx            # rocket 3D model (used in Contact)
      Ball.jsx             # single tech ball WebGL canvas
      Stars.jsx            # star field (currently commented out)
      scroll.jsx           # scroll down indicator
    background/
      displacement-sphere.jsx  # WebGL animated background sphere
    decoder_text/          # animated character-decoding text effect
  hoc/
    sectionWrapper.jsx     # wraps sections with framer-motion + padding
    section.jsx / Section  # alias used by Contact
  utils/
    motion.js              # framer-motion animation variants
public/
  desktop_pc/              # 3D model — 16MB (40+ textures, heavy)
  rocket/                  # 3D model — 3.9MB
  planet/                  # 3D model — 2.9MB (unused)
```

## Key Conventions
- **Data lives in `src/constant/index.js`** — edit experiences, projects, technologies there, not in components
- **`config.json`** holds name/role/social links used across Hero and potentially Navbar
- **Section wrapping:** use `SectionWrapper(Component, "anchor-id")` HOC — adds scroll anchor, padding, and entrance animation
- **Tailwind config** uses `export default` (ESM) — do NOT revert to `module.exports`
- **CSS values** must NOT use JS-style quotes: `background: oklch(...)` not `background: 'oklch(...)'`

## Known Issues / In Progress
- `Tech.jsx` — 13 separate WebGL canvases (one per technology ball) — very heavy on mobile and low-end devices
- `public/desktop_pc/` — 16MB model with 40+ textures, major load bottleneck
- `tripguide.png` in assets is 3.4MB — needs compression
- EmailJS service/template/public keys are hardcoded in `Contact.jsx` — should move to `.env`
- `planet/` model in public is unused
- `Feedbacks` and `StarsCanvas` components are commented out in `App.jsx`

## Performance Notes
- `Computers.jsx` skips rendering on `window.matchMedia('(max-width: 768px)')` — do the same for other heavy canvases
- `frameloop="demand"` is set on canvas elements — keep this, avoids continuous GPU rendering
- Images should be WebP; use Squoosh or `vite-plugin-imagemin` to compress
- Consider `React.lazy()` + `<Suspense>` for all canvas/3D sections

## Deployment
```bash
npm run deploy
```
Pushes `dist/` to the `gh-pages` branch. The `base` in `vite.config.js` is set to `/Portfolio_2.0/` to match the GitHub Pages path.
