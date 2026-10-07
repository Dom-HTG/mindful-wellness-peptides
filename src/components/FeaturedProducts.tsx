import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { PRODUCTS } from '../data/products'
import { ProductCard } from './ProductCard'
import { MaskHeading } from './MaskHeading'
import { EASE, prefersReducedMotion } from '../lib/motion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const FEATURED = PRODUCTS.filter(
  (product) => product.badge === 'Best Seller' || product.badge === 'Trending',
).slice(0, 4)

export const FeaturedProducts = () => {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.from('.feature-copy > *', {
        y: 22,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: EASE.out,
        scrollTrigger: { trigger: '.feature-copy', start: 'top 88%' },
      })
      gsap.from('.feature-card', {
        y: 40,
        autoAlpha: 0,
        duration: 0.75,
        stagger: 0.09,
        ease: EASE.out,
        scrollTrigger: { trigger: '.feature-grid', start: 'top 86%' },
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} className="relative overflow-hidden bg-ink px-6 py-32 md:py-48">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-60"
        style={{
          background:
            'radial-gradient(50% 100% at 50% 0%, rgba(110,143,122,0.16) 0%, transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="feature-copy flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">In stock now</p>
            <MaskHeading className="mt-5 text-balance font-display text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl md:text-6xl">
              Popular with Nigerian laboratories.
            </MaskHeading>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              A snapshot of the compounds researchers reorder most. Hover any vial for the full
              specification and batch details.
            </p>
          </div>
          <Link
            to="/shop"
            className="link-underline hover-underline inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
          >
            View all {PRODUCTS.length} products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="feature-grid mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((product) => (
            <ProductCard key={product.id} product={product} className="feature-card" />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link to="/shop" className="btn-ghost group">
            Browse the full catalogue
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out-quart group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
