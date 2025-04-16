import ContactSection from '@/components/contact/ContactSection'
import { Phone, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Contact() {
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
                        data-aos="fade-up"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center ">
                            Contact Us
                        </h1>
                    </div>
                </div>
            </div>



            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-20 py-15'>
                <div className='p-10 shadow-md'>
                    <div className='relative w-14 h-14'>
                        <Image
                            src="/images/ukflag.png"
                            alt='L'
                            fill
                            className="object-contain"
                        />
                    </div>

                    <h1>United Kingdom</h1>
                    <p>1 Solly Street, Sheffield <br />
                        South Yorkshire</p>

                    <div className='flex items-center gap-2'>
                        <PhoneCall />
                        <p>+44 075 9577 5501</p>
                    </div>

                </div>


                <div className='p-10 shadow-md'>

                    <div className='relative w-14 h-14'>
                        <Image
                            src="/images/usaflag.jpg"
                            alt='L'
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h1>United State Of America</h1>
                    <p>2207 Martha Street <br /> Prescott Arizona</p>

                    <div className='flex items-center gap-2'>
                        <PhoneCall />
                        <p>+44 075 9577 5501</p>
                    </div>

                </div>

                <div className='p-10 shadow-md'>
                    <h1>Mail Us</h1>
                    <p>info@globalwavelogistics.com</p>
                    <p>tracking@globalwavelogistics.com</p>
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