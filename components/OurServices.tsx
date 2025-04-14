import React from 'react'

function OurServices() {
  return (
    <section
            className="relative bg-[url('/images/headshotcon.jpg')] bg-cover bg-center h-[600px] w-full px-10 py-28"
        >

            <div className="absolute inset-0 bg-black/70"></div>

            <div className='relative z-10 text-center'>

                <h5 className='text-white mb-4 italic'>Our Services</h5>


                <h1 className='text-8xl mb-4 font-bold text-white '>Tailored Freight Solutions</h1>

                <p className='font-roboto text-xl text-white text-center leading-relaxed'>At Global Wave Logistics we understand that freight transportation needs to differ from sector to sector, which is why we provide specialist support across all market sectors. We act as an extension of your team to help you manage the complexities of international shipping, from planning and tracking to documentation and delivery. Additionally, our proactivity ensures that our clients are up to date with any new laws and legislation that may impact their business.</p>
            </div>
        </section>
  )
}

export default OurServices