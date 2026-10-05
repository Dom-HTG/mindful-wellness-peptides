import { useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  description: string
  seed: string
  children?: ReactNode
}

export const PageHero = ({ eyebrow, title, description, seed, children }: PageHeroProps) => {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('.page-bg', { scale: 1.14, opacity: 0, duration: 1.6 }, 0)
        .from('.page-eyebrow', { y: 20, opacity: 0, duration: 0.7 }, 0.15)
        .from('.page-title', { y: 34, opacity: 0, duration: 0.9 }, 0.3)
        .from('.page-desc', { y: 22, opacity: 0, duration: 0.8 }, 0.5)
        .from('.page-extra', { y: 20, opacity: 0, duration: 0.8 }, 0.65)
    },
    { scope: root },
  )

  return (
    <section ref={root} className="relative isolate overflow-hidden border-b border-line">
      <div
        className="page-bg absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://picsum.photos/seed/${seed}/1920/1080')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/85 to-ink" />
      <div
        className="absolute inset-0 mix-blend-screen opacity-60"
        style={{
          background:
            'radial-gradient(55% 55% at 50% 25%, rgba(232,178,92,0.20) 0%, transparent 72%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-44 text-center md:pb-32 md:pt-56">
        <p className="page-eyebrow eyebrow">{eyebrow}</p>
        <h1
          className="page-title mx-auto mt-6 max-w-4xl font-display font-medium leading-[1.0] tracking-[-0.03em] text-bone"
          style={{ fontSize: 'clamp(2.6rem, 5.4vw, 4.8rem)' }}
        >
          {title}
        </h1>
        <p className="page-desc mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
        {children && (
          <div className="page-extra mt-10 flex flex-wrap items-center justify-center gap-3">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
