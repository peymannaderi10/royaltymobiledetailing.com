import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, Car, CheckCircle } from "lucide-react"

export function ServiceProcess() {
  const steps = [
    {
      icon: Phone,
      title: "Call or Text",
      description: "Contact us for a free consultation and custom quote",
      details: "We'll discuss your vehicle's needs and provide transparent pricing",
    },
    {
      icon: Calendar,
      title: "Schedule Service",
      description: "Book an appointment that fits your schedule",
      details: "Flexible scheduling 6AM-10PM, 6 days a week throughout the tri-state area",
    },
    {
      icon: Car,
      title: "We Come to You",
      description: "Our mobile team arrives at your location with all equipment",
      details: "Professional detailing service right at your home, office, or anywhere convenient",
    },
    {
      icon: CheckCircle,
      title: "Satisfaction Guaranteed",
      description: "Inspect the completed work and enjoy our quality guarantee",
      details: "We stand behind every detail with our satisfaction guarantee",
    },
  ]

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            Our Service Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, convenient mobile detailing process from booking to completion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-none bg-background/50 backdrop-blur-sm text-center relative">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                <p className="text-xs text-muted-foreground/80">{step.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to Transform Your Vehicle?</h3>
            <p className="text-muted-foreground mb-6">
              Contact us today for a free consultation and custom quote on your mobile detailing needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:2675041533" className="inline-block">
                <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md font-semibold flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call (267) 504-1533
                </button>
              </a>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-md font-semibold bg-transparent">
                Schedule Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
