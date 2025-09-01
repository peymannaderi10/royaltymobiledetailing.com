import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Car, Sun, Scissors } from "lucide-react"
import Link from "next/link"

export function FeaturedServices() {
  const services = [
    {
      icon: Car,
      title: "Convertible Tops",
      description: "OEM replacements, custom options, and hydraulic frame repair",
      features: ["Canvas & Vinyl Tops", "Hydraulic Systems", "Frame Repair"],
    },
    {
      icon: Sun,
      title: "Sunroof Services",
      description: "Complete mechanical and electrical repair with leak fixes",
      features: ["Leak Repair", "Motor Replacement", "Glass Installation"],
    },
    {
      icon: Scissors,
      title: "Interior Restoration",
      description: "Complete upholstery, trim work, and dashboard restoration",
      features: ["Seat Upholstery", "Dashboard Repair", "Trim Restoration"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            Our Specialty Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert craftsmanship in auto interior restoration, sunroof repair, and convertible top services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
