'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Cpu, Eye, Gauge, Layers3 } from 'lucide-react'
import { ScrollReveal, StaggerGroup, staggerItem } from '@/components/scroll-reveal'
import { motion } from 'framer-motion'

const features = [
  { icon: Eye, title: 'Immersive Vision', text: 'Dual 8K micro-OLED panels deliver a seamless window into mixed reality.' },
  { icon: Gauge, title: 'Ultra Low Latency', text: 'Sub-8ms motion-to-photon keeps every movement perfectly in sync.' },
  { icon: Cpu, title: 'Neural Compute', text: 'On-device spatial intelligence renders your world in real time.' },
  { icon: Layers3, title: 'Spatial Layers', text: 'Stack digital interfaces naturally across your physical space.' },
]

export function ProductSection() {
  return (
    <section id="product" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual */}
          <ScrollReveal direction="right" amount={0.2}>
            <div className="group relative aspect-square overflow-hidden rounded-3xl bg-surface">
              <Image
                src="/images/product-headset.png"
                alt="VIMI mixed-reality headset"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-5 left-5 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md"
              >
                <p className="text-sm font-medium text-surface-foreground">VIMI Vision One</p>
                <p className="text-xs text-surface-foreground/60">Spatial Headset</p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Copy */}
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                <span className="size-1.5 rounded-full bg-orange" />
                The Product
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl text-balance">
                Engineered to dissolve the line between worlds
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
                Every component of VIMI Vision One is built to make digital and
                physical reality feel like one continuous space.
              </p>
            </ScrollReveal>

            <StaggerGroup className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2" amount={0.2}>
              {features.map((f) => (
                <motion.div key={f.title} variants={staggerItem}>
                  <span className="grid size-11 place-items-center rounded-xl bg-foreground text-background">
                    <f.icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </motion.div>
              ))}
            </StaggerGroup>

            <ScrollReveal delay={0.1}>
              <Link
                href="/product"
                className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-foreground px-7 py-4 text-base font-medium text-background transition-transform hover:scale-[1.03]"
              >
                Explore the Product
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
