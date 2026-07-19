import AnimationWrapper from '../AnimationWrapper/AnimationWrapper'
import IconCard from '../IconCard/IconCard'

export default function FeatureCard({ feature, index = 0 }) {
  return (
    <AnimationWrapper delay={Math.min(index * 0.05, 0.3)} className="h-full">
      <article className="group relative z-10 h-full rounded-[1.25rem] bg-bg-primary/85 p-6 shadow-[var(--shadow-soft)] ring-1 ring-text-primary/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:p-7">
        <IconCard icon={feature.icon} />
        <h3 className="mt-5 font-display text-lg text-text-primary sm:text-xl">
          {feature.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          {feature.description}
        </p>
      </article>
    </AnimationWrapper>
  )
}
