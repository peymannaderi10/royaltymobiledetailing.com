import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"
import Image from "next/image"

export function ServicesHero() {
  return (
    <section className="relative pt-36 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-[family-name:var(--font-heading)]">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Premium mobile detailing services that come to you. From basic washes to showroom-quality details, 
              we bring professional expertise right to your doorstep throughout the Philadelphia Tri-State Area.
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

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl h-100">
              <Image
                src="/luxury-custom-car-interior-after-professional-work.png"
                alt="Professional mobile detailing work - luxury car interior"
                width={600}
                height={300}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
