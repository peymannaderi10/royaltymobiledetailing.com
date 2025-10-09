"use client"

import { useState, useMemo } from "react"
import { BlogCategories } from "@/components/blog-categories"
import { BlogGrid } from "@/components/blog-grid"

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  // Categories map to article.category values used in BlogGrid
  const categoryMap: Record<string, string[]> = useMemo(
    () => ({
      all: [],
      maintenance: ["Car Care Tips"],
      interior: ["Interior Detailing"],
      exterior: ["Exterior Detailing"],
      premium: ["Premium Services"],
      diy: ["DIY Tips"],
    }),
    []
  )

  return (
    <div>
      <BlogCategories activeCategory={activeCategory} onChange={setActiveCategory} />
      <BlogGrid key={activeCategory} filterCategories={categoryMap[activeCategory]} />
    </div>
  )
} 