import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, Mail, Calendar } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-body)]">
            Ready to restore your vehicle's interior or fix that stubborn sunroof leak? Contact us today for expert
            service you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary font-[family-name:var(--font-heading)]">
                  <Phone className="w-5 h-5 text-accent" />
                  Call Us Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2 font-[family-name:var(--font-heading)]">
                  (267) 504-1533
                </p>
                <p className="text-muted-foreground font-[family-name:var(--font-body)]">
                  Speak directly with our experts about your automotive needs
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary font-[family-name:var(--font-heading)]">
                  <MapPin className="w-5 h-5 text-accent" />
                  Visit Our Shop
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-primary mb-2 font-[family-name:var(--font-heading)]">
                  4375 US-130 # D (Suite B)
                </p>
                <p className="text-muted-foreground mb-4 font-[family-name:var(--font-body)]">
                  Beverly / Edgewater Park, NJ 08010
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary font-[family-name:var(--font-heading)]">
                  <Clock className="w-5 h-5 text-accent" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 font-[family-name:var(--font-body)]">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-semibold text-primary">8:30 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-semibold text-primary">9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-semibold text-primary">Closed</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary font-[family-name:var(--font-heading)]">
                <Mail className="w-5 h-5 text-accent" />
                Request Service
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block font-[family-name:var(--font-body)]">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block font-[family-name:var(--font-body)]">
                    Last Name
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-primary mb-2 block font-[family-name:var(--font-body)]">
                  Phone Number
                </label>
                <Input placeholder="(555) 123-4567" />
              </div>

              <div>
                <label className="text-sm font-medium text-primary mb-2 block font-[family-name:var(--font-body)]">
                  Service Needed
                </label>
                <select className="w-full p-3 border border-border rounded-lg bg-input text-foreground">
                  <option>Select a service...</option>
                  <option>Convertible Top Repair/Replacement</option>
                  <option>Sunroof/Moonroof Repair</option>
                  <option>Headliner Replacement</option>
                  <option>Interior Restoration</option>
                  <option>Custom Seat Covers</option>
                  <option>Maintenance Services</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-primary mb-2 block font-[family-name:var(--font-body)]">
                  Vehicle Information & Details
                </label>
                <Textarea
                  placeholder="Please describe your vehicle (year, make, model) and the issue you're experiencing..."
                  rows={4}
                />
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Request Service Appointment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
