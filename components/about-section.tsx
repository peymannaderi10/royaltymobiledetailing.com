import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, CheckCircle } from "lucide-react"

const stats = [
  {
    icon: Clock,
    number: "20+",
    label: "Years Experience",
    description: "Serving the community since 2003",
  },
  {
    icon: Users,
    number: "148",
    label: "Happy Customers",
    description: "Verified reviews and testimonials",
  },
  {
    icon: Award,
    number: "4.8",
    label: "Star Rating",
    description: "Consistently excellent service",
  },
  {
    icon: CheckCircle,
    number: "100%",
    label: "Quality Guarantee",
    description: "We stand behind our work",
  },
]

const values = [
  "Expert craftsmanship with attention to detail",
  "Honest, transparent pricing and communication",
  "Mobile service convenience to your location",
  "Small team, personalized service",
  "Premium products and professional techniques",
  "Comprehensive vehicle appearance restoration",
]

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-[family-name:var(--font-heading)]">
              About Royalty Mobile Detailing
            </h2>
            <p className="text-lg text-muted-foreground mb-6 font-[family-name:var(--font-body)] leading-relaxed">
              Founded in 2003, Royalty Mobile Detailing has been the trusted choice for premium mobile auto detailing
              and ceramic coating services in Beverly and Edgewater Park, New Jersey. Our small, expert team focuses
              on quality craftsmanship and problem-solving approach to every project.
            </p>
            <p className="text-lg text-muted-foreground mb-8 font-[family-name:var(--font-body)] leading-relaxed">
              We specialize in premium detailing services that others can't handle - from complex paint correction that has stumped other
              shops to complete ceramic coating applications. Our commitment to excellence has earned us a 4.8-star
              rating and the trust of customers throughout South Jersey.
            </p>

            <div className="space-y-3">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground font-[family-name:var(--font-body)]">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-card border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2 font-[family-name:var(--font-heading)]">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-primary mb-1 font-[family-name:var(--font-heading)]">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground font-[family-name:var(--font-body)]">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
