"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Crown, Plane, Ship, Caravan, ShieldCheck, Sparkles } from "lucide-react";
import AnimatedContent from "./AnimatedContent";

const BOOKING_URL = "https://book.squareup.com/appointments/z8kedt6rlit7op/location/LWT57WDV6AKE0/services";

type Item = { name: string; price: string };
type Pkg = { name: string; price: string; features: string[]; popular?: boolean };

type Category = {
  id: string;
  label: string;
  icon: React.ElementType;
  tagline: string;
  packages: Pkg[];
  exterior: Item[];
  interior: Item[];
};

const categories: Category[] = [
  {
    id: "rv",
    label: "Campers & RVs",
    icon: Caravan,
    tagline: "Concierge detailing for high-value recreational vehicles.",
    packages: [
      {
        name: "Royalty Essential",
        price: "$650",
        features: [
          "Exterior Hand Wash",
          "Wheels & Tires Detailed",
          "Interior Vacuum & Wipe Down",
          "Interior & Exterior Glass",
        ],
      },
      {
        name: "Royalty Signature",
        price: "$1,100",
        popular: true,
        features: [
          "Everything in Essential",
          "Roof Deep Cleaning",
          "Premium Wax Protection",
          "Carpet & Upholstery Shampoo",
          "Kitchen & Bathroom Deep Clean",
        ],
      },
      {
        name: "Royalty Elite",
        price: "$1,900",
        features: [
          "Everything in Signature",
          "Oxidation Correction (Light)",
          "Paint Sealant or Ceramic Spray",
          "Leather Conditioning",
          "Odor Elimination",
          "Awning Treatment",
        ],
      },
    ],
    exterior: [
      { name: "Luxury Exterior Hand Wash (Roof, Sides, Rear)", price: "$200" },
      { name: "Roof Deep Clean & Mildew Neutralization", price: "$300" },
      { name: "Bug, Tar & Sap Safe Removal", price: "$125" },
      { name: "Wheel, Tire & Wheel-Well Restoration + Dressing", price: "$175" },
      { name: "Premium Wax Application (Painted Surfaces)", price: "$350" },
      { name: "Oxidation Correction (Paint & Gel Coat)", price: "$600" },
      { name: "Paint Sealant or Ceramic Spray Protection", price: "$450" },
      { name: "Awning Cleaning & UV Treatment", price: "$225" },
      { name: "Glass Polishing & Hydrophobic Treatment", price: "$225" },
    ],
    interior: [
      { name: "Interior Vacuum & Luxury Surface Care", price: "$250" },
      { name: "Carpet & Upholstery Extraction Shampoo", price: "$350" },
      { name: "Leather Cleaning, Conditioning & Protection", price: "$300" },
      { name: "Kitchen Galley Deep Sanitation", price: "$225" },
      { name: "Bathroom & Shower Steam Sanitation", price: "$250" },
      { name: "Mattress Steam Treatment & Deodorization", price: "$225" },
      { name: "Interior Odor Neutralization (Ozone Optional)", price: "$200" },
    ],
  },
  {
    id: "boat",
    label: "Boats & Yachts",
    icon: Ship,
    tagline: "Marine detailing up to yacht size — environmentally responsible.",
    packages: [
      {
        name: "Marine Essential",
        price: "$850",
        features: [
          "Hull Wash",
          "Deck & Non-Skid Cleaning",
          "Interior Wipe Down",
          "Glass & Windows",
        ],
      },
      {
        name: "Marine Signature",
        price: "$1,500",
        popular: true,
        features: [
          "Everything in Essential",
          "Premium Wax Protection",
          "Waterline Cleaning",
          "Interior Deep Clean",
          "Upholstery Shampoo",
        ],
      },
      {
        name: "Marine Elite",
        price: "$2,800",
        features: [
          "Everything in Signature",
          "Oxidation Correction (Light)",
          "Marine Ceramic Protection",
          "Metal Polishing",
          "Teak Treatment",
          "Odor Neutralization",
        ],
      },
    ],
    exterior: [
      { name: "Luxury Hull Hand Wash", price: "$300" },
      { name: "Waterline & Scum Line Removal", price: "$400" },
      { name: "Gel Coat Oxidation Correction", price: "$800" },
      { name: "Premium Wax & Sealant (Hull & Topsides)", price: "$650" },
      { name: "Marine-Grade Ceramic Coating", price: "$1,200" },
      { name: "Stainless & Metal Brightwork Polishing", price: "$450" },
      { name: "Teak Cleaning, Brightening & Protection", price: "$550" },
      { name: "Canvas, Vinyl & Upholstery Cleaning", price: "$400" },
    ],
    interior: [
      { name: "Cabin Deep Cleaning & Sanitation", price: "$400" },
      { name: "Carpet & Upholstery Extraction", price: "$450" },
      { name: "Leather Cleaning & Conditioning", price: "$425" },
      { name: "Galley (Kitchen) Deep Clean", price: "$300" },
      { name: "Head (Bathroom) Sanitation", price: "$300" },
      { name: "Mold & Mildew Remediation (Surface Level)", price: "$400" },
    ],
  },
  {
    id: "jet",
    label: "Private Jets",
    icon: Plane,
    tagline: "FAA-aware cosmetic detailing for jets, turboprops & small aircraft.",
    packages: [
      {
        name: "Aviation Essential",
        price: "$3,500",
        features: [
          "Exterior Hand Wash",
          "Cabin Vacuum & Wipe Down",
          "Interior & Exterior Windows",
        ],
      },
      {
        name: "Aviation Signature",
        price: "$6,000",
        popular: true,
        features: [
          "Everything in Essential",
          "Bug & Exhaust Removal",
          "Leather Conditioning",
          "Lavatory Sanitation",
        ],
      },
      {
        name: "Aviation Elite",
        price: "$9,500",
        features: [
          "Everything in Signature",
          "Paint Sealant or Ceramic Coating",
          "Brightwork Polishing",
          "Carpet & Upholstery Shampoo",
          "Odor Elimination",
        ],
      },
    ],
    exterior: [
      { name: "FAA-Safe Exterior Hand Wash", price: "$1,800" },
      { name: "Bug, Exhaust & Carbon Residue Removal", price: "$550" },
      { name: "Brightwork & Metal Polishing", price: "$750" },
      { name: "Paint Sealant or Ceramic Coating", price: "$2,200" },
      { name: "De-Icing Residue Removal", price: "$600" },
    ],
    interior: [
      { name: "Cabin Vacuum & Interior Surface Care", price: "$900" },
      { name: "Leather Seat Cleaning & Conditioning", price: "$1,100" },
      { name: "Carpet & Upholstery Shampoo", price: "$1,000" },
      { name: "Lavatory Deep Sanitation", price: "$750" },
      { name: "Wood Veneer Cleaning & Protection", price: "$900" },
      { name: "Cabin Odor Neutralization", price: "$600" },
    ],
  },
];

