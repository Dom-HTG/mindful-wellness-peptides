import { useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { EASE, prefersReducedMotion, REVEAL_START } from '../lib/motion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type Variant = 'up' | 'fade' | 'scale' | 'left' | 'right'

const FROM: Record<Variant, gsap.TweenVars> = {
  up: { y: 44 },
  fade: { y: 0 },
  scale: { scale: 0.965, y: 12 },
  left: { x: -36, y: 0 },
  right: { x: 36, y: 0 },
}

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  variant?: Variant
  stagger?: number
  start?: string
}

export const Reveal = ({
  children,
  className,
  delay = 0,
  variant = 'up',
  stagger = 0,
  start = REVEAL_START,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = ref.current
      if (!root) return
      const targets: gsap.TweenTarget = stagger > 0 ? Array.from(root.children) : root

      if (prefersReducedMotion()) {
        gsap.set(targets, { autoAlpha: 1, clearProps: 'transform' })
        return
      }

      gsap.from(targets, {
        ...FROM[variant],
        autoAlpha: 0,
        duration: stagger > 0 ? 0.7 : 0.85,
        delay,
        stagger,
        ease: EASE.out,
        scrollTrigger: { trigger: root, start },
      })
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
