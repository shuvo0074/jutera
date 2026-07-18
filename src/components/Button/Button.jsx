import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-accent text-white hover:bg-accent-dark shadow-[0_10px_28px_rgba(95,122,97,0.22)]',
  secondary:
    'bg-transparent text-text-primary border border-text-primary/15 hover:border-accent hover:text-accent',
  ghost: 'bg-transparent text-accent hover:text-accent-dark',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  ariaLabel,
}) {
  const base =
    'relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 font-body text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-none'

  const classes = `${base} ${variants[variant]} ${className}`

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-500 ease-out group-hover/btn:translate-x-0"
      />
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        className={`group/btn ${classes}`}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.985 }}
        transition={{ type: 'spring', stiffness: 380, damping: 24 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`group/btn ${classes}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 380, damping: 24 }}
    >
      {content}
    </motion.button>
  )
}
