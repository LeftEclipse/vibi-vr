'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Vision One', href: '/product' },
      { label: 'Experience', href: '/experience' },
      { label: 'Spatial UI', href: '/product' },
      { label: 'Specs', href: '/product' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/about' },
      { label: 'Press', href: '/about' },
      { label: 'Contact', href: '/about' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Developers', href: '/experience' },
      { label: 'Documentation', href: '/experience' },
      { label: 'Support', href: '/about' },
      { label: 'Community', href: '/about' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-surface text-surface-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="font-mono text-3xl font-bold leading-none tracking-tight">VI</span>
              <span className="h-7 w-px bg-surface-foreground/25" />
              <span className="text-base text-surface-foreground/70">VIMI Studios</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-surface-foreground/60">
              Crafting the interface for what comes next. Mixed reality,
              reimagined for the way humans actually see.
            </p>
            <a
              href="#launch"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl border border-orange/60 px-5 py-2.5 text-sm font-medium glow-ring transition-colors hover:bg-orange/10"
            >
              Get Early Access
              <ArrowRight className="size-4 text-orange transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-surface-foreground/50">
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-surface-foreground/75 transition-colors hover:text-orange"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-surface-foreground/50 sm:flex-row">
          <p>© {new Date().getFullYear()} VIMI Studios. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="transition-colors hover:text-surface-foreground">Privacy</Link>
            <Link href="/about" className="transition-colors hover:text-surface-foreground">Terms</Link>
            <Link href="/about" className="transition-colors hover:text-surface-foreground">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
