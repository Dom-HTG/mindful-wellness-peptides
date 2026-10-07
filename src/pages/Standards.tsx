import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Dna,
  FlaskConical,
  Lock,
  MapPinned,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Snowflake,
  ThermometerSnowflake,
  Truck,
} from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'

const COMMITMENTS = [
  {
    icon: FlaskConical,
    title: 'Analytical, not anecdotal',
    body: 'Decisions about a lot are made on instrument data, never on supplier assurances.',
  },
  {
    icon: ShieldCheck,
    title: 'Documented end to end',
    body: 'Every batch carries a unique number and a certificate that describes the exact vial.',
  },
  {
    icon: Snowflake,
    title: 'Stability by design',
    body: 'Storage and packing are chosen to protect the peptide from synthesis to your bench.',
  },
]

const DELIVERY = [
  { zone: 'Lagos & Abuja', time: '24-48 hours', note: 'Priority same-day dispatch' },
  { zone: 'South-West & South-South', time: '2-3 working days', note: 'Temperature-logged courier' },
  { zone: 'North & all other states', time: '3-4 working days', note: 'Tracking shared on dispatch' },
]

const GUIDELINES = [
  {
    icon: ShieldCheck,
    title: 'Research use only',
    body: 'Materials are supplied strictly for laboratory research and are never marketed for human or veterinary use.',
  },
  {
    icon: Lock,
    title: 'Chain of custody',
    body: 'Each lot is logged from receipt into cold storage through to the parcel that leaves our hub.',
  },
  {
    icon: ThermometerSnowflake,
    title: 'Reconstitution care',
    body: 'Swirl gently, use the supplied diluent, and keep reconstituted vials refrigerated for four to six weeks.',
  },
  {
    icon: ClipboardCheck,
    title: 'Complete paperwork',
    body: 'Your certificate of analysis is issued automatically and matches the batch number on the label.',
  },
  {
    icon: PackageCheck,
    title: 'Discreet, stable packing',
    body: 'Neutral outer packaging with insulated, gel-packed interiors graded for the Nigerian climate.',
  },
  {
    icon: MessageCircle,
    title: 'Real support',
    body: 'A Lagos-based team answers technical and delivery questions, including handling guidance after ordering.',
  },
]

