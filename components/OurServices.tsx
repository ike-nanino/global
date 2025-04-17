'use client'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function OurServices() {

  
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });
  }, []);

  
  return (
    <section
            className="relative bg-[url('/images/headshotcon.jpg')] bg-cover bg-center h-[600px] w-full px-3 lg:px-10 lg:py-28 py-24"
        >

            <div className="absolute inset-0 bg-black/70"></div>

            <div className='relative z-10 text-center'>

                <h5 className='text-white mb-4 italic' data-aos="fade-down" >Our Services</h5>


                <h1 className='text-4xl lg:text-8xl mb-4 font-bold text-white ' data-aos="fade-up">Tailored Freight Solutions</h1>

                <p className='font-roboto sm:text-base md:text-lg lg:text-xl text-white text-center leading-relaxed'>At Global Wave Logistics we understand that freight transportation needs to differ from sector to sector, which is why we provide specialist support across all market sectors. We act as an extension of your team to help you manage the complexities of international shipping, from planning and tracking to documentation and delivery. Additionally, our proactivity ensures that our clients are up to date with any new laws and legislation that may impact their business.</p>
            </div>
        </section>
  )
}

export default OurServices