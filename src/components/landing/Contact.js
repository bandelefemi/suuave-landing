import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className='p-10 bg-[#cce7f1] text-neutral-600 flex flex-col md:flex-row md:justify-between'>
        <div className=' flex justify-center md:justify-start'>
            <Image src={'/assets/logo/logo.svg'} alt='' width={100} height={100} />
        </div>
        <div className=' flex justify-center gap-3 mt-5'>
            <Link href={'https://linkedin.com/in/suuave-ftx'}>
                <FaLinkedinIn />
            </Link>
            <Link href={'https://x.com/suuaveftx'}>
                <FaXTwitter />
            </Link>
            <Link href={'https://www.instagram.com/suuaveftx'}>
                <FaInstagram />
            </Link>
        </div>
    </div>
  )
}

export default Contact