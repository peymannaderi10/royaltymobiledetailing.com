import { Button } from "@/components/ui/button"
import { Phone, Calendar, Star } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative pt-36 pb-24 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6 flex items-center justify-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-sm font-medium text-muted-foreground">4.8 stars • 148 reviews</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-[family-name:var(--font-heading)]">
          About Royalty Mobile Detailing
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Over 20 years of dedicated service to the Beverly and Edgewater Park communities, specializing in premium
          mobile auto detailing, ceramic coating, and paint correction services
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
            (267) 504-1533
          </Button>
        </div>
      </div>
    </section>
  )
}
