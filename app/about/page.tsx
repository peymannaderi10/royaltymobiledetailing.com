import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { TeamSection } from "@/components/team-section"
import { AboutValues } from "@/components/about-values"
import { AboutStats } from "@/components/about-stats"
import { Footer } from "@/components/footer"
import { DotsSplitter, GeometricSplitter, WaveSplitter, DoubleLineSplitter } from "@/components/section-splitters"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <AboutStory />
      <DotsSplitter />
      <AboutStats />
      <GeometricSplitter />
      <AboutValues />
      <WaveSplitter />
      <TeamSection />
      <Footer />
    </main>
  )
}
