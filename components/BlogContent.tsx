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
      maintenance: ["Maintenance Tips"],
      convertible: ["Convertible Care"],
      sunroof: ["Sunroof Advice"],
      interior: ["Interior Care"],
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