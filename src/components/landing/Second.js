import Image from 'next/image'
import Link from 'next/link'
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
                    <span className=' text-4xl font-extrabold'>Kay</span> is a talented African fashion illustrator who wants to collaborate with top fashion designers and brands, and make money.
                </p>
            </div>
            <div>
                <p className=' t md:text-left text-lg md:text-base text-neutral-500 font-extralight capitalize'>
                <span className=' text-green-500'>&#10004;</span> Price Determination (For Pricing Advantage) <br />
                <span className=' text-green-500'>&#10004;</span> Low Commission Fee <br />
                <span className=' text-green-500'>&#10004;</span> Secure & Guaranteed Payment <br />
                <span className=' text-green-500'>&#10004;</span> No Application Letter or Proposal <br />
                <span className=' text-green-500'>&#10004;</span> No Discrimination <br />
                <span className=' text-green-500'>&#10004;</span> Promotion and Incentives
                </p>
            </div>
            <div className=' flex justify-center md:justify-start'>
                <Link href={'https://youtu.be/rt-9QORRZsI?si=-dUmUAbNkmOXd9Xv'} className=' cyan-btn'>
                    Learn More
                </Link>
            </div>
        </div>
        {/* <div></div> */}
    </div>
  )
}

export default Second