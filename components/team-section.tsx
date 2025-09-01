import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function TeamSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-[family-name:var(--font-heading)]">
          Meet Our Team
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our small, dedicated team of specialists brings decades of combined experience to every project
        </p>

        <Card className="border-none bg-background/80 backdrop-blur-sm max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-accent">S</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Steve & Team</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Led by Steve, our expert team consists of skilled technicians who share a passion for automotive
              craftsmanship. With over 20 years of combined experience, we specialize in solving complex interior and
              sunroof challenges that other shops can't handle. Our small size allows us to provide personalized
              attention to every customer and vehicle.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground mb-6">
              <div className="flex items-center justify-center gap-2">
                <span className="font-semibold">Specialties:</span>
                <span>Convertible Tops • Sunroof Repair • Interior Restoration</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="font-semibold">Experience:</span>
                <span>20+ Years in Auto Interior Services</span>
              </div>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Phone className="w-4 h-4 mr-2" />
              Contact Our Team
            </Button>
          </CardContent>
        </Card>

        <div className="mt-12 bg-background/80 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-xl font-bold text-primary mb-4">Why Choose a Small Team?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Personal Attention</h4>
              <p className="text-muted-foreground">
                Every customer works directly with experienced technicians, not just service advisors
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Quality Control</h4>
              <p className="text-muted-foreground">
                With fewer projects, we can focus on perfection rather than volume
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Expertise</h4>
              <p className="text-muted-foreground">
                Specialized knowledge in complex repairs that larger shops often can't handle
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
