# JUTERA

Premium sustainable jute lifestyle brand website — showcase & B2B inquiry focused.

Scandinavian-inspired, minimal, and built for wholesale / OEM outreach across Europe and Australia. No cart, checkout, login, or pricing.

## Stack

- React + Vite
- React Router
- Tailwind CSS v4
- Framer Motion (site-wide motion)
- GSAP + ScrollTrigger (hero parallax/reveal + gallery batch reveals with Lenis)
- Lenis (smooth scrolling)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/   # Navbar, Hero, cards, form, footer, sections
  data/         # products, gallery, features
  hooks/        # smooth scroll, scroll position
  layouts/      # MainLayout
  pages/        # Home (single-page experience)
public/images/  # Local lifestyle photography
```

## Notes

- Contact form validates and simulates submission (showcase only).
- Images live in `public/images/` for fast, reliable loading.
- SEO meta tags, Open Graph, Twitter Cards, and Organization schema are in `index.html`.
