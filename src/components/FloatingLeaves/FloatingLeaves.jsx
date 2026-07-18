import { motion } from 'framer-motion'

const leaves = [
  { top: '18%', left: '8%', delay: 0, size: 1, rotate: -12 },
  { top: '28%', right: '10%', delay: 0.8, size: 0.85, rotate: 18 },
  { top: '62%', left: '14%', delay: 1.4, size: 0.7, rotate: 8 },
  { top: '70%', right: '16%', delay: 0.4, size: 0.9, rotate: -20 },
]

function Leaf({ className }) {
  return (
    <svg viewBox="0 0 24 32" className={className} fill="currentColor" aria-hidden>
      <path d="M12 1C7 8 4 14 4 20a8 8 0 0 0 16 0C20 14 17 8 12 1Z" opacity="0.55" />
      <path d="M12 6v18" stroke="currentColor" strokeWidth="1" opacity="0.35" fill="none" />
    </svg>
  )
}

export default function FloatingLeaves() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {leaves.map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute text-accent/40"
          style={{
            top: leaf.top,
            left: leaf.left,
            right: leaf.right,
            scale: leaf.size,
            rotate: leaf.rotate,
          }}
          animate={{
            y: [0, -14, 0],
            x: [0, 6, 0],
            rotate: [leaf.rotate, leaf.rotate + 8, leaf.rotate],
          }}
          transition={{
            duration: 7 + i,
            delay: leaf.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Leaf className="h-8 w-6 sm:h-10 sm:w-8" />
        </motion.div>
      ))}
    </div>
  )
}
