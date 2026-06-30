import { ViNavbar } from '@/components/vi-navbar'
import { ViHero } from '@/components/vi-hero'
import { ProductSection } from '@/components/sections/product-section'
import { AboutSection } from '@/components/sections/about-section'
import { SiteFooter } from '@/components/sections/site-footer'

export default function Page() {
  return (
    <main className="bg-background">
      {/* Hero — framed dark surface */}
      <section className="flex min-h-svh items-center justify-center p-3 sm:p-6 lg:p-8">
        <div className="relative flex min-h-[calc(100svh-1.5rem)] w-full max-w-[1400px] flex-col overflow-hidden rounded-3xl bg-surface text-surface-foreground shadow-2xl shadow-black/25 sm:min-h-[calc(100svh-3rem)] lg:aspect-[16/10] lg:min-h-0">
          <ViNavbar />
          <ViHero />
        </div>
      </section>

      <ProductSection />
      <AboutSection />
      <SiteFooter />
    </main>
  )
}
