import SectionTitle from '../SectionTitle/SectionTitle'
import ContactForm from '../ContactForm/ContactForm'
import AnimationWrapper from '../AnimationWrapper/AnimationWrapper'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'in' },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'ig' },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'fb' },
  { label: 'Pinterest', href: 'https://www.pinterest.com/', icon: 'pi' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="organic-blob pointer-events-none absolute -bottom-24 left-1/2 h-80 w-80 -translate-x-1/2 bg-jute/10 blur-2xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle
          eyebrow="Contact"
          title="Let's Build Something Sustainable Together"
          description="Wholesale inquiries, OEM programs, and brand collaborations—we’re ready to craft with you."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimationWrapper>
            <div className="rounded-[1.5rem] bg-bg-secondary/80 p-6 shadow-[var(--shadow-soft)] ring-1 ring-text-primary/5 sm:p-8 md:p-10">
              <ContactForm />
            </div>
          </AnimationWrapper>

          <div className="flex flex-col gap-6">
            <AnimationWrapper delay={0.1}>
              <div className="rounded-[1.5rem] bg-accent px-6 py-8 text-white shadow-[var(--shadow-lift)] sm:px-8">
                <h3 className="font-display text-2xl">Get in touch</h3>
                <dl className="mt-6 space-y-5 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                      Company
                    </dt>
                    <dd className="mt-1.5 text-base font-medium">JUTERA</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                      Email
                    </dt>
                    <dd className="mt-1.5">
                      <a href="mailto:hello@jutera.com" className="text-base font-medium underline-offset-4 hover:underline">
                        hello@jutera.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                      Phone
                    </dt>
                    <dd className="mt-1.5 text-base font-medium">+880 XXX XXX XXXX</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                      Location
                    </dt>
                    <dd className="mt-1.5 text-base font-medium">Dhaka, Bangladesh</dd>
                  </div>
                </dl>

                <div className="mt-8 flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/12 text-xs font-semibold uppercase tracking-wide transition-colors hover:bg-white/20"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.18}>
              <div className="overflow-hidden rounded-[1.5rem] ring-1 ring-text-primary/5">
                <div
                  className="relative flex aspect-[16/11] items-center justify-center bg-bg-secondary texture-linen"
                  role="img"
                  aria-label="Google Maps placeholder for Dhaka, Bangladesh"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-jute/15" />
                  <div className="relative z-10 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-soft">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                        <path
                          d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <circle cx="12" cy="10" r="2.2" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="font-display text-lg text-text-primary">Dhaka, Bangladesh</p>
                    <p className="mt-1 text-xs text-text-secondary">Google Maps placeholder</p>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}
