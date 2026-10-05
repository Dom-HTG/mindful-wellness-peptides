import { Link } from 'react-router-dom'
import { ArrowRight, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { CATEGORIES } from '../data/products'
import { WHATSAPP_NUMBER } from '../lib/whatsapp'

const SUPPORT_LINKS = [
  { label: 'Shipping & delivery', to: '/standards' },
  { label: 'Returns & refunds', to: '/#faq' },
  { label: 'Certificates of analysis', to: '/quality' },
  { label: 'Track your order', to: '/#faq' },
  { label: 'Research-use disclaimer', to: '/standards' },
]

const COMPANY_LINKS = [
  { label: 'Quality process', to: '/quality' },
  { label: 'Our standards', to: '/standards' },
  { label: 'Shop catalogue', to: '/shop' },
  { label: 'Contact', to: '/#contact' },
]

export const Footer = () => (
  <>
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line bg-ink px-6 py-28 md:py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            'radial-gradient(60% 90% at 50% 100%, rgba(232,178,92,0.16) 0%, transparent 70%)',
        }}
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="eyebrow">Ready to order</p>
        <h2
          className="mt-6 max-w-4xl font-display font-medium leading-[1.02] tracking-[-0.03em] text-bone"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
        >
          Let&apos;s get your research supplied.
        </h2>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Send us your list and our Lagos team will confirm availability, cold-chain delivery and
          payment details in Naira within a few hours.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-full sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            Order on WhatsApp
          </a>
          <a href="mailto:hello@mindfulwellness.ng" className="btn-ghost w-full sm:w-auto">
            <Mail className="h-4 w-4" />
            hello@mindfulwellness.ng
          </a>
        </div>
      </div>
    </section>

    <footer className="border-t border-line bg-surface/60 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-ink">
                <span className="font-display text-sm font-bold">M</span>
              </span>
              <span className="font-display text-base font-semibold text-bone">
                Mindful Wellness Nigeria
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Nigeria&apos;s dedicated store for high-purity research peptides and laboratory
              supplies. Cold-chain delivery nationwide, priced in Naira.
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted">
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold" />
                14 Admiralty Way, Lekki Phase 1, Lagos
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" />
                +234 812 345 6789
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold" />
                hello@mindfulwellness.ng
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-gold hover:text-gold"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <Link
                to="/"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-gold hover:text-gold"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-bone">
              Shop
            </p>
            <ul className="mt-5 space-y-3">
              {CATEGORIES.map((category) => (
                <li key={category}>
                  <Link
                    to={`/shop?category=${encodeURIComponent(category)}`}
                    className="text-sm text-muted transition-colors hover:text-bone"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-bone">
              Support
            </p>
            <ul className="mt-5 space-y-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted transition-colors hover:text-bone"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-bone">
              Company
            </p>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted transition-colors hover:text-bone"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
            >
              Start an order
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Mindful Wellness Nigeria. All rights reserved.</p>
          <p className="max-w-2xl md:text-right">
            All products are supplied for laboratory research use only and are not for human or
            veterinary consumption.
          </p>
        </div>
      </div>
    </footer>
  </>
)
