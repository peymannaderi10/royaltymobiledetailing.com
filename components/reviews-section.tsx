"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Phone, MapPin } from "lucide-react"

export function ReviewsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        {/* Google Reviews Widget Section - Centered */}
        <div className="mb-16">
          <div className="bg-muted/20 rounded-xl p-8">
                    
            {/* Placeholder for SociableKit Widget */}
            <div className="bg-white rounded-lg p-6 min-h-[500px] border-2 border-dashed border-accent/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <p className="text-lg font-semibold text-primary mb-2">
                  Google Reviews Widget
                </p>
                <p className="text-muted-foreground text-sm">
                  Replace this section with your SociableKit component
                </p>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg text-xs text-muted-foreground">
                  <code>
                    {`<div class='sk-ww-google-reviews' data-embed-id='YOUR_ID'></div>`}
                    <br />
                    {`<script src='https://widgets.sociablekit.com/google-reviews/widget.js' defer></script>`}
                  </code>
                </div>
              </div>
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