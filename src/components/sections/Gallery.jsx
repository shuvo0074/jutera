import { useState, useCallback, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SectionTitle from '../SectionTitle/SectionTitle'
import GalleryCard from '../GalleryCard/GalleryCard'
import Lightbox from '../Lightbox/Lightbox'
import { galleryImages } from '../../data/gallery'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Gallery() {
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(null)

  const activeImage = activeIndex !== null ? galleryImages[activeIndex] : null

  const close = useCallback(() => setActiveIndex(null), [])
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i + galleryImages.length - 1) % galleryImages.length
      ),
    []
  )
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length)),
    []
  )

  useGSAP(
    () => {
      const cards = gsap.utils.toArray('.gallery-card')
      if (!cards.length) return

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduceMotion) {
        gsap.set(cards, { autoAlpha: 1, y: 0, scale: 1 })
        return
      }

      gsap.set(cards, { autoAlpha: 0, y: 56, scale: 0.94 })

      const reveal = (batch) => {
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          overwrite: true,
        })
      }

      // Exit upward when scrolling past; exit downward when scrolling back up.
      const hide = (batch, y) => {
        gsap.to(batch, {
          autoAlpha: 0,
          y,
          scale: 0.94,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power2.in',
          overwrite: true,
        })
      }

      ScrollTrigger.batch(cards, {
        start: 'top 90%',
        end: 'bottom 10%',
        interval: 0.15,
        batchMax: 3,
        onEnter: reveal,
        onEnterBack: reveal,
        onLeave: (batch) => hide(batch, -40),
        onLeaveBack: (batch) => hide(batch, 56),
      })

      const refresh = () => ScrollTrigger.refresh()
      const imgs = sectionRef.current?.querySelectorAll('img') ?? []
      imgs.forEach((img) => {
        if (!img.complete) img.addEventListener('load', refresh, { once: true })
      })
      requestAnimationFrame(refresh)
    },
    { scope: sectionRef }
  )

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="bg-transparent py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle
          eyebrow="Gallery"
          title="Spaces shaped by natural texture."
          description="A visual diary of calm interiors, woven forms, and earthy materials—inspiration for retailers and design partners."
        />

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <div key={image.id} className="mb-4 break-inside-avoid">
              <GalleryCard image={image} onClick={() => setActiveIndex(index)} />
            </div>
          ))}
        </div>
      </div>

      <Lightbox image={activeImage} onClose={close} onPrev={prev} onNext={next} />
    </section>
  )
}
