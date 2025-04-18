import CarlineUp from '@/components/CarlineUp'
import Experienced from '@/components/Experienced'
import Hero from '@/components/Hero'
import Icons from '@/components/Icons'
import OurServices from '@/components/OurServices'
import TypesOfServices from '@/components/TypesOfServices'
import WhyGlobalWave from '@/components/WhyGlobalWave'


function Home() {
  return (
    <main>
      <Hero />

      <Experienced />

      <div className='relative mb-[1950px] sm:mb-[1800px] lg:mb-[600px]'>
        <OurServices />
        <div className='absolute inset-0 top-[500px] z-30'>
        <TypesOfServices />
        </div>
      </div>
      <CarlineUp />

      <Icons />

      <WhyGlobalWave />

    </main>
  )
}

export default Home