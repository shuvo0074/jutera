import { lazy, Suspense, useRef } from 'react'
import Hero from '../components/Hero/Hero'
import JuteLeafClusters from '../components/JuteLeafClusters/JuteLeafClusters'
import PageTransition from '../components/PageTransition/PageTransition'

const About = lazy(() => import('../components/sections/About'))
const Products = lazy(() => import('../components/sections/Products'))
const WhyChoose = lazy(() => import('../components/sections/WhyChoose'))
const Sustainability = lazy(() => import('../components/sections/Sustainability'))
const Gallery = lazy(() => import('../components/sections/Gallery'))
const Contact = lazy(() => import('../components/sections/Contact'))

function SectionFallback() {
  return (
    <div className="flex min-h-[240px] items-center justify-center py-20" aria-hidden>
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent/25 border-t-accent" />
    </div>
  )
}

export default function Home() {
  const contentRef = useRef(null)

  return (
    <PageTransition>
      <Hero />
      <div ref={contentRef} className="relative isolate">
        {/* Background layer — behind every section, card, and control */}
        <JuteLeafClusters containerRef={contentRef} />

        <div className="relative z-10">
          <Suspense fallback={<SectionFallback />}>
            <About />
            <Products />
            <WhyChoose />
            <Sustainability />
            <Gallery />
            <Contact />
          </Suspense>
        </div>
      </div>
    </PageTransition>
  )
}
