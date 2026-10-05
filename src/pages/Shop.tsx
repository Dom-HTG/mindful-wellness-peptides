import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PackageSearch, Search, SlidersHorizontal } from 'lucide-react'
import { CATEGORIES, PRODUCTS, type Category } from '../data/products'
import { ProductCard } from '../components/ProductCard'
import { PageHero } from '../components/PageHero'

type Filter = 'All' | Category

const FILTERS: Filter[] = ['All', ...CATEGORIES]
const SORTS = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Top rated'] as const
type Sort = (typeof SORTS)[number]

const parseFilter = (value: string | null): Filter =>
  value && (CATEGORIES as string[]).includes(value) ? (value as Filter) : 'All'

const parseSort = (value: string | null): Sort =>
  value && (SORTS as readonly string[]).includes(value) ? (value as Sort) : 'Featured'

export const Shop = () => {
  const [params, setParams] = useSearchParams()
  const [term, setTerm] = useState(params.get('q') ?? '')

  const active = parseFilter(params.get('category'))
  const sort = parseSort(params.get('sort'))

  const products = useMemo(() => {
    const query = term.trim().toLowerCase()
    let list = PRODUCTS.filter((product) => active === 'All' || product.category === active)
    if (query) {
      list = list.filter((product) =>
        `${product.name} ${product.subtitle} ${product.category} ${product.description}`
          .toLowerCase()
          .includes(query),
      )
    }
    switch (sort) {
      case 'Price: Low to High':
        return [...list].sort((a, b) => a.price - b.price)
      case 'Price: High to Low':
        return [...list].sort((a, b) => b.price - a.price)
      case 'Top rated':
        return [...list].sort((a, b) => b.rating - a.rating)
      default:
        return list
    }
  }, [active, term, sort])

  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params)
    if (!value || value === 'All' || (key === 'sort' && value === 'Featured')) next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  return (
    <>
      <PageHero
        eyebrow="Shop"
        title={<>The full peptide catalogue.</>}
        description="Eighteen research compounds and lab essentials, priced in Naira and dispatched cold-chain from Lagos and Abuja. Every vial ships with batch documentation."
        seed="peptide-vials-catalogue"
      />

      <section className="bg-ink px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="sticky top-24 z-30 rounded-3xl border border-line bg-ink/85 p-4 backdrop-blur-xl md:p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="flex flex-1 items-center gap-3 rounded-full border border-line bg-white/[0.03] px-5 py-3">
                <Search className="h-4 w-4 text-gold" />
                <input
                  value={term}
                  onChange={(event) => setTerm(event.target.value)}
                  placeholder="Search peptides, categories or uses"
                  className="w-full bg-transparent text-sm text-bone placeholder:text-muted focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-5 py-3">
                  <SlidersHorizontal className="h-4 w-4 text-gold" />
                  <select
                    value={sort}
                    onChange={(event) => update('sort', event.target.value)}
                    className="bg-transparent text-sm text-bone focus:outline-none"
                    aria-label="Sort products"
                  >
                    {SORTS.map((option) => (
                      <option key={option} value={option} className="bg-ink text-bone">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <span className="hidden whitespace-nowrap text-sm text-muted sm:block">
                  {products.length} shown
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => update('category', filter)}
                  className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                    active === filter
                      ? 'border-gold bg-gold text-ink'
                      : 'border-line bg-white/[0.02] text-muted hover:border-bone/30 hover:text-bone'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {products.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-16 flex flex-col items-center rounded-3xl border border-line bg-surface/60 px-6 py-20 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-white/[0.03]">
                <PackageSearch className="h-6 w-6 text-gold" />
              </div>
              <p className="mt-5 font-display text-xl font-semibold text-bone">
                No products match that search.
              </p>
              <p className="mt-2 max-w-sm text-sm text-muted">
                Try a different compound or clear your filters to see the full catalogue.
              </p>
              <button
                type="button"
                onClick={() => {
                  setTerm('')
                  setParams(new URLSearchParams(), { replace: true })
                }}
                className="btn-primary mt-6"
              >
                Reset filters
              </button>
            </div>
          )}

          <p className="mt-12 text-center text-xs text-muted">
            All products are supplied for laboratory research use only and are not for human or
            veterinary consumption.
          </p>
        </div>
      </section>
    </>
  )
}
