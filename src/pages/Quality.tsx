import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Dna,
  FileCheck2,
  FlaskConical,
  Microscope,
  ShieldCheck,
  Snowflake,
  ThermometerSnowflake,
} from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'

const METRICS = [
  {
    icon: FlaskConical,
    value: '99%+',
    label: 'Verified purity',
    detail: 'HPLC area percent across every released batch',
  },
  {
    icon: Microscope,
    value: '3',
    label: 'Analytical methods',
    detail: 'Purity, identity and endotoxin on every lot',
  },
  {
    icon: FileCheck2,
    value: '100%',
    label: 'COA coverage',
    detail: 'A certificate issued for every vial dispatched',
  },
  {
    icon: ThermometerSnowflake,
    value: '4-6 wks',
    label: 'Reconstituted stability',
    detail: 'Refrigerated, per our handling guidance',
  },
]

const METHODS = [
  {
    icon: FlaskConical,
    title: 'HPLC purity',
    body: 'High-performance liquid chromatography separates the target peptide from synthesis by-products and reports an area-percent purity figure for the lot.',
    points: ['Area-percent purity', 'Impurity profile', 'Batch-to-batch comparison'],
  },
  {
    icon: Dna,
    title: 'Mass spectrometry identity',
    body: 'Mass spectrometry confirms the molecular mass of the peptide matches the intended amino acid sequence, so the sequence you ordered is the sequence you receive.',
    points: ['Molecular mass match', 'Sequence confirmation', 'No mis-assigned lots'],
  },
  {
    icon: ShieldCheck,
    title: 'Endotoxin screening',
    body: 'A limulus amebocyte lysate assay screens for pyrogenic contamination, keeping endotoxin levels within the limits required for sensitive laboratory work.',
    points: ['LAL assay per lot', 'Low-endotoxin release limits', 'Documented results'],
  },
]

const COA_ROWS: Array<[string, string]> = [
  ['Product', 'Tirzepatide 30mg'],
  ['Batch', 'MW-2026-0412'],
  ['Purity (HPLC)', '99.2%'],
  ['Identity (MS)', 'Confirmed'],
  ['Endotoxin', '< 5 EU/mg'],
  ['Appearance', 'White lyophilised powder'],
  ['Storage', '-20C, protect from light'],
]

const COA_CHECKS = [
  'Target peptide name and stated quantity',
  'Unique batch number matched to the vial label',
  'HPLC purity figure with chromatogram reference',
  'Mass spectrometry identity confirmation',
  'Endotoxin result and release criteria',
  'Appearance, fill volume and storage conditions',
]

const STORAGE = [
  {
    icon: Snowflake,
    title: 'Long-term, below -20C',
    body: 'Lyophilised vials kept at -20C stay stable far longer. Use a freezer that holds a steady temperature and avoid repeated freeze-thaw cycles.',
  },
  {
    icon: ThermometerSnowflake,
    title: 'Shorter-term, 2-8C',
    body: 'For compounds you plan to run within weeks, a refrigerator at 2-8C is acceptable. Keep vials dark and sealed against moisture.',
  },
  {
    icon: ClipboardCheck,
    title: 'After reconstitution',
    body: 'Once reconstituted, keep refrigerated and use within four to six weeks. Use a gentle swirl rather than vigorous shaking to protect the peptide bonds.',
  },
]

