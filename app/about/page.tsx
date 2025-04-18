'use client'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import LogisticsSection from '@/components/about/LogisticsSection'
import { MapPinCheckInside } from 'lucide-react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired, faShip } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from "@/components/Footer";
config.autoAddCss = false

function About() {

     useEffect(() => {
            AOS.init({
              duration: 2000, // Animation duration in ms
              once: true, // Whether animation should happen only once
            });
          }, []);
    

    return (
        <div>
    <div className="relative w-full h-auto overflow-hidden">
  <div className="relative h-[400px] w-full">
    <Image
      src="/images/abouthero.jpg"
      alt="About Us"
      fill
      className="object-cover"
    />

    {/* Fix: full center with inset-0 + flex */}
    <div
      className="absolute inset-0 flex items-center justify-center text-white p-4"
      data-aos="fade-up"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-bold text-center font-poppins text-shadow-lg">
        About Us
      </h1>
    </div>
  </div>

  <div className="absolute bottom-0 left-0 w-full overflow-hidden">
    <svg
      className="relative block w-full"
      height="100"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0 L570,0 L600,40 L630,0 L1200,0 V120 H0 Z"
        fill="white"
      />
    </svg>
  </div>
</div>



 <LogisticsSection />


 <div className='lg:p-20 px-4 py-10 flex flex-col items-center gap-4 text-center'>
    <h1 className='text-open-sans' data-aos="fade-down">OUR COMMITMENT</h1>
    <h1 className='text-4xl lg:text-6xl font-semibold font-unica-one' data-aos="fade-up">We Always Available 24/7</h1>
    <p className='text-lg font-open-sans'>Global Wave Logistics partners with you in understanding your individual needs which enables us to offer you bespoke and optimised global solutions through innovative logistical thinking.</p>

    <div className='p-6 bg-green-400 flex text-white gap-2 items-center'>
    <MapPinCheckInside />
        <h1 className=''>Track Your Shipment</h1>
    </div>
 </div>


            <div className='px-6 lg:px-20 py-10'>
                <div className='relative w-full h-[280px] lg:h-[320px] group'>
                    <Image
                        src='/images/seafreight.jpg'
                        alt='Sea Freight'
                        fill
                        className="object-cover"
                    />
                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                    {/* Text in bottom right */}
                    <div className="absolute bottom-4 right-4 text-white font-bold text-3xl z-10 font-unica-one">
                        Sea Freight
                    </div>
                </div>
            </div>

            <div>
                <div className="w-full relative flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row items-start justify-between px-6 lg:px-20 py-10">
                    {/* Left Side */}
                    <div className="w-full lg:w-1/2">
                        <div className='relative w-full h-[280px] lg:h-[320px] group'>
                            <Image
                                src='/images/airplane.jpg'
                                alt='Air Freight'
                                fill
                                className='object-cover'
                            />
                            {/* Dark overlay on hover */}
                            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                            {/* Text in bottom right */}
                            <div className="absolute bottom-4 left-4 text-white font-bold text-3xl z-10 font-unica-one">
                                Air Freight
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-16">
                        <div className='relative w-full h-[280px] lg:h-[320px] group'>
                            <Image
                                src='/images/rail.jpg'
                                alt='Rail Freight'
                                fill
                                className='object-cover'
                            />
                            {/* Dark overlay on hover */}
                            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                            {/* Text in bottom right */}
                            <div className="absolute bottom-4 right-4 text-white font-bold text-3xl z-10 font-unica-one">
                                Rail Freight
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
                           
            <div>
                <div className="w-full relative flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row items-start justify-between px-6 lg:px-20 py-10">
                    {/* Left Side */}
                    <div className="w-full lg:w-1/2">
                    <div>
                    <FontAwesomeIcon icon={faNetworkWired} className='text-2xl lg:text-4xl mb-5 text-[#691800]' />
                            <h1 className='text-2xl lg:text-4xl mb-6 text-[#691800] font-oswald'>Supply Chain Management</h1>
                            <p className="font-open-sans">We combine cutting edge technology, expert teams and deep data analytics to give you total control and visibility across your global supply chain. Our approach means we can always help you find a better way.</p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-16">
                        <div>
                        <FontAwesomeIcon icon={faShip} className='text-2xl lg:text-4xl mb-5 text-[#691800]' />
                            <h1 className='text-2xl lg:text-4xl mb-6 text-[#691800] font-oswald'>Freight Solutions</h1>
                            <p className="font-open-sans">Unlock the full potential of your supply chain with Global Wave Logistics: air, ocean, rail, and road freight services, expert international customs support, and world-class supply chain technology for unmatched visibility and efficiency.</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="relative w-full h-auto overflow-hidden">
                <div className="relative h-[460px] w-full">
                    <Image
                        src="/images/aboutbottom.jpg"
                        alt="Harbor"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div
                        className="absolute inset-0 flex flex-col px-3 lg:px-20 lg:py-20 py-4 text-white"
                        data-aos="fade-up"
                    >
                        <h1 className="text-2xl md:text-7xl font-bold mb-4 font-viga " data-aos="fade-up">
                            
We Are Custom Clearance <br /> Specialists In The UK
                        </h1>
                        <p className="text-base md:text-2xl font-bold font-open-sans mb-4" data-aos="fade-down">
                        For ocean freight, road freight and air freight covering all major ports and airports.
                        </p>
                    </div>
                </div>
            </div>



            <Footer />

        </div>
    )
}

export default About