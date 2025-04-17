"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faX, faBars } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { motion } from 'motion/react'
import { Button } from './ui/button'

config.autoAddCss = false

export const links = [
  { name: 'Home', path: '/' },
  { name: 'Our Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
]

function Header() {

  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen])
  return (
    <header >

      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
 
            <Image
              src="/images/logoname.png"
              alt="Logo"
              width={300}
              height={100}
            />

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <FontAwesomeIcon icon={faX} className='text-3xl text-black' />  : <FontAwesomeIcon icon={faBars} className='text-3xl text-black' /> }
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center gap-4">

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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden mt-4 flex flex-col gap-4"
          >
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={toggleMenu}
                className={`${link.path === pathname ? 'text-blue-400' : ''
                  } capitalize hover:text-blue-400 font-poppins font-semibold text-base ease-in duration-500`}
                prefetch={true}
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </header>

  )
}

export default Header
