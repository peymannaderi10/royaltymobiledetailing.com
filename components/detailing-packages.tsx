import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, CheckCircle } from "lucide-react";
import AnimatedContent from "./AnimatedContent";

const packages = [
  {
    name: "Ultimate Basic",
    description: "A fast, affordable refresh to keep your car looking sharp. Perfect for routine upkeep or in-between deep details.",
    duration: "1.5-2 hours",
    features: [
      "Power wash & dry",
      "Tire & wheel cleaning", 
      "Interior vacuum",
      "Trunk vacuum"
    ],
    pricing: {
      regular: "$100",
      plus: "$150"
    },
    popular: false,
    squareAppointmentLink: "https://book.squareup.com/appointments/z8kedt6rlit7op/location/LWT57WDV6AKE0/services/IYGKUQLV6BB264CUZOILHIHE"
  },
  {
    name: "Deluxe Detail",
    description: "A deeper clean for both the inside and outside of your vehicle. Ideal for regular maintenance.",
    duration: "2.5-3 hours",
    features: [
      "Power wash & dry",
      "Tire & wheel cleaning",
      "Interior vacuum", 
      "Interior wipe down",
      "Inside & outside window cleaning"
    ],
    pricing: {
      regular: "$160",
      plus: "$200"
    },
    popular: true,
    squareAppointmentLink: "https://book.squareup.com/appointments/z8kedt6rlit7op/location/LWT57WDV6AKE0/services/IUA7SUMZCIRG6UH2I33VCOQJ"
  },
  {
    name: "Ultimate Interior Detail",
    description: "Transform your interior with a thorough deep clean. Perfect for vehicles that need extra interior attention.",
    duration: "2.5-3 hours",
    features: [
      "Vacuum interior & trunk",
      "Shampoo carpets & mats",
      "Seat cleaning (cloth or leather)",
      "Interior wipe down",
      "Headliner cleaning (spot or full)",
      "Window cleaning",
      "Odor removal"
    ],
    pricing: {
      regular: "$150",
      plus: "$190"
    },
    popular: false,
    squareAppointmentLink: "https://book.squareup.com/appointments/z8kedt6rlit7op/location/LWT57WDV6AKE0/services/BYHDTUR3CAOVWZZ7NPVBKTES"
  },
  {
    name: "Ultimate Exterior Detail",
    description: "Bring back that glossy, well-kept finish to your vehicle. Ideal for removing dirt, tar, and buildup.",
    duration: "2-2.5 hours",
    features: [
      "Power wash & dry",
      "Tire & wheel cleaning",
      "Bug & tar removal",
      "Spray wax application"
    ],
    pricing: {
      regular: "$120",
      plus: "$160"
    },
    popular: false,
    squareAppointmentLink: "https://book.squareup.com/appointments/z8kedt6rlit7op/location/LWT57WDV6AKE0/services/VFRSEW7B6RPXVLBFZWDV5FUS"
  },
  {
    name: "Ultimate Inside & Out",
    description: "A comprehensive detailing service that refreshes both your vehicle's interior and exterior.",
    duration: "3-3.5 hours",
    features: [
      "Full interior detail",
      "Full exterior detail", 
      "Shampoo carpets & seats",
      "Wax application",
      "Window cleaning inside & out",
      "Odor removal"
    ],
    pricing: {
      regular: "$220",
      plus: "$260"
    },
    popular: false,
    squareAppointmentLink: "https://book.squareup.com/appointments/z8kedt6rlit7op/location/LWT57WDV6AKE0/services/QEVOOJKIY3Z7YMTBQTTHGSKE"
  },
  {
    name: "Showroom Ready Package",
    description: "The ultimate detail experience for those who want perfection. Every inch cleaned, polished, and protected.",
    duration: "4-4.5 hours",
    features: [
      "Complete inside & out detail",
      "Engine bay detail",
      "Buffing & polishing"
    ],
    pricing: {
      regular: "$350",
      plus: "$400"
    },
    popular: false,
    squareAppointmentLink: "https://book.squareup.com/appointments/z8kedt6rlit7op/location/LWT57WDV6AKE0/services/EHELKZWUS5EJDMVQWVK6MOG2"
  }
];

export default function DetailingPackages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
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
              Detailing Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive detailing packages designed to meet every need and budget. 
              All packages include mobile service to your location.
            </p>
          </div>
        </AnimatedContent>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <AnimatedContent
              key={pkg.name + index}
              distance={100}
              direction="vertical"
              reverse={index % 2 === 1}
              duration={0.8}
              ease="power2.out"
              initialOpacity={0}
              animateOpacity={true}
              scale={0.85}
              threshold={0.3}
              delay={index * 0.1}
            >
              <Card className={`group hover:shadow-lg transition-all duration-300 border-border/50 h-full flex flex-col relative ${pkg.popular ? 'ring-2 ring-accent' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-primary">{pkg.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{pkg.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium">{pkg.duration}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Regular Vehicle:</span>
                        <span className="font-semibold text-primary">{pkg.pricing.regular}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Plus Size (Van/Truck/SUV):</span>
                        <span className="font-semibold text-primary">{pkg.pricing.plus}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-border pt-4 mt-auto">
                    <a href={pkg.squareAppointmentLink} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        Book Now
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
