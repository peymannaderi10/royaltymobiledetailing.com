import { Navigation } from "@/components/navigation"
import { ReviewsHero } from "@/components/reviews-hero"
import { ReviewsSection } from "@/components/reviews-section"
import { Footer } from "@/components/footer"

export default function ReviewsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ReviewsHero />
      <ReviewsSection />
      <Footer />
    </main>
  )
} 