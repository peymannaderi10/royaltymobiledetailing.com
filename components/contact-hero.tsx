import { Button } from "@/components/ui/button"
import { Phone, Star } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative pt-36 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6 flex items-center justify-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-sm font-medium text-muted-foreground">4.8 stars</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-[family-name:var(--font-heading)]">
          Contact Us
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Ready for a spotless vehicle? Get in touch for a free consultation and custom quote on your detailing needs.
        </p>
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            asChild
          >
            <a href="tel:2675041533">
              <Phone className="w-5 h-5 mr-2" />
              (267) 504-1533
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
