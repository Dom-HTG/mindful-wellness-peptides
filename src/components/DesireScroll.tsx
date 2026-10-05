import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type Chapter = {
  title: string
  body: string
  points: string[]
  seed: string
}

const CHAPTERS: Chapter[] = [
  {
    title: 'Sourced from premium synthesis',
    body: 'Exceptional peptide quality starts with exceptional raw materials. We select high-purity amino acids and reagents so every sequence clears the purifier with fewer losses and tighter tolerances.',
    points: ['Premium-grade amino acids', 'Consistent crude purity', 'Higher recovery per batch'],
    seed: 'peptide-synthesis-reagents',
  },
  {
    title: 'Tested, documented, traceable',
    body: 'Purity, identity and safety are confirmed by independent analytical methods before release. Each lot carries a certificate of analysis that matches the vial in your hand.',
    points: ['HPLC purity assay', 'Mass spectrometry identity', 'Endotoxin screening'],
    seed: 'hplc-mass-spectrometry',
  },
  {
    title: 'Cold-chain from vial to door',
    body: 'Lyophilised peptides are sensitive. We store them cool and dark, then pack every Nigerian shipment with gel packs and insulation graded for our climate.',
    points: ['Temperature-logged dispatch', 'Gel-pack insulation', 'Stability-focused packing'],
    seed: 'cold-chain-medical-shipping',
  },
  {
    title: 'Delivered across Nigeria',
    body: 'Lagos and Abuja orders arrive in 24 to 48 hours. Everywhere else reaches you within two to four working days, with tracking shared the moment your parcel leaves the hub.',
    points: ['Lagos & Abuja priority', 'Nationwide 2-4 days', 'Live tracking updates'],
    seed: 'lagos-city-delivery',
  },
]

export const DesireScroll = () => {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('.chapter-media').forEach((media) => {
        gsap.fromTo(
          media,
          { scale: 0.82, opacity: 0.35 },
          {
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: media,
              start: 'top 88%',
              end: 'top 45%',
              scrub: true,
            },
          },
        )
        gsap.to(media, {
          opacity: 0.2,
          ease: 'none',
          scrollTrigger: {
            trigger: media,
            start: 'bottom 42%',
            end: 'bottom 6%',
            scrub: true,
          },
        })
      })

      const mm = gsap.matchMedia()
      mm.add('(min-width: 768px)', () => {
        ScrollTrigger.create({
          trigger: root.current,
          start: 'top 20%',
          end: 'bottom 80%',
          pin: '.desire-pin',
          pinSpacing: false,
        })
      })

      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section
      id="standards"
      ref={root}
      className="relative border-y border-line bg-surface/40 px-6 py-32 md:py-48"
    >
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
        <div>
          <div className="desire-pin max-w-md">
            <p className="eyebrow">How we hold the standard</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl">
              From raw reagent to your bench, nothing is guessed.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              We built Mindful Wellness Nigeria around a simple promise: the compound you receive is
              the compound your certificate describes.
            </p>
            <Link
              to="/standards"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
            >
              See the full standards
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="space-y-24 md:space-y-40">
          {CHAPTERS.map((chapter) => (
            <article key={chapter.title} className="chapter">
              <div className="overflow-hidden rounded-3xl border border-line">
                <div
                  className="chapter-media h-72 w-full bg-cover bg-center contrast-125 md:h-96"
                  style={{
                    backgroundImage: `url('https://picsum.photos/seed/${chapter.seed}/1200/800')`,
                  }}
                />
              </div>
              <div className="mt-7">
                <h3 className="font-display text-2xl font-semibold leading-tight text-bone md:text-3xl">
                  {chapter.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                  {chapter.body}
                </p>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {chapter.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full border border-line bg-white/[0.02] px-4 py-2 text-xs font-medium text-bone/80"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
