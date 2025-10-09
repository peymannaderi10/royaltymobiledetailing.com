"use client"

import React, { useState } from "react";
import Image from "next/image";

interface BeforeAfterItem {
  id: number;
  before: string;
  after: string;
  title: string;
}

const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: 1,
    before: "/worn-damaged-convertible-top-before-repair.png",
    after: "/bmw-convertible-with-new-black-canvas-top.png",
    title: "Convertible Top Restoration"
  },
  {
    id: 2,
    before: "/sunroof-water-damage-leak-before-repair.png",
    after: "/mercedes-sunroof-repair-before-and-after.png",
    title: "Sunroof Leak Repair"
  },
  {
    id: 3,
    before: "/torn-damaged-car-seats-before-restoration.png",
    after: "/luxury-car-interior-with-custom-leather-seats.png",
    title: "Interior Seat Restoration"
  },
  {
    id: 4,
    before: "/water-damaged-car-interior-from-sunroof-leak.png",
    after: "/clean-dry-car-interior-after-sunroof-repair.png",
    title: "Water Damage Restoration"
  },
  {
    id: 5,
    before: "/worn-torn-mercedes-car-seat-before-restoration.png",
    after: "/restored-mercedes-car-seat-like-new-condition.png",
    title: "Mercedes Seat Restoration"
  },
  {
    id: 6,
    before: "/basic-car-interior-before-custom-upgrade.png",
    after: "/luxury-custom-car-interior-after-professional-work.png",
    title: "Interior Custom Upgrade"
  }
];

export default function BeforeAfterToggle() {
  const [activeItems, setActiveItems] = useState<{ [key: number]: 'before' | 'after' }>({});

  const toggleImage = (itemId: number) => {
    setActiveItems(prev => ({
      ...prev,
      [itemId]: prev[itemId] === 'before' ? 'after' : 'before'
    }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            Before & After Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click the buttons to see the dramatic transformations we achieve
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterItems.map((item) => {
            const currentView = activeItems[item.id] || 'before';
            const currentImage = currentView === 'before' ? item.before : item.after;
            
            return (
              <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative">
                  {/* Toggle Buttons */}
                  <div className="absolute top-4 left-4 z-10 flex bg-white rounded-lg shadow overflow-hidden">
                    <button
                      onClick={() => setActiveItems(prev => ({ ...prev, [item.id]: 'before' }))}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${
                        currentView === 'before'
                          ? 'bg-primary text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Before
                    </button>
                    <button
                      onClick={() => setActiveItems(prev => ({ ...prev, [item.id]: 'after' }))}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${
                        currentView === 'after'
                          ? 'bg-primary text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      After
                    </button>
                  </div>

                  {/* Image Container */}
                  <div className="relative pt-[125%]">
                    <div className="absolute inset-0">
                      <Image
                        src={currentImage}
                        alt={`${item.title} - ${currentView}`}
                        fill
                        className="object-cover object-center transition-opacity duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
