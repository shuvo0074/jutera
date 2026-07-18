import AnimationWrapper from '../AnimationWrapper/AnimationWrapper'

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <AnimationWrapper className={`flex max-w-2xl flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl leading-tight text-text-primary sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </AnimationWrapper>
  )
}
