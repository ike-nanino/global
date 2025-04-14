"use client"

import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;




const links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Our Services',
        path: '/services',
    },
    {
        name: 'About Us',
        path: '/about',
    },
    {
        name: 'Contact Us',
        path: '/contact',
    },

]



function NavBar() {
    const pathname = usePathname();
    return (
        <nav className="flex items-center gap-8 text-xl">

            {
                links.map((link, index) => {
                    return (
                        <Link
                            key={index}
                            href={link.path}
                            className={`${link.path === pathname && 'text-blue-400 font-poppins font-semibold text-lg'} capitalize hover:text-blue-400 font-poppins font-semibold text-lg ease-in duration-500`}
                            prefetch={true}
                        >{link.name}</Link>
                    )

                })
            }

            <div className='flex items-center gap-2 text-white p-4 bg-blue-400 font-poppins font-semibold text-lg cursor-pointer hover:text-blue-400 ease-in duration-500'>
                <h2>Track Shipment</h2>

                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>


        </nav>
    )
}

export default NavBar