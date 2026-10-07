import { FlaskConical, PackageCheck, ShieldCheck, Snowflake, Wallet } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Item = { label: string; icon: LucideIcon }

const ITEMS: Item[] = [
  { label: 'HPLC Verified Purity', icon: FlaskConical },
  { label: 'Mass Spec Confirmed', icon: ShieldCheck },
  { label: 'Cold-chain Nationwide', icon: Snowflake },
  { label: 'Pay in Naira', icon: Wallet },
  { label: 'Batch COA Included', icon: PackageCheck },
  { label: 'Lagos · Abuja · Port Harcourt', icon: PackageCheck },
  { label: 'Discreet Packaging', icon: ShieldCheck },
  { label: 'Same-day Dispatch', icon: PackageCheck },
]

const Row = () => (
  <div className="flex shrink-0 items-center">
    {ITEMS.map((item) => (
      <span key={item.label} className="flex items-center gap-3 px-8">
        <item.icon className="h-4 w-4 text-gold" />
        <span className="whitespace-nowrap font-display text-sm font-medium uppercase tracking-[0.22em] text-bone/80">
          {item.label}
        </span>
      </span>
    ))}
  </div>
)

export const Marquee = () => (
  <div className="group relative border-y border-line bg-surface/60 py-6">
    <div className="hairline-t pointer-events-none absolute inset-x-0 top-0 h-px opacity-60" />
    <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
      <Row />
      <Row />
    </div>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
  </div>
)
