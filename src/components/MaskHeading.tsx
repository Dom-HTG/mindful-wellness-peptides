import { createElement, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { EASE, prefersReducedMotion } from '../lib/motion'

type MaskHeadingProps = {
  children: ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3'
  delay?: number
  once?: boolean
}

export const MaskHeading = ({
  children,
  className,
  as = 'h2',
  delay = 0,
  once = true,
}: MaskHeadingProps) => {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.from(ref.current, {
        clipPath: 'inset(0% 0% 108% 0%)',
        y: 26,
        duration: 1.05,
        delay,
        ease: EASE.expo,
        scrollTrigger: { trigger: ref.current, start: 'top 88%', once },
      })
    },
    { scope: ref },
  )

  return createElement(
    as,
    {
      ref,
      className,
      style: { clipPath: 'inset(0% 0% 0% 0%)' },
    },
    children,
  )
}
