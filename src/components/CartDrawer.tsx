import { MessageCircle, Minus, Plus, ShieldCheck, Trash2, Truck, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { formatNaira } from '../data/products'
import { useCart } from '../context/CartContext'
import { buildWhatsAppLink } from '../lib/whatsapp'

const FREE_THRESHOLD = 250000

export const CartDrawer = () => {
  const { isOpen, closeCart, lines, subtotal, setQuantity, removeItem, clear } = useCart()
  const navigate = useNavigate()

  const browseCatalogue = () => {
    closeCart()
    navigate('/shop')
  }

  const remaining = Math.max(FREE_THRESHOLD - subtotal, 0)
  const progress = Math.min((subtotal / FREE_THRESHOLD) * 100, 100)

  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-[70] bg-ink/70 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-[80] flex h-full w-full max-w-[440px] flex-col border-l border-line bg-surface transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <div>
            <p className="font-display text-lg font-semibold text-bone">Your research cart</p>
            <p className="text-xs text-muted">Lagos dispatch in 24 hours</p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-bone"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="border-b border-line px-6 py-4">
          <div className="mb-2 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
            <span className="flex items-center gap-1.5">
              <Truck className="h-3.5 w-3.5 text-gold" />
              {remaining > 0 ? `${formatNaira(remaining)} to free delivery` : 'Free delivery unlocked'}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <div
              className="h-full w-full origin-left rounded-full bg-gold transition-transform duration-500 ease-out-quart"
              style={{ transform: `scaleX(${progress / 100})` }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-line bg-white/[0.03]">
                <ShieldCheck className="h-6 w-6 text-gold" />
              </div>
              <p className="font-display text-base font-semibold text-bone">Your cart is empty</p>
              <p className="mt-1 max-w-[240px] text-sm text-muted">
                Add a peptide from the catalogue to start your research order.
              </p>
              <button type="button" onClick={browseCatalogue} className="btn-primary mt-6">
                Browse catalogue
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {lines.map((line) => (
                <li
                  key={line.product.id}
                  className="flex gap-4 rounded-2xl border border-line bg-white/[0.02] p-3"
                >
                  <div
                    className="h-20 w-16 flex-shrink-0 rounded-xl"
                    style={{
                      background: `linear-gradient(160deg, ${line.product.accent}44, ${line.product.accent}11)`,
                    }}
                  />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate font-display text-sm font-semibold text-bone">
                          {line.product.name}
                        </p>
                        <p className="text-[11px] text-muted">{line.product.size}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.product.id)}
                        className="text-muted transition-colors hover:text-bone"
                        aria-label={`Remove ${line.product.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center gap-1 rounded-full border border-line">
                        <button
                          type="button"
                          onClick={() => setQuantity(line.product.id, line.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full text-muted transition-colors hover:text-bone"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-semibold text-bone">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(line.product.id, line.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full text-muted transition-colors hover:text-bone"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="font-display text-sm font-semibold text-bone">
                        {formatNaira(line.product.price * line.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-line px-6 py-5">
            <div className="mb-1 flex items-center justify-between text-sm text-muted">
              <span>Subtotal</span>
              <span className="font-display text-lg font-semibold text-bone">
                {formatNaira(subtotal)}
              </span>
            </div>
            <p className="mb-4 text-[11px] text-muted">
              Delivery calculated at checkout. Pay via bank transfer, Paystack or USSD.
            </p>
            <a
              href={buildWhatsAppLink(lines, subtotal)}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full"
            >
              <MessageCircle className="h-4 w-4" />
              Checkout on WhatsApp
            </a>
            <button
              type="button"
              onClick={clear}
              className="mt-3 w-full text-center text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-bone"
            >
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
