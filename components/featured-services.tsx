import React from "react";
import { ArrowRight, Sparkles, Crown, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"; // or your router
import AnimatedContent from './AnimatedContent'
// import AnimatedContent, Card, CardHeader, CardTitle, CardDescription, CardContent, Button from your UI lib

const services = [
  {
    icon: Crown,
    title: "Deluxe Detail",
    description: "A deeper clean for both the inside and outside of your vehicle. Perfect for regular maintenance.",
    features: ["Power wash & dry", "Tire & wheel cleaning", "Interior vacuum", "Window cleaning"],
    price: "$160-$200",
    duration: "2.5-3 hours",
    popular: true,
    squareAppointmentLink: "https://book.squareup.com/appointments/z8kedt6rlit7op/location/LWT57WDV6AKE0/services/IUA7SUMZCIRG6UH2I33VCOQJ"
  },
  {
    icon: Sparkles,
    title: "Showroom Ready Package",
    description: "The ultimate detail experience for those who want perfection. Every inch cleaned, polished, and protected.",
    features: ["Complete inside & out detail", "Engine bay detail", "Buffing & polishing"],
    price: "$350-$400",
    duration: "4-4.5 hours",
    squareAppointmentLink: "https://book.squareup.com/appointments/z8kedt6rlit7op/location/LWT57WDV6AKE0/services/EHELKZWUS5EJDMVQWVK6MOG2"
  },
  {
    icon: Zap,
    title: "Ultimate Basic",
    description: "A fast, affordable refresh to keep your car looking sharp. Perfect for routine upkeep.",
    features: ["Power wash & dry", "Tire & wheel cleaning", "Interior vacuum", "Trunk vacuum"],
    price: "$100-$150",
    duration: "1.5-2 hours",
    squareAppointmentLink: "https://book.squareup.com/appointments/z8kedt6rlit7op/location/LWT57WDV6AKE0/services/IYGKUQLV6BB264CUZOILHIHE"
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <AnimatedContent
        distance={80}
        direction="vertical"
        reverse={false}
        duration={0.6}
        ease="power2.out"
        initialOpacity={0}
        animateOpacity={true}
        scale={0.95}
        threshold={0.4}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            Our Most Popular Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our most requested detailing packages, from basic maintenance to complete restoration.
          </p>
        </div>
      </AnimatedContent>

      {/* Services grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon; // component
          return (
            <AnimatedContent
              key={service.title + index}
              distance={100}
              direction="vertical"
              reverse={index % 2 === 1}
              duration={0.8}
              ease="power2.out"
              initialOpacity={0}
              animateOpacity={true}
              scale={0.85}
              threshold={0.3}
              delay={index * 0.15}
            >
              <Card className={`group hover:shadow-lg transition-all duration-300 border-border/50 h-full flex flex-col relative ${service.popular ? 'ring-2 ring-accent' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                    <div className="text-sm font-semibold text-primary mb-1">{service.price}</div>
                    <div className="text-xs text-muted-foreground">{service.duration}</div>
                  </div>

                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-border pt-4 mt-auto">
                    <a href={service.squareAppointmentLink} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        Book Now
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </AnimatedContent>
          );
        })}
      </div>

      {/* CTA */}
      <AnimatedContent
        distance={80}
        direction="vertical"
        reverse={false}
        duration={0.6}
        ease="power2.out"
        initialOpacity={0}
        animateOpacity={true}
        scale={0.95}
        threshold={0.4}
      >
        <div className="text-center mt-8">
          <Link href="/services">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </AnimatedContent>
      </div>
    </section>
  );
}
