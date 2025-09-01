import { Navigation } from "@/components/navigation"
import { GalleryHero } from "@/components/gallery-hero"
import { GalleryGrid } from "@/components/gallery-grid"
import { BeforeAfterSection } from "@/components/before-after-section"
import { GalleryCategories } from "@/components/gallery-categories"
import { Footer } from "@/components/footer"
import { WaveSplitter, DoubleLineSplitter } from "@/components/section-splitters"

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <GalleryHero />
      <GalleryCategories />
      <GalleryGrid />
      <WaveSplitter />
      <BeforeAfterSection />
      <Footer />
    </main>
  )
}
