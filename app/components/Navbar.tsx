import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
            <Link href="/">
            <Image src="/logo.png"width={144} height={144} alt="logo" />
            </Link>
        </nav>
      <p>navbar</p>
    </header>
  )
}

export default Navbar
