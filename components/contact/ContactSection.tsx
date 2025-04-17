import Image from "next/image"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"


function ContactSection() {
  return (
    <div className="w-full relative flex flex-col gap-8 lg:gap-0 lg:flex-row items-start justify-between px-6 lg:px-20 py-10">
    {/* Left Side */}
    <div className="w-full lg:w-1/2">
    <div>
        <h1 className='mb-8 text-3xl md:text-6xl font-bold'>Message Us</h1>

        <p className='text-base lg:text-xl mb-8'>Get in touch with Global Wave Logistics and our specialists will tailor a very competitive quote to meet your requirements.</p>

    </div>


    <div className='relative w-full h-[300px] lg:h-[350px]'>
        <Image 
        src='/images/man.jpg'
        alt='Man'
        fill
        className='object-cover'
        />
    </div>
    </div>

    {/* Right Side */}
    <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-16">
    <div className='order-2 xl:order-none'>
    <form className='flex flex-col gap-6 p-10 bg-transparent rounded-xl'>
  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-black'>

    <div className='flex flex-col gap-2'>
      <label htmlFor='name'>First Name <span className='text-red-400'>*</span></label>
      <Input id="name" name="name" type='text' className='border border-black rounded-0 bg-gray-300' required />
    </div>

    <div className='flex flex-col gap-2'>
      <label htmlFor='subject'>Last Name <span className='text-red-400'>*</span></label>
      <Input id="subject" name="subject" type='text' className='border border-black rounded-0 bg-gray-300' required />
    </div>

    <div className='flex flex-col gap-2'>
      <label htmlFor='email'>Email Address <span className='text-red-400'>*</span></label>
      <Input id="email" name="email" type='email' className='border border-black rounded-0 bg-gray-300' required />
    </div>

    <div className='flex flex-col gap-2'>
      <label htmlFor='phone'>Phone Number <span className='text-red-400'>*</span></label>
      <Input id="phone" name="phone" type='text' className='bg-gray-300 border border-black' />
    </div>

  </div>

  <div className='flex flex-col gap-2 text-black'>
    <label htmlFor='message'>Message <span className='text-red-400'>*</span></label>
    <Textarea id="message" name="message" className='h-[200px] text-black bg-gray-300 border border-black' placeholder='Type your message here' required />
  </div>

  <Button type='submit' className='max-w-32 bg-blue-500'>
    Send Message
  </Button>
</form>
          </div>
    </div>
  </div>
  )
}

export default ContactSection