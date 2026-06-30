import type { Metadata } from 'next'
import { ExperienceContent } from './experience-content'

export const metadata: Metadata = {
  title: 'Experience — VIMI Studios',
  description:
    'Step inside spatial computing. Explore immersive worlds, collaborative spaces, and real-time intelligence with VIMI Studios.',
}

export default function ExperiencePage() {
  return <ExperienceContent />
}
