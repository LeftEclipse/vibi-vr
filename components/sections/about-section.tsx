'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { ScrollReveal, StaggerGroup, staggerItem } from '@/components/scroll-reveal'

const stats = [
  { value: '2019', label: 'Founded in San Francisco' },
  { value: '48', label: 'Spatial patents filed' },
  { value: '12M+', label: 'Hours rendered in MR' },
  { value: '30', label: 'Countries shipping' },
]

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-surface py-24 text-surface-foreground md:py-32">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 size-96 rounded-full bg-orange/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 size-80 rounded-full bg-orange/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-surface-foreground/70">
            <span className="size-1.5 rounded-full bg-orange animate-pulse-dot" />
            About Us
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl text-balance">
            We build the interface for what comes next
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-surface-foreground/70">
            VIMI Studios is a collective of designers, engineers, and dreamers
            crafting spatial computing experiences that feel less like technology
            and more like a natural extension of human perception.
          </p>
        </ScrollReveal>

        <StaggerGroup className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4" amount={0.2}>
          {stats.map((s) => (
            <motion.div key={s.label} variants={staggerItem} className="text-center">
              <p className="font-heading text-4xl font-semibold text-orange md:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-surface-foreground/60">{s.label}</p>
            </motion.div>
          ))}
        </StaggerGroup>

        <ScrollReveal delay={0.1}>
          <Link
            href="/about"
            className="group mt-14 inline-flex items-center gap-3 rounded-2xl border border-orange/60 px-7 py-4 text-base font-medium text-surface-foreground glow-ring transition-colors hover:bg-orange/10"
          >
            Our Story
            <ArrowRight className="size-4 text-orange transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
