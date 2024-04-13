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
            <Link href={'/about'}>
                About Us
            </Link>
            <Link href={'/blog'}>
                Blog
            </Link>
            <Link href={'/team'}>
                Team
            </Link>
            <div>
                <Link href={'https://docs.google.com/forms/d/1sSpMR0Xq5UYZU61T_xdU-k7NcDbpCBOf2puhSlVXNVU/edit?usp=drive_web'} className='white-btn cursor-pointer'>
                    Join the Waitlist
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header