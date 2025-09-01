"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function BeforeAfterSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const beforeAfterProjects = [
    {
      title: "Convertible Top Restoration",
      description: "Complete replacement of worn canvas top with new hydraulic system repair",
      before: "/worn-damaged-convertible-top-before-repair.png",
      after: "/bmw-convertible-with-new-black-canvas-top.png",
    },
    {
      title: "Sunroof Leak Repair",
      description: "Fixed persistent water leak and replaced damaged weatherstripping",
      before: "/sunroof-water-damage-leak-before-repair.png",
      after: "/mercedes-sunroof-repair-before-and-after.png",
    },
    {
      title: "Interior Seat Restoration",
      description: "Torn leather seats restored with premium materials and custom stitching",
      before: "/torn-damaged-car-seats-before-restoration.png",
      after: "/luxury-car-interior-with-custom-leather-seats.png",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterProjects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterProjects.length) % beforeAfterProjects.length)
  }

  const currentProject = beforeAfterProjects[currentSlide]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            Before & After Transformations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the dramatic improvements our expert craftsmanship brings to damaged and worn vehicle interiors
          </p>
        </div>

        <Card className="border-none bg-background/80 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              {/* Before Image */}
              <div className="relative">
                <img
                  src={currentProject.before || "/placeholder.svg"}
                  alt={`${currentProject.title} - Before`}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Before
                </div>
              </div>

              {/* After Image */}
              <div className="relative">
                <img
                  src={currentProject.after || "/placeholder.svg"}
                  alt={`${currentProject.title} - After`}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  After
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{currentProject.title}</h3>
                  <p className="text-muted-foreground">{currentProject.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={prevSlide}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={nextSlide}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex justify-center gap-2">
                {beforeAfterProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-accent" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready for Your Transformation?</h3>
            <p className="text-muted-foreground mb-6">
              Let us restore your vehicle's interior to like-new condition with our expert craftsmanship and attention
              to detail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get Free Estimate
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                View More Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
