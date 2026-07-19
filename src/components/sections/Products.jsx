import SectionTitle from '../SectionTitle/SectionTitle'
import ProductCard from '../ProductCard/ProductCard'
import { products } from '../../data/products'

export default function Products() {
  return (
    <section id="products" className="bg-transparent py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle
          eyebrow="Collection"
          title="A curated world of natural living."
          description="Explore our wholesale-ready categories—refined forms for homes, hospitality, and brand collaborations."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
