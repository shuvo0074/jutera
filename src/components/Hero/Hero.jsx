import { useEffect, useRef } from 'react'
import Button from '../Button/Button'
import FloatingLeaves from '../FloatingLeaves/FloatingLeaves'
import { scrollToId } from '../../hooks/useSmoothScroll'

const HERO_IMAGE = '/images/hero.png'

export default function Hero() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const overlayRef = useRef(null)
  const contentRef = useRef(null)
  const brandRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    let ctx
    let cancelled = false

    const run = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      if (cancelled) return

      gsap.registerPlugin(ScrollTrigger)

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduceMotion) {
        gsap.set(
          [brandRef.current, line1Ref.current, line2Ref.current, subRef.current, ctaRef.current, overlayRef.current],
          { opacity: 1, y: 0 }
        )
        gsap.set(imageRef.current, { scale: 1 })
        return
      }

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: 'power3.out' },
        })

        tl.from(imageRef.current, { scale: 1.08, duration: 2.2, ease: 'power2.out' }, 0)
          .from(overlayRef.current, { opacity: 0.8, duration: 1.2 }, 0.15)
          .from(brandRef.current, { opacity: 0, y: 36, duration: 0.9 }, 0.35)
          .from(line1Ref.current, { opacity: 0, y: 36, duration: 0.9 }, 0.5)
          .from(line2Ref.current, { opacity: 0, y: 36, duration: 0.9 }, 0.62)
          .from(subRef.current, { opacity: 0, y: 28, duration: 0.85 }, 0.78)
          .from(ctaRef.current, { opacity: 0, y: 24, duration: 0.8 }, 0.95)

        gsap.to(imageRef.current, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })

        gsap.to(contentRef.current, {
          yPercent: -8,
          opacity: 0.35,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }, sectionRef)
    }

    run()

    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-end overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0 overflow-hidden bg-bg-primary">
        <img
          ref={imageRef}
          src={HERO_IMAGE}
          alt="Bright Scandinavian living space with natural textures and soft earth tones"
          className="h-[120%] w-full object-cover object-center will-change-transform"
          fetchPriority="high"
        />
        {/* Very light washes — keep the photo crisp */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-bg-primary/12 to-transparent"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/18 via-transparent to-transparent" />
      </div>

      <FloatingLeaves />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:pb-20 md:px-8 md:pb-24"
      >
        <p
          ref={brandRef}
          className="mb-5 font-display text-5xl font-semibold tracking-[0.14em] text-accent sm:text-6xl md:text-7xl"
        >
          JUTERA
        </p>

        <h1 className="max-w-3xl font-display text-4xl leading-[1.08] text-text-primary sm:text-5xl md:text-6xl lg:text-[4.25rem]">
          <span ref={line1Ref} className="block">
            Naturally Crafted.
          </span>
          <span ref={line2Ref} className="mt-1 block text-accent-dark">
            Designed for Modern Living.
          </span>
        </h1>

        <p
          ref={subRef}
          className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          Premium handcrafted jute lifestyle products from Bangladesh for homes, businesses
          and eco-conscious brands around the world.
        </p>

        <div ref={ctaRef} className="mt-9 flex flex-wrap gap-3 sm:gap-4">
          <Button
            href="#products"
            onClick={(e) => {
              e.preventDefault()
              scrollToId('products')
            }}
          >
            Explore Collection
          </Button>
          <Button
            variant="secondary"
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToId('contact')
            }}
            className="bg-bg-primary/55 backdrop-blur-sm"
          >
            Contact Us
          </Button>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-primary to-transparent"
      />
    </section>
  )
}
