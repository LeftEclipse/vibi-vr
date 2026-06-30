'use client'

import type { ReactNode } from 'react'
import { ViNavbar } from '@/components/vi-navbar'
import { ScrollReveal } from '@/components/scroll-reveal'

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: ReactNode
  description: string
  children: ReactNode
}) {
  return (
    <main className="bg-background">
      {/* Dark framed header with navbar */}
      <section className="p-3 sm:p-6 lg:p-8">
        <div className="relative overflow-hidden rounded-3xl bg-surface text-surface-foreground shadow-2xl shadow-black/25">
          {/* ambient glows */}
          <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-orange/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 size-80 rounded-full bg-orange/10 blur-3xl" />

          <div className="relative">
            <ViNavbar />
            <div className="px-6 pb-24 pt-10 text-center md:px-10 md:pb-32 md:pt-16">
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-surface-foreground/70">
                  <span className="size-1.5 rounded-full bg-orange animate-pulse-dot" />
                  {eyebrow}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h1 className="mx-auto mt-6 max-w-4xl font-heading text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl text-balance">
                  {title}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.16}>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-surface-foreground/70">
                  {description}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {children}
    </main>
  )
}
