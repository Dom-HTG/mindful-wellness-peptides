import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, ShoppingBag, X, MapPin } from 'lucide-react'
import { useCart } from '../context/CartContext'

const LINKS = [
  { label: 'Shop', to: '/shop' },
  { label: 'Quiz', to: '/quiz' },
  { label: 'Quality', to: '/quality' },
  { label: 'Standards', to: '/standards' },
  { label: 'Reviews', to: '/#reviews' },
  { label: 'FAQ', to: '/#faq' },
]

export const Nav = () => {
  const { count, openCart } = useCart()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isActive = (to: string) => !to.includes('#') && pathname === to

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3">
      <nav
        className={`w-full max-w-[1180px] rounded-full border px-3 py-2.5 transition-all duration-500 sm:px-4 ${
          scrolled
            ? 'border-line bg-ink/80 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl'
            : 'border-white/10 bg-white/[0.03] backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="group flex items-center gap-2.5 pl-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-ink">
              <span className="font-display text-sm font-bold">M</span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[15px] font-semibold tracking-tight text-bone">
                Mindful Wellness
              </span>
              <span className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
                <MapPin className="h-2.5 w-2.5 text-gold" /> Nigeria
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-300 ${
                  isActive(link.to)
                    ? 'bg-white/[0.06] text-bone'
                    : 'text-muted hover:bg-white/[0.05] hover:text-bone'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openCart}
              className="relative flex h-10 items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 text-[13px] font-semibold text-bone transition-colors duration-300 hover:bg-white/[0.07]"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Cart</span>
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[11px] font-bold text-ink">
                {count}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/[0.03] text-bone lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mt-3 grid gap-1 border-t border-line pt-3 lg:hidden">
            {LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'bg-white/[0.06] text-bone'
                    : 'text-muted hover:bg-white/[0.05] hover:text-bone'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
