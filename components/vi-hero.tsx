'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { SpatialCards } from './spatial-cards'

const ease = [0.22, 1, 0.36, 1] as const

export function ViHero() {
  return (
    <section className="relative grid flex-1 grid-cols-1 items-center gap-10 px-6 pb-10 pt-4 md:px-10 lg:grid-cols-12 lg:gap-6">
      {/* Hero portrait image — fills the surface */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <Image
          src="/images/vr-hero.png"
          alt="Woman wearing a glowing orange mixed-reality headset"
          fill
          priority
          className="object-cover object-[60%_center] lg:object-[50%_20%]"
        />
        {/* gradient scrims for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-surface/40" />
      </motion.div>

      {/* Left copy */}
      <div className="relative z-10 lg:col-span-7 lg:pr-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm"
        >
          <span className="size-2 rounded-full bg-orange animate-pulse-dot" />
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-surface-foreground/80">
            Mixed Reality, Reimagined
          </span>
        </motion.div>

        <h1 className="mt-6 font-heading text-6xl font-semibold leading-[0.92] tracking-tight text-surface-foreground sm:text-7xl lg:text-8xl">
          {['SEE', 'BEYOND', 'REALITY'].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.13, ease }}
              className="block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease }}
          className="mt-7 max-w-md text-lg leading-relaxed text-surface-foreground/70"
        >
          Discover a new layer of digital interaction through immersive vision,
          real-time intelligence, and spatial design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease }}
          className="mt-9 flex flex-wrap items-center gap-5"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#product"
            className="flex items-center gap-3 rounded-2xl bg-surface px-7 py-4 text-base font-medium text-surface-foreground glow-ring ring-1 ring-white/10"
          >
            Explore Now
            <ArrowRight className="size-4 text-orange" />
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
        </motion.div>
      </div>

      {/* Right column: spatial cards */}
      <div className="relative z-10 flex justify-start lg:col-span-5 lg:justify-end">
        <SpatialCards />
      </div>

      {/* Bottom right meta */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="relative z-10 col-span-full flex items-center justify-between lg:absolute lg:bottom-6 lg:right-10 lg:col-auto lg:w-auto lg:gap-10"
      >
        <div className="flex items-center gap-2">
          <span className="h-1 w-8 rounded-full bg-orange" />
          {[...Array(5)].map((_, i) => (
            <span key={i} className="h-1 w-8 rounded-full bg-white/20" />
          ))}
        </div>
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-surface-foreground/55">
          Built for what next
        </span>
      </motion.div>
    </section>
  )
}
