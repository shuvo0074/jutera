import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'

/**
 * Single jute leaf (Corchorus): axil node → petiole → long lanceolate blade
 * with midrib, serrated edge hint, and basal setaceous appendages.
 * Drawn in local space; axil sits at (0,0), blade grows +X.
 */
function JuteLeaf({ scale = 1, opacity = 0.88 }) {
  return (
    <g transform={`scale(${scale})`} opacity={opacity}>
      {/* Axil / node swelling on stem */}
      <circle cx="0" cy="0" r="2.2" fill="currentColor" opacity="0.55" />

      {/* Petiole — short stalk from axil to blade base */}
      <path
        d="M0 0 C6 0 12 -1 18 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Setaceous appendages at blade base (distinctive jute trait) */}
      <path
        d="M17 -1 C13 -8 10 -14 7 -18"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M17 1 C14 7 11 12 8 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* Blade — elongated lanceolate ending in a sharp acuminate tip */}
      <path
        d="M18 0
           C28 -11 44 -17 64 -15
           C86 -13 108 -8 124 -3
           L132 0
           L124 3
           C108 8 86 13 64 15
           C44 17 28 11 18 0
           Z"
        fill="currentColor"
        opacity="0.82"
      />

      {/* Subtle serration ticks along lower margin */}
      <path
        d="M30 6 L32 9 M46 11 L48 14 M64 12 L66 15 M82 10 L84 13 M100 7 L102 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.65"
        strokeLinecap="round"
        opacity="0.28"
      />

      {/* Midrib / costa: runs to the tip */}
      <path
        d="M18 0 C50 0 90 0 132 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* Lateral veins from midrib */}
      <g fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.22">
        <path d="M36 0 C40 -5 44 -8 48 -9" />
        <path d="M36 0 C40 5 44 8 48 9" />
        <path d="M56 0 C60 -5 66 -7 72 -8" />
        <path d="M56 0 C60 5 66 7 72 8" />
        <path d="M80 0 C84 -4 90 -6 96 -6" />
        <path d="M80 0 C84 4 90 6 96 6" />
        <path d="M104 0 C108 -3 114 -4 118 -4" />
        <path d="M104 0 C108 3 114 4 118 4" />
      </g>
    </g>
  )
}

/** Alternate jute shoot — stem with petiolate leaves at clear axils */
function LeafCluster({ className, mirror = false }) {
  // SVG Y grows downward. Leaf geometry grows along +X.
  // Up along the stem = -90°. Keep a 40° angle from the stem, tips toward the apex.
  const fromStem = 40
  const leaves = [
    { y: 52, side: -1, scale: 0.95, opacity: 0.9 },
    { y: 98, side: 1, scale: 1, opacity: 0.88 },
    { y: 148, side: -1, scale: 1.05, opacity: 0.86 },
    { y: 198, side: 1, scale: 1.08, opacity: 0.84 },
    { y: 250, side: -1, scale: 0.98, opacity: 0.8 },
    { y: 300, side: 1, scale: 0.92, opacity: 0.76 },
    { y: 348, side: -1, scale: 0.82, opacity: 0.7 },
  ]

  return (
    <svg
      viewBox="0 0 320 420"
      className={`${className} overflow-visible`}
      fill="currentColor"
      aria-hidden
      style={{ transform: mirror ? 'scaleX(-1)' : undefined, overflow: 'visible' }}
    >
      {/* Main stem — centered so long leaf tips are not clipped */}
      <path
        d="M160 18 C162 90 158 180 160 270 C162 330 159 380 160 408"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Soft stem highlight */}
      <path
        d="M159 22 C161 95 157 185 159 275"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.18"
      />

      {leaves.map((leaf, i) => {
        // Right: -90 + 40 = -50 (up & out). Left: -90 - 40 = -130 (up & out).
        const rotation = leaf.side < 0 ? -90 - fromStem : -90 + fromStem
        return (
          <g key={i} transform={`translate(160 ${leaf.y}) rotate(${rotation})`}>
            <JuteLeaf scale={leaf.scale} opacity={leaf.opacity} />
          </g>
        )
      })}

      {/* Growing tip */}
      <g transform="translate(160 22)" opacity="0.75">
        <path
          d="M0 0 C-6 -10 -4 -22 0 -30 C4 -22 6 -10 0 0Z"
          fill="currentColor"
          opacity="0.7"
        />
        <path
          d="M0 0 C6 -8 10 -16 8 -24 C4 -18 2 -10 0 0Z"
          fill="currentColor"
          opacity="0.55"
        />
      </g>
    </svg>
  )
}

