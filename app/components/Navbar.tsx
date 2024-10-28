import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { auth, signOut,signIn } from '@/auth'

const Navbar = async() => {
    const session = await auth();
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
            <Link href="/">
            <Image src="/logo.png"width={144} height={144} alt="logo" />
            </Link>
            <div className='flex items-center gap-5'>
            {session && session?.user ?(
                <>
                <Link href="/startup/create">
                <span>Create</span>
                </Link>
                <button onClick={signOut}>

                </button>
                </>
            )}
            </div>
        </nav>
    
    </header>
  )
}


export default Navbar
