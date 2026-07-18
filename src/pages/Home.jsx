import { lazy, Suspense } from 'react'
import Hero from '../components/Hero/Hero'
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
  return (
    <PageTransition>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Products />
        <WhyChoose />
        <Sustainability />
        <Gallery />
        <Contact />
      </Suspense>
    </PageTransition>
  )
}
