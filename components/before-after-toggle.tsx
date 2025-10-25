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
    before: "/before1-honda.png",
    after: "/after1-honda.png",
    title: "Honda Interior Work"
  },
  {
    id: 2,
    before: "/before2-honda.png",
    after: "/after2-honda.png",
    title: "Honda Second Project"
  },
  {
    id: 3,
    before: "/before1-subaru.png",
    after: "/after1-subaru.png",
    title: "Subaru Interior Restoration"
  },
  {
    id: 4,
    before: "/before1-van.png",
    after: "/after1-van.png",
    title: "Van Interior Work"
  },
  {
    id: 5,
    before: "/before2-van.png",
    after: "/after2-van.png",
    title: "Van Second Project"
  },
  {
    id: 6,
    before: "/before2-audi.png",
    after: "/after2-audi.png",
    title: "Audi Second Project"
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
    <section className="py-12 md:py-20 bg-white">
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
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                        priority={item.id <= 3} // Prioritize first 3 images
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
