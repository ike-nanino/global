import Image from 'next/image'
import React from 'react'

function Experienced() {
  return (
    <section className="w-full flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row items-start justify-between px-6 lg:px-20 py-10 bg-white">
    {/* Left Side */}
    <div className="w-full lg:w-1/2">
      <div className="relative w-full h-[300px] lg:h-[350px]">
        <Image
          src="/images/containerplane.jpg"
          alt="Shipping Containers and Plane"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="bg-blue-600 text-white p-6">
        <h2 className="text-lg lg:text-xl font-poppins font-extrabold">
          Shipping Solutions For A Connected World
        </h2>
        <p className="text-sm lg:text-base mt-2">
          We Get The Job Done, Quickly, Reliably, Professionally And Always At A Competitive Price.
        </p>
      </div>
    </div>

    {/* Right Side */}
    <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-16">
      <div className="flex items-center gap-4 mb-6">
        <Image
          src="/images/logoname.png" // Add your logo here
          alt="Global Wave Logistics Logo"
          width={300}
          height={100}
        />
        <div>
          {/* <h1 className="text-xl font-bold uppercase">Global Wave</h1>
          <p className="text-sm tracking-wide">Logistics</p> */}
        </div>
      </div>
      <h2 className="text-2xl lg:text-3xl font-roboto font-bold mb-4">
        Experienced Freight Shipping & Contract Logistics Company.
      </h2>
      <p className="text-gray-700 text-sm lg:text-base font-roboto leading-10">
        After many years of providing freight solutions to businesses, Global Wave Logistics have become
        one of the UK’s most experienced shipping and logistics companies. With each member of the Global
        Wave Logistics team having vast knowledge of the industry, we can ensure the seamless delivery of
        your goods by air, land and sea and provide our clients with appropriate advice and solutions for
        their cargo and budgets.
      </p>
    </div>
  </section>
  )
}

export default Experienced