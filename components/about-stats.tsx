import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Star, Award, Wrench, MapPin } from "lucide-react"

export function AboutStats() {
  const stats = [
    {
      icon: Calendar,
      value: "2003",
      label: "Established",
      description: "Over 20 years serving NJ",
    },
    {
      icon: Users,
      value: "1000+",
      label: "Happy Customers",
      description: "Satisfied clients and counting",
    },
    {
      icon: Star,
      value: "4.8",
      label: "Average Rating",
      description: "Based on 148 reviews",
    },
    {
      icon: Award,
      value: "Expert",
      label: "Craftsmanship",
      description: "Quality guaranteed work",
    },
    {
      icon: Wrench,
      value: "6",
      label: "Service Categories",
      description: "Complete auto interior solutions",
    },
    {
      icon: MapPin,
      value: "Local",
      label: "Community Focus",
      description: "Beverly & Edgewater Park",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            By the Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two decades of experience, countless satisfied customers, and a commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none bg-background/50 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
