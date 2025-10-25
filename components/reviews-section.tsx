"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { useEffect } from "react"

export function ReviewsSection() {
  useEffect(() => {
    // Load the Google Reviews widget script
    const script = document.createElement('script')
    script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js'
    script.defer = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://widgets.sociablekit.com/google-reviews/widget.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <section className="py-16 bg-white">
      {/* Google Reviews Widget */}
      <div className="mb-16">
        <div className="text-center mb-8 px-6">
          <h2 className="text-3xl font-bold text-primary mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground">Real reviews from real customers who trust us with their vehicles</p>
        </div>
        <div className='sk-ww-google-reviews' data-embed-id='25614441'></div>
      </div>

      {/* Call to Action - Bottom Center */}
      <div className="text-center px-6">
        <Card className="bg-accent/5 border-accent/20 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl text-primary">
              Ready to Experience Our Service?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Join our satisfied customers and get expert mobile detailing services for your vehicle.
            </p>
            <div className="flex justify-center">
              <a href="tel:2675041533">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (267) 504-1533
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 