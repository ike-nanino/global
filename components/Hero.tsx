'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroContent = [
  {
    id: 1,
    title: "GLOBAL WAVE LOGISTICS",
    subtitle: "Delivering Excellence Worldwide",
    image: "/images/hero1.jpg", // Replace with your image paths
  },
  {
    id: 2,
    title: "DELIVERING YOUR DREAMS WORLDWIDE",
    subtitle: "Modern Logistics for a Connected World",
    image: "/images/hero2.jpg",
  },
  {
    id: 3,
    title: "SPEEDY AND TRUSTED SHIPPING",
    subtitle: "Your Cargo, Our Priority",
    image: "/images/hero3.jpg",
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroContent.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
            opacity: { exit: 0 } // 👈 makes the exit opacity happen instantly
          }}
          className="absolute inset-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${heroContent[current].image})` }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full w-full flex flex-col justify-center px-12 md:px-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h2 className="text-white text-xl mb-4">WELCOME TO</h2>
            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              {heroContent[current].title}
            </h1>
            <p className="text-white text-xl md:text-2xl">
              {heroContent[current].subtitle}
            </p>
            
            <div className="mt-8">
              <button className="text-white border border-white rounded-full px-8 py-3 hover:bg-white hover:text-black transition-all duration-300">
                About Us
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

     {/* Indicators - Hidden on mobile, visible on md and up */}
     <div className="hidden md:block absolute right-12 top-1/2 -translate-y-1/2">
        {heroContent.map((_, index) => (
          <div key={index} className="flex items-center mb-6">
            
            <div className="relative h-0.5 w-10 mr-2">
              <div className="absolute h-full bg-white bg-opacity-30 w-full"></div>
              {index === current && (
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 5 }}
                  className="absolute h-full bg-white"
                />
              )}
            </div>

            <span className={`text-white text-opacity-70 mr-2 ${index === current ? 'font-bold' : ''}`}>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}