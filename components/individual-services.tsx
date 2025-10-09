"use client"

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Sparkles, Plus, DollarSign, Phone, MessageCircle } from "lucide-react";
import AnimatedContent from "./AnimatedContent";

const interiorServices = [
  {
    name: "Vacuum Interior",
    description: "Thorough vacuum of seats, floors, mats, and trunk",
    price: "$45"
  },
  {
    name: "Shampoo Carpet & Mats", 
    description: "Deep-clean shampoo for carpet and mats",
    price: "$65"
  },
  {
    name: "Seat Cleaning (Cloth)",
    description: "Steam clean or shampoo fabric seats",
    price: "$50"
  },
  {
    name: "Seat Cleaning (Leather)",
    description: "Clean & condition leather to prevent cracking",
    price: "$60"
  },
  {
    name: "Headliner Cleaning",
    description: "Spot clean or full clean of roof lining",
    price: "$50"
  },
  {
    name: "Interior Wipe Down",
    description: "Clean and disinfect all surfaces (dash, doors, etc.)",
    price: "$65"
  }
];

const exteriorServices = [
  {
    name: "Power Wash & Dry",
    description: "Powerwash and microfiber towel dry",
    price: "$50"
  },
  {
    name: "Clay Bar Treatment",
    description: "Removes contaminants before polishing",
    price: "$75"
  },
  {
    name: "Engine Bay Power Wash",
    description: "Degrease and clean engine compartment",
    price: "$45"
  },
  {
    name: "Tire & Wheel Cleaning",
    description: "Clean, degrease, and shine tires/rims",
    price: "$25"
  },
  {
    name: "Bug & Tar Removal",
    description: "Targeted removal from front end & mirrors",
    price: "$20"
  }
];

const addOnServices = [
  {
    name: "Pet Hair Removal",
    description: "Specialized tools to remove pet hair from seats, carpets, and upholstery",
    price: "$40"
  },
  {
    name: "Extra Dirty Vehicle Fee",
    description: "Additional fee for vehicles requiring extra time and effort due to heavy soiling",
    price: "$40–$80"
  },
  {
    name: "Headlight Restoration",
    description: "Restore cloudy, yellowed headlights to crystal clear condition",
    price: "$60+"
  },
  {
    name: "Buffing & Polishing",
    description: "Remove light scratches and swirl marks for enhanced shine and gloss",
    price: "$225"
  }
];

export default function IndividualServices() {
  const [activeTab, setActiveTab] = useState<'interior' | 'exterior' | 'addons'>('interior');

  const renderServiceList = (services: typeof interiorServices) => {
    return (
      <div className="space-y-3">
        {services.map((service, index) => (
          <div key={service.name + index} className="flex items-center justify-between py-3 px-4 bg-primary rounded-lg hover:bg-primary/90 transition-colors">
            <div className="flex-1">
              <h4 className="font-semibold text-white">{service.name}</h4>
              <p className="text-sm text-white/80">{service.description}</p>
            </div>
            <div className="text-right">
              <span className="text-lg font-bold text-white">{service.price}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-4xl mx-auto px-6">
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
              Individual Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Need specific services? Choose from our individual services to customize your detailing experience.
            </p>
          </div>
        </AnimatedContent>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-muted/30 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('interior')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'interior'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Interior
            </button>
            <button
              onClick={() => setActiveTab('exterior')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'exterior'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <Car className="w-4 h-4" />
              Exterior
            </button>
            <button
              onClick={() => setActiveTab('addons')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'addons'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <Plus className="w-4 h-4" />
              Add-Ons
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatedContent
          distance={60}
          direction="vertical"
          reverse={false}
          duration={0.6}
          ease="power2.out"
          initialOpacity={0}
          animateOpacity={true}
          scale={0.95}
          threshold={0.3}
        >
          <div className="mb-12">
            {activeTab === 'interior' && renderServiceList(interiorServices)}
            {activeTab === 'exterior' && renderServiceList(exteriorServices)}
            {activeTab === 'addons' && (
              <div className="space-y-3">
                {addOnServices.map((service, index) => (
                  <div key={service.name + index} className="flex items-center justify-between py-3 px-4 bg-primary rounded-lg hover:bg-primary/90 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{service.name}</h4>
                      {service.description && (
                        <p className="text-sm text-white/80">{service.description}</p>
                      )}
                      {service.duration && (
                        <p className="text-sm text-white/80">Duration: {service.duration}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-white">{service.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </AnimatedContent>

        {/* Single CTA */}
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
          <div className="text-center">
            <div className="bg-muted/30 rounded-lg p-8 mb-6">
              <h3 className="text-xl font-bold text-primary mb-2">Need Individual Services?</h3>
              <p className="text-muted-foreground mb-6">
                Call or text us to discuss your specific needs and get a custom quote for individual services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (267) 504-1533
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Text Us
                </Button>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
