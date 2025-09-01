import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock, Mail, Star, Calendar } from "lucide-react"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: "Phone",
      info: "(609) 880-1919",
      description: "Call for immediate assistance",
      action: "tel:6098801919",
    },
    {
      icon: MapPin,
      title: "Address",
      info: "4375 US-130 # D",
      description: "Beverly/Edgewater Park, NJ 08010",
      action: "https://maps.google.com/?q=4375+US-130+D+Beverly+NJ+08010",
    },
    {
      icon: Clock,
      title: "Hours",
      info: "Mon-Fri: 8:30AM-6PM",
      description: "Sat: 9AM-3PM • Sun: Closed",
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@stevesautointerior.com",
      description: "We'll respond within 24 hours",
      action: "mailto:info@stevesautointerior.com",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">Get In Touch</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground">4.8/5 • 148 reviews</span>
          </div>
          <p className="text-muted-foreground">Multiple ways to reach our expert team for your auto interior needs</p>
        </div>

        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <Card key={index} className="border-border/50 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <detail.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-primary mb-1">{detail.title}</h3>
                    <p className="text-foreground font-medium mb-1">{detail.info}</p>
                    <p className="text-sm text-muted-foreground">{detail.description}</p>
                    {detail.action && (
                      <Button
                        variant="link"
                        size="sm"
                        className="p-0 h-auto mt-2 text-accent hover:text-accent/80"
                        asChild
                      >
                        <a href={detail.action} target={detail.action.startsWith("http") ? "_blank" : undefined}>
                          {detail.title === "Phone"
                            ? "Call Now"
                            : detail.title === "Address"
                              ? "Get Directions"
                              : "Send Email"}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 border-border/50 bg-background/80 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold text-primary mb-3">Emergency Service</h3>
            <p className="text-muted-foreground mb-4">
              Need urgent convertible top or sunroof repair? We offer emergency services for critical issues.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Emergency Service
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
