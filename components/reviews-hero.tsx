import { Star, Quote } from "lucide-react"

export function ReviewsHero() {
  return (
    <section className="relative pt-36 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-[family-name:var(--font-heading)]">
              Customer Reviews
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              See what our customers say about Royalty Mobile Detailing. Real reviews from real customers who trust us with their vehicles.
            </p>
          </div>

          {/* Right side - Featured Review */}
          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg relative">
              {/* Featured Badge */}
              <div className="absolute -top-3 left-6">
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
              </div>
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                "Ed did an amazing job on my car! The mobile service was so convenient and the results were showroom quality. 
                My car looks brand new and I couldn't be happier with the service."
              </p>
              <div>
                <div className="font-semibold text-primary text-lg">Sarah M.</div>
                <div className="text-sm text-muted-foreground">Complete Detail Package</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 