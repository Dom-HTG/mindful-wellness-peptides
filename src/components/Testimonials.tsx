import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'

type Testimonial = {
  quote: string
  name: string
  role: string
  seed: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The COA matched the vial exactly and the cold packs were still solid on arrival in Lagos. This is the first local supplier I have trusted for repeat orders.',
    name: 'Dr. Amaka Obi',
    role: 'Research lead, Lagos',
    seed: 'nigerian-woman-scientist',
  },
  {
    quote:
      'Ordering in Naira removed the entire dollar-card headache. Dispatch was same-day and the packaging was genuinely discreet.',
    name: 'Tunde Adeyemi',
    role: 'Biochemist, Abuja',
    seed: 'african-man-lab-coat',
  },
  {
    quote:
      'Their purity documentation is the most complete I have seen in the Nigerian market. Reproducible results, batch after batch.',
    name: 'Chidinma Eze',
    role: 'Lab manager, Port Harcourt',
    seed: 'black-woman-researcher',
  },
  {
    quote:
      'I had a question on reconstitution at 8pm and got a real answer from the team. That support is why we keep coming back.',
    name: 'Ibrahim Sani',
    role: 'PhD candidate, Kano',
    seed: 'african-student-researcher',
  },
]

export const Testimonials = () => {
  const [index, setIndex] = useState(0)

  const go = (direction: number) =>
    setIndex((current) => (current + direction + TESTIMONIALS.length) % TESTIMONIALS.length)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % TESTIMONIALS.length)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [])

  const active = TESTIMONIALS[index]

  return (
    <section id="reviews" className="relative bg-ink px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Trusted across the country</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl md:text-6xl">
              Researchers who reorder, every month.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-bone transition-colors hover:border-gold hover:text-gold"
              aria-label="Previous review"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-bone transition-colors hover:border-gold hover:text-gold"
              aria-label="Next review"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="relative h-[420px]">
            {TESTIMONIALS.map((item, position) => {
              const offset =
                (position - index + TESTIMONIALS.length) % TESTIMONIALS.length
              return (
                <div
                  key={item.name}
                  className="absolute inset-0 overflow-hidden rounded-3xl border border-line transition-all duration-700 ease-out"
                  style={{
                    transform: `translateY(${offset * 18}px) scale(${1 - offset * 0.05})`,
                    opacity: offset > 2 ? 0 : 1 - offset * 0.18,
                    zIndex: TESTIMONIALS.length - offset,
                    backgroundImage: `url('https://picsum.photos/seed/${item.seed}/900/1100')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(1) contrast(1.05)',
                  }}
                />
              )
            })}
            <div className="absolute inset-x-5 bottom-5 z-10 rounded-2xl border border-line bg-ink/80 px-5 py-4 backdrop-blur-xl">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star key={star} className="h-3.5 w-3.5 fill-gold" />
                ))}
              </div>
              <p className="mt-2 font-display text-lg font-semibold text-bone">{active.name}</p>
              <p className="text-xs text-muted">{active.role}</p>
            </div>
          </div>

          <div>
            <Quote className="h-9 w-9 text-gold" />
            <blockquote className="mt-6 font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-bone sm:text-3xl md:text-4xl">
              {active.quote}
            </blockquote>
            <div className="mt-8 flex gap-2">
              {TESTIMONIALS.map((item, position) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setIndex(position)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    position === index ? 'w-10 bg-gold' : 'w-4 bg-white/15'
                  }`}
                  aria-label={`Show review from ${item.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
