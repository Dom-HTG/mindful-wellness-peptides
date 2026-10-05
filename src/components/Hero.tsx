import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowRight, MessageCircle } from 'lucide-react'

export const Hero = () => {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
      timeline
        .from('.hero-bg', { scale: 1.18, opacity: 0, duration: 1.8 }, 0)
        .from('.hero-eyebrow', { y: 24, opacity: 0, duration: 0.8 }, 0.2)
        .from('.hero-line', { yPercent: 115, opacity: 0, duration: 1, stagger: 0.14 }, 0.35)
        .from('.hero-copy', { y: 22, opacity: 0, duration: 0.8 }, 0.8)
        .from('.hero-cta', { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 }, 0.95)
        .from('.hero-scroll', { opacity: 0, duration: 0.8 }, 1.2)
    },
    { scope: root },
  )

  return (
    <section id="top" ref={root} className="relative isolate min-h-[100svh] overflow-hidden">
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://picsum.photos/seed/mindful-peptide-laboratory/1920/1080')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/80 to-ink" />
      <div
        className="absolute inset-0 mix-blend-screen opacity-70"
        style={{
          background:
            'radial-gradient(60% 55% at 50% 32%, rgba(232,178,92,0.22) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 pb-28 pt-36 text-center">
        <p className="hero-eyebrow eyebrow flex items-center gap-3">
          <span className="h-px w-8 bg-gold/60" />
          HPLC verified &middot; Batch COA included
          <span className="h-px w-8 bg-gold/60" />
        </p>

        <h1
          className="mt-8 font-display font-medium leading-[0.98] tracking-[-0.03em] text-bone"
          style={{ fontSize: 'clamp(2.6rem, 5.6vw, 5.4rem)' }}
        >
          <span className="block overflow-hidden">
            <span className="hero-line block">Research-grade peptides,</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block">
              delivered across{' '}
              <span
                className="mx-3 hidden h-[0.62em] w-[1.5em] rounded-full bg-cover bg-center align-middle contrast-125 grayscale sm:inline-block"
                style={{
                  backgroundImage: "url('https://picsum.photos/seed/lagos-skyline/400/200')",
                }}
              />
              {' '}Nigeria.
            </span>
          </span>
        </h1>

        <p className="hero-copy mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Mindful Wellness is Nigeria&apos;s dedicated peptide store. High-purity compounds,
          cold-chain delivery from Lagos and Abuja, and clear Naira pricing with no guesswork.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Link to="/shop" className="hero-cta btn-primary w-full sm:w-auto">
            Shop peptides
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#contact"
            className="hero-cta btn-ghost w-full sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            Talk to a specialist
          </a>
        </div>
      </div>

      <div className="hero-scroll pointer-events-none absolute inset-x-0 bottom-7 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted">
          Scroll to explore
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-gold/70 to-transparent" />
      </div>
    </section>
  )
}
