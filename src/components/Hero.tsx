import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { EASE, prefersReducedMotion } from '../lib/motion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export const Hero = () => {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      gsap
        .timeline({ defaults: { ease: EASE.out } })
        .from('.hero-bg', { scale: 1.16, autoAlpha: 0, duration: 1.9, ease: 'power2.out' }, 0)
        .from('.hero-glow', { autoAlpha: 0, scale: 0.65, duration: 1.7, ease: 'power2.out' }, 0.1)
        .from('.hero-eyebrow', { y: 20, autoAlpha: 0, duration: 0.7 }, 0.25)
        .from(
          '.hero-line',
          { yPercent: 118, rotate: 1.5, duration: 1.1, stagger: 0.12, ease: EASE.expo },
          0.35,
        )
        .from('.hero-copy', { y: 22, autoAlpha: 0, duration: 0.8 }, 0.85)
        .from('.hero-cta', { y: 18, autoAlpha: 0, duration: 0.7, stagger: 0.09 }, 1)
        .from('.hero-scroll', { autoAlpha: 0, duration: 0.9 }, 1.25)

      gsap.to('.hero-bg', {
        yPercent: 14,
        scale: 1.06,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
      gsap.to('.hero-content', {
        yPercent: -7,
        autoAlpha: 0.4,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom 30%',
          scrub: true,
        },
      })
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
      <div className="blueprint absolute inset-0 opacity-60" />
      <div
        className="hero-glow absolute inset-0 mix-blend-screen opacity-70"
        style={{
          background:
            'radial-gradient(60% 55% at 50% 32%, rgba(232,178,92,0.22) 0%, transparent 70%)',
        }}
      />

      <div className="hero-content relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 pb-28 pt-36 text-center">
        <p className="hero-eyebrow eyebrow flex items-center gap-3">
          <span className="h-px w-8 bg-gold/60" />
          HPLC verified &middot; Batch COA included
          <span className="h-px w-8 bg-gold/60" />
        </p>

        <h1
          className="mt-8 font-display font-medium leading-[0.98] tracking-[-0.03em] text-bone"
          style={{ fontSize: 'clamp(2.6rem, 5.6vw, 5.4rem)' }}
        >
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="hero-line block">Research-grade peptides,</span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
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
          <Link
            to="/shop"
            className="hero-cta btn-primary group relative w-full overflow-hidden sm:w-auto"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[130%] skew-x-[-12deg] bg-white/35 blur-md group-hover:animate-sheen"
            />
            Shop peptides
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out-quart group-hover:translate-x-1" />
          </Link>
          <a href="#contact" className="hero-cta btn-ghost w-full sm:w-auto">
            <MessageCircle className="h-4 w-4" />
            Talk to a specialist
          </a>
        </div>
      </div>

      <div className="hero-scroll pointer-events-none absolute inset-x-0 bottom-7 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted">
          Scroll to explore
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <span className="absolute inset-x-0 top-0 h-4 animate-floaty bg-gradient-to-b from-gold/80 to-transparent" />
        </span>
      </div>
    </section>
  )
}
