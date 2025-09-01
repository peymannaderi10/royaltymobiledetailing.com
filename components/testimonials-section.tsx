import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Donna H.",
    service: "Mercedes Seat Repair",
    rating: 5,
    text: "Steve was very professional and his workmanship was excellent. He replaced the bottom portion of my Mercedes drivers seat. I recommend for high quality workmanship.",
    verified: true,
  },
  {
    name: "Sara Joan S.",
    service: "Sunroof Drain Repair",
    rating: 5,
    text: "Fixed my leaking sun roof drains... Very knowledgeable and gave me tips that will help maintain the sunroof in the future.",
    verified: true,
  },
  {
    name: "Michael R.",
    service: "Sunroof Replacement",
    rating: 5,
    text: "They do excellent work. Not too many places do this kinda work... work was completed and the roof looks and functions like new.",
    verified: true,
  },
  {
    name: "Jennifer L.",
    service: "Leak Diagnosis",
    rating: 5,
    text: "Steve did a wonderful job finding out my leaking problem when nobody else could. Replace my sunroof and the problem fixed... clean work, great communication. Highly recommend!!",
    verified: true,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-2xl font-bold text-primary">4.8</span>
            <span className="text-muted-foreground">out of 5 stars</span>
          </div>
          <p className="text-lg text-muted-foreground font-[family-name:var(--font-body)]">
            Based on 148 verified customer reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-card border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-accent/30 mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 font-[family-name:var(--font-body)] leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-primary font-[family-name:var(--font-heading)]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground font-[family-name:var(--font-body)]">
                      {testimonial.service}
                    </p>
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 text-xs text-accent">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Verified Review
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
