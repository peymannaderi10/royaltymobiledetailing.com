import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturedServices } from "@/components/featured-services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { QuickStats } from "@/components/quick-stats"
import { RecentWork } from "@/components/recent-work"
import { CustomerReviews } from "@/components/customer-reviews"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <QuickStats />
      <FeaturedServices />
      <WhyChooseUs />
      <RecentWork />
      <CustomerReviews />
      <CallToAction />
      <Footer />
    </main>
  )
}
