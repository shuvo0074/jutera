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

## Deploy (Netlify)

Configured via `netlify.toml` (`npm run build` → publish `dist`).

1. Push this repo to GitHub/GitLab/Bitbucket
2. In [Netlify](https://app.netlify.com): **Add new site → Import an existing project**
3. Select the repo — build settings are read from `netlify.toml`
4. Deploy (optional: set custom domain, e.g. `jutera.com`)

CLI alternative:

```bash
npm i -g netlify-cli
netlify login
netlify init
netlify deploy --prod
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
- Site images are optimized WebP in `public/images/` (~3MB total). To refresh after adding PNG/JPG sources: `npm run optimize:images`
- SEO meta tags, Open Graph, Twitter Cards, and Organization schema are in `index.html`.
