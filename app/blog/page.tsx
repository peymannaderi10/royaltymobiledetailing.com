import { Navigation } from "@/components/navigation"
import { BlogHero } from "@/components/blog-hero"
import { BlogGrid } from "@/components/blog-grid"
import { BlogCategories } from "@/components/blog-categories"
import { BlogNewsletter } from "@/components/blog-newsletter"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
      <BlogNewsletter />
      <Footer />
    </main>
  )
}
