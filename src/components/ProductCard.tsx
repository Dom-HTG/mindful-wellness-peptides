import { Check, Plus, Star } from 'lucide-react'
import { formatNaira, type Product } from '../data/products'
import { useCart } from '../context/CartContext'
import { VialVisual } from './VialVisual'

type ProductCardProps = {
  product: Product
  className?: string
}

export const ProductCard = ({ product, className = '' }: ProductCardProps) => {
  const { addItem } = useCart()
  const discount = product.compareAt
    ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
    : 0

  return (
    <article
      className={`hover-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface hover:border-gold/40 hover:shadow-[0_34px_90px_-50px_rgba(0,0,0,0.95)] ${className}`}
    >
      <div className="relative overflow-hidden">
        <div
          className="relative flex h-64 items-center justify-center transition-transform duration-700 ease-out-quart group-hover:scale-105"
          style={{
            background:
              'radial-gradient(90% 70% at 50% 100%, rgba(255,255,255,0.05) 0%, transparent 70%)',
          }}
        >
          <VialVisual name={product.name} purity={product.purity} accent={product.accent} />
        </div>

        <span
          aria-hidden
          className="group-sheen pointer-events-none absolute inset-y-0 left-0 z-10 w-1/3 -translate-x-[130%] skew-x-[-12deg] bg-white/10 blur-md"
        />

        <div className="absolute left-4 top-4 flex flex-col gap-2">
          {product.badge && (
            <span className="rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ink">
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="w-fit rounded-full border border-line bg-ink/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-bone backdrop-blur">
              -{discount}%
            </span>
          )}
        </div>
        <span className="absolute right-4 top-4 rounded-full border border-line bg-ink/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted backdrop-blur">
          {product.category}
        </span>

        <div className="pointer-events-none absolute inset-0 hidden translate-y-6 flex-col justify-end bg-gradient-to-t from-ink via-ink/95 to-ink/75 p-6 opacity-0 transition-[transform,opacity] duration-500 ease-out-quart group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 md:flex">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold">
            Product details
          </p>
          <p className="mt-3 text-xs leading-relaxed text-bone/90">{product.description}</p>
          <ul className="mt-4 space-y-1.5">
            {product.benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2 text-[11px] text-muted">
                <Check className="h-3.5 w-3.5 text-gold" />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-muted">
            <span>Purity {product.purity}</span>
            <span>{product.size}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1 text-gold">
          <Star className="h-3.5 w-3.5 fill-gold" />
          <span className="text-xs font-semibold text-bone">{product.rating}</span>
          <span className="text-[11px] text-muted">({product.reviews})</span>
        </div>

        <h3 className="mt-3 font-display text-lg font-semibold leading-tight text-bone">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted">{product.subtitle}</p>

        <p className="mt-4 line-clamp-2 text-[13px] leading-relaxed text-muted/80">
          {product.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-line px-3 py-1 text-[11px] text-muted">
            {product.size}
          </span>
          <span className="rounded-full border border-line px-3 py-1 text-[11px] text-muted">
            COA included
          </span>
        </div>

        <div className="mt-6 flex items-end justify-between border-t border-line pt-5">
          <div>
            {product.compareAt && (
              <p className="text-xs text-muted line-through">{formatNaira(product.compareAt)}</p>
            )}
            <p className="font-display text-xl font-semibold tracking-tight text-bone">
              {formatNaira(product.price)}
            </p>
          </div>
          <button
            type="button"
            onClick={() => addItem(product.id)}
            className="flex h-11 items-center gap-2 rounded-full bg-gold px-5 text-[13px] font-semibold text-ink transition-colors duration-300 hover:bg-gold-soft"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
