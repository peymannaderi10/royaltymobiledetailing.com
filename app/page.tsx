import { Navigation } from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FeaturedServices from "@/components/featured-services"
import WhyChooseUs from "@/components/why-choose-us"
import { CustomerReviews } from "@/components/customer-reviews"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import { GeometricSplitter, WaveSplitter, DoubleLineSplitter, AccentDotSplitter, DotsSplitter } from "@/components/section-splitters"
export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturedServices />
      <GeometricSplitter />
      <WhyChooseUs />
      <WaveSplitter />
      <CustomerReviews />
      <AccentDotSplitter />
      <CallToAction />
      <Footer />
    </main>
  )
}

