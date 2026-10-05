import { Link } from 'react-router-dom'
import { ArrowRight, Check, Compass } from 'lucide-react'
import { Reveal } from './Reveal'

const PREVIEW = [
  { label: 'Metabolic & weight research', selected: true },
  { label: 'Recovery & tissue repair', selected: false },
  { label: 'Longevity & cellular health', selected: false },
  { label: 'Skin, hair & glow', selected: false },
]

export const QuizTeaser = () => (
  <section className="relative overflow-hidden border-y border-line bg-surface/40 px-6 py-24 md:py-32">
    <div
      className="pointer-events-none absolute inset-0 opacity-70"
      style={{
        background:
          'radial-gradient(45% 60% at 15% 20%, rgba(232,178,92,0.14) 0%, transparent 70%)',
      }}
    />
    <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <Reveal>
        <p className="eyebrow">Peptide finder</p>
        <h2 className="mt-5 font-display text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl">
          Not sure which peptide to start with?
        </h2>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
          Tell us what you want to research and we will turn it into a clear starting profile with
          recommended compounds, matched to your priorities.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/quiz" className="btn-primary">
            Take the peptide quiz
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/shop" className="btn-ghost">
            Browse catalogue
          </Link>
        </div>
        <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted">
          Six questions &middot; about a minute &middot; instant matches
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="group relative">
          <div className="rounded-3xl border border-line bg-ink p-6 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.95)] transition-colors duration-500 group-hover:border-gold/40 md:p-8">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-gold">
                <Compass className="h-3.5 w-3.5" />
                Choose one
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted">1 of 6</span>
            </div>
            <p className="mt-5 font-display text-xl font-semibold leading-snug text-bone">
              What would you like to research?
            </p>
            <div className="mt-5 space-y-3">
              {PREVIEW.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 transition-colors duration-300 ${
                    item.selected
                      ? 'border-gold bg-gold/10'
                      : 'border-line bg-white/[0.02] group-hover:border-bone/20'
                  }`}
                >
                  <span
                    className={`text-sm font-medium ${item.selected ? 'text-bone' : 'text-muted'}`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                      item.selected ? 'bg-gold text-ink' : 'border border-line text-transparent'
                    }`}
                  >
                    <Check className="h-3 w-3" />
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
              <div className="h-full w-1/6 rounded-full bg-gold" />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
)
