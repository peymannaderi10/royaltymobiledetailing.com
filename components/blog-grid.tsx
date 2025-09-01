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
      title: "5 Signs Your Convertible Top Needs Replacement",
      excerpt:
        "Learn to identify the warning signs that indicate it's time for a new convertible top before minor issues become major problems.",
      category: "Convertible Care",
      author: "Steve's Team",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400&text=Convertible+Top+Signs",
      featured: true,
    },
    {
      title: "How to Prevent Sunroof Leaks: Maintenance Guide",
      excerpt: "Simple maintenance steps you can take to prevent costly sunroof leaks and keep your interior dry.",
      category: "Sunroof Advice",
      author: "Steve's Team",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=400&text=Sunroof+Maintenance",
    },
    {
      title: "Choosing the Right Material for Your Convertible Top",
      excerpt:
        "Canvas vs vinyl: understanding the pros and cons of different convertible top materials for your vehicle.",
      category: "Convertible Care",
      author: "Steve's Team",
      date: "March 5, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400&text=Top+Materials",
    },
    {
      title: "DIY Interior Cleaning Tips for Leather Seats",
      excerpt:
        "Professional techniques you can use at home to keep your leather seats looking new and prevent cracking.",
      category: "Interior Care",
      author: "Steve's Team",
      date: "February 28, 2024",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=400&text=Leather+Care",
    },
    {
      title: "When to Repair vs Replace Your Headliner",
      excerpt: "Understanding when a sagging headliner can be repaired versus when complete replacement is necessary.",
      category: "Interior Care",
      author: "Steve's Team",
      date: "February 20, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400&text=Headliner+Repair",
    },
    {
      title: "Seasonal Car Care: Preparing for Winter",
      excerpt:
        "Essential maintenance tasks to protect your vehicle's interior and convertible top during harsh winter months.",
      category: "Maintenance Tips",
      author: "Steve's Team",
      date: "February 15, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=400&text=Winter+Care",
    },
    {
      title: "Understanding Sunroof Types and Common Issues",
      excerpt: "A comprehensive guide to different sunroof mechanisms and the most common problems we see in our shop.",
      category: "Sunroof Advice",
      author: "Steve's Team",
      date: "February 10, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400&text=Sunroof+Types",
    },
    {
      title: "Custom Seat Cover Options: What You Need to Know",
      excerpt:
        "Exploring different materials, styles, and customization options for protecting and enhancing your vehicle's seats.",
      category: "Interior Care",
      author: "Steve's Team",
      date: "February 5, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400&text=Seat+Covers",
    },
    {
      title: "The Cost of Neglecting Auto Interior Maintenance",
      excerpt:
        "Why regular interior maintenance saves money in the long run and prevents costly repairs down the road.",
      category: "Maintenance Tips",
      author: "Steve's Team",
      date: "January 30, 2024",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=400&text=Maintenance+Cost",
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
