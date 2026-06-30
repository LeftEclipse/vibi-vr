'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Product', href: '/product' },
  { label: 'Experience', href: '/experience' },
  { label: 'About', href: '/about' },
]

export function ViNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-30 flex items-center justify-between px-6 py-5 md:px-10 md:py-7"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-4">
        <span className="font-mono text-3xl font-bold leading-none tracking-tight text-surface-foreground md:text-4xl">
          VI
        </span>
        <span className="hidden h-7 w-px bg-surface-foreground/25 sm:block" />
        <span className="hidden text-base text-surface-foreground/70 sm:block">
          VIMI Studios
        </span>
      </Link>

      {/* Desktop nav */}
      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
        {links.map((link) => {
          const active = pathname === link.href
          return (
            <Link
              key={link.label}
              href={link.href}
              className="group relative text-[15px] text-surface-foreground/80 transition-colors hover:text-surface-foreground"
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-orange transition-all duration-300 ${
                  active ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
              {active && (
                <span className="ml-2 inline-block size-1.5 rounded-full bg-orange align-middle animate-pulse-dot" />
              )}
            </Link>
          )
        })}
      </nav>

      <div className="flex items-center gap-3">
        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          href="#launch"
          className="hidden items-center gap-2 rounded-xl border border-orange/60 px-5 py-2.5 text-sm font-medium text-surface-foreground glow-ring transition-colors hover:bg-orange/10 sm:flex"
        >
          Launch
          <ArrowRight className="size-4 text-orange" />
        </motion.a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="grid size-11 place-items-center rounded-xl text-surface-foreground lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-3 top-[88px] z-40 rounded-3xl bg-card p-8 shadow-2xl shadow-black/20 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-7 py-4">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-xl font-medium uppercase tracking-wide text-card-foreground"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <a
              href="#launch"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-surface py-4 text-base font-medium text-surface-foreground glow-ring"
            >
              Launch <ArrowRight className="size-4 text-orange" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
