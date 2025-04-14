import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShip, faPlaneDeparture, faTruck, faWarehouse, faBoxOpen, faTruckRampBox} from '@fortawesome/free-solid-svg-icons'
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

function TypesOfServices() {
  return (
    <div className='lg:mx-16 px-6 lg:px-32 py-10 bg-gray-300'>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-4'>
                <span className="bg-white h-20 w-20 p-3 rounded-full">
                <FontAwesomeIcon icon={faShip} className='text-blue-400 text-5xl' />
                </span>

                <div>
                    <h1 className='text-lg font-bold'>Sea Freight Service</h1>
                    <p>We offer a complete range of Ocean Services that includes FCL (full container), LCL (part container), Out of Gauge and RoRo (Roll on Roll off), complimented by a keenly priced tariff of Freight rates.</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-4'>
                <span className="bg-white h-20 w-20 p-3 rounded-full">
                <FontAwesomeIcon icon={faPlaneDeparture} className='text-blue-400 text-5xl' />
                </span>

                <div>
                    <h1 className='text-lg font-bold'>Air Freight Service</h1>
                    <p>A flexible approach enables Global Wave Logistics to offer a variety of Import and Export Air Freight Shipping and Forwarding services, including scheduled, deferred, and full or part charter.</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-4'>
                <span className="bg-white h-20 w-20 p-3 rounded-full">
                <FontAwesomeIcon icon={faTruck} className='text-blue-400 text-5xl' />
                </span>

                <div>
                    <h1 className='text-lg font-bold'>Road Freight Service</h1>
                    <p>We pride ourselves on delivering high-quality and cost-effective groupage services for the movement of road freight throughout UK and USA requiring express or economy services.</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-4'>
                <span className="bg-white h-20 w-20 p-3 rounded-full">
                <FontAwesomeIcon icon={faWarehouse} className='text-blue-400 text-5xl' />
                </span>

                <div>
                    <h1 className='text-lg font-bold'>Storage & Distribution</h1>
                    <p>Global Wave Logistics offers modern secure warehousing. Our nationwide distribution covers major towns and cities with daily services to and from all Ports and Airports.</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-4'>
                <span className="bg-white h-20 w-20 p-2 pt-3 rounded-full">
                <FontAwesomeIcon icon={faTruckRampBox} className='text-blue-400 text-5xl' />
                </span>

                <div>
                    <h1 className='text-lg font-bold'>Custom Clearance / Brokerage</h1>
                    <p>Using the latest technology for electronic transmission direct to Customs, enables us to provide fast Custom Clearance of shipments arriving at all Ports and Airports.</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-4'>
                <span className="bg-white h-20 w-20 p-3 rounded-full">
                <FontAwesomeIcon icon={faBoxOpen} className='text-blue-400 text-5xl' />
                </span>

                <div>
                    <h1 className='text-lg font-bold'>Personal & Household Effects</h1>
                    <p>We offer a truly personal service, whether you have a couple of cartons or a complete house to ship, we are on hand to make your move as painless as possible.</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default TypesOfServices