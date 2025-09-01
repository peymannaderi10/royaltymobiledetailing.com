import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Sun, Palette, Wrench, Shirt, Settings } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Convertible Tops",
    description: "OEM replacements, custom options, hydraulic & frame repair",
    details:
      "Complete convertible top services including vinyl and glass inserts, custom tops, hydraulic system repair, and boot covers. We work with all major brands and provide OEM-quality replacements.",
    image: "/convertible-car-top-replacement-professional-insta.png",
  },
  {
    icon: Sun,
    title: "Sunroof / Moonroof Services",
    description: "Mechanical/electrical repair, leak fixes, glass replacement",
    details:
      "Expert diagnosis and repair of sunroof leaks, mechanical issues, electrical problems, and complete glass replacement. We fix what others can't find.",
    image: "/sunroof-repair-professional-mechanic-working-on-ca.png",
  },
  {
    icon: Palette,
    title: "Headliner Replacement",
    description: "Foam/fabric matching, clean installation",
    details:
      "Factory-style or custom headliner replacement with proper foam backing and precise fabric matching. Clean, professional installation every time.",
    image: "/car-headliner-replacement-interior-restoration.png",
  },
  {
    icon: Wrench,
    title: "Interior Restoration",
    description: "Upholstery, trim, dashboards",
    details:
      "Complete interior restoration including seat upholstery, dashboard repair, trim work, and component replacement. Bringing your interior back to like-new condition.",
    image: "/luxury-car-interior-restoration-leather-seats-dash.png",
  },
  {
    icon: Shirt,
    title: "Custom Seat Covers",
    description: "Materials, stitching, personalized designs",
    details:
      "Custom-fitted seat covers with your choice of materials, colors, and stitching patterns. Personalized designs to match your style and protect your investment.",
    image: "/custom-car-seat-covers-leather-stitching-craftsman.png",
  },
  {
    icon: Settings,
    title: "Maintenance Services",
    description: "Oil changes, brake servicing, multi-point inspections",
    details:
      "Complete automotive maintenance including oil changes, brake service, and comprehensive multi-point inspections to keep your vehicle running smoothly.",
    image: "/automotive-maintenance-oil-change-brake-service-pr.png",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            Expert Auto Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-body)]">
            From convertible tops to complete interior restoration, we provide comprehensive automotive services with
            over 20 years of experience and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary font-[family-name:var(--font-heading)]">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-muted-foreground font-[family-name:var(--font-body)]">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 font-[family-name:var(--font-body)]">
                  {service.details}
                </p>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
