import { Button } from "@/components/ui/button"
import { Phone, Calendar, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-car-interior-with-sunroof-open-showing-craf.png"
          alt="Professional auto interior work"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6 flex items-center justify-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-sm font-medium text-muted-foreground">4.8 stars • 148 reviews</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 font-[family-name:var(--font-heading)] text-balance">
          Steve's Auto Interior & Sunroofs
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-[family-name:var(--font-body)]">
          Your One-Stop Shop for Auto Interiors, Sunroofs & Maintenance
        </p>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
          Serving Beverly & Edgewater Park, NJ since 2003 with expert craftsmanship in convertible tops, sunroof repair,
          and complete interior restoration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Service
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Phone className="w-5 h-5 mr-2" />
            (609) 880-1919
          </Button>
        </div>

        <div className="mt-12 text-sm text-muted-foreground font-[family-name:var(--font-body)]">
          <p>📍 4375 US-130 # D, Beverly/Edgewater Park, NJ 08010</p>
          <p className="mt-1">🕒 Mon-Fri 8:30AM-6PM • Sat 9AM-3PM • Sun Closed</p>
        </div>
      </div>
    </section>
  )
}
