import type { Metadata } from 'next'
import { ProductContent } from './product-content'

export const metadata: Metadata = {
  title: 'Product — VIMI Studios',
  description:
    'VIMI Vision One: dual 8K micro-OLED, sub-8ms latency, on-device neural compute. The headset engineered to dissolve the line between worlds.',
}

export default function ProductPage() {
  return <ProductContent />
}
