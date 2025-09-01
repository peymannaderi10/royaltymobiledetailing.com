import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="relative pt-36 pb-24 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-[family-name:var(--font-heading)]">
          Our Services
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Comprehensive auto interior and sunroof services with over 20 years of expertise in Beverly/Edgewater Park, NJ
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Service
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Phone className="w-5 h-5 mr-2" />
            (609) 880-1919
          </Button>
        </div>
      </div>
    </section>
  )
}
