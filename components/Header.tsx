import Image from 'next/image'
import React from 'react'
import NavBar from './NavBar'

function Header() {
  return (
    <header className='px-16'>
        <div className='p-4 flex justify-between items-center'>
            <Image
            src="/images/logoname.png"
            alt="Logo"
            height={100}
            width={300}
            />

            <NavBar />
        </div>
    </header>
  )
}

export default Header