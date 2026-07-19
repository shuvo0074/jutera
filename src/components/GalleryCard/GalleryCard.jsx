export default function GalleryCard({ image, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="gallery-card group relative mb-0 block w-full overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] focus-visible:outline-none"
      aria-label={`Open gallery image: ${image.alt}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        width={1000}
        height={image.tall ? 1333 : 750}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
          image.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
        }`}
      />
      <div className="pointer-events-none absolute inset-0 bg-text-primary/0 transition-colors duration-300 group-hover:bg-text-primary/12" />
      <span className="absolute bottom-4 left-4 translate-y-2 rounded-full bg-bg-primary/90 px-3 py-1 text-xs font-semibold text-text-primary opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        View
      </span>
    </button>
  )
}
