"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Phone, MapPin } from "lucide-react"

export function ReviewsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full px-6">
        {/* Google Reviews Widget Section - Full Width */}
        <div className="mb-16">
          <div className="bg-muted/20 rounded-xl p-8">
            {/* SociableKit Google Reviews Widget */}
            <div className="bg-white rounded-lg p-6 min-h-[500px] w-full">
                <div className='sk-ww-google-reviews' data-embed-id='25594563'></div>
                <script src='https://widgets.sociablekit.com/google-reviews/widget.js' defer></script>
              </div>
          </div>
        </div>

        {/* Call to Action - Bottom Center */}
        <div className="text-center">
          <Card className="bg-accent/5 border-accent/20 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl text-primary">
                Ready to Experience Our Service?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Join our satisfied customers and get expert auto interior work for your vehicle.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (609) 880-1919
                </Button>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  Visit Our Shop
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 