import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Lightbox({ image, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!image) return undefined

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev?.()
      if (e.key === 'ArrowRight') onNext?.()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [image, onClose, onPrev, onNext])

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-text-primary/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <motion.div
            className="relative max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-bg-primary shadow-[var(--shadow-lift)]"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-[78vh] w-full object-cover"
            />
            <p className="px-5 py-4 text-sm text-text-secondary">{image.alt}</p>

            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-bg-primary/90 text-text-primary shadow-soft"
              aria-label="Close lightbox"
            >
              ✕
            </button>

            {onPrev && (
              <button
                type="button"
                onClick={onPrev}
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg-primary/90 text-lg text-text-primary shadow-soft"
                aria-label="Previous image"
              >
                ←
              </button>
            )}
            {onNext && (
              <button
                type="button"
                onClick={onNext}
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg-primary/90 text-lg text-text-primary shadow-soft"
                aria-label="Next image"
              >
                →
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
