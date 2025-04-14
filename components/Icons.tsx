import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

function Icons() {
  return (
    
    <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-3">
    <div className='p-10 text-center bg-red-400'>
    <FontAwesomeIcon icon={faClock} className='w-20 h-20' />
        <h4>Speedy Delivery</h4>
    </div>
    <div className='p-10 text-center bg-red-400'>
    <FontAwesomeIcon icon={faClock} />
        <h4>Speedy Delivery</h4>
    </div>
    <div className='p-10 text-center bg-blue-400'>
    <FontAwesomeIcon icon={faClock} />
        <h4>Speedy Delivery</h4>
    </div>


</div>
  )
}

export default Icons