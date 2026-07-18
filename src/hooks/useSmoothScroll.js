import { useEffect } from 'react'
import Lenis from 'lenis'

export function useSmoothScroll() {
  useEffect(() => {
    let destroyed = false
    let lenis
    let ticker
    let gsap

    const setup = async () => {
      gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      if (destroyed) return

      gsap.registerPlugin(ScrollTrigger)

      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      lenis.on('scroll', ScrollTrigger.update)

      ticker = (time) => {
        lenis.raf(time * 1000)
      }
      gsap.ticker.add(ticker)
      gsap.ticker.lagSmoothing(0)

      window.__lenis = lenis
    }

    setup()

    return () => {
      destroyed = true
      if (gsap && ticker) gsap.ticker.remove(ticker)
      lenis?.destroy()
      delete window.__lenis
    }
  }, [])
}

export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return

  const lenis = window.__lenis
  if (lenis) {
    lenis.scrollTo(el, { offset: -72, duration: 1.2 })
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
