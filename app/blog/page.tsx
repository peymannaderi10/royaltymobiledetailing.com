import { Navigation } from "@/components/navigation"
import { BlogHero } from "@/components/blog-hero"
import { Footer } from "@/components/footer"
import { GeometricSplitter } from "@/components/section-splitters"
import dynamic from "next/dynamic"

const BlogContent = dynamic(() => import("@/components/BlogContent"), { ssr: false })

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogHero />
      <BlogContent />
      <Footer />
    </main>
  )
}
