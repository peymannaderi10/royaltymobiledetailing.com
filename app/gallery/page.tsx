import { Navigation } from "@/components/navigation"
import { GalleryHero } from "@/components/gallery-hero"
import BeforeAfterToggle from "@/components/before-after-toggle"
import { Footer } from "@/components/footer"
import { WaveSplitter, DoubleLineSplitter } from "@/components/section-splitters"

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <GalleryHero />
      <WaveSplitter />
      <BeforeAfterToggle />
      <Footer />
    </main>
  )
}
