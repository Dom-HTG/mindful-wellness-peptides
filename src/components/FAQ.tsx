import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

const ITEMS = [
  {
    question: 'What are peptides and how do they function?',
    answer:
      'Peptides are short chains of amino acids that act as signalling molecules. They bind to specific receptors to trigger targeted biological responses, which is why sequence accuracy and purity matter so much in a research setting.',
  },
  {
    question: 'Are your peptides third-party tested?',
    answer:
      'Yes. Every batch is assessed by independent HPLC purity analysis, mass spectrometry identity confirmation and endotoxin screening before it is released. We publish the corresponding certificate of analysis with each lot.',
  },
  {
    question: 'How do you store and ship peptides in Nigeria?',
    answer:
      'Lyophilised peptides are held cool and dark, then packed with gel packs and insulation for transit. Lagos and Abuja deliveries arrive in 24 to 48 hours, and the rest of the country within two to four working days. Once reconstituted, store refrigerated and use within four to six weeks.',
  },
  {
    question: 'Which payment methods do you accept?',
    answer:
      'We price everything in Naira and accept bank transfer, Paystack card payments, USSD and direct card payment. No dollar card or international processor is required to place an order.',
  },
  {
    question: 'What is your returns policy?',
    answer:
      'If a vial arrives compromised or does not match its documentation, contact us within 48 hours of delivery with photos and we will arrange a replacement or refund. Sealed products are accepted for return within seven days of delivery.',
  },
  {
    question: 'Are these products for human consumption?',
    answer:
      'No. All products are supplied strictly for laboratory research purposes only and are not intended for human or veterinary consumption. By ordering you confirm you are a qualified researcher and will handle materials accordingly.',
  },
]

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative border-t border-line bg-surface/40 px-6 py-32 md:py-48">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <div>
          <p className="eyebrow">Questions, answered</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl md:text-6xl">
            Everything you need before you order.
          </h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
            Still unsure about a compound, a protocol supply or delivery to your state? Our team
            replies within a few hours.
          </p>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {ITEMS.map((item, index) => {
            const isOpen = open === index
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-medium text-bone md:text-xl">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isOpen ? 'border-gold bg-gold text-ink' : 'border-line text-muted'
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? 'grid-rows-[1fr] pb-7 opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <p className="min-h-0 max-w-2xl pr-12 text-[15px] leading-relaxed text-muted">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
