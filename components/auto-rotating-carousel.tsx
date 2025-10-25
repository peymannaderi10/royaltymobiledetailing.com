"use client"

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  autoplayDelay = 4000,
  showControls = false,
  showIndicators = true,
  showTitle = true
}: AutoRotatingCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Reset images loaded state when index changes
  useEffect(() => {
    setImagesLoaded(false);
  }, [currentIndex]);

  // Auto-rotate functionality
  useEffect(() => {
    if (isHovered) return; // Pause on hover

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplayDelay, items.length, isHovered]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleImageLoad = () => {
    // Check if both images are loaded by counting loaded images
    const currentItem = items[currentIndex];
    const beforeImg = document.querySelector(`img[src="${currentItem.before}"]`) as HTMLImageElement;
    const afterImg = document.querySelector(`img[src="${currentItem.after}"]`) as HTMLImageElement;
    
    if (beforeImg?.complete && afterImg?.complete) {
      setImagesLoaded(true);
    }
  };

  if (items.length === 0) return null;

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
       {/* Main Carousel Container */}
       <div className="relative overflow-hidden rounded-xl bg-white">
         <div className="relative w-full">
           <AnimatePresence mode="wait">
             <motion.div
               key={currentIndex}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.95 }}
               transition={{ duration: 0.6, ease: "easeInOut" }}
               className="w-full"
             >
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                 {/* Before Image */}
                 <div className="relative h-64 lg:h-80">
                   <img
                     src={items[currentIndex].before}
                     alt={`${items[currentIndex].title} - Before`}
                     className="w-full h-full object-cover"
                     loading="eager"
                     onLoad={handleImageLoad}
                     style={{ 
                       opacity: imagesLoaded ? 1 : 0, 
                       transition: 'opacity 0.5s ease-in-out' 
                     }}
                   />
                 </div>

                 {/* After Image */}
                 <div className="relative h-64 lg:h-80">
                   <img
                     src={items[currentIndex].after}
                     alt={`${items[currentIndex].title} - After`}
                     className="w-full h-full object-cover"
                     loading="eager"
                     onLoad={handleImageLoad}
                     style={{ 
                       opacity: imagesLoaded ? 1 : 0, 
                       transition: 'opacity 0.5s ease-in-out' 
                     }}
                   />
                 </div>
               </div>
             </motion.div>
           </AnimatePresence>
         </div>

        {/* Navigation Controls */}
        {showControls && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0"
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
        <div className="mt-6 text-center">
          <h3 className="text-xl lg:text-2xl font-bold text-primary mb-2">
            {items[currentIndex].title}
          </h3>
          <p className="text-sm lg:text-base text-muted-foreground">
            {items[currentIndex].description}
          </p>
        </div>
      )}
    </div>
  );
}
