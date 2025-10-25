"use client"

import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export interface CarouselItem {
  id: number;
  title: string;
  description: string;
  before: string;
  after: string;
}

export interface AutoRotatingCarouselProps {
  items: CarouselItem[];
  autoplayDelay?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  showTitle?: boolean;
}

export default function AutoRotatingCarousel({
  items,
  autoplayDelay = 5000,
  showControls = true,
  showIndicators = true,
  showTitle = true
}: AutoRotatingCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set([0]));
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload images for specific slide
  const preloadSlide = useCallback((index: number) => {
    if (index >= items.length || preloadedImages.has(index)) return Promise.resolve();

    return new Promise<void>((resolve) => {
      let loadedCount = 0;
      const item = items[index];

      const checkComplete = () => {
        loadedCount++;
        if (loadedCount === 2) {
          setPreloadedImages(prev => new Set(prev).add(index));
          resolve();
        }
      };

      const beforeImg = new window.Image();
      const afterImg = new window.Image();

      beforeImg.onload = checkComplete;
      beforeImg.onerror = checkComplete;
      afterImg.onload = checkComplete;
      afterImg.onerror = checkComplete;

      beforeImg.src = item.before;
      afterImg.src = item.after;

      // Timeout fallback
      setTimeout(() => {
        setPreloadedImages(prev => new Set(prev).add(index));
        resolve();
      }, 5000);
    });
  }, [items, preloadedImages]);

  // Initial loading - preload first slide
  useEffect(() => {
    if (items.length > 0) {
      preloadSlide(0).then(() => {
        setIsLoading(false);
        // Preload next slide in background
        if (items.length > 1) {
          preloadSlide(1);
        }
      });
    }
  }, [items, preloadSlide]);

  // Preload next slide whenever current index changes
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % items.length;
    if (!preloadedImages.has(nextIndex)) {
      preloadSlide(nextIndex);
    }
  }, [currentIndex, items.length, preloadedImages, preloadSlide]);

  // Auto-rotate functionality
  useEffect(() => {
    if (isHovered || isLoading || items.length <= 1 || isTransitioning) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      // Fade out first, then change image, then fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setTimeout(() => setIsTransitioning(false), 150);
      }, 150);
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplayDelay, items.length, isHovered, isLoading, isTransitioning]);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    // Fade out first, then change image, then fade in
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
      setTimeout(() => setIsTransitioning(false), 150);
    }, 150);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    // Fade out first, then change image, then fade in
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      setTimeout(() => setIsTransitioning(false), 150);
    }, 150);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    // Fade out first, then change image, then fade in
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 150);
    }, 150);
  };

  if (items.length === 0) return null;

  // Show loading state
  if (isLoading) {
    return (
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-xl bg-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-80 bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="text-gray-400">Loading...</div>
            </div>
            <div className="relative h-64 lg:h-80 bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="text-gray-400">Loading...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
       {/* Main Carousel Container */}
       <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
         <div className="relative w-full">
           {/* Animated slide container with fade transition */}
           <div 
             key={currentIndex} 
             className={`grid grid-cols-1 lg:grid-cols-2 gap-0 transition-opacity duration-300 ${
               isTransitioning ? 'opacity-0' : 'opacity-100'
             }`}
           >
             {/* Before Image */}
             <div className="relative h-64 lg:h-80 bg-gray-100">
               <Image
                 src={items[currentIndex].before}
                 alt={`${items[currentIndex].title} - Before`}
                 fill
                 className="object-cover"
                 priority={currentIndex === 0}
                 sizes="(max-width: 1024px) 100vw, 50vw"
                 quality={85}
                 loading={currentIndex === 0 ? "eager" : "lazy"}
               />
               <div className="absolute top-2 left-2 bg-black/50 text-white px-3 py-1 rounded text-sm font-medium">
                 Before
               </div>
             </div>

             {/* After Image */}
             <div className="relative h-64 lg:h-80 bg-gray-100">
               <Image
                 src={items[currentIndex].after}
                 alt={`${items[currentIndex].title} - After`}
                 fill
                 className="object-cover"
                 priority={currentIndex === 0}
                 sizes="(max-width: 1024px) 100vw, 50vw"
                 quality={85}
                 loading={currentIndex === 0 ? "eager" : "lazy"}
               />
               <div className="absolute top-2 left-2 bg-accent/90 text-accent-foreground px-3 py-1 rounded text-sm font-medium">
                 After
               </div>
             </div>
           </div>
         </div>

        {/* Navigation Controls */}
        {showControls && items.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 z-10"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 z-10"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      {/* Indicators */}
      {showIndicators && items.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentIndex === index
                  ? 'bg-primary scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}

      {/* Title and Description */}
      {showTitle && (
        <div className="mt-6 text-center px-4">
          <h3 className="text-xl lg:text-2xl font-bold text-primary mb-2">
            {items[currentIndex].title}
          </h3>
          <p className="text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto">
            {items[currentIndex].description}
          </p>
        </div>
      )}
    </div>
  );
}
