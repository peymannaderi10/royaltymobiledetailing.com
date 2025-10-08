import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock, Mail } from "lucide-react"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: "Phone",
      info: "(267) 504-1533",
      description: "Call for immediate assistance",
      action: "tel:2675041533",
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
    <div className="h-full bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactDetails.map((detail, index) => (
            <Card key={index} className="border-border/20 bg-background/80 backdrop-blur-sm hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <detail.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-primary mb-1 text-xs uppercase tracking-wide">{detail.title}</h3>
                    <p className="text-foreground font-medium mb-1 text-base break-words">{detail.info}</p>
                    <p className="text-xs text-muted-foreground">{detail.description}</p>
                    {detail.action && (
                      <Button
                        variant="link"
                        size="sm"
                        className="p-0 h-auto mt-2 text-accent hover:text-accent/80 text-sm font-medium"
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
      </div>
    </div>
  )
}
