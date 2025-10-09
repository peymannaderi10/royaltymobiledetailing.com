import { Button } from "@/components/ui/button"
import { Phone, Calendar, Star } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative pt-36 pb-24 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="/luxury-custom-car-interior-after-professional-work.png"
          alt="Luxury car interior"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6 flex items-center justify-center gap-2">
          
          <span className="text-sm font-medium text-white/90">Building our reputation • New local business</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
          About Us
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          A new local business dedicated to bringing premium mobile detailing services to the Philadelphia Tri-State Area. 
          Founded by Ed, we're building our reputation one satisfied customer at a time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Service
          </Button>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
            <Phone className="w-5 h-5 mr-2" />
            (267) 504-1533
          </Button>
        </div>
      </div>
    </section>
  )
}
