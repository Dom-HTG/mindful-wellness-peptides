import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Beaker,
  Brain,
  Check,
  Compass,
  Dna,
  Droplets,
  FlaskConical,
  Flame,
  Gauge,
  GraduationCap,
  HeartPulse,
  Layers,
  Lightbulb,
  Microscope,
  Package,
  RefreshCw,
  Sparkles,
  Tag,
  Truck,
  Wallet,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { ProductCard } from '../components/ProductCard'
import { VialVisual } from '../components/VialVisual'
import { useCart } from '../context/CartContext'
import { QUESTIONS } from '../data/quiz'
import { formatNaira } from '../data/products'
import { recommendPeptides, type QuizAnswers } from '../lib/quiz'
import { EASE, prefersReducedMotion } from '../lib/motion'

gsap.registerPlugin(useGSAP)

const ICONS: Record<string, LucideIcon> = {
  Flame,
  Activity,
  Dna,
  Brain,
  Sparkles,
  Compass,
  Gauge,
  HeartPulse,
  Zap,
  Lightbulb,
  Droplets,
  FlaskConical,
  GraduationCap,
  Beaker,
  Microscope,
  Wallet,
  BadgeCheck,
  Truck,
  Tag,
  Package,
  Layers,
}

const INTRO_FEATURES = [
  { title: 'Six quick questions', body: 'Goal, focus areas, experience and priorities.' },
  { title: 'About a minute', body: 'No sign-up, no email, no waiting.' },
  { title: 'Instant matches', body: 'A profile plus three suggested compounds.' },
]

type Phase = 'intro' | 'questions' | 'result'

