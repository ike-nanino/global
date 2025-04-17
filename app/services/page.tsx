import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope, faCircleRadiation, faRoute } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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


            <div className='w-full flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row px-6 lg:px-20 py-10'>
                <div className="w-full lg:w-1/2">
                    <div className="relative w-full h-[300px] lg:h-[350px]">
                        <Image
                            src="/images/seafreight.jpg"
                            alt="Shipping Containers and Plane"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className=" text-white mt-4 ">
                        <div className='bg-blue-400 max-w-sm text-center p-3'>
                            Shipment Tracking
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-16">
                    <h2 className="text-2xl lg:text-3xl font-roboto font-bold mb-4">
                        At Global Wave Logistics, we continue to build our worldwide business around a service-based philosophy focused on delivering excellence.
                    </h2>
                    <h4>
                        We Get The Job Done, Quickly, Reliably, Professionally And Always At A Competitive Price.
                    </h4>
                    <p className="text-gray-700 text-sm lg:text-base font-roboto leading-10">
                        As a multi modal operator, we offer ocean, air and rail freight forwarding services, covering imports and exports to and from the UK, as well as worldwide cross-trades. We also offer a full range of flexible and responsive transport services, from full and part load distribution through to contract distribution and pallet network deliveries.
                    </p>
                </div>
            </div>



            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-20 py-10'>
                <div>
                    <Image
                        src="/images/logo.png" // Add your logo here
                        alt="Global Wave Logistics Logo"
                        width={100}
                        height={100}

                    />

                    <h1 className='text-base lg:text-xl font-bold mb-4'>We’ve Designed Our <br /> Service Offering To Match  <br /> Your Requirements</h1>

                    <span className='border-b-2 border-b-black text-white max-w-xs'>hell</span>

                </div>

                <div className='relative text-black text-center border pt-14'>
                    <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-400 rounded-full'>
                        <FontAwesomeIcon icon={faEarthEurope} className='text-4xl text-white p-4' />
                    </div>

                    <p className='px-6 pb-4'>Our global team of supply chain experts, plus a dedicated road division in Europe, give you a highly personalized service, at great value for money.</p>
                </div>

                <div className='relative text-black text-center border pt-14'>

                    <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-400 rounded-full'>
                        <FontAwesomeIcon icon={faCircleRadiation} className='text-4xl text-white p-4' />
                    </div>



                    <p className='px-6 pb-4 '>Our global team of supply chain experts, plus a dedicated road division in Europe, give you a highly personalized service, at great value for money.</p>

                </div>

                <div className='relative text-black text-center border pt-14'>

                    <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-400 rounded-full'>

                        <FontAwesomeIcon icon={faRoute} className='text-4xl text-white p-4' />
                    </div>



                    <p className='px-6 pb-4 '>Our global team of supply chain experts, plus a dedicated road division in Europe, give you a highly personalized service, at great value for money.</p>

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
                <div className='border-b border-b-gray-100 flex flex-col gap-8 lg:flex-row py-10'>
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
                <div className='border-t border-t-gray-100 flex flex-col gap-8 lg:flex-row py-10'>
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
                        <p className="text-base md:text-2-xl font-bold mb-4 text-center max-w-2xl ">
                            Our specialists are on hand to answer any queries you may have or advice on how best to meet your requirements.
                        </p>


                        <div className='p-6 max-w-2xl bg-blue-500'>
                            Get In Touch With Us
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services