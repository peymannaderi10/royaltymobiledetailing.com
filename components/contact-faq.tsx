"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export function ContactFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can call us at (609) 880-1919, fill out our online contact form, or stop by our shop during business hours. We'll provide a free consultation and estimate for your project.",
    },
    {
      question: "Do you provide free estimates?",
      answer:
        "Yes! We provide free, no-obligation estimates for all services. We'll assess your vehicle and provide transparent pricing before any work begins.",
    },
    {
      question: "How long do repairs typically take?",
      answer:
        "Repair time varies by service: convertible tops (2-3 days), sunroof repairs (1-2 days), headliners (1 day), and interior restoration (3-5 days). We'll give you an accurate timeline during your consultation.",
    },
    {
      question: "Do you work on all vehicle makes and models?",
      answer:
        "Yes, we service all makes and models including luxury vehicles, classics, and commercial vehicles. Our experience spans over 20 years with vehicles of all types.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, check, and all major credit cards. We also offer financing options for larger projects. Payment is due upon completion of work.",
    },
    {
      question: "Do you offer warranties on your work?",
      answer:
        "All our work comes with a comprehensive warranty. Warranty terms vary by service type, and we'll explain the coverage for your specific project.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about our services, scheduling, and what to expect
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-border/50 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-primary pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our friendly team is here to help with any questions about your auto interior or sunroof needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:6098801919" className="inline-block">
                <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md font-semibold">
                  Call (609) 880-1919
                </button>
              </a>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-md font-semibold bg-transparent">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
