import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Card className="border-none bg-background/80 backdrop-blur-sm">
          <CardContent className="p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
              Ready to Restore Your Vehicle?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get expert auto interior and sunroof services from New Jersey's trusted specialists. Call today for a free
              consultation and estimate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Service
                </Button>
              </Link>
              <Link href="tel:6098801919">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (609) 880-1919
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>4375 US-130 # D, Beverly/Edgewater Park, NJ</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🕒 Mon-Fri 8:30AM-6PM • Sat 9AM-3PM</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
