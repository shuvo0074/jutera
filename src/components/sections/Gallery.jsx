import { useState, useCallback } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import GalleryCard from '../GalleryCard/GalleryCard'
import Lightbox from '../Lightbox/Lightbox'
import { galleryImages } from '../../data/gallery'

export default function Gallery() {
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

  return (
    <section id="gallery" className="bg-bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle
          eyebrow="Gallery"
          title="Spaces shaped by natural texture."
          description="A visual diary of calm interiors, woven forms, and earthy materials—inspiration for retailers and design partners."
        />

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`mb-4 break-inside-avoid ${image.tall ? '' : ''}`}
            >
              <GalleryCard
                image={image}
                index={index}
                onClick={() => setActiveIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>

      <Lightbox image={activeImage} onClose={close} onPrev={prev} onNext={next} />
    </section>
  )
}
