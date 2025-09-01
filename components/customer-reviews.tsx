import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function CustomerReviews() {
  const reviews = [
    {
      name: "Mike Johnson",
      rating: 5,
      text: "Steve did an amazing job on my convertible top. The quality is outstanding and the price was very fair. Highly recommend!",
      service: "Convertible Top Replacement",
    },
    {
      name: "Sarah Chen",
      rating: 5,
      text: "Finally found someone who could fix my sunroof leak! Professional work and great communication throughout the process.",
      service: "Sunroof Repair",
    },
    {
      name: "Robert Martinez",
      rating: 5,
      text: "The interior restoration on my classic car exceeded my expectations. Steve's attention to detail is incredible.",
      service: "Interior Restoration",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
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
            <span className="text-lg font-semibold text-primary">4.8 out of 5</span>
            <span className="text-muted-foreground">• 148 reviews</span>
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
