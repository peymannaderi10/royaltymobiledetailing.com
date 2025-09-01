import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Sun, Scissors, Wrench, Palette, Settings } from "lucide-react"

export function ServicesGrid() {
  const services = [
    {
      icon: Car,
      title: "Convertible Tops",
      description: "Complete convertible top services from OEM replacements to custom installations",
      features: [
        "Canvas & vinyl top replacements",
        "Custom color and material options",
        "Hydraulic system repair & maintenance",
        "Frame alignment and welding",
        "Weather seal replacement",
        "Top mechanism troubleshooting",
      ],
      pricing: "Starting at $800",
    },
    {
      icon: Sun,
      title: "Sunroof / Moonroof Services",
      description: "Expert mechanical and electrical sunroof repair with leak prevention",
      features: [
        "Leak detection and repair",
        "Motor and track replacement",
        "Glass panel installation",
        "Drain tube cleaning",
        "Electrical system diagnosis",
        "Weatherstrip replacement",
      ],
      pricing: "Starting at $200",
    },
    {
      icon: Scissors,
      title: "Headliner Replacement",
      description: "Professional headliner installation with foam backing and fabric matching",
      features: [
        "Sagging headliner repair",
        "Foam backing replacement",
        "Fabric color matching",
        "Clean, wrinkle-free installation",
        "Sunroof cutout precision",
        "OEM and aftermarket options",
      ],
      pricing: "Starting at $300",
    },
    {
      icon: Palette,
      title: "Interior Restoration",
      description: "Complete interior restoration including upholstery, trim, and dashboard work",
      features: [
        "Seat reupholstery and repair",
        "Dashboard restoration",
        "Door panel refurbishment",
        "Carpet replacement",
        "Trim piece restoration",
        "Custom interior modifications",
      ],
      pricing: "Starting at $500",
    },
    {
      icon: Wrench,
      title: "Custom Seat Covers",
      description: "Personalized seat covers with premium materials and custom stitching",
      features: [
        "Premium leather and fabric options",
        "Custom embroidery and logos",
        "Precision fit patterns",
        "Heated seat compatibility",
        "Color matching services",
        "Commercial vehicle options",
      ],
      pricing: "Starting at $400",
    },
    {
      icon: Settings,
      title: "General Maintenance",
      description: "Comprehensive automotive maintenance services to keep your vehicle running smoothly",
      features: [
        "Oil changes and fluid services",
        "Brake inspection and repair",
        "Multi-point vehicle inspections",
        "Battery and electrical testing",
        "Tire rotation and balancing",
        "Preventive maintenance scheduling",
      ],
      pricing: "Starting at $50",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            Complete Auto Interior Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From convertible tops to complete interior restoration, we provide comprehensive services with expert
            craftsmanship and attention to detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 h-full">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold text-primary text-center">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-center">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border pt-4 mt-auto">
                  <div className="text-lg font-semibold text-primary mb-3">{service.pricing}</div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Get Quote</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
