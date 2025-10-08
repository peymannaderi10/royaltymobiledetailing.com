import { Star } from "lucide-react"

export function ReviewsHero() {
  return (
    <section className="relative pt-36 pb-24 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6 flex items-center justify-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-lg font-medium text-muted-foreground">4.8 stars • 148+ reviews</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-[family-name:var(--font-heading)]">
          Customer Reviews
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          See what our customers say about Royalty Mobile Detailing. Real reviews from real customers who trust us with their vehicles.
        </p>
      </div>
    </section>
  )
} 