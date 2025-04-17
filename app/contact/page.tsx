'use client'

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ContactSection from '@/components/contact/ContactSection'
import { PhoneCall } from 'lucide-react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


function Contact() {


    useEffect(() => {
        AOS.init({
          duration: 2000, // Animation duration in ms
          once: true, // Whether animation should happen only once
        });
      }, []);

    return (
        <div>
            <div className="relative w-full h-auto overflow-hidden">
                <div className="relative h-[260px] w-full">
                    <Image
                        src="/images/contactbg.jpg"
                        alt="Service"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div
                        className="absolute inset-0 flex flex-col items-center justify-center text-white p-4"
                       
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center "  data-aos="fade-down">
                            Contact Us
                        </h1>
                    </div>
                </div>
            </div>



            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 lg:px-20 py-15'>
                <div className='p-10 shadow-md'>
                    <div className='relative w-14 h-14'>
                        <Image
                            src="/images/ukflag.png"
                            alt='L'
                            fill
                            className="object-contain"
                        />
                    </div>

                    <h1 className='font-bold'>United Kingdom</h1>
                    <p className='text-base mb-3'>1 Solly Street, Sheffield <br />
                        South Yorkshire</p>

                    <div className='flex items-center gap-4'>
                        <PhoneCall className='text-blue-600' />
                        <p className='font-semibold'>+44 075 9577 5501</p>
                    </div>

                </div>


                <div className='p-10 shadow-md'>

                    <div className='relative w-14 h-14'>
                        <Image
                            src="/images/usaflag.jpg"
                            alt='L'
                            fill
                            className="object-contain mb-2"
                        />
                    </div>
                    <h1 className='font-bold mb-2'>United State Of America</h1>
                    <p className='text-base mb-3'>2207 Martha Street <br /> Prescott Arizona</p>

                    <div className='flex items-center gap-4'>
                        <PhoneCall className='text-blue-600' />
                        <p className='font-semibold'>+1 928 776 2974</p>
                    </div>

                </div>

                <div className='p-10 shadow-md'>
                    <FontAwesomeIcon icon={faEnvelopeOpen} className='text-4xl mb-3 text-blue-400' />
                    <h1 className='font-bold mb-2'>Mail Us</h1>
                    <p className='text-base mb-1'> info@globalwavelogistics.com</p>
                    <p className='text-base'>tracking@globalwavelogistics.com</p>
                </div>


            </div>






            <div className="relative w-full h-auto overflow-hidden">
                <div className="relative w-full">
                    <Image
                        src="/images/contactbottom.jpg"
                        alt="Harbor"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-white/50" />
                    <ContactSection />
                </div>
            </div>
        </div>
    )
}

export default Contact