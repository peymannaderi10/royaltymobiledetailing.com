"use client"

import { Button } from "@/components/ui/button"
import { Car, Sparkles, Droplets, Wrench, Lightbulb, Grid3X3 } from "lucide-react"

type BlogCategoriesProps = {
  activeCategory: string
  onChange: (categoryId: string) => void
}

export function BlogCategories({ activeCategory, onChange }: BlogCategoriesProps) {
  const categories = [
    { id: "all", name: "All Articles", icon: Grid3X3 },
    { id: "maintenance", name: "Car Care Tips", icon: Wrench },
    { id: "interior", name: "Interior Detailing", icon: Car },
    { id: "exterior", name: "Exterior Detailing", icon: Droplets },
    { id: "premium", name: "Premium Services", icon: Sparkles },
    { id: "diy", name: "DIY Tips", icon: Lightbulb },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => onChange(category.id)}
              className={
                activeCategory === category.id
                  ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                  : "border-border hover:bg-muted"
              }
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
