'use client'

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

function WhyGlobalWave() {

  useEffect(() => {
          AOS.init({
            duration: 2000, // Animation duration in ms
            once: true, // Whether animation should happen only once
          });
        }, []);


  return (
    <section
            className="relative bg-[url('/images/register-bg.jpg')] bg-cover bg-center h-[500px] w-full px-10 py-28"
        >


            <div className='sm:mt-14 mt-19 lg:mt-38 lg:pl-26'>


                <h1 className='text-xl lg:text-4xl  text-left mb-4 font-bold  text-white ' data-aos="fade-up">Whatever Your Freight Forwarding And Customs Clearance Needs, You’ve Come To The Right Place!</h1> 

                <h4 className='text-sm lg:text-2xl text-left mb-4 font-medium text-white ' data-aos="fade-up">
An opportunity to accelerate growth with a streamlined fulfilment solution. Creating powerful partnerships with our clients and helping build lifelong relationships.</h4>


<Link href='/contact'>
                <p className='font-rajdhani rounded-md font-bold text-sm p-3 hover:text-white transition-all duration-300 text-black bg-white hover:bg-blue-400 text-center max-w-40' data-aos="fade-up">CONTACT US</p>

                </Link>
            </div>
        </section>
  )
}

export default WhyGlobalWave