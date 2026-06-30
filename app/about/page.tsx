import type { Metadata } from 'next'
import { AboutContent } from './about-content'

export const metadata: Metadata = {
  title: 'About — VIMI Studios',
  description:
    'VIMI Studios is a collective of designers and engineers building the interface for what comes next. Meet the team and our mission.',
}

export default function AboutPage() {
  return <AboutContent />
}
