import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const EASE = {
  out: 'power3.out',
  expo: 'power4.out',
  smooth: 'power2.out',
} as const

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const REVEAL_START = 'top 85%'

/**
 * Gentle scroll reveal that always leaves the element in its final state.
 * Reduced motion keeps opacity/color but drops the movement.
 */
type RevealOptions = {
  y?: number
  x?: number
  scale?: number
  opacity?: number
  duration?: number
  delay?: number
  stagger?: number
  ease?: string
  start?: string
  trigger?: Element | null
  targets?: gsap.TweenTarget
}

export const reveal = (targets: gsap.TweenTarget, options: RevealOptions = {}) => {
  const {
    y = 40,
    x = 0,
    scale = 1,
    opacity = 0,
    duration = 0.8,
    delay = 0,
    stagger = 0,
    ease = EASE.out,
    start = REVEAL_START,
    trigger,
  } = options

  if (prefersReducedMotion()) {
    gsap.set(targets, { autoAlpha: 1, clearProps: 'transform,filter' })
    return
  }

  gsap.from(targets, {
    y,
    x,
    scale,
    autoAlpha: opacity,
    duration,
    delay,
    stagger,
    ease,
    scrollTrigger: { trigger: (trigger ?? targets) as gsap.DOMTarget, start },
  })
}
