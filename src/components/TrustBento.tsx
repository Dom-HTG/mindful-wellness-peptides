import { useRef } from 'react'
import { ArrowRight, BadgeCheck, FileCheck2, MapPinned, Snowflake, Wallet } from 'lucide-react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Counter } from './Counter'
import { EASE, prefersReducedMotion } from '../lib/motion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const PAYMENTS = ['Paystack', 'Bank Transfer', 'USSD', 'Card']

export const TrustBento = () => {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      gsap.from('.bento-head > *', {
        y: 22,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: EASE.out,
        scrollTrigger: { trigger: '.bento-head', start: 'top 88%' },
      })

      gsap.from('.bento-item', {
        y: 34,
        autoAlpha: 0,
        duration: 0.75,
        stagger: 0.07,
        ease: EASE.out,
        scrollTrigger: { trigger: '.bento-grid', start: 'top 84%' },
      })

      gsap.from('.bento-foot', {
        y: 18,
        autoAlpha: 0,
        duration: 0.7,
        ease: EASE.out,
        scrollTrigger: { trigger: '.bento-foot', start: 'top 92%' },
      })
    },
    { scope: root },
  )

  return (
    <section id="quality" ref={root} className="relative overflow-hidden bg-ink px-6 py-32 md:py-48">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl">
        <div className="bento-head mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">Why researchers choose us</p>
            <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl md:text-6xl">
              A standards-first supplier built for the Nigerian laboratory.
            </h2>
          </div>
          <Link
            to="/quality"
            className="link-underline hover-underline inline-flex flex-shrink-0 items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
          >
            See how we test
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="bento-grid grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-3">
          <article className="bento-item group relative col-span-1 row-span-2 overflow-hidden rounded-3xl border border-line md:col-span-2">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out-quart group-hover:scale-105"
              style={{
                backgroundImage: "url('https://picsum.photos/seed/peptide-analysis-lab/1200/1200')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />
            <div className="relative flex h-full min-h-[420px] flex-col justify-end p-8 md:min-h-[520px] md:p-10">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gold text-ink">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <h3 className="max-w-md font-display text-2xl font-semibold leading-tight text-bone md:text-3xl">
                Every batch third-party tested before it reaches you.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                HPLC purity, mass spectrometry identity and endotoxin screening. Certificates of
                analysis are issued per lot and shared on request, so your data stays reproducible.
              </p>
            </div>
          </article>

          <article className="bento-item hover-lift group flex flex-col justify-between rounded-3xl border border-line bg-surface p-8 hover:border-gold/40">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/[0.03] text-gold">
              <BadgeCheck className="h-5 w-5" />
            </div>
            <div className="mt-10">
              <p className="font-display text-5xl font-medium tracking-tight text-bone">
                <Counter value={99} suffix="%+" />
              </p>
              <p className="mt-2 text-sm text-muted">
                Verified purity across the catalogue, batch after batch.
              </p>
            </div>
          </article>

          <article className="bento-item hover-lift group flex flex-col justify-between rounded-3xl border border-line bg-surface p-8 hover:border-gold/40">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/[0.03] text-gold">
              <Snowflake className="h-5 w-5" />
            </div>
            <div className="mt-10">
              <p className="font-display text-xl font-semibold leading-snug text-bone">
                Cold-chain delivery nationwide
              </p>
              <p className="mt-2 text-sm text-muted">
                Gel packs and insulated packing on every route across the 36 states and FCT.
              </p>
            </div>
          </article>

          <article className="bento-item hover-lift group col-span-1 flex flex-col justify-between rounded-3xl border border-line bg-surface p-8 hover:border-gold/40 md:col-span-2">
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/[0.03] text-gold">
                <Wallet className="h-5 w-5" />
              </div>
              <span className="eyebrow">Naira first</span>
            </div>
            <div className="mt-10">
              <p className="font-display text-xl font-semibold leading-snug text-bone">
                Local payment, no dollar card required.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {PAYMENTS.map((method) => (
                  <span
                    key={method}
                    className="rounded-full border border-line bg-white/[0.03] px-4 py-2 text-xs font-medium text-bone/80"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <article className="bento-item hover-lift group flex flex-col justify-between rounded-3xl border border-line bg-surface p-8 hover:border-gold/40">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/[0.03] text-gold">
              <FileCheck2 className="h-5 w-5" />
            </div>
            <div className="mt-10">
              <p className="font-display text-xl font-semibold leading-snug text-bone">
                COA on every order
              </p>
              <p className="mt-2 text-sm text-muted">
                Digital certificates issued automatically with each dispatch.
              </p>
            </div>
          </article>
        </div>

        <div className="bento-foot mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-8">
          <span className="flex items-center gap-2 text-sm text-muted">
            <MapPinned className="h-4 w-4 text-gold" />
            Dispatch hubs in Lagos &amp; Abuja
          </span>
          <span className="flex items-center gap-2 text-sm text-muted">
            <Snowflake className="h-4 w-4 text-gold" />
            Temperature-logged shipping
          </span>
          <span className="flex items-center gap-2 text-sm text-muted">
            <BadgeCheck className="h-4 w-4 text-gold" />
            Research-use-only compliance
          </span>
        </div>
      </div>
    </section>
  )
}
