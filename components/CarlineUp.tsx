'use client'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CarlineUp() {

    useEffect(() => {
        AOS.init({
          duration: 2000, // Animation duration in ms
          once: true, // Whether animation should happen only once
        });
      }, []);



    return (
        <section
            className="relative bg-[url('/images/carlineup.jpg')] bg-cover bg-center h-[500px] w-full px-3 lg:px-10 py-28"
        >

            <div className="absolute inset-0 bg-black/40"></div>

            <div className='relative z-10'>


                <h1 className='text-2xl lg:text-5xl text-left mb-4 font-bold leading-14 text-white ' data-aos="zoom-in">Let Us Take The Headache Out Of All The Complex Logistical Planning And Documentation Handling By Putting Your Cargo In The Hands Of Our Experts</h1>

                <p className='font-rajdhani rounded-md font-bold lg:text-lg p-3 text-black bg-white hover:bg-blue-400 text-center max-w-40' data-aos="fade-up">Learn More</p>
            </div>
        </section>
    )
}

export default CarlineUp