export const Quiz = () => {
  const { addItem } = useCart()
  const [phase, setPhase] = useState<Phase>('intro')
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswers>({})
  const stage = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.from('.quiz-anim', {
        y: 26,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: EASE.out,
      })
    },
    { scope: stage, dependencies: [phase, step], revertOnUpdate: true },
  )

  const result = useMemo(() => recommendPeptides(answers), [answers])
  const question = QUESTIONS[step]
  const isMulti = question.type === 'multi'
  const currentValue = answers[question.id]

  const start = () => {
    setAnswers({})
    setStep(0)
    setPhase('questions')
  }

  const advance = () => {
    if (step < QUESTIONS.length - 1) setStep((value) => value + 1)
    else setPhase('result')
  }

  const selectSingle = (optionId: string) => {
    setAnswers((previous) => ({ ...previous, [question.id]: optionId }))
    window.setTimeout(advance, 220)
  }

  const toggleMulti = (optionId: string) => {
    setAnswers((previous) => {
      const existing = (previous[question.id] as string[] | undefined) ?? []
      const next = existing.includes(optionId)
        ? existing.filter((id) => id !== optionId)
        : [...existing, optionId]
      return { ...previous, [question.id]: next }
    })
  }

  const restart = () => {
    setAnswers({})
    setStep(0)
    setPhase('intro')
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-ink px-6 pb-28 pt-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(50% 45% at 50% 8%, rgba(232,178,92,0.16) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div key={`${phase}-${step}`} ref={stage}>
        {phase === 'intro' && (
          <div className="mx-auto max-w-4xl text-center">
            <div className="quiz-anim mb-10 flex items-end justify-center gap-4">
              {[
                { name: 'Metabolic', accent: '#E8B25C', delay: '0s' },
                { name: 'Recovery', accent: '#6E8F7A', delay: '0.8s' },
                { name: 'Longevity', accent: '#8AA678', delay: '1.6s' },
              ].map((vial) => (
                <div
                  key={vial.name}
                  className="h-52 w-24 animate-floaty"
                  style={{ animationDelay: vial.delay }}
                >
                  <VialVisual name={vial.name} purity="99%" accent={vial.accent} size="md" />
                </div>
              ))}
            </div>

            <p className="eyebrow quiz-anim">Peptide finder</p>
            <h1
              className="quiz-anim mx-auto mt-6 max-w-3xl font-display font-medium leading-[1.0] tracking-[-0.03em] text-bone"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.4rem)' }}
            >
              Not sure which peptide fits your research?
            </h1>
            <p className="quiz-anim mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Answer six quick questions and we will build a starting profile for your research,
              then suggest the compounds that match it.
            </p>

            <div className="quiz-anim mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <button type="button" onClick={start} className="btn-primary w-full sm:w-auto">
                Start the quiz
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link to="/shop" className="btn-ghost w-full sm:w-auto">
                Browse catalogue
              </Link>
            </div>

            <div className="quiz-anim mt-16 grid gap-4 sm:grid-cols-3">
              {INTRO_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-line bg-surface p-6 text-left"
                >
                  <p className="font-display text-base font-semibold text-bone">{feature.title}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {phase === 'questions' && (
          <div className="mx-auto max-w-5xl">
            <div className="quiz-anim flex items-center justify-between">
              <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
                Step {step + 1} of {QUESTIONS.length}
              </span>
              <button
                type="button"
                onClick={() => setPhase('intro')}
                className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted transition-colors hover:text-bone"
              >
                Exit
              </button>
            </div>
            <div className="quiz-anim mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full w-full origin-left rounded-full bg-gold transition-transform duration-500 ease-out-quart"
                style={{ transform: `scaleX(${(step + 1) / QUESTIONS.length})` }}
              />
            </div>

            <div className="mt-12">
              <p className="eyebrow quiz-anim">{isMulti ? 'Select all that apply' : 'Choose one'}</p>
              <h2 className="quiz-anim mt-4 max-w-3xl font-display text-3xl font-medium leading-tight tracking-[-0.02em] text-bone sm:text-4xl md:text-5xl">
                {question.title}
              </h2>
              <p className="quiz-anim mt-4 max-w-2xl text-base leading-relaxed text-muted">
                {question.subtitle}
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {question.options.map((option) => {
                const Icon = ICONS[option.icon] ?? Compass
                const selected = isMulti
                  ? ((currentValue as string[] | undefined) ?? []).includes(option.id)
                  : currentValue === option.id
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => (isMulti ? toggleMulti(option.id) : selectSingle(option.id))}
                    className={`quiz-anim group flex h-full flex-col items-start gap-5 rounded-3xl border p-6 text-left transition-[border-color,background-color] duration-300 ease-out-quart ${
                      selected
                        ? 'border-gold bg-gold/10'
                        : 'border-line bg-surface hover:border-gold/40 hover:bg-white/[0.03]'
                    }`}
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-colors duration-300 ${
                        selected
                          ? 'border-gold bg-gold text-ink'
                          : 'border-line bg-white/[0.03] text-gold'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex-1">
                      <span className="font-display text-lg font-semibold text-bone">
                        {option.label}
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted">
                        {option.description}
                      </span>
                    </span>
                    <span
                      className={`flex items-center gap-2 text-xs font-semibold transition-opacity duration-300 ${
                        selected ? 'text-gold' : 'text-muted opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      <Check className="h-3.5 w-3.5" />
                      {selected ? 'Selected' : 'Select'}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="mt-10 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep((value) => Math.max(value - 1, 0))}
                disabled={step === 0}
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-bone transition-colors hover:border-bone/40 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
              {isMulti && (
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={advance}
                    className="text-sm text-muted transition-colors hover:text-bone"
                  >
                    Skip
                  </button>
                  <button type="button" onClick={advance} className="btn-primary">
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {phase === 'result' && (
          <div className="mx-auto max-w-6xl">
            <div className="quiz-anim flex items-center justify-between">
              <p className="eyebrow">Your research profile</p>
              <button
                type="button"
                onClick={restart}
                className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-muted transition-colors hover:text-bone"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Retake
              </button>
            </div>

            <h1
              className="quiz-anim mt-5 max-w-4xl font-display font-medium leading-[1.03] tracking-[-0.03em] text-bone"
              style={{ fontSize: 'clamp(2.1rem, 4vw, 3.4rem)' }}
            >
              {result.profileTitle}
            </h1>
            <p className="quiz-anim mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              {result.profileSummary}
            </p>

            {result.focusLabels.length > 0 && (
              <div className="quiz-anim mt-7 flex flex-wrap gap-2">
                {result.focusLabels.slice(0, 6).map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-line bg-white/[0.03] px-4 py-2 text-xs font-medium text-bone/80"
                  >
                    {label}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-16">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow">Suggested starting points</p>
                  <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.02em] text-bone sm:text-4xl">
                    Compounds that match your answers.
                  </h2>
                </div>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
                >
                  See all products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {result.recommendations.map((recommendation) => (
                  <div key={recommendation.product.id} className="quiz-anim flex flex-col gap-3">
                    <div className="flex flex-wrap gap-2">
                      {recommendation.reasons.map((reason) => (
                        <span
                          key={reason}
                          className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-medium text-gold"
                        >
                          {reason}
                        </span>
                      ))}
                    </div>
                    <ProductCard product={recommendation.product} />
                  </div>
                ))}
              </div>
            </div>

            {result.kit && (
              <div className="quiz-anim mt-16 rounded-3xl border border-gold/30 bg-gradient-to-r from-gold/10 to-transparent p-8">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="eyebrow">Suggested starter kit</p>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-bone">
                      Your match, plus the essentials to run it.
                    </h3>
                    <div className="mt-6 space-y-2">
                      {[result.kit.product, result.kit.companion].map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between gap-6 rounded-2xl border border-line bg-ink/60 px-5 py-3.5"
                        >
                          <span className="text-sm font-medium text-bone">
                            {item.name}
                            <span className="ml-2 text-xs text-muted">{item.size}</span>
                          </span>
                          <span className="font-display text-sm font-semibold text-bone">
                            {formatNaira(item.price)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 flex-col items-start gap-3 lg:items-end">
                    <p className="font-display text-3xl font-semibold text-bone">
                      {formatNaira(result.kit.product.price + result.kit.companion.price)}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        addItem(result.kit!.product.id)
                        addItem(result.kit!.companion.id)
                      }}
                      className="btn-primary"
                    >
                      Add starter kit to cart
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="quiz-anim mt-12 rounded-3xl border border-line bg-surface/60 p-6 text-xs leading-relaxed text-muted">
              This profile is generated from your quiz answers for research sourcing only. It is not
              medical advice, and no product is intended for human or veterinary use.
            </div>

            <div className="quiz-anim mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={restart} className="btn-ghost">
                <RefreshCw className="h-4 w-4" />
                Retake quiz
              </button>
              <Link to="/shop" className="btn-primary">
                Browse the catalogue
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  )
}
