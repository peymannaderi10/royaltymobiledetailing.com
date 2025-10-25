import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogPost } from "@/components/blog-post"
import { notFound } from "next/navigation"
import { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  // This would typically come from a CMS or database
  const blogPosts: Record<string, { title: string; excerpt: string; category: string; date: string; image: string }> = {
    "complete-guide-mobile-detailing": {
      title: "The Complete Guide to Mobile Detailing: What to Expect | Royalty Mobile Detailing",
      excerpt: "Everything you need to know about mobile detailing services, from scheduling to the final result. Learn what makes professional mobile detailing different from traditional car washes.",
      category: "Premium Services",
      date: "March 15, 2024",
      image: "/luxury-custom-car-interior-after-professional-work.png"
    },
    "5-signs-car-needs-professional-detailing": {
      title: "5 Signs Your Car Needs Professional Detailing | Royalty Mobile Detailing",
      excerpt: "Learn to identify when your vehicle needs more than a basic wash and requires professional detailing services. Expert tips from Philadelphia's premier mobile detailers.",
      category: "Car Care Tips",
      date: "March 10, 2024",
      image: "/before1-honda.png"
    },
    "interior-detailing-basic-to-showroom": {
      title: "Interior Detailing: From Basic to Showroom Ready | Royalty Mobile Detailing",
      excerpt: "Understanding the different levels of interior detailing and how to choose the right service for your vehicle's needs. Professional interior restoration in Philadelphia.",
      category: "Interior Detailing",
      date: "March 5, 2024",
      image: "/luxury-car-interior-restoration-leather-seats-dash.png"
    },
    "diy-leather-seat-cleaning-tips": {
      title: "DIY Interior Cleaning Tips for Leather Seats | Royalty Mobile Detailing",
      excerpt: "Professional techniques you can use at home to keep your leather seats looking new and prevent cracking between professional details.",
      category: "DIY Tips",
      date: "February 28, 2024",
      image: "/restored-mercedes-car-seat-like-new-condition.png"
    },
    "exterior-detailing-paint-correction": {
      title: "Exterior Detailing: Paint Correction and Protection | Royalty Mobile Detailing",
      excerpt: "Learn about paint correction techniques and protective coatings that keep your vehicle's exterior looking pristine.",
      category: "Exterior Detailing",
      date: "February 20, 2024",
      image: "/bmw-convertible-with-new-black-canvas-top.png"
    },
    "seasonal-car-care-winter-preparation": {
      title: "Seasonal Car Care: Preparing Your Vehicle for Winter | Royalty Mobile Detailing",
      excerpt: "Essential detailing and protection steps to keep your vehicle looking great and protected during harsh winter months in Philadelphia.",
      category: "Car Care Tips",
      date: "February 15, 2024",
      image: "/automotive-maintenance-oil-change-brake-service-pr.png"
    },
    "ceramic-coating-vs-wax-difference": {
      title: "Ceramic Coating vs Wax: What's the Difference? | Royalty Mobile Detailing",
      excerpt: "Understanding the benefits of ceramic coating compared to traditional wax and when each is most appropriate for your vehicle.",
      category: "Premium Services",
      date: "February 10, 2024",
      image: "/porsche-dashboard-restoration-leather-repair.png"
    },
    "how-often-car-detailing-frequency": {
      title: "How Often Should You Get Your Car Detailed? | Royalty Mobile Detailing",
      excerpt: "A comprehensive guide to detailing frequency based on your driving habits, climate, and vehicle usage patterns in the Philadelphia area.",
      category: "Car Care Tips",
      date: "February 5, 2024",
      image: "/clean-dry-car-interior-after-sunroof-repair.png"
    },
    "benefits-professional-mobile-detailing": {
      title: "The Benefits of Professional Mobile Detailing | Royalty Mobile Detailing",
      excerpt: "Why mobile detailing services offer convenience, quality, and value that traditional car washes simply can't match in Philadelphia.",
      category: "Premium Services",
      date: "January 30, 2024",
      image: "/luxury-car-interior-with-custom-leather-seats.png"
    }
  }

  const post = blogPosts[params.slug]

  if (!post) {
    return {
      title: "Article Not Found | Royalty Mobile Detailing",
      description: "The article you're looking for doesn't exist."
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      "mobile detailing",
      "car detailing",
      "auto detailing",
      post.category.toLowerCase(),
      "Philadelphia",
      "Tri-State Area",
      "professional car care",
      "vehicle maintenance"
    ],
    authors: [{ name: "Royalty Mobile Detailing Team" }],
    publishedTime: post.date,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://royaltymobiledetailing.com/blog/${params.slug}`,
      siteName: "Royalty Mobile Detailing",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://royaltymobiledetailing.com/blog/${params.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogPost slug={params.slug} />
      <Footer />
    </main>
  )
}

export async function generateStaticParams() {
  // This would typically come from a CMS or database
  const slugs = [
    "complete-guide-mobile-detailing",
    "5-signs-car-needs-professional-detailing",
    "interior-detailing-basic-to-showroom",
    "diy-leather-seat-cleaning-tips",
    "exterior-detailing-paint-correction",
    "seasonal-car-care-winter-preparation",
    "ceramic-coating-vs-wax-difference",
    "how-often-car-detailing-frequency",
    "benefits-professional-mobile-detailing",
  ]

  return slugs.map((slug) => ({
    slug,
  }))
}
