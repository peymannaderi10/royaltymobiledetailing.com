"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    vehicle: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-2xl mx-auto px-6">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary text-center">Get Your Free Estimate</CardTitle>
            <p className="text-muted-foreground text-center">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="(609) 555-0123"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Needed</Label>
                <Select onValueChange={(value) => handleChange("service", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-detail">Full Detail Service</SelectItem>
                    <SelectItem value="interior-detail">Interior Detailing</SelectItem>
                    <SelectItem value="exterior-detail">Exterior Detailing</SelectItem>
                    <SelectItem value="ceramic-coating">Ceramic Coating</SelectItem>
                    <SelectItem value="paint-correction">Paint Correction</SelectItem>
                    <SelectItem value="mobile-service">Mobile Service</SelectItem>
                    <SelectItem value="other">Other/Not Sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="vehicle">Vehicle Information</Label>
                <Input
                  id="vehicle"
                  value={formData.vehicle}
                  onChange={(e) => handleChange("vehicle", e.target.value)}
                  placeholder="Year, Make, Model (e.g., 2018 BMW 430i)"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us about your project, any specific issues, or questions you have..."
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to be contacted by Royalty Mobile Detailing regarding your
                inquiry.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
