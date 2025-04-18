"use client"

import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Menu, X } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from './ui/button'

config.autoAddCss = false

export const links = [
  { name: 'Home', path: '/' },
  { name: 'Our Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
]

function NavBar() {
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
    <>
      {/* Desktop Nav + Mobile Toggle */}
      <div className="flex items-center">
        <nav className="hidden lg:flex items-center gap-12 text-xl">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                link.path === pathname ? 'text-blue-400' : ''
              } capitalize hover:text-blue-400 font-poppins font-semibold text-lg ease-in duration-500`}
              prefetch={true}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center gap-2 text-white p-4 bg-blue-400 font-poppins font-semibold text-lg cursor-pointer hover:text-blue-400 ease-in duration-500">
            <Link href='/tracking'>
            <h2>Track Shipment</h2>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X  className="text-[#ff964f] w-12 h-12" />
            ) : (
              <Menu  className="text-[#ff964f] w-12 h-12" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="lg:hidden flex flex-col gap-4 mt-4 px-4"
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              onClick={toggleMenu}
              className={`${
                link.path === pathname ? 'text-blue-400' : ''
              } capitalize hover:text-blue-400 font-poppins font-semibold text-base ease-in duration-500`}
              prefetch={true}
            >
              {link.name}
            </Link>
          ))}
        </motion.nav>
      )}
    </>
  )
}

export default NavBar
