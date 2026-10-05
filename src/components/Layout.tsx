import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { CartDrawer } from './CartDrawer'

const ScrollManager = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}

export const Layout = () => (
  <div className="noise relative min-h-screen bg-ink">
    <ScrollManager />
    <Nav />
    <main className="w-full max-w-full overflow-x-hidden">
      <Outlet />
    </main>
    <Footer />
    <CartDrawer />
  </div>
)
