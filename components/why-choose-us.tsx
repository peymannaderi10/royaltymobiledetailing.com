import React from "react";
import { Shield, Clock, Wrench, Heart, Truck } from "lucide-react";
import AnimatedContent from "./AnimatedContent";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const reasons = [
  {
    icon: Truck,
    title: "Mobile Convenience",
    description:
      "We come to you! Professional detailing services at your home, office, or anywhere in the tri-state area.",
  },
  {
    icon: Heart,
    title: "Local & Personal",
    description:
      "As a small local business, we provide personalized service and build lasting relationships with our customers.",
  },
  {
    icon: Wrench,
    title: "Skilled Craftsman",
    description: "Experienced detailer dedicated to delivering showroom-quality results every time.",
  },
  {
    icon: Shield,
    title: "Satisfaction Guaranteed",
    description: "Your complete satisfaction is our priority. We stand behind every job we do.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity={true}
        scale={0.95}
        threshold={0.2}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            Why Choose Royalty Mobile Detailing?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional mobile detailing with personal service, competitive pricing, and guaranteed satisfaction.
          </p>
        </div>
      </AnimatedContent>

      <div className="grid gap-12 grid-cols-1 lg:grid-cols-5 items-center">
        {/* Left side - Reasons */}
        <div className="lg:col-span-3 grid gap-6 grid-cols-1 sm:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <AnimatedContent
                key={reason.title + index}
                distance={80}
                direction="vertical"
                reverse={index % 2 === 1}
                duration={0.6}
                ease="power2.out"
                initialOpacity={0}
                animateOpacity={true}
                scale={0.9}
                threshold={0.3}
                delay={index * 0.1}
              >
                <Card className="border-none bg-primary hover:bg-primary/90 transition-all duration-300 h-full">
                  <CardContent className="p-7 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-md bg-white/10"
                        aria-hidden="true"
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                    </div>

                    <p className="text-white/80 text-sm leading-relaxed flex-grow">{reason.description}</p>
                  </CardContent>
                </Card>
              </AnimatedContent>
            );
          })}
        </div>

        {/* Right side - Image */}
        <div className="lg:col-span-2 relative">
          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={true}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity={true}
            scale={0.95}
            threshold={0.2}
            delay={0.2}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/luxury-car-interior-with-sunroof-open-showing-craf.png"
                alt="Luxury car interior with professional detailing work"
                width={580}
                height={420}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </AnimatedContent>
        </div>
      </div>
      </div>
    </section>
  );
}
