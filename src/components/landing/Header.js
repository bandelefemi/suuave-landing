import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {

    // #cce7f1
  return (
    <div className=' p-5 flex items-center bg-[#cce7f1] justify-between'>
        <div>
            <Image src={'/assets/logo/logo.svg'} alt='' width={100} height={100} />
        </div>
        <div className=' hidden md:flex gap-5 font-light items-center text-neutral-600'>
            <Link href={'/'}>
                Home
            </Link>
            <Link href={'/'}>
                About us
            </Link>
            <Link href={'/'}>
                Blog
            </Link>
            <Link href={'/'}>
                Teams
            </Link>
            <div>
                <p className='white-btn'>
                    Sign up
                </p>
            </div>
        </div>
    </div>
  )
}

export default Header