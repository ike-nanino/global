import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faDoorOpen, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

function Icons() {
  return (

    <div className='py-16'>

      <div className='text-center mb-10 px-6 lg:px-16'>

        <h1 className='text-7xl font-bold font-rajdhani mb-4'>Why Choose Global Wave Logistics</h1>
        <p className='text-lg font-poppins'>As your logistics partner, we will take the time to understand your requirements, pain points and goals, allowing us to deliver a tailored solution that relieves the hassle of logistics and allows you to focus on the things that matter most to your business. </p>
        <p className='text-lg font-poppins'>You’ll enjoy an efficient, professional service, along with door-to-door solutions to any location worldwide.

          Thanks to our team’s wide-ranging logistics expertise and long-term relationships with global shipping lines, airlines and equipment specialists, we have the ability and expertise to move anything from a single pallet or container, through to chartering an entire vessel.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-20 px-6">
        <div className='p-10 text-center border hover:shadow-xl shadow-md bg-white'>
          <FontAwesomeIcon icon={faClock} className='text-6xl mb-8 text-blue-400' />
          <h4 className='text-xl font-bold'>Speedy Delivery</h4>
        </div>
        <div className='p-10 text-center border hover:shadow-xl shadow-md bg-white'>
        <FontAwesomeIcon icon={faDoorOpen} className='text-6xl mb-8 text-blue-400' />
          <h4 className='text-xl font-bold'>Speedy Delivery</h4>
        </div>
        <div className='p-10 text-center border hover:shadow-xl shadow-md bg-bwhite'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='text-6xl mb-8 text-blue-400' />
          <h4 className='text-xl font-bold'>Speedy Delivery</h4>
        </div>


      </div>

    </div>
  )
}

export default Icons