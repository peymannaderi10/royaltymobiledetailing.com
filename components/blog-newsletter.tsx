"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, CheckCircle } from "lucide-react"

export function BlogNewsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="border-none bg-background/80 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-accent" />
            </div>

            <h2 className="text-3xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
              Stay Updated with Auto Care Tips
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get expert maintenance advice, seasonal care tips, and exclusive insights delivered to your inbox monthly
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="newsletter-email" className="sr-only">
                      Email Address
                    </Label>
                    <Input
                      id="newsletter-email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="text-center"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Subscribe to Newsletter
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  No spam, unsubscribe anytime. We respect your privacy.
                </p>
              </form>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-semibold">Successfully Subscribed!</span>
                </div>
                <p className="text-muted-foreground">
                  Thank you for subscribing. You'll receive our next newsletter with expert auto care tips.
                </p>
              </div>
            )}

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Monthly Tips</h4>
                <p className="text-muted-foreground">Seasonal maintenance advice and care schedules</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Expert Insights</h4>
                <p className="text-muted-foreground">Professional techniques and industry updates</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Exclusive Content</h4>
                <p className="text-muted-foreground">Subscriber-only guides and special offers</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