const subscriptions: Pkg[] = [
  {
    name: "Royalty Care — Monthly",
    price: "$350 / mo",
    features: [
      "Scheduled Exterior Wash",
      "Interior Light Detail",
      "Tire & Trim Dressing",
      "Glass Cleaning",
      "Priority Booking",
    ],
  },
  {
    name: "Royalty Preserve — Quarterly",
    price: "$900 / qtr",
    features: [
      "Deep Exterior Cleaning",
      "Wax or Sealant Refresh",
      "Interior Shampoo Touch-Ups",
      "Odor Control",
      "Condition Assessment Report",
    ],
  },
];

function BookButton({ className = "", children = "Book Now" }: { className?: string; children?: React.ReactNode }) {
  return (
    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={className}>
      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">{children}</Button>
    </a>
  );
}

function PackageCard({ pkg }: { pkg: Pkg }) {
  return (
    <Card
      className={`group hover:shadow-lg transition-all duration-300 border-border/50 h-full flex flex-col relative ${
        pkg.popular ? "ring-2 ring-accent" : ""
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Crown className="w-3.5 h-3.5" /> Most Popular
          </span>
        </div>
      )}
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-bold text-primary">{pkg.name}</CardTitle>
        <CardDescription className="text-muted-foreground">
          <span className="text-xs uppercase tracking-wider">Starting at</span>
          <div className="text-3xl font-bold text-primary mt-1">{pkg.price}</div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <ul className="space-y-2 mb-6 flex-1">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-border pt-4 mt-auto">
          <BookButton />
        </div>
      </CardContent>
    </Card>
  );
}

function ItemList({ items }: { items: Item[] }) {
  return (
    <ul className="divide-y divide-border/50">
      {items.map((item, idx) => (
        <li key={idx} className="flex justify-between items-center py-3 gap-4">
          <span className="text-sm text-muted-foreground">{item.name}</span>
          <span className="text-sm font-semibold text-primary whitespace-nowrap">
            <span className="text-xs text-muted-foreground font-normal mr-1">from</span>
            {item.price}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function PremiumServices() {
  return (
    <section id="premium" className="py-20 bg-white">
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" /> Premium Mobile Detailing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
              Campers & RVs • Boats • Private Jets
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Concierge-level mobile detailing for high-value recreational vehicles, marine vessels, and private
              aircraft. Professional • Fully Insured • FAA & Marine-Aware Procedures • White-Glove Results.
            </p>
            <p className="text-xs text-muted-foreground/80 mt-3 italic">
              All prices are starting at and may vary based on size, condition, access, and service environment.
              Final pricing confirmed after inspection.
            </p>
          </div>
        </AnimatedContent>

        <Tabs defaultValue="rv" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-10 h-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <TabsTrigger key={cat.id} value={cat.id} className="py-3 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                  <Icon className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">{cat.label}</span>
                  <span className="sm:hidden">{cat.label.split(" ")[0]}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="space-y-12 mt-0">
              <div className="text-center">
                <p className="text-muted-foreground italic">{cat.tagline}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary text-center mb-8 font-[family-name:var(--font-heading)]">
                  Signature Packages
                </h3>
                <div className="grid gap-8 md:grid-cols-3">
                  {cat.packages.map((pkg) => (
                    <PackageCard key={pkg.name} pkg={pkg} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary text-center mb-8 font-[family-name:var(--font-heading)]">
                  À La Carte Services
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">Exterior</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ItemList items={cat.exterior} />
                    </CardContent>
                  </Card>
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">Interior</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ItemList items={cat.interior} />
                    </CardContent>
                  </Card>
                </div>
                <div className="max-w-xs mx-auto mt-8">
                  <BookButton>Book {cat.label}</BookButton>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Subscriptions */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-primary mb-3 font-[family-name:var(--font-heading)]">
              Maintenance Subscription Programs
            </h3>
            <p className="text-muted-foreground">Keep your asset in showroom condition year-round.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {subscriptions.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>

        {/* Fleet & Contracts */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-primary mb-3 font-[family-name:var(--font-heading)]">
              Fleet & Contract Services
            </h3>
            <p className="text-muted-foreground">
              Tailored programs for marinas, hangars, and recurring aviation or marine service needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Fleet Pricing */}
            <Card className="border-border/50 flex flex-col">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-2xl text-primary">Fleet & Contract Pricing</CardTitle>
                <CardDescription className="text-sm">Marinas & Hangars</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="bg-muted/50 rounded-lg divide-y divide-border/50 mb-6">
                  <div className="flex justify-between items-center px-4 py-3">
                    <div>
                      <div className="text-sm font-semibold text-primary">3–5 Units</div>
                      <div className="text-xs text-muted-foreground">Small fleet</div>
                    </div>
                    <span className="text-lg font-bold text-accent">10% Off</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-3">
                    <div>
                      <div className="text-sm font-semibold text-primary">6–10 Units</div>
                      <div className="text-xs text-muted-foreground">Mid-size fleet</div>
                    </div>
                    <span className="text-lg font-bold text-accent">15% Off</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-3">
                    <div>
                      <div className="text-sm font-semibold text-primary">11+ Units</div>
                      <div className="text-xs text-muted-foreground">Enterprise</div>
                    </div>
                    <span className="text-sm font-bold text-accent">Custom Contract</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6 flex-1">
                  <div className="flex items-start text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Priority scheduling</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Dedicated account management</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Detailed service reporting</span>
                  </div>
                </div>

                <BookButton>Request Fleet Quote</BookButton>
              </CardContent>
            </Card>

            {/* Service Contracts */}
            <Card className="border-border/50 flex flex-col">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <Crown className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-2xl text-primary">Service Contracts</CardTitle>
                <CardDescription className="text-sm">Jets & Boats — Recurring Service</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground text-center mb-6">
                  Formal recurring service agreements for aviation and marina-based assets, with defined scope and
                  clear liability boundaries.
                </p>

                <div className="space-y-2 mb-6 flex-1">
                  <div className="flex items-start text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Defined scope & service frequency</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Clear liability boundaries</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Access permissions & payment terms</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Required for recurring aviation & marina service</span>
                  </div>
                </div>

                <BookButton>Inquire About Contracts</BookButton>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="mt-20 max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="bg-muted/30 rounded-lg border border-border/50 px-6">
            <AccordionItem value="disclaimers" className="border-0">
              <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline">
                Regulatory & Liability Disclaimers
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground space-y-3 leading-relaxed">
                <p>
                  <strong className="text-primary">Aircraft Services:</strong> All aircraft detailing is cosmetic
                  only and performed in accordance with manufacturer-safe cleaning standards. Royalty Mobile
                  Detailing does not perform maintenance, repairs, or mechanical services. All work is non-invasive
                  and compliant with FAA cosmetic cleaning guidelines. Aircraft must be positioned in an approved
                  wash area with owner/operator authorization.
                </p>
                <p>
                  <strong className="text-primary">Marine Services:</strong> Marine detailing complies with
                  environmentally responsible practices. The client is responsible for marina approvals, runoff
                  regulations, and access permissions. We do not service submerged hulls or perform mechanical or
                  structural work.
                </p>
                <p>
                  <strong className="text-primary">General:</strong> Pre-existing damage, oxidation, staining, or
                  wear will be documented prior to service. Results vary by condition. Royalty Mobile Detailing is
                  not responsible for prior defects, failing clear coats, or manufacturer paint limitations.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p className="text-center text-sm text-muted-foreground mt-8 italic">
            Quality you can see. Protection you can trust.
          </p>
        </div>
      </div>
    </section>
  );
}
