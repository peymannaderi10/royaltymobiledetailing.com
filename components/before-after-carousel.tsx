"use client"

import { useEffect, useState, useRef } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import React, { JSX } from 'react';

export interface BeforeAfterItem {
  title: string;
  description: string;
  before: string;
  after: string;
  id: number;
}

export interface BeforeAfterCarouselProps {
  items: BeforeAfterItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
}

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring' as const, stiffness: 300, damping: 30 };

export default function BeforeAfterCarousel({
  items,
  baseWidth = 800,
  autoplay = true,
  autoplayDelay = 2500,
  loop = true
}: BeforeAfterCarouselProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateSize = () => {
      setContainerWidth(element.clientWidth);
    };

    updateSize();

    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(() => updateSize());
      ro.observe(element);
      return () => ro.disconnect();
    } else {
      // Fallback for environments without ResizeObserver
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }
  }, []);

  const itemWidth = (containerWidth ?? baseWidth);
  const gapValue = itemWidth < 640 ? 8 : GAP;
  const trackItemOffset = itemWidth + gapValue;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const x = useMotionValue(0);

  useEffect(() => {
    if (autoplay) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => {
          if (loop && prev >= items.length - 1) {
            return 0;
          }
          return (prev + 1) % items.length;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, loop, items.length]);

  const effectiveTransition = SPRING_OPTIONS;

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex(prev => (prev + 1) % items.length);
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
    }
  };

  const dragProps = {
    dragConstraints: {
      left: -trackItemOffset * (items.length - 1),
      right: 0
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full h-[620px] sm:h-[640px] md:h-[680px] lg:h-[720px]"
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${gapValue}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
      >
        {items.map((item: BeforeAfterItem, index: number) => {
          const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
          const outputRange = [15, 0, -15];
          const rotateY = useTransform(x, range, outputRange, { clamp: false });

          // z-index so current slide is on top
          const zIndex = items.length - Math.abs(index - currentIndex);

          return (
            <motion.div
              key={index}
              className="relative shrink-0 flex flex-col bg-white border border-[#1C1C1C] rounded-[12px] overflow-hidden cursor-grab active:cursor-grabbing"
              style={{
                width: itemWidth,
                height: '100%',
                rotateY: rotateY,
                zIndex: zIndex,
              }}
              transition={effectiveTransition}
            >
              {/* Before/After Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
                {/* Before Image */}
                <div className="relative h-48 md:h-auto">
                  <img
                    src={item.before || "/placeholder.svg"}
                    alt={`${item.title} - Before`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Before
                  </div>
                </div>

                {/* After Image */}
                <div className="relative h-48 md:h-auto">
                  <img
                    src={item.after || "/placeholder.svg"}
                    alt={`${item.title} - After`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    After
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 bg-white">
                <div className="mb-1 font-black text-lg text-primary">{item.title}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Indicators */}
      <div className="flex w-full justify-center absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-20">
        <div className="flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                currentIndex % items.length === index
                  ? 'bg-[#0B3D91]'
                  : 'bg-[rgba(11,61,145,0.4)]'
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 