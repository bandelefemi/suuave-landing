import Image from 'next/image'
import React from 'react'

const First = () => {
  return (
    <div style={{backgroundImage: "url(/assets/landing/hero-bg.svg)"}} className=' bg-cover relative bg-neutral-100 h-screen  p-5 md:p-10 md:flex md:gap-10 lg:p-20'>
        <div className=' hidden md:flex absolute -bottom-60 right-0'>
            <Image src={'/assets/landing/image1.svg'} alt='' width={100} height={100} className=' w-[500px]' />
        </div>
        <div className=' flex flex-col justify-center gap-10 md:gap-5 mt-10 md:mt-0 md:w-1/2'>
            <div>
                <p className=' text-center md:text-left text-3xl md:text-xl lg:text-3xl font-semibold md:font-bold text-white capitalize'>
                    Find and Negotiate with the Ideal Illustrator, <br />
                    Create Your Next Collection Seamlessly.
                </p>
            </div>
            <div>
                <p className=' text-center md:text-left text-lg md:text-sm text-white font-extralight'>
                    Connecting fashion designers and brands with African fashion illustrators, to inspire collaboration for optimum creativity, productivity and exposure.
                </p>
            </div>
            <div className=' flex justify-center md:justify-start'>
                <p className=' cyan-btn'>
                    Join the Waitlist
                </p>
            </div>
        </div>
        {/* <div></div> */}
    </div>
  )
}

export default First