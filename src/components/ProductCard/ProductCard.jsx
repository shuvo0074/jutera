import { motion } from 'framer-motion'
import AnimationWrapper from '../AnimationWrapper/AnimationWrapper'
import { scrollToId } from '../../hooks/useSmoothScroll'

export default function ProductCard({ product, index = 0 }) {
  return (
    <AnimationWrapper delay={Math.min(index * 0.06, 0.36)} className="h-full">
      <motion.article
        className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] bg-white/55 shadow-[var(--shadow-soft)] ring-1 ring-text-primary/5 backdrop-blur-sm transition-shadow duration-500 hover:shadow-[var(--shadow-lift)]"
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-text-primary/20 via-transparent to-transparent opacity-60" />
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
          <h3 className="font-display text-xl text-text-primary sm:text-[1.35rem]">
            {product.title}
          </h3>
          <p className="flex-1 text-sm leading-relaxed text-text-secondary sm:text-[0.95rem]">
            {product.description}
          </p>
          <button
            type="button"
            onClick={() => scrollToId('contact')}
            className="group/link mt-1 inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent"
          >
            <span className="relative">
              View Collection
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover/link:scale-x-100" />
            </span>
            <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-1">
              →
            </span>
          </button>
        </div>
      </motion.article>
    </AnimationWrapper>
  )
}
