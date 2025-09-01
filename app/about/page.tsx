import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { TeamSection } from "@/components/team-section"
import { AboutValues } from "@/components/about-values"
import { AboutStats } from "@/components/about-stats"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutValues />
      <TeamSection />
      <Footer />
    </main>
  )
}
