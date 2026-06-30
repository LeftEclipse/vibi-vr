'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Cpu, Eye, Gauge, Layers3, Battery, Fingerprint } from 'lucide-react'
import { PageShell } from '@/components/page-shell'
import { ScrollReveal, StaggerGroup, staggerItem } from '@/components/scroll-reveal'
import { CtaSection } from '@/components/sections/cta-section'
import { SiteFooter } from '@/components/sections/site-footer'

const specs = [
  { label: 'Display', value: 'Dual 8K micro-OLED' },
  { label: 'Field of View', value: '120° diagonal' },
  { label: 'Latency', value: '< 8ms motion-to-photon' },
  { label: 'Compute', value: 'VIMI Neural M3 chip' },
  { label: 'Tracking', value: '12-camera inside-out' },
  { label: 'Battery', value: 'Up to 4 hours active' },
]

const features = [
  { icon: Eye, title: 'Immersive Vision', text: 'Dual 8K micro-OLED panels deliver a seamless window into mixed reality with true-to-life color.' },
  { icon: Gauge, title: 'Ultra Low Latency', text: 'Sub-8ms motion-to-photon response keeps every movement perfectly in sync with your senses.' },
  { icon: Cpu, title: 'Neural Compute', text: 'The on-device VIMI Neural chip renders and understands your world in real time.' },
  { icon: Layers3, title: 'Spatial Layers', text: 'Stack and arrange digital interfaces naturally across your physical environment.' },
  { icon: Fingerprint, title: 'Eye & Hand Tracking', text: 'Navigate effortlessly with your gaze and natural gestures — no controllers required.' },
  { icon: Battery, title: 'All-Day Comfort', text: 'A balanced 380g chassis and swappable battery designed for extended sessions.' },
]

const highlights = [
  { value: '120°', label: 'Field of View' },
  { value: '8K', label: 'Per Eye' },
  { value: '< 8ms', label: 'Latency' },
  { value: '380g', label: 'Featherlight' },
]

export function ProductContent() {
  return (
    <PageShell
      eyebrow="The Product"
      title="VIMI Vision One"
      description="A spatial headset engineered to dissolve the line between the digital and the physical — so your world becomes the interface."
    >
      {/* Hero product image */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal direction="up">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-surface">
              <Image
                src="/images/product-headset.png"
                alt="VIMI Vision One headset"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent" />
            </div>
          </ScrollReveal>

          <StaggerGroup className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4" amount={0.2}>
            {highlights.map((h) => (
              <motion.div
                key={h.label}
                variants={staggerItem}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <p className="font-heading text-4xl font-semibold text-orange">{h.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{h.label}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Feature grid */}
      <section className="bg-background pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="max-w-2xl font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl text-balance">
              Every detail, engineered for presence
            </h2>
          </ScrollReveal>
          <StaggerGroup className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3" amount={0.15}>
            {features.map((f) => (
              <motion.div key={f.title} variants={staggerItem}>
                <span className="grid size-12 place-items-center rounded-xl bg-foreground text-background">
                  <f.icon className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{f.text}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Specs table */}
      <section className="bg-surface py-20 text-surface-foreground md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Technical specifications
            </h2>
          </ScrollReveal>
          <StaggerGroup className="mt-10 divide-y divide-white/10 border-y border-white/10" amount={0.1}>
            {specs.map((s) => (
              <motion.div
                key={s.label}
                variants={staggerItem}
                className="flex items-center justify-between py-5"
              >
                <span className="text-surface-foreground/60">{s.label}</span>
                <span className="text-right text-lg font-medium">{s.value}</span>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaSection />
      <SiteFooter />
    </PageShell>
  )
}
