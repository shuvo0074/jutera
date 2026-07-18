const icons = {
  leaf: (
    <path
      d="M12 3C8 8 6 12 6 16a6 6 0 0 0 12 0c0-4-2-8-6-13Zm0 5v11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  hands: (
    <>
      <path
        d="M8 14v-2.5a2 2 0 0 1 4 0V14M12 12.5V10a2 2 0 0 1 4 0V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M7 14h10a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-1a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </>
  ),
  recycle: (
    <path
      d="M7.5 8.5 9 5l2.2 1.4M16.5 8.5 15 5l-2.2 1.4M8 16.5 5.5 15l.8-2.4M16 16.5l2.5-1.5-.8-2.4M9.5 19h5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path
        d="M4.5 12h15M12 4.5c2.2 2.2 3.3 4.5 3.3 7.5S14.2 17.3 12 19.5C9.8 17.3 8.7 15 8.7 12S9.8 6.7 12 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </>
  ),
  heart: (
    <path
      d="M12 19s-6.5-4.2-8.2-7.3C2.4 9.3 3.4 6.5 6 5.7c1.6-.5 3.3.1 4.2 1.4.9-1.3 2.6-1.9 4.2-1.4 2.6.8 3.6 3.6 2.2 6C18.5 14.8 12 19 12 19Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path
        d="M12 4.5v1.2M12 18.3v1.2M4.5 12h1.2M18.3 12h1.2M6.4 6.4l.85.85M16.75 16.75l.85.85M6.4 17.6l.85-.85M16.75 7.25l.85-.85"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>
  ),
  truck: (
    <>
      <path
        d="M3.5 15.5V7.5A1.5 1.5 0 0 1 5 6h8.5v9.5M13.5 10H18l2.5 3v2.5h-7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="7.5" cy="16.5" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="16.5" cy="16.5" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </>
  ),
  star: (
    <path
      d="m12 4 1.8 4.6L19 10l-3.5 3.1L16.6 18 12 15.5 7.4 18l1.1-4.9L5 10l5.2-1.4L12 4Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
  ),
}

export default function IconCard({ icon = 'leaf', className = '' }) {
  return (
    <div
      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-beige/70 text-accent ring-1 ring-jute/25 ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        {icons[icon] || icons.leaf}
      </svg>
    </div>
  )
}
