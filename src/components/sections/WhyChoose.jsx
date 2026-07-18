import SectionTitle from '../SectionTitle/SectionTitle'
import FeatureCard from '../FeatureCard/FeatureCard'
import { features } from '../../data/features'

export default function WhyChoose() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle
          eyebrow="Why JUTERA"
          title="Crafted for partners who value quality."
          description="From fiber to finish, every detail is considered for international buyers seeking beauty, reliability, and responsibility."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
