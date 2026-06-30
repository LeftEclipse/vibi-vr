'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

const directions = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
  none: { x: 0, y: 0 },
}

export function ScrollReveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  amount = 0.3,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  direction?: keyof typeof directions
  delay?: number
  duration?: number
  amount?: number
  as?: 'div' | 'section' | 'li' | 'span'
}) {
  const offset = directions[direction]
  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease },
    },
  }

  const MotionTag = motion[as] as typeof motion.div

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </MotionTag>
  )
}

/** Container that staggers its ScrollReveal-style children */
export function StaggerGroup({
  children,
  className,
  stagger = 0.12,
  amount = 0.3,
}: {
  children: ReactNode
  className?: string
  stagger?: number
  amount?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}
