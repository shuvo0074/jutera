import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import SectionTitle from '../SectionTitle/SectionTitle'
import AnimationWrapper from '../AnimationWrapper/AnimationWrapper'

const stats = [
  { value: 100, suffix: '%', label: 'Natural jute fiber' },
  { value: 10, suffix: '+', label: 'Export markets' },
  { value: 25, suffix: '+', label: 'Years of craft heritage' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return undefined

    let frame
    const start = performance.now()
    const duration = 1400

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref} className="font-display text-4xl text-accent md:text-5xl">
      {display}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="organic-blob pointer-events-none absolute -left-32 top-20 h-72 w-72 bg-jute/10 blur-2xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle
              align="left"
              eyebrow="About JUTERA"
              title="From Bangladesh’s golden fiber to European living."
              description="Bangladesh is one of the world’s leading producers of premium jute. JUTERA transforms this natural fiber into timeless lifestyle products—shaped by sustainability, minimal design, ethical production, and global quality."
            />

            <AnimationWrapper delay={0.15} className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-bg-secondary/80 p-4 ring-1 ring-text-primary/5">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-2 text-xs leading-snug text-text-secondary">{stat.label}</p>
                </div>
              ))}
            </AnimationWrapper>
          </div>

          <AnimationWrapper variant="fade-left" delay={0.1}>
            <div className="relative">
              <div className="overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-lift)]">
                <img
                  src="/images/about.jpg"
                  alt="Artisan arranging natural fiber goods in a calm workshop setting"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 max-w-[220px] rounded-2xl bg-bg-primary/95 p-5 shadow-[var(--shadow-soft)] ring-1 ring-text-primary/5 backdrop-blur sm:-left-8">
                <p className="font-display text-lg text-text-primary">Quiet luxury, rooted in nature.</p>
                <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                  Designed for Scandinavian calm. Made with Bangladeshi craft.
                </p>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}
