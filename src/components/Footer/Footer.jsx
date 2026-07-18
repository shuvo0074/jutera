import { navLinks } from '../../data/features'
import { products } from '../../data/products'
import { scrollToId } from '../../hooks/useSmoothScroll'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'Pinterest', href: 'https://www.pinterest.com/' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const go = (href) => (e) => {
    e.preventDefault()
    scrollToId(href.replace('#', ''))
  }

  return (
    <footer className="relative overflow-hidden border-t border-text-primary/5 bg-bg-secondary texture-linen">
      <div
        aria-hidden
        className="organic-blob pointer-events-none absolute -right-24 bottom-0 h-64 w-64 bg-accent/5"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-1">
          <a
            href="#home"
            onClick={go('#home')}
            className="font-display text-3xl tracking-wide text-text-primary"
          >
            JUTERA
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
            Premium jute lifestyle products, crafted in Bangladesh for modern European homes
            and thoughtful brands worldwide.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-text-primary">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={go(link.href)}
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-text-primary">
            Products
          </h3>
          <ul className="mt-4 space-y-2.5">
            {products.slice(0, 6).map((p) => (
              <li key={p.id}>
                <a
                  href="#products"
                  onClick={go('#products')}
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-text-primary">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-text-secondary">
            <li>
              <a href="mailto:hello@jutera.com" className="hover:text-accent">
                hello@jutera.com
              </a>
            </li>
            <li>+880 XXX XXX XXXX</li>
            <li>Dhaka, Bangladesh</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-text-primary/10 bg-bg-primary/70 px-3 py-1.5 text-xs font-semibold text-text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-text-primary/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-center text-xs text-text-secondary sm:flex-row sm:text-left md:px-8">
          <p>© {year} JUTERA. All rights reserved.</p>
          <p>Made with 🌿 in Bangladesh</p>
        </div>
      </div>
    </footer>
  )
}
