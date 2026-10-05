import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PRODUCTS } from '../data/products'
import { ProductCard } from './ProductCard'

const FEATURED = PRODUCTS.filter(
  (product) => product.badge === 'Best Seller' || product.badge === 'Trending',
).slice(0, 4)

export const FeaturedProducts = () => (
  <section className="relative bg-ink px-6 py-32 md:py-48">
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-60"
      style={{
        background:
          'radial-gradient(50% 100% at 50% 0%, rgba(110,143,122,0.16) 0%, transparent 70%)',
      }}
    />
    <div className="relative mx-auto max-w-7xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">In stock now</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl md:text-6xl">
            Popular with Nigerian laboratories.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            A snapshot of the compounds researchers reorder most. Hover any vial for the full
            specification and batch details.
          </p>
        </div>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
        >
          View all {PRODUCTS.length} products
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURED.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link to="/shop" className="btn-ghost">
          Browse the full catalogue
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
)
