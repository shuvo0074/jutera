import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '../../data/features'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { scrollToId } from '../../hooks/useSmoothScroll'
import Button from '../Button/Button'

export default function Navbar() {
  const scrolled = useScrollPosition(48)
  const [open, setOpen] = useState(false)

  const handleNav = (href) => (e) => {
    e.preventDefault()
    const id = href.replace('#', '')
    scrollToId(id)
    setOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg-primary/90 shadow-[0_8px_30px_rgba(46,43,39,0.06)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          onClick={handleNav('#home')}
          className="font-display text-2xl tracking-wide text-text-primary md:text-[1.65rem]"
          aria-label="JUTERA home"
        >
          JUTERA
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNav(link.href)}
                className="group relative text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#contact" onClick={handleNav('#contact')} className="!px-6 !py-2.5">
            Inquire Now
          </Button>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-text-primary/10 bg-bg-primary/70 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full rounded-full bg-text-primary transition-transform ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-text-primary transition-opacity ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-text-primary transition-transform ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="border-t border-text-primary/5 bg-bg-primary/95 px-5 py-6 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNav(link.href)}
                    className="block py-1 font-medium text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              href="#contact"
              onClick={handleNav('#contact')}
              className="mt-6 w-full"
            >
              Inquire Now
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
