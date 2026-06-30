'use client'

import { motion } from 'framer-motion'
import { Crosshair, Layers, CircleDashed } from 'lucide-react'

const stats = [
  { icon: Crosshair, value: '120°', label: 'Field of View' },
  { icon: Layers, value: '< 8ms', label: 'Ultra Low Latency' },
  { icon: CircleDashed, value: 'Spatial', label: 'Interface' },
]

export function SpatialCards() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {/* SPATIAL UI card with animated waveform */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur-md"
      >
        <div className="relative">
          <p className="text-lg font-semibold text-surface-foreground">
            SPATIAL UI
          </p>
          <p className="mt-2 text-sm leading-relaxed text-surface-foreground/65">
            Adaptive Interface
            <br />
            Real-time Rendering
          </p>

          <svg
            className="pointer-events-none absolute -right-2 top-0 h-20 w-40"
            viewBox="0 0 160 80"
            fill="none"
          >
            <path
              d="M0 40 C 30 40, 35 8, 55 8 S 80 40, 100 40 S 125 72, 145 72 S 160 40, 160 40"
              stroke="white"
              strokeOpacity="0.25"
              strokeWidth="1.5"
            />
            <path
              d="M0 40 C 30 40, 35 8, 55 8 S 80 40, 100 40 S 125 72, 145 72 S 160 40, 160 40"
              stroke="var(--orange)"
              strokeWidth="2"
              className="animate-wave"
            />
          </svg>
        </div>
      </motion.div>

      {/* Stats card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-5 rounded-2xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur-md"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.12 }}
            className="flex items-center gap-4"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/15 text-surface-foreground/80">
              <s.icon className="size-5" strokeWidth={1.5} />
            </span>
            <div>
              <p className="text-lg font-semibold leading-tight text-surface-foreground">
                {s.value}
              </p>
              <p className="text-sm text-surface-foreground/60">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
