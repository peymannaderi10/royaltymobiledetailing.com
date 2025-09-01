import { Card, CardContent } from "@/components/ui/card"
import { Shield, Heart, Lightbulb, Users, Clock, Award } from "lucide-react"

export function AboutValues() {
  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description:
        "We never compromise on materials or workmanship. Every job meets our high standards before leaving the shop.",
    },
    {
      icon: Heart,
      title: "Customer Care",
      description:
        "Your satisfaction is our priority. We listen, communicate clearly, and ensure you're happy with every detail.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Complex repairs don't intimidate us. We find solutions where others see impossible challenges.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "As a local business, we're invested in our community and build lasting relationships with our neighbors.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description:
        "We respect your time and schedule. Projects are completed when promised, with clear communication throughout.",
    },
    {
      icon: Award,
      title: "Expertise",
      description:
        "Continuous learning and 20+ years of experience ensure we stay current with techniques and technologies.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            Our Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do, from the smallest repair to complete interior restorations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
