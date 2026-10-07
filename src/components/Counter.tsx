import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { EASE, prefersReducedMotion } from '../lib/motion'

type CounterProps = {
  value: number
  decimals?: number
  suffix?: string
  prefix?: string
  className?: string
}

export const Counter = ({
  value,
  decimals = 0,
  suffix = '',
  prefix = '',
  className,
}: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      const render = (current: number) => {
        el.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`
      }
      if (prefersReducedMotion()) {
        render(value)
        return
      }
      const state = { current: 0 }
      gsap.to(state, {
        current: value,
        duration: 1.5,
        ease: EASE.smooth,
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        onUpdate: () => render(state.current),
      })
    },
    { scope: ref },
  )

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  )
}
