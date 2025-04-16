import Image from 'next/image'
import React from 'react'

function Services() {
    return (
        <div>
            <div className="relative w-full h-auto overflow-hidden">
                <div className="relative h-[460px] w-full">
                    <Image
                        src="/images/servicehero.jpg"
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
                            Delivering Your Dreams <br /> Worldwide
                        </h1>
                    </div>
                </div>
            </div>


          
                <div className='flex flex-col gap-8 lg:flex-row py-10 px-6 lg:px-20 '>

               
                <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-16">
                    <h2 className="text-2xl lg:text-3xl font-roboto font-bold mb-4">
                        Sea Freight
                    </h2>
                    <p className="text-gray-700 text-sm lg:text-base font-roboto leading-10">
                        We aim to provide excellent customer service by taking into account our customers’ needs. We offer different methods to transport cargo by sea freight, including: LCL (less than container load/groupage), FCL (full container load), including general purpose, Open top, flat racks, platform, refrigerated containers and ISO tanks (for bulk liquid shipment), Out of gauge cargoes, Break-bulk conventional vessels, Roll on – Roll off for any type of vehicles, Full or Part Charter Vessels and many more.
                    </p>
                </div>

                <div className="w-full lg:w-1/2">
                    <div className="relative w-full h-[300px] lg:h-[350px]">
                        <Image
                            src="/images/cargobird.jpg"
                            alt="Cargo"
                            fill
                            className="object-cover shadow-lg"
                            priority
                        />
                    </div>
                </div>

                </div>



            <div className='px-6 lg:px-20 mb-4'>
            <div className='border-b border-b-gray-400 flex flex-col gap-8 lg:flex-row py-10'>
                <div className="w-full lg:w-1/2">
                    <div className="relative w-full h-[300px] lg:h-[350px]">
                        <Image
                            src="/images/airplane.jpg"
                            alt="Shipping Containers and Plane"
                            fill
                            className="object-cover shadow-lg"
                            priority
                        />
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-16">
                    <h2 className="text-2xl lg:text-3xl font-roboto font-bold mb-4">
                        Air Freight
                    </h2>
                    <p className="text-gray-700 text-sm lg:text-base font-roboto leading-10">
                        When you’re managing the fast flow of importing and exporting goods, air freight forwarding is essential. With Global Wave Logistics, you’ll get a competitive range of fast, reliable, and cost-effective international air freight services. By working with carefully selected carriers, we operate with schedules on all the world’s major routes, so you can plan with certainty and efficiency. We can deliver your cargo to all destinations worldwide and offer competitive rates.
                    </p>
                </div>

            </div>

            </div>

            <div className='px-6 lg:px-20 mb-4'> 
            <div className='border-t border-t-gray-400 flex flex-col gap-8 lg:flex-row py-10'>
                <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-16">
                    <h2 className="text-2xl lg:text-3xl font-roboto font-bold mb-4">
                        Air Freight
                    </h2>
                    <p className="text-gray-700 text-sm lg:text-base font-roboto leading-10">
                        We offer a comprehensive network of road services including full load, part load and groupage. Insurance is available on all road freight. We can also arrange transport of bulk by rail if required within the UK from all ports including Liverpool and Felixstowe. However if you would like to rail within the EU, we can also arrange that to all destinations across Europe.
                    </p>
                </div>




                <div className="w-full lg:w-1/2">
                    <div className="relative w-full h-[300px] lg:h-[350px]">
                        <Image
                            src="/images/carpark.jpg"
                            alt="Shipping Containers and Plane"
                            fill
                            className="object-cover shadow-lg"
                            priority
                        />
                    </div>
                </div>


            </div>
            </div>



            <div className="relative w-full h-auto overflow-hidden">
                <div className="relative h-[460px] w-full">
                    <Image
                        src="/images/harbor.jpg"
                        alt="Harbor"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
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

export default Services