export const Standards = () => (
  <>
    <PageHero
      eyebrow="Standards"
      title={<>The standard behind every vial.</>}
      description="From the raw amino acids we buy to the gel packs that guard your parcel, these are the commitments that decide what reaches your bench. They do not change with price or volume."
      seed="laboratory-standards-nigeria"
    >
      <Link to="/shop" className="btn-primary">
        Shop the catalogue
        <ArrowRight className="h-4 w-4" />
      </Link>
      <Link to="/quality" className="btn-ghost">
        Explore quality testing
      </Link>
    </PageHero>

    <section className="border-b border-line bg-ink px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">One promise, held end to end</p>
          <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl">
            The compound you receive is the compound your certificate describes.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xl text-base leading-relaxed text-muted">
            That single sentence governs how we buy, test, store and ship. It is why we pay more for
            premium reagents, why every batch is independently analysed, and why we pack for Nigerian
            heat rather than assume a temperate warehouse. These standards are the product.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {COMMITMENTS.map((item) => (
              <div key={item.title} className="rounded-3xl border border-line bg-surface p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/[0.03] text-gold">
                  <item.icon className="h-4 w-4" />
                </span>
                <p className="mt-5 font-display text-base font-semibold text-bone">{item.title}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <section className="border-b border-line bg-surface/40 px-6 py-32 md:py-48">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="group overflow-hidden rounded-3xl border border-line">
            <div
              className="h-[420px] w-full bg-cover bg-center contrast-125 transition-transform duration-[1200ms] ease-out group-hover:scale-105 md:h-[560px]"
              style={{
                backgroundImage:
                  "url('https://picsum.photos/seed/peptide-synthesis-reagents/1200/1400')",
              }}
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink">
            <Dna className="h-5 w-5" />
          </span>
          <p className="eyebrow mt-8">Sourcing</p>
          <h3 className="mt-4 font-display text-3xl font-medium leading-tight tracking-[-0.02em] text-bone md:text-4xl">
            We start upstream, with the reagents.
          </h3>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Quality is decided long before a vial is filled. We select high-purity amino acids and
            coupling reagents so synthesis clears the purifier cleanly, batch after batch, with fewer
            impurities and tighter tolerance on the target sequence.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              'Premium-grade amino acids and reagents',
              'Consistent crude purity across batches',
              'Higher recovery of the target peptide',
            ].map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm text-bone/85">
                <Check className="h-4 w-4 text-gold" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>

    <section className="border-b border-line bg-ink px-6 py-32 md:py-48">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="lg:order-2">
          <div className="group overflow-hidden rounded-3xl border border-line">
            <div
              className="h-[420px] w-full bg-cover bg-center contrast-125 transition-transform duration-[1200ms] ease-out group-hover:scale-105 md:h-[560px]"
              style={{
                backgroundImage:
                  "url('https://picsum.photos/seed/hplc-mass-spectrometry/1200/1400')",
              }}
            />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:order-1">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink">
            <ClipboardCheck className="h-5 w-5" />
          </span>
          <p className="eyebrow mt-8">Verification &amp; release</p>
          <h3 className="mt-4 font-display text-3xl font-medium leading-tight tracking-[-0.02em] text-bone md:text-4xl">
            A lot is only released once every gate is cleared.
          </h3>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Independent HPLC, mass spectrometry and endotoxin testing must all agree before a batch
            enters the catalogue. If a result falls outside tolerance, the lot does not ship, full
            stop.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              'HPLC purity within our release threshold',
              'Mass confirmed against the intended sequence',
              'Endotoxin result inside the documented limit',
            ].map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm text-bone/85">
                <Check className="h-4 w-4 text-gold" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>

    <section className="relative overflow-hidden border-b border-line">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/cold-chain-medical-shipping/1920/1080')" }}
      />
      <div className="absolute inset-0 bg-ink/85" />
      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
        <Reveal className="max-w-3xl">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink">
            <Snowflake className="h-5 w-5" />
          </span>
          <p className="eyebrow mt-8">Cold-chain &amp; storage</p>
          <h3 className="mt-4 font-display text-4xl font-medium leading-[1.03] tracking-[-0.03em] text-bone md:text-5xl">
            Packed for the climate it will travel through.
          </h3>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            Lyophilised peptides are sensitive to heat and moisture. We store them cool and dark, then
            pack each shipment with gel packs and insulation graded for Nigerian conditions so the
            vial arrives as stable as it left.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: PackageCheck, title: 'Insulated packing', body: 'Double-walled protection on every order.' },
            { icon: Snowflake, title: 'Gel-pack cooling', body: 'Phase-change packs sized to the route.' },
            { icon: ThermometerSnowflake, title: 'Temperature logging', body: 'Dispatch conditions recorded.' },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="h-full rounded-3xl border border-line bg-ink/70 p-7 backdrop-blur">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/[0.03] text-gold">
                  <item.icon className="h-5 w-5" />
                </span>
                <p className="mt-6 font-display text-lg font-semibold text-bone">{item.title}</p>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-surface/40 px-6 py-32 md:py-48">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink">
            <Truck className="h-5 w-5" />
          </span>
          <p className="eyebrow mt-8">Delivery promise</p>
          <h3 className="mt-4 font-display text-3xl font-medium leading-tight tracking-[-0.02em] text-bone md:text-4xl">
            A delivery window we actually keep.
          </h3>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Orders leave our Lagos and Abuja hubs the same working day when placed before 3pm.
            Wherever you are in the country, tracking reaches you the moment your parcel is handed to
            the courier.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-muted">
            <MapPinned className="h-4 w-4 text-gold" />
            Dispatch hubs in Lagos and Abuja
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface">
            {DELIVERY.map((tier) => (
              <div key={tier.zone} className="flex items-center justify-between gap-6 p-7">
                <div>
                  <p className="font-display text-lg font-semibold text-bone">{tier.zone}</p>
                  <p className="mt-1 text-[13px] text-muted">{tier.note}</p>
                </div>
                <span className="whitespace-nowrap rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-semibold text-gold">
                  {tier.time}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <section className="relative overflow-hidden bg-ink px-6 py-32 md:py-48">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="max-w-3xl" variant="left">
          <p className="eyebrow">Compliance &amp; handling</p>
          <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl md:text-6xl">
            The rules we hold ourselves to.
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-flow-dense grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDELINES.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition-colors duration-500 hover:border-gold/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/[0.03] text-gold">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold text-bone">{item.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-gold/30 bg-gradient-to-r from-gold/10 to-transparent px-8 py-10 text-center md:flex-row md:text-left">
            <div>
              <p className="font-display text-2xl font-semibold text-bone">
                Hold us to the standard.
              </p>
              <p className="mt-2 text-sm text-muted">
                Browse the catalogue, request a certificate, or ask our team a technical question.
              </p>
            </div>
            <Link to="/shop" className="btn-primary flex-shrink-0">
              Shop peptides
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </>
)
