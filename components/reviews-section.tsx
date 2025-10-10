"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function ReviewsSection() {
  return (
    <section className="py-16 bg-white">
      {/* Reviews Placeholder */}
      <div className="mb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Reviews Coming Soon</h3>
            <p className="text-gray-500">We're building our reputation and collecting customer reviews. Check back soon to see what our clients say about our mobile detailing services!</p>
          </div>
        </div>
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