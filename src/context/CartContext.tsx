import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from 'react'
import { PRODUCTS, type Product } from '../data/products'

export type CartLine = {
  product: Product
  quantity: number
}

type CartState = Record<string, number>

type CartAction =
  | { type: 'add'; id: string; quantity?: number }
  | { type: 'remove'; id: string }
  | { type: 'set'; id: string; quantity: number }
  | { type: 'clear' }
  | { type: 'hydrate'; state: CartState }

const STORAGE_KEY = 'mw-ng-cart-v1'

const reducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'add': {
      const quantity = action.quantity ?? 1
      return { ...state, [action.id]: (state[action.id] ?? 0) + quantity }
    }
    case 'remove': {
      const next = { ...state }
      delete next[action.id]
      return next
    }
    case 'set': {
      if (action.quantity <= 0) {
        const next = { ...state }
        delete next[action.id]
        return next
      }
      return { ...state, [action.id]: action.quantity }
    }
    case 'clear':
      return {}
    case 'hydrate':
      return action.state
    default:
      return state
  }
}

type CartContextValue = {
  lines: CartLine[]
  count: number
  subtotal: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (id: string, quantity?: number) => void
  removeItem: (id: string) => void
  setQuantity: (id: string, quantity: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {})
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) dispatch({ type: 'hydrate', state: JSON.parse(raw) as CartState })
    } catch {
      /* ignore malformed storage */
    }
  }, [])

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* ignore write failures */
    }
  }, [state])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const lines = useMemo<CartLine[]>(
    () =>
      Object.entries(state)
        .map(([id, quantity]) => {
          const product = PRODUCTS.find((p) => p.id === id)
          return product ? { product, quantity } : null
        })
        .filter((line): line is CartLine => line !== null),
    [state],
  )

  const count = useMemo(
    () => lines.reduce((total, line) => total + line.quantity, 0),
    [lines],
  )

  const subtotal = useMemo(
    () => lines.reduce((total, line) => total + line.product.price * line.quantity, 0),
    [lines],
  )

  const addItem = useCallback((id: string, quantity = 1) => {
    dispatch({ type: 'add', id, quantity })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id: string) => dispatch({ type: 'remove', id }), [])

  const setQuantity = useCallback(
    (id: string, quantity: number) => dispatch({ type: 'set', id, quantity }),
    [],
  )

  const clear = useCallback(() => dispatch({ type: 'clear' }), [])
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const value: CartContextValue = {
    lines,
    count,
    subtotal,
    isOpen,
    openCart,
    closeCart,
    addItem,
    removeItem,
    setQuantity,
    clear,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}
