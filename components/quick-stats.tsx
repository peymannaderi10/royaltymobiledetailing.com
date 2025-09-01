import { Card } from "@/components/ui/card"
import { Star, Users, Calendar, Award } from "lucide-react"

export function QuickStats() {
  const stats = [
    {
      icon: Calendar,
      value: "20+",
      label: "Years Experience",
      description: "Since 2003",
    },
    {
      icon: Star,
      value: "4.8",
      label: "Star Rating",
      description: "148 Reviews",
    },
    {
      icon: Users,
      value: "1000+",
      label: "Happy Customers",
      description: "And counting",
    },
    {
      icon: Award,
      value: "Expert",
      label: "Craftsmanship",
      description: "Quality guaranteed",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center border-none bg-background/50 backdrop-blur-sm">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
