import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Card className="border-none bg-background/80 backdrop-blur-sm">
          <CardContent className="p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Premium mobile detailing services that come to you. From basic washes to showroom-quality details, 
              we bring the expertise right to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href="https://book.squareup.com/appointments/z8kedt6rlit7op/location/LWT57WDV6AKE0/services" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Service
                </Button>
              </a>
              <Link href="tel:2675041533">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (267) 504-1533
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Philadelphia, Tri-State Area</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🕒 6AM-10PM • By Appointment</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
