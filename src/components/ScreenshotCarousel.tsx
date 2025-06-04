'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Screenshot {
  src: string;
  alt: string;
}

interface ScreenshotCarouselProps {
  screenshots: Screenshot[];
  autoplaySpeed?: number;
}

const ScreenshotCarousel = ({ 
  screenshots,
  autoplaySpeed = 5000 
}: ScreenshotCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
      );
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [autoplaySpeed, screenshots.length, isHovering]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  return (
    <div 
      className="relative w-full h-full rounded-lg overflow-hidden bg-dockit-dark-900"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Main carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-dockit-purple-900/10 to-dockit-dark-950/30 z-0"></div>
            <Image
              src={screenshots[currentIndex].src}
              alt={screenshots[currentIndex].alt}
              fill
              className="object-contain z-10 p-1"
              priority
              quality={100}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dockit-dark-900/90 to-transparent p-4 z-20">
              <p className="text-white text-center font-medium">
                {screenshots[currentIndex].alt}
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-dockit-purple-500/30 to-transparent z-20"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-dockit-purple-500/30 to-transparent z-20"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-3 z-30">
        <motion.button
          className="h-12 w-12 rounded-full bg-dockit-dark-900/40 text-white flex items-center justify-center backdrop-blur-md border border-dockit-dark-700/30 shadow-lg"
          onClick={handlePrev}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(124, 58, 237, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovering ? 1 : 0.6, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        <motion.button
          className="h-12 w-12 rounded-full bg-dockit-dark-900/40 text-white flex items-center justify-center backdrop-blur-md border border-dockit-dark-700/30 shadow-lg"
          onClick={handleNext}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(124, 58, 237, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: isHovering ? 1 : 0.6, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Indicators */}
      <motion.div 
        className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-30"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {screenshots.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all backdrop-blur-sm ${
              index === currentIndex 
                ? 'bg-gradient-to-r from-dockit-purple-500 to-dockit-purple-700 w-8 shadow-lg shadow-dockit-purple-900/50' 
                : 'bg-white/30 w-2 hover:bg-white/50'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </motion.div>

      {/* Mockup frame */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 h-2 w-1/4 bg-dockit-dark-800 rounded-b-md"></div>
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-dockit-dark-900 rounded-md"></div>
      </div>
    </div>
  );
};

export default ScreenshotCarousel;
