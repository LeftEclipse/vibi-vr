'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Compass, Heart, Zap } from 'lucide-react'
import { PageShell } from '@/components/page-shell'
import { ScrollReveal, StaggerGroup, staggerItem } from '@/components/scroll-reveal'
import { SiteFooter } from '@/components/sections/site-footer'

const stats = [
  { value: '2019', label: 'Founded in San Francisco' },
  { value: '48', label: 'Spatial patents filed' },
  { value: '12M+', label: 'Hours rendered in MR' },
  { value: '30', label: 'Countries shipping' },
]

const values = [
  { icon: Compass, title: 'Human First', text: 'Technology should adapt to people, never the other way around. We design for perception, not screens.' },
  { icon: Zap, title: 'Relentless Craft', text: 'Every millisecond and every pixel is fought for. Presence lives in the details.' },
  { icon: Heart, title: 'Open Worlds', text: 'We build platforms, not walls — spatial computing belongs to everyone who creates.' },
]

const team = [
  { name: 'Aria Chen', role: 'Founder & CEO' },
  { name: 'Marcus Vale', role: 'Head of Optics' },
  { name: 'Lena Okafor', role: 'Spatial Design Lead' },
  { name: 'Diego Ramos', role: 'Neural Systems' },
]

export function AboutContent() {
  return (
    <PageShell
      eyebrow="About Us"
      title="We build the interface for what comes next"
      description="VIMI Studios is a collective of designers, engineers, and dreamers crafting spatial computing that feels like a natural extension of human perception."
    >
      {/* Mission + image */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal direction="right">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface">
              <Image
                src="/images/about-studio.png"
                alt="VIMI Studios workspace"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <div>
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-4xl text-balance">
                Our mission is to make the digital world feel real
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We started VIMI in a small studio with a single belief: that the
                screen was holding humanity back. Reality is spatial, and the
                tools we use should be too.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.18}>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Today we bring together optics, neural compute, and human-centered
                design to dissolve the boundary between the physical and the
                digital — building experiences that feel less like technology and
                more like magic.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface py-20 text-surface-foreground md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <StaggerGroup className="grid grid-cols-2 gap-8 md:grid-cols-4" amount={0.2}>
            {stats.map((s) => (
              <motion.div key={s.label} variants={staggerItem} className="text-center">
                <p className="font-heading text-4xl font-semibold text-orange md:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-surface-foreground/60">{s.label}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="max-w-2xl font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl text-balance">
              What we stand for
            </h2>
          </ScrollReveal>
          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3" amount={0.15}>
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={staggerItem}
                className="rounded-3xl border border-border bg-card p-8"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-foreground text-background">
                  <v.icon className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{v.text}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Team */}
      <section className="bg-background pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              The people behind the lens
            </h2>
          </ScrollReveal>
          <StaggerGroup className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4" amount={0.15}>
            {team.map((m) => (
              <motion.div
                key={m.name}
                variants={staggerItem}
                className="group rounded-3xl border border-border bg-card p-6"
              >
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-surface text-surface-foreground">
                  <span className="font-heading text-3xl font-semibold text-orange">
                    {m.name.split(' ').map((p) => p[0]).join('')}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <SiteFooter />
    </PageShell>
  )
}
