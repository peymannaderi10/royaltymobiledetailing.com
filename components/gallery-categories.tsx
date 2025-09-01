"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Car, Sun, Scissors, Palette, Wrench, Grid3X3 } from "lucide-react"

export function GalleryCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Work", icon: Grid3X3 },
    { id: "convertible", name: "Convertible Tops", icon: Car },
    { id: "sunroof", name: "Sunroofs", icon: Sun },
    { id: "headliner", name: "Headliners", icon: Scissors },
    { id: "interior", name: "Interior Restoration", icon: Palette },
    { id: "maintenance", name: "Maintenance", icon: Wrench },
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
