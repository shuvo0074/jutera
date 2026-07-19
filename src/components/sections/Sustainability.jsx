import SectionTitle from '../SectionTitle/SectionTitle'
import AnimationWrapper from '../AnimationWrapper/AnimationWrapper'
import { sustainabilityPoints } from '../../data/features'
import Button from '../Button/Button'
import { scrollToId } from '../../hooks/useSmoothScroll'

export default function Sustainability() {
  return (
    <section id="sustainability" className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-accent/5 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimationWrapper variant="fade-right">
            <div className="relative mx-auto max-w-lg lg:mx-0">
              <div className="organic-blob absolute -inset-4 bg-beige/60 blur-xl" aria-hidden />
              <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
                <img
                  src="/images/sustain.webp"
                  alt="Soft sunlight through a natural forest canopy"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/6] w-full object-cover"
                />
              </div>
              <svg
                className="absolute -bottom-8 -right-4 h-28 w-28 text-accent/25 sm:h-36 sm:w-36"
                viewBox="0 0 120 120"
                fill="currentColor"
                aria-hidden
              >
                <path d="M60 8C40 28 28 48 28 72a32 32 0 0 0 64 0C92 48 80 28 60 8Z" />
                <path d="M60 28c-8 12-12 22-12 34a12 12 0 0 0 24 0c0-12-4-22-12-34Z" opacity="0.45" />
              </svg>
            </div>
          </AnimationWrapper>

          <div>
            <SectionTitle
              align="left"
              eyebrow="Sustainability"
              title="Living lightly, by design."
              description="Every JUTERA piece begins with renewable jute—biodegradable, plastic-free, and rooted in local craft. Better materials for a calmer planet."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {sustainabilityPoints.map((point, i) => (
                <AnimationWrapper key={point.id} delay={i * 0.05}>
                  <div className="rounded-2xl bg-bg-secondary/80 p-5 ring-1 ring-text-primary/5">
                    <h3 className="font-display text-lg text-text-primary">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {point.description}
                    </p>
                  </div>
                </AnimationWrapper>
              ))}
            </div>

            <AnimationWrapper delay={0.2} className="mt-8">
              <Button
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId('contact')
                }}
              >
                Partner With Us
              </Button>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}
