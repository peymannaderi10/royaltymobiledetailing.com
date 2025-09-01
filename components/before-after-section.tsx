"use client"

import BeforeAfterCarousel, { BeforeAfterItem } from "@/components/before-after-carousel"
import { Button } from "@/components/ui/button"

export function BeforeAfterSection() {
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

        <BeforeAfterCarousel 
          items={beforeAfterProjects}
          baseWidth={800}
          autoplay={true}
          autoplayDelay={2500}
          loop={true}
        />

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
