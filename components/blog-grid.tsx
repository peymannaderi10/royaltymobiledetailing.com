"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"

export interface BlogGridProps {
  filterCategories?: string[]
}

export function BlogGrid({ filterCategories = [] }: BlogGridProps) {
  const articles = [
    {
      title: "The Complete Guide to Mobile Detailing: What to Expect",
      excerpt:
        "Everything you need to know about mobile detailing services, from scheduling to the final result. Learn what makes professional mobile detailing different.",
      category: "Premium Services",
      author: "Royalty Team",
      date: "March 15, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400&text=Mobile+Detailing+Guide",
      featured: true,
    },
    {
      title: "5 Signs Your Car Needs Professional Detailing",
      excerpt: "Learn to identify when your vehicle needs more than a basic wash and requires professional detailing services.",
      category: "Car Care Tips",
      author: "Royalty Team",
      date: "March 10, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400&text=Detailing+Signs",
    },
    {
      title: "Interior Detailing: From Basic to Showroom Ready",
      excerpt:
        "Understanding the different levels of interior detailing and how to choose the right service for your vehicle's needs.",
      category: "Interior Detailing",
      author: "Royalty Team",
      date: "March 5, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=400&text=Interior+Detailing",
    },
    {
      title: "DIY Interior Cleaning Tips for Leather Seats",
      excerpt:
        "Professional techniques you can use at home to keep your leather seats looking new and prevent cracking between professional details.",
      category: "DIY Tips",
      author: "Royalty Team",
      date: "February 28, 2024",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=400&text=Leather+Care",
    },
    {
      title: "Exterior Detailing: Paint Correction and Protection",
      excerpt: "Learn about paint correction techniques and protective coatings that keep your vehicle's exterior looking pristine.",
      category: "Exterior Detailing",
      author: "Royalty Team",
      date: "February 20, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400&text=Paint+Correction",
    },
    {
      title: "Seasonal Car Care: Preparing Your Vehicle for Winter",
      excerpt:
        "Essential detailing and protection steps to keep your vehicle looking great and protected during harsh winter months.",
      category: "Car Care Tips",
      author: "Royalty Team",
      date: "February 15, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400&text=Winter+Care",
    },
    {
      title: "Ceramic Coating vs Wax: What's the Difference?",
      excerpt: "Understanding the benefits of ceramic coating compared to traditional wax and when each is most appropriate.",
      category: "Premium Services",
      author: "Royalty Team",
      date: "February 10, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400&text=Ceramic+Coating",
    },
    {
      title: "How Often Should You Get Your Car Detailed?",
      excerpt:
        "A comprehensive guide to detailing frequency based on your driving habits, climate, and vehicle usage patterns.",
      category: "Car Care Tips",
      author: "Royalty Team",
      date: "February 5, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400&text=Detailing+Frequency",
    },
    {
      title: "The Benefits of Professional Mobile Detailing",
      excerpt:
        "Why mobile detailing services offer convenience, quality, and value that traditional car washes simply can't match.",
      category: "Premium Services",
      author: "Royalty Team",
      date: "January 30, 2024",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=400&text=Mobile+Benefits",
    },
  ]

  const filtered = filterCategories.length
    ? articles.filter((a) => filterCategories.includes(a.category))
    : articles

  const featuredArticle = filtered.find((article) => article.featured)
  const regularArticles = filtered.filter((article) => !article.featured)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-primary mb-8 font-[family-name:var(--font-heading)]">
              Featured Article
            </h2>
            <Card className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-[16/10] md:aspect-auto">
                  <img
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4 bg-accent/10 text-accent">
                    {featuredArticle.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-primary mb-4 leading-tight">{featuredArticle.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-8 font-[family-name:var(--font-heading)]">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="w-fit mb-3 bg-accent/10 text-accent text-xs">
                    {article.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-primary mb-3 leading-tight line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