const leftClusters = [
  {
    id: 'left-1',
    top: '12%',
    size: 'w-[260px] lg:w-[400px]',
    yRange: [80, -280],
    xRange: [-20, 50],
    rotateRange: [-8, 12],
    float: { x: [-14, 16, -14], y: [0, -18, 0], rotate: [-4, 5, -4], duration: 16, delay: 0 },
  },
  {
    id: 'left-2',
    top: '58%',
    size: 'w-[210px] lg:w-[330px]',
    yRange: [40, -420],
    xRange: [-10, 70],
    rotateRange: [6, -14],
    float: { x: [-10, 20, -10], y: [0, 12, 0], rotate: [3, -5, 3], duration: 19, delay: 1.2 },
  },
]

const rightClusters = [
  {
    id: 'right-1',
    top: '18%',
    size: 'w-[250px] lg:w-[390px]',
    yRange: [-60, 300],
    xRange: [20, -55],
    rotateRange: [8, -12],
    float: { x: [16, -14, 16], y: [0, 16, 0], rotate: [5, -4, 5], duration: 17, delay: 0.4 },
  },
  {
    id: 'right-2',
    top: '62%',
    size: 'w-[220px] lg:w-[340px]',
    yRange: [-30, 440],
    xRange: [15, -75],
    rotateRange: [-6, 14],
    float: { x: [12, -22, 12], y: [0, -14, 0], rotate: [-4, 5, -4], duration: 20, delay: 1.6 },
  },
]

const middleClusters = [
  {
    id: 'mid-1',
    top: '22%',
    left: '38%',
    size: 'w-[180px] lg:w-[280px]',
    yRange: [60, -320],
    xRange: [-30, 40],
    rotateRange: [-10, 8],
    float: { x: [-10, 12, -10], y: [0, -14, 0], rotate: [-3, 4, -3], duration: 18, delay: 0.8 },
    mirror: false,
  },
  {
    id: 'mid-2',
    top: '55%',
    left: '52%',
    size: 'w-[160px] lg:w-[250px]',
    yRange: [-40, 360],
    xRange: [25, -35],
    rotateRange: [8, -10],
    float: { x: [12, -14, 12], y: [0, 12, 0], rotate: [4, -5, 4], duration: 21, delay: 1.8 },
    mirror: true,
  },
]

function ScrollCluster({ cluster, mirror, progress, reduceMotion }) {
  const y = useTransform(progress, [0, 1], cluster.yRange)
  const x = useTransform(progress, [0, 1], cluster.xRange)
  const rotate = useTransform(progress, [0, 1], cluster.rotateRange)

  const springY = useSpring(y, { stiffness: 55, damping: 20, mass: 0.35 })
  const springX = useSpring(x, { stiffness: 55, damping: 20, mass: 0.35 })
  const springRotate = useSpring(rotate, { stiffness: 45, damping: 18, mass: 0.3 })

  return (
    <motion.div
      className={`absolute ${cluster.size}`}
      style={
        reduceMotion
          ? { top: cluster.top, ...(cluster.left != null ? { left: cluster.left } : {}) }
          : {
              top: cluster.top,
              ...(cluster.left != null ? { left: cluster.left } : {}),
              y: springY,
              x: springX,
              rotate: springRotate,
            }
      }
    >
      <motion.div
        className="text-accent"
        animate={
          reduceMotion
            ? undefined
            : {
                x: cluster.float.x,
                y: cluster.float.y,
                rotate: cluster.float.rotate,
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: cluster.float.duration,
                delay: cluster.float.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      >
        <LeafCluster
          className="h-auto w-full drop-shadow-[0_10px_28px_rgba(95,122,97,0.1)]"
          mirror={mirror}
        />
      </motion.div>
    </motion.div>
  )
}

export default function JuteLeafClusters({ containerRef }) {
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Smooth the scroll progress so Lenis + wheel feel connected
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  })

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 hidden overflow-visible opacity-60 md:block"
      aria-hidden
    >
      <div className="absolute inset-y-0 left-0 w-[28%] bg-gradient-to-r from-accent/[0.05] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-[28%] bg-gradient-to-l from-jute/[0.07] to-transparent" />

      <div className="sticky top-0 h-screen w-full overflow-visible">
        <div className="absolute left-0 top-0 h-full w-[42%] max-w-[440px]">
          {leftClusters.map((cluster) => (
            <ScrollCluster
              key={cluster.id}
              cluster={cluster}
              progress={progress}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <div className="absolute right-0 top-0 h-full w-[42%] max-w-[440px]">
          {rightClusters.map((cluster) => (
            <ScrollCluster
              key={cluster.id}
              cluster={cluster}
              mirror
              progress={progress}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* Center clusters — quieter so content stays primary */}
        <div className="absolute inset-0 opacity-65">
          {middleClusters.map((cluster) => (
            <ScrollCluster
              key={cluster.id}
              cluster={cluster}
              mirror={cluster.mirror}
              progress={progress}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
