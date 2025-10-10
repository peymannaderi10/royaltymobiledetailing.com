"use client"

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What areas do you serve for mobile detailing?",
    answer: "We provide mobile detailing services throughout the Philadelphia Tri-State Area, including Pennsylvania, New Jersey, and Delaware. We come to your home, office, or any convenient location within our service area."
  },
  {
    question: "How do I schedule a mobile detailing appointment?",
    answer: "You can call us at (267) 504-1533, text us, or contact us through our website. We'll provide a free consultation and estimate for your detailing needs. We're available 6AM-10PM, 6 days a week."
  },
  {
    question: "Do you provide free estimates for detailing services?",
    answer: "Yes! We provide free, no-obligation estimates for all our mobile detailing services. We'll assess your vehicle and provide transparent pricing before any work begins."
  },
  {
    question: "How far in advance should I book my detailing service?",
    answer: "We recommend booking at least 24-48 hours in advance to ensure availability. However, we can often accommodate same-day or next-day appointments depending on our schedule and your location."
  },
  {
    question: "What's included in your mobile detailing service?",
    answer: "We bring all necessary equipment, water, and supplies to your location. Our services include everything from basic washes to complete interior and exterior detailing packages. We use professional-grade equipment and premium products to ensure the best results."
  },
  {
    question: "Do you work in all weather conditions?",
    answer: "We can work in most weather conditions, but we may need to reschedule during severe weather (heavy rain, snow, or extreme temperatures) for safety and quality reasons. We'll contact you if weather conditions affect your appointment."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit cards, and digital payment methods. Payment is typically due upon completion of service. We can provide receipts for all transactions."
  },
  {
    question: "How long does a typical detailing service take?",
    answer: "Service duration varies by package: Basic services take 1.5-2 hours, Deluxe Detail takes 2.5-3 hours, and our comprehensive packages can take 3-4 hours. We'll provide an estimated timeframe when you book your service."
  },
  {
    question: "Do you offer any guarantees on your work?",
    answer: "Yes, we stand behind all our work with a satisfaction guarantee. If you're not completely satisfied with the results, we'll return to address any concerns at no additional charge."
  },
  {
    question: "Can I customize my detailing package?",
    answer: "Absolutely! We offer individual services and add-ons so you can create a custom package that meets your specific needs and budget. Contact us to discuss your requirements."
  },
  {
    question: "What should I do to prepare for my mobile detailing appointment?",
    answer: "Simply ensure we have access to your vehicle and a nearby water source if possible. Remove any personal items from your vehicle, and we'll handle the rest. We'll contact you when we arrive."
  },
  {
    question: "Do you work on all types of vehicles?",
    answer: "Yes, we service cars, trucks, SUVs, vans, and other vehicles. Our pricing varies based on vehicle size, with separate rates for regular-sized vehicles and plus-sized vehicles (vans, trucks, large SUVs)."
  }
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our mobile detailing services
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-border/30 hover:shadow-md transition-all duration-300 rounded-lg overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between hover:bg-muted/30 transition-all duration-200 group"
                >
                  <h3 className="text-base font-medium text-primary pr-4 leading-tight">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 ml-2">
                    {openIndex === index ? (
                      <ChevronUp className="w-4 h-4 text-accent transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-accent transition-transform duration-200 group-hover:scale-110" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-4">
                    <div className="border-t border-border/30 pt-3">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-border/50">
            <h3 className="text-xl font-bold text-primary mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Contact us directly for personalized answers about our mobile detailing services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:2675041533" className="inline-block">
                <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md font-semibold flex items-center gap-2">
                  <span>Call (267) 504-1533</span>
                </button>
              </a>
              <a href="sms:2675041533" className="inline-block">
                <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-md font-semibold bg-transparent">
                  Text Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
