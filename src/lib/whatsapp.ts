import { formatNaira } from '../data/products'
import type { CartLine } from '../context/CartContext'

export const WHATSAPP_NUMBER = '2348123456789'

export const buildOrderMessage = (lines: CartLine[], subtotal: number): string => {
  const items = lines
    .map(
      (line, index) =>
        `${index + 1}. ${line.product.name} (${line.product.size}) x${line.quantity} - ${formatNaira(
          line.product.price * line.quantity,
        )}`,
    )
    .join('\n')

  return [
    'Hello Mindful Wellness Nigeria, I would like to place a research order:',
    '',
    items,
    '',
    `Subtotal: ${formatNaira(subtotal)}`,
    '',
    'Please confirm availability, total with delivery, and payment details.',
  ].join('\n')
}

export const buildWhatsAppLink = (lines: CartLine[], subtotal: number): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    buildOrderMessage(lines, subtotal),
  )}`
