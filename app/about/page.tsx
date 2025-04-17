import Image from 'next/image'
import React from 'react'

function About() {
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

                    <div
                        className="absolute inset-0 top-20 flex flex-col items-center justify-center text-white p-4"
                        data-aos="fade-up"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center ">
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

            <div className='px-20 py-10'>
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
                    <div className="absolute bottom-4 right-4 text-white font-bold text-xl z-10">
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
                            <div className="absolute bottom-4 right-4 text-white font-bold text-xl z-10">
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
                            <div className="absolute bottom-4 right-4 text-white font-bold text-xl z-10">
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
                            <h1>Icon</h1>
                            <h1>Supply Chain Management</h1>
                            <p>We combine cutting edge technology, expert teams and deep data analytics to give you total control and visibility across your global supply chain. Our approach means we can always help you find a better way.</p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-16">
                        <div>
                            <h1>Icon</h1>
                            <h1>Freight Solutions</h1>
                            <p>Unlock the full potential of your supply chain with Global Wave Logistics: air, ocean, rail, and road freight services, expert international customs support, and world-class supply chain technology for unmatched visibility and efficiency.</p>
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
                    <div className="absolute inset-0 bg-white/50" />
                    <div
                        className="absolute inset-0 flex flex-col items-center justify-center text-white p-4"
                        data-aos="fade-up"
                    >
                        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center ">
                            Have Any Question?
                        </h1>
                        <p className="text-base md:text-2xl font-bold mb-4 text-center ">
                            Our specialists are on hand to answer any queries you may have or advice on how best to meet your requirements.
                        </p>


                        <div className='p-4 bg-blue-300'>
                            Get In Touch With Us
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About