export const Quality = () => (
  <>
    <PageHero
      eyebrow="Quality"
      title={<>Quality is engineered, not claimed.</>}
      description="Every Mindful Wellness vial passes through three independent analytical gates before it earns a place in your laboratory. Here is exactly what we test, how we test it and what you receive with each order."
      seed="peptide-quality-control-laboratory"
    >
      <Link to="/shop" className="btn-primary">
        Shop tested peptides
        <ArrowRight className="h-4 w-4" />
      </Link>
      <Link to="/standards" className="btn-ghost">
        See our standards
      </Link>
    </PageHero>

    <section className="border-b border-line bg-ink px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((metric, index) => (
          <Reveal key={metric.label} delay={index * 0.08}>
            <article className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/[0.03] text-gold">
                <metric.icon className="h-5 w-5" />
              </span>
              <p className="mt-8 font-display text-4xl font-medium tracking-tight text-bone">
                {metric.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-bone">{metric.label}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">{metric.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="border-b border-line bg-surface/40 px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Three methods, one verdict</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl md:text-6xl">
            No lot is released on a single reading.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            Purity alone can be misleading. We cross-check each batch with complementary methods so
            that identity, purity and safety are all confirmed before dispatch.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {METHODS.map((method, index) => (
            <Reveal key={method.title} delay={index * 0.08}>
              <article className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-8 transition-colors duration-500 hover:border-gold/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink">
                  <method.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-8 font-display text-2xl font-semibold text-bone">
                  {method.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{method.body}</p>
                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {method.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-[13px] text-bone/80">
                      <Check className="h-4 w-4 text-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-ink px-6 py-32 md:py-48">
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

        <Reveal>
          <p className="eyebrow">Why raw materials matter</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl">
            Exceptional peptides begin with exceptional inputs.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Many assume cheaper amino acids reduce production cost. In reality the opposite is often
            true. Purification, quality control and labour account for the majority of cost, and
            low-grade inputs inflate all three.
          </p>

          <div className="mt-9">
            <div className="flex h-3 w-full overflow-hidden rounded-full bg-white/[0.06]">
              <div className="h-full bg-gold" style={{ width: '33%' }} />
              <div className="h-full bg-sage" style={{ width: '67%' }} />
            </div>
            <div className="mt-3 flex flex-wrap justify-between gap-3 text-xs text-muted">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gold" />
                Raw materials, 30-35% of cost
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sage" />
                Purification, QC &amp; labour, 65-70% of cost
              </span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-bone">
                Low-grade inputs
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  'Reduced synthesis efficiency',
                  'Lower crude purity',
                  'Higher purification demand',
                  'Greater solvent consumption',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13px] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-bone">
                Premium-grade inputs
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  'Higher peptide yield',
                  'Improved batch consistency',
                  'Fewer process impurities',
                  'Easier, cleaner purification',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13px] text-bone/80">
                    <Check className="h-4 w-4 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="border-b border-line bg-surface/40 px-6 py-32 md:py-48">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">Documentation</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl">
            The certificate travels with the vial.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            A certificate of analysis is only useful if it describes your exact lot. We issue a COA
            per batch and match the batch number printed on the vial label to the document you
            receive.
          </p>
          <ul className="mt-8 space-y-4">
            {COA_CHECKS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-bone/85">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold text-ink">
                  <Check className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-line bg-surface p-7">
            <div className="flex items-center justify-between border-b border-line pb-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-ink">
                  <FileCheck2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-bone">
                    Certificate of Analysis
                  </p>
                  <p className="text-[11px] text-muted">Mindful Wellness Nigeria</p>
                </div>
              </div>
              <span className="rounded-full border border-sage/40 bg-sage/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-sage">
                Pass
              </span>
            </div>
            <dl className="mt-5 divide-y divide-line">
              {COA_ROWS.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between py-3">
                  <dt className="text-[13px] text-muted">{label}</dt>
                  <dd className="font-display text-[13px] font-semibold text-bone">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[11px] leading-relaxed text-muted">
              Sample certificate for illustration. Actual COAs are supplied per batch with HPLC and
              MS data attached.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="bg-ink px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Storage &amp; handling</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl md:text-6xl">
            Protect the chain, protect the result.
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {STORAGE.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/[0.03] text-gold">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-8 font-display text-xl font-semibold text-bone">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-gold/30 bg-gradient-to-r from-gold/10 to-transparent px-8 py-10 text-center md:flex-row md:text-left">
            <div>
              <p className="font-display text-2xl font-semibold text-bone">
                Source with documented confidence.
              </p>
              <p className="mt-2 text-sm text-muted">
                Every catalogue item ships with analytical documentation and cold-chain packing.
              </p>
            </div>
            <Link to="/shop" className="btn-primary flex-shrink-0">
              Browse the catalogue
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </>
)
