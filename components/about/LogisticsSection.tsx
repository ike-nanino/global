'use client'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from 'next/image';
import Link from 'next/link';

export default function LogisticsSection() {

       useEffect(() => {
              AOS.init({
                duration: 2000, // Animation duration in ms
                once: true, // Whether animation should happen only once
              });
            }, []);


  return (
    <section className="relative container mx-auto px-4 md:px-8 py-16">
      <div className="flex flex-col lg:flex-row items-start">
        {/* Left side - Text content */}
        <div className="w-full lg:w-1/2 lg:pr-8 z-10">
          <p className="text-gray-500 uppercase tracking-wider mb-2 font-open-sans" data-aos="fade-down">WHO WE ARE</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-unica-one" data-aos="fade-up">GLOBAL WAVE LOGISTICS</h2>
          
          <p className="text-gray-800 mb-6">
            We are your dynamic and fast-growing privately-owned supply chain management partner who engages, 
            designs, implements and delivers bespoke transport & freight solutions on a UK & global level.
          </p>
          
          <p className="text-gray-800 mb-10">
            We adapt our services to meet your requirements, offering you seamless logistics, 
            transport, and shipping solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" 
                  className="bg-blue-500 text-white py-3 px-8 text-center">
              Get In Touch
            </Link>

            <Link href="/services" 
                  className="bg-[#691800] text-white py-3 px-8 text-center">
              Our Services
            </Link>
          </div>
        </div>
        
        {/* Right side - Stacked images */}
        <div className="hidden lg:block relative w-1/2 h-[600px]">


        
          {/* Front image - Truck */}
          <div className="absolute left-0 top-16 w-3/5 h-3/5">
            {/* Transformed background div */}
            <div className="absolute w-full h-full bg-gray-100 transform translate-x-4 translate-y-4 z-0"></div>
            
            {/* Image container */}
            <div className="relative w-full h-full z-10">
              <Image
                src="/images/tallcarpark.jpg"
                alt="Blue logistics truck"
                fill
                className="object-cover"
              />
            </div>
          </div>




          {/* Back image - Container ship */}
          <div className="absolute right-0 top-0 w-3/5 h-full">
            {/* Transformed background div */}
            <div className="absolute w-full h-full bg-gray-300/40 transform -translate-x-4 -translate-y-4 z-10"></div>
            
            {/* Image container */}
            <div className="relative w-full h-full z-10">
              <Image
                src="/images/tallcargo.jpg"
                alt="Container ship with colorful containers"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
        </div>
        
        {/* Mobile images stack - Only visible on mobile */}
        <div className="lg:hidden w-full mt-8">
          <div className="relative w-full h-64 mb-4">
            {/* Mobile transformed background */}
            <div className="absolute w-full h-full bg-gray-100 transform -translate-x-4 -translate-y-4 z-0"></div>
            
            <div className="relative w-full h-full z-10">
              <Image
                src="/images/tallcarpark.jpg"
                alt="Blue logistics truck"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="relative w-full h-64">
            {/* Mobile transformed background */}
            <div className="absolute w-full h-full bg-gray-100 transform translate-x-4 translate-y-4 z-0"></div>
            
            <div className="relative w-full h-full z-10">
              <Image
                src="/images/tallcargo.jpg"
                alt="Container ship with colorful containers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}