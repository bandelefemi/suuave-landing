import Image from 'next/image'
import React from 'react'

const Second = () => {
  return (
    <div className=' bg-white  p-5 md:p-10 md:flex md:gap-10 lg:p-20'>
        <div className=' order-2 flex justify-center mt-10 md:mt-0 md:flex-1'>
            <Image src={'/assets/landing/2.svg'} alt='' width={100} height={100} className=' w-3/4 md:w-full' />
        </div>
        <div className=' order-1 flex flex-col justify-center gap-10 md:gap-5 mt-10 md:mt-0 md:flex-1'>
            <div>
                <p className=' text-center md:text-left text-2xl md:text-xl lg:text-2xl font-semibold text-neutral-600'>
                    <span className=' text-4xl font-extrabold'>Kay</span> is here to meet top fashion designers/brands to collaborate and earn
                </p>
            </div>
            <div>
                <p className=' text-center md:text-left text-lg md:text-base text-neutral-500 font-extralight capitalize'>
                    No subscription fee <br />
                    No job application or proposals <br />
                    Publish offers and browse through jobs
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

export default Second