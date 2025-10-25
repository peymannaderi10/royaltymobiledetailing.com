import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function CustomerReviews() {
  const reviews = [
    {
      name: "Michael R.",
      rating: 5,
      text: "The Showroom Ready Package exceeded all my expectations! They came to my house and spent hours perfecting every detail. The buffing and polishing made my car look brand new. Highly recommend!",
      service: "Showroom Ready Package",
    },
    {
      name: "Jessica T.",
      rating: 5,
      text: "Best mobile detailing service I've ever used! They detailed my SUV in my driveway while I worked from home. The interior looks brand new and they removed stains I thought were permanent.",
      service: "Deluxe Detail",
    },
    {
      name: "David L.",
      rating: 5,
      text: "Amazing work on my BMW! The buffing and polishing removed swirls and scratches, and the headlight restoration made them crystal clear. The convenience of mobile service made it even better!",
      service: "Buffing & Polishing + Headlight Restoration",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="border-none bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-accent/30 mb-4" />
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">"{review.text}"</p>
                <div>
                  <div className="font-semibold text-primary">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.service}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
