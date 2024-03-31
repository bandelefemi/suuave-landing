import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className='p-10 bg-[#cce7f1] text-neutral-600 flex flex-col md:flex-row md:justify-between'>
        <div className=' flex justify-center md:justify-start'>
            <Image src={'/assets/logo/logo.svg'} alt='' width={100} height={100} />
        </div>
        <div className=' flex flex-col items-center mt-5 md:mt-0 md:flex-row md:gap-5'>
            <div>
                <p className=' text-xs'>
                    suuaveftx@gmail.com 
                </p>
            </div>
            <div className=' flex justify-center gap-3 md:mt-0 mt-5'>
                
                <Link href={'https://x.com/suuaveftx'}>
                    <FaXTwitter />
                </Link>
                <Link href={'https://www.instagram.com/suuaveftx'}>
                    <FaInstagram />
                </Link>
                <Link href={'https://youtube.com/@SuuaveFTx?si=bQzx3E_J2z1UsC5H'}>
                    <FaYoutube />
                </Link>
                <Link href={'https://www.linkedin.com/company/suuave/'}>
                    <FaLinkedinIn />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact