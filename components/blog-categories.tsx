"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Car, Sun, Scissors, Wrench, Lightbulb, Grid3X3 } from "lucide-react"

export function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Articles", icon: Grid3X3 },
    { id: "maintenance", name: "Maintenance Tips", icon: Wrench },
    { id: "convertible", name: "Convertible Care", icon: Car },
    { id: "sunroof", name: "Sunroof Advice", icon: Sun },
    { id: "interior", name: "Interior Care", icon: Scissors },
    { id: "diy", name: "DIY Tips", icon: Lightbulb },
  ]

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
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
