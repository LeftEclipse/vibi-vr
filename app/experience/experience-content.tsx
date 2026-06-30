'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Globe, Users, Sparkles, Hand, ArrowRight } from 'lucide-react'
import { PageShell } from '@/components/page-shell'
import { ScrollReveal, StaggerGroup, staggerItem } from '@/components/scroll-reveal'
import { SiteFooter } from '@/components/sections/site-footer'

const pillars = [
  { icon: Globe, title: 'Boundless Worlds', text: 'Travel through generated environments that respond to your gaze and gestures in real time.' },
  { icon: Users, title: 'Shared Presence', text: 'Meet collaborators as lifelike spatial avatars, anchored to a common physical space.' },
  { icon: Sparkles, title: 'Living Intelligence', text: 'A spatial assistant surfaces the right information exactly where and when you need it.' },
  { icon: Hand, title: 'Natural Interaction', text: 'Reach out and touch the digital — every object responds to your hands intuitively.' },
]

const steps = [
  { n: '01', title: 'Put it on', text: 'Slip on Vision One and your space instantly maps into a living spatial canvas.' },
  { n: '02', title: 'Look to navigate', text: 'Your eyes become the cursor — glance to select, pinch to confirm.' },
  { n: '03', title: 'Build in space', text: 'Pull apps out of thin air and arrange them around your room.' },
  { n: '04', title: 'Share the moment', text: 'Invite others into your scene and create together in real time.' },
]

export function ExperienceContent() {
  return (
    <PageShell
      eyebrow="The Experience"
      title="Step inside the spatial layer"
      description="VIMI experiences blur the boundary between thought and interface — immersive, intelligent, and unmistakably human."
    >
      {/* Immersive banner */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal direction="up">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-surface">
              <Image
                src="/images/experience-spatial.png"
                alt="Person interacting with holographic spatial interfaces"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-8 left-8 max-w-sm"
              >
                <p className="font-heading text-2xl font-semibold text-surface-foreground md:text-3xl text-balance">
                  Reality, rendered around you
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-background pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="max-w-2xl font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl text-balance">
              Four ways the world opens up
            </h2>
          </ScrollReveal>
          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2" amount={0.15}>
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={staggerItem}
                className="group rounded-3xl border border-border bg-card p-8 transition-colors hover:border-orange/50"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-foreground text-background transition-colors group-hover:bg-orange group-hover:text-surface">
                  <p.icon className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{p.text}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* How it works — stepped flow */}
      <section className="relative overflow-hidden bg-surface py-20 text-surface-foreground md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-orange/15 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl text-balance">
              How an experience unfolds
            </h2>
          </ScrollReveal>
          <StaggerGroup className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2" amount={0.1}>
            {steps.map((s) => (
              <motion.div
                key={s.n}
                variants={staggerItem}
                className="bg-surface p-8"
              >
                <span className="font-mono text-sm text-orange">{s.n}</span>
                <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-surface-foreground/65">{s.text}</p>
              </motion.div>
            ))}
          </StaggerGroup>

          <ScrollReveal delay={0.1}>
            <a
              href="#launch"
              className="group mt-12 inline-flex items-center gap-3 rounded-2xl border border-orange/60 px-7 py-4 text-base font-medium glow-ring transition-colors hover:bg-orange/10"
            >
              Experience the demo
              <ArrowRight className="size-4 text-orange transition-transform group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </PageShell>
  )
}
