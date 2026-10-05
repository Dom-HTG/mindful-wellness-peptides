type VialVisualProps = {
  name: string
  purity: string
  accent: string
  size?: 'sm' | 'md' | 'lg'
}

const SCALE = {
  sm: { body: 'h-28 w-16', label: 'bottom-2', title: 'text-[8px]', meta: 'text-[7px]' },
  md: { body: 'h-44 w-24', label: 'bottom-4', title: 'text-[10px]', meta: 'text-[9px]' },
  lg: { body: 'h-56 w-28', label: 'bottom-5', title: 'text-[11px]', meta: 'text-[10px]' },
}

export const VialVisual = ({ name, purity, accent, size = 'md' }: VialVisualProps) => {
  const scale = SCALE[size]

  return (
    <div className="relative flex h-full w-full items-end justify-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(120% 80% at 50% 8%, ${accent}2e 0%, transparent 62%)`,
        }}
      />
      <div className="relative mb-6 flex flex-col items-center">
        <div className="h-3.5 w-9 rounded-t-sm bg-gradient-to-b from-zinc-200 to-zinc-500 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.5)]" />
        <div className="h-2 w-12 rounded-sm bg-gradient-to-b from-zinc-300/80 to-zinc-600/80" />
        <div
          className={`relative ${scale.body} rounded-b-[28px] rounded-t-md border border-white/15 bg-gradient-to-b from-white/12 to-white/[0.02] backdrop-blur-sm`}
        >
          <div
            className="absolute inset-x-[5px] bottom-[5px] top-14 rounded-b-[22px]"
            style={{
              background: `linear-gradient(180deg, ${accent}d9 0%, ${accent}4d 100%)`,
            }}
          />
          <div className="absolute left-3 top-5 h-20 w-1.5 rounded-full bg-white/30 blur-[1px]" />
          <div
            className={`absolute inset-x-2.5 ${scale.label} rounded-lg border border-white/10 bg-ink/75 px-2 py-2 text-center backdrop-blur`}
          >
            <p
              className={`font-display ${scale.title} font-semibold uppercase leading-tight tracking-wide text-bone`}
            >
              {name}
            </p>
            <p className={`${scale.meta} mt-0.5 font-medium tracking-[0.18em] text-gold`}>
              {purity}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
