import React from "react";
import AnimatedContent from "./AnimatedContent";
import RotatingText from "./RotatingText"; // or your rotating text component
import { Star, Calendar, Phone } from "lucide-react";
import Link from "next/link"; // or your router's Link
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-car-interior-with-sunroof-open-showing-craf.png"
          alt="Professional auto interior work"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/45 to-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <AnimatedContent
        distance={80}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity={true}
        scale={0.95}
        threshold={0.1}
      >
        <div className="mb-6 flex justify-center">
          <img 
            src="/transparentLogo.png" 
            alt="Royalty Mobile Detailing Logo" 
            className="h-48 md:h-64 lg:h-80 w-auto max-w-[800px] object-contain"
          />
        </div>
      </AnimatedContent>

      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={1}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity={true}
        scale={0.9}
        threshold={0.15}
      >
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary mb-2 font-[family-name:var(--font-heading)]">
            <span>Royalty Detailing</span>
          </h1>

          <RotatingText
            texts={[
              "Restoration",
              "Interior",
              "Exterior",
              "Showroom",
              "Polishing",
              "Buffing",
            ]}
            mainClassName="text-4xl sm:text-5xl md:text-7xl font-bold text-accent overflow-hidden py-2 justify-center leading-tight"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2500}
          />
        </div>
      </AnimatedContent>

      <AnimatedContent
        distance={60}
        direction="vertical"
        reverse={false}
        duration={0.7}
        ease="power2.out"
        initialOpacity={0}
        animateOpacity={true}
        scale={0.98}
        threshold={0.2}
      >
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-[family-name:var(--font-body)]">
          Professional Mobile Auto Detailing & Restoration Services
        </p>
      </AnimatedContent>

      <AnimatedContent
        distance={50}
        direction="vertical"
        reverse={false}
        duration={0.6}
        ease="power2.out"
        initialOpacity={0}
        animateOpacity={true}
        scale={0.98}
        threshold={0.25}
      >
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
          Serving the Philadelphia Tri-State Area
        </p>
      </AnimatedContent>

      <AnimatedContent
        distance={70}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity={true}
        scale={0.9}
        threshold={0.3}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://book.squareup.com/appointments/z8kedt6rlit7op/location/LWT57WDV6AKE0/services" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Service
            </Button>
          </a>

          <Link href="tel:2675041533">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Phone className="w-5 h-5 mr-2" />
              (267) 504-1533
            </Button>
          </Link>
        </div>
      </AnimatedContent>

      <AnimatedContent
        distance={40}
        direction="vertical"
        reverse={false}
        duration={0.5}
        ease="power2.out"
        initialOpacity={0}
        animateOpacity={true}
        scale={0.98}
        threshold={0.4}
      >
        <div className="mt-12 text-sm text-muted-foreground font-[family-name:var(--font-body)]">
          <p>📍 Philadelphia, Tri-State Area</p>
          <p className="mt-1">🕒 Mon–Sat 6AM–10PM • Sun Closed</p>
        </div>
      </AnimatedContent>
    </div>
    </section>
  );
}
