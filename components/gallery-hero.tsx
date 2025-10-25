"use client"

import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"
import AutoRotatingCarousel, { CarouselItem } from "@/components/auto-rotating-carousel"

export function GalleryHero() {
  const carouselProjects: CarouselItem[] = [
    {
      id: 1,
      title: "Honda Interior Restoration",
      description: "Complete Honda interior deep cleaning and restoration services",
      before: "/before1-honda.png",
      after: "/after1-honda.png",
    },
    {
      id: 2,
      title: "Honda Second Project",
      description: "Comprehensive Honda detailing and protection treatment",
      before: "/before2-honda.png",
      after: "/after2-honda.png",
    },
    {
      id: 3,
      title: "Subaru Interior Work",
      description: "Subaru interior deep cleaning and restoration",
      before: "/before1-subaru.png",
      after: "/after1-subaru.png",
    },
    {
      id: 4,
      title: "Van Interior Restoration",
      description: "Commercial van interior detailing and cleaning",
      before: "/before1-van.png",
      after: "/after1-van.png",
    },
    {
      id: 5,
      title: "Van Second Project",
      description: "Professional van interior restoration services",
      before: "/before2-van.png",
      after: "/after2-van.png",
    },
    {
      id: 6,
      title: "Audi Interior Work",
      description: "Professional Audi detailing and restoration work",
      before: "/before2-audi.png",
      after: "/after2-audi.png",
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
              <a href="https://book.squareup.com/appointments/z8kedt6rlit7op/location/LWT57WDV6AKE0/services" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold">
                  <Calendar className="w-6 h-6 mr-2" />
                  Schedule Service
                </Button>
              </a>
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

          {/* Right side - Auto Rotating Carousel */}
          <div className="relative pt-16">
            <AutoRotatingCarousel 
              items={carouselProjects}
              autoplayDelay={4000}
              showControls={false}
              showIndicators={false}
              showTitle={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
