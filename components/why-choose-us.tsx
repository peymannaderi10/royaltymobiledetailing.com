import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Users, Award, Wrench, Heart } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Every job backed by our commitment to excellence and customer satisfaction",
    },
    {
      icon: Clock,
      title: "20+ Years Experience",
      description: "Established in 2003, we've perfected our craft through decades of service",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Small, dedicated team of specialists who take pride in their work",
    },
    {
      icon: Award,
      title: "4.8 Star Rating",
      description: "Consistently rated excellent by our customers across 148+ reviews",
    },
    {
      icon: Wrench,
      title: "Complete Service",
      description: "From minor repairs to full restorations, we handle it all in-house",
    },
    {
      icon: Heart,
      title: "Local Business",
      description: "Proudly serving Beverly & Edgewater Park communities with personal care",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            Why Choose Steve's Auto Interior?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two decades of expertise, quality craftsmanship, and unwavering commitment to customer satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="border-none bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
