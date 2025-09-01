import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturedServices } from "@/components/featured-services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { QuickStats } from "@/components/quick-stats"
import { RecentWork } from "@/components/recent-work"
import { CustomerReviews } from "@/components/customer-reviews"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import { LineSplitter, DotsSplitter, GeometricSplitter, WaveSplitter, DoubleLineSplitter, AccentDotSplitter } from "@/components/section-splitters"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <QuickStats />
      <LineSplitter />
      <FeaturedServices />
      <DotsSplitter />
      <WhyChooseUs />
      <GeometricSplitter />
      <RecentWork />
      <WaveSplitter />
      <CustomerReviews />
      <AccentDotSplitter />
      <CallToAction />
      <Footer />
    </main>
  )
}
