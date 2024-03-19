import Image from 'next/image'
import React from 'react'

const Third = () => {
  return (
    <div className=' bg-neutral-100  p-5 md:p-10 md:flex md:gap-10 lg:p-20'>
        <div className=' flex justify-center mt-10 md:mt-0 md:flex-1'>
            <Image src={'/assets/landing/3.svg'} alt='' width={100} height={100} className=' w-3/4 md:w-full' />
        </div>
        <div className=' flex flex-col justify-center gap-10 md:gap-5 mt-10 md:mt-0 md:flex-1'>
            <div>
                <p className=' text-center md:text-left text-3xl md:text-xl lg:text-3xl font-semibold text-neutral-500 capitalize'>
                    Zee needs a skilled African fashion illustrator to bring her imaginnation to life and boost her productivity
                </p>
            </div>
            <div>
                <p className=' text-center md:text-left text-lg md:text-base text-neutral-500 font-extralight'>
                    Publish jobs and browse through offers <br />
                    vet portfolios, ratings and reviews. <br />
                    briefing and price negotiation
                </p>
            </div>
            <div className=' flex justify-center md:justify-start'>
                <p className=' cyan-btn'>
                    Learn More
                </p>
            </div>
        </div>
        {/* <div></div> */}
    </div>
  )
}

export default Third