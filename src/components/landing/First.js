import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const First = () => {
  return (
    <div style={{backgroundImage: "url(/assets/about/banner.jpg)"}} className=' bg-cover relative bg-neutral-100 h-screen  p-5 md:p-10 flex md:gap-10 lg:p-20'>
        {/* <div className=' hidden md:flex absolute -bottom-60 right-0'>
            <Image src={'/assets/landing/image1.svg'} alt='' width={100} height={100} className=' w-[500px]' />
        </div> */}
        <div className='absolute inset-0 bg-black bg-opacity-50 z-10 '></div>
        <div className='z-30 flex inset-0 flex-col justify-center gap-10 md:gap-5 mt-10 md:mt-0 md:w-3/5'>
            <div>
                <p className=' text-center md:text-left text-3xl md:text-xl lg:text-3xl xl:text-5xl font-semibold md:font-bold text-white'>
                    Find and Negotiate with the Ideal Illustrator,  <br /><br />
                    Create Your Next Collection Seamlessly.
                </p>
            </div>
            <div>
                <p className=' text-center md:text-left text-lg md:text-sm xl:text-2xl text-white font-extralight'>
                    Connecting fashion designers and brands with African fashion illustrators, to inspire collaboration for optimum creativity, productivity and exposure.
                </p>
            </div>
            <div className=' flex justify-center md:justify-start'>
                <Link href={'https://docs.google.com/forms/d/1sSpMR0Xq5UYZU61T_xdU-k7NcDbpCBOf2puhSlVXNVU/edit?usp=drive_web'} className=' cyan-btn cursor-pointer'>
                    Join the Waitlist
                </Link>
            </div>
        </div>
        {/* <div></div> */}
    </div>
  )
}

export default First