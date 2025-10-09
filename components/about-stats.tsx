import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Star, Award, Wrench, MapPin } from "lucide-react"

export function AboutStats() {
  const stats = [
    {
      icon: Calendar,
      value: "2024",
      label: "Founded",
      description: "New local business",
    },
    {
      icon: Users,
      value: "Growing",
      label: "Client Base",
      description: "Building our reputation",
    },
    {
      icon: Star,
      value: "5.0",
      label: "Quality Focus",
      description: "Every job matters",
    },
    {
      icon: Award,
      value: "Mobile",
      label: "Service Type",
      description: "We come to you",
    },
    {
      icon: Wrench,
      value: "3",
      label: "Service Areas",
      description: "Interior, Exterior, Add-ons",
    },
    {
      icon: MapPin,
      value: "Tri-State",
      label: "Service Area",
      description: "Philadelphia region",
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
            A new business with fresh energy, competitive pricing, and a commitment to building lasting relationships
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
