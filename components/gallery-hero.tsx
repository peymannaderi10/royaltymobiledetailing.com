"use client"

import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"
import BeforeAfterCarousel, { BeforeAfterItem } from "@/components/before-after-carousel"

export function GalleryHero() {
  const beforeAfterProjects: BeforeAfterItem[] = [
    {
      id: 1,
      title: "Convertible Top Restoration",
      description: "Complete replacement of worn canvas top with new hydraulic system repair",
      before: "/worn-damaged-convertible-top-before-repair.png",
      after: "/bmw-convertible-with-new-black-canvas-top.png",
    },
    {
      id: 2,
      title: "Sunroof Leak Repair",
      description: "Fixed persistent water leak and replaced damaged weatherstripping",
      before: "/sunroof-water-damage-leak-before-repair.png",
      after: "/mercedes-sunroof-repair-before-and-after.png",
    },
    {
      id: 3,
      title: "Interior Seat Restoration",
      description: "Torn leather seats restored with premium materials and custom stitching",
      before: "/torn-damaged-car-seats-before-restoration.png",
      after: "/luxury-car-interior-with-custom-leather-seats.png",
    },
  ]

  return (
    <section className="relative pt-36 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 items-start">
          {/* Left side - Content */}
          <div className="text-center lg:text-left pt-36">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-[family-name:var(--font-heading)]">
              Our Work Gallery
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Explore our portfolio of completed mobile detailing projects showcasing expert craftsmanship 
              and dramatic transformations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold">
                <Calendar className="w-6 h-6 mr-2" />
                Schedule Service
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent px-8 py-6 text-lg font-semibold"
              >
                <Phone className="w-6 h-6 mr-2" />
                (267) 504-1533
              </Button>
            </div>
          </div>

          {/* Right side - Before/After Carousel */}
          <div className="relative pt-16">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-primary mb-2">Before & After</h2>
              <p className="text-muted-foreground">See the dramatic transformations</p>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <BeforeAfterCarousel 
                items={beforeAfterProjects}
                baseWidth={600}
                autoplay={true}
                autoplayDelay={3000}
                loop={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
