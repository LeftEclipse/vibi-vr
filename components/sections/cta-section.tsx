'use client'

import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/scroll-reveal'

export function CtaSection() {
  return (
    <section id="launch" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal direction="up" amount={0.3}>
          <div className="relative overflow-hidden rounded-[2rem] bg-surface px-8 py-16 text-center text-surface-foreground md:px-16 md:py-24">
            {/* animated ambient glows */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute left-1/4 top-0 size-72 -translate-x-1/2 rounded-full bg-orange/30 blur-3xl"
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="pointer-events-none absolute bottom-0 right-1/4 size-80 translate-x-1/2 rounded-full bg-orange/20 blur-3xl"
            />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-surface-foreground/70">
                Built for what next
              </span>
              <h2 className="mx-auto mt-6 max-w-2xl font-heading text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl text-balance">
                Step into a reality without limits
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-surface-foreground/70">
                Join the waitlist and be among the first to experience spatial
                computing reimagined by VIMI Studios.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href="#launch"
                  className="flex items-center gap-3 rounded-2xl bg-orange px-8 py-4 text-base font-semibold text-surface glow-ring"
                >
                  Get Early Access
                  <ArrowRight className="size-4" />
                </motion.a>
                <a
                  href="#demo"
                  className="group flex items-center gap-3 text-base font-medium text-surface-foreground"
                >
                  <span className="grid size-9 place-items-center rounded-full border border-white/25 transition-colors group-hover:border-orange group-hover:text-orange">
                    <Play className="size-3.5 fill-current" />
                  </span>
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
