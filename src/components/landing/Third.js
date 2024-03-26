import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Third = () => {
  return (
    <div className=' bg-neutral-100  p-5 md:p-10 md:flex md:gap-10 lg:p-20'>
        <div className=' flex justify-center mt-10 md:mt-0 md:flex-1'>
            <Image src={'/assets/landing/3.svg'} alt='' width={100} height={100} className=' w-3/4 md:w-full' />
        </div>
        <div className=' flex flex-col justify-center gap-10 md:gap-5 mt-10 md:mt-0 md:flex-1'>
            <div>
                <p className=' text-center md:text-left text-2xl md:text-xl lg:text-3xl font-semibold text-neutral-600'>
                    <span className=' text-4xl font-extrabold'>Zee</span> needs skilled African fashion illustrators to help her create culture-inspired and Afro-infused urban designs to boost her collections
                </p>
            </div>
            <div>
                <p className=' md:text-left text-lg md:text-base text-neutral-500 font-extralight'>
                <span className=' text-green-500'>&#10004;</span> Reward Programs & Promotions <br />
                <span className=' text-green-500'>&#10004;</span> Quality Assurance <br />
                <span className=' text-green-500'>&#10004;</span> Offer (Readily Available Designs) <br />
                <span className=' text-green-500'>&#10004;</span> Negotiation (For Flexible Pricing) <br />
                
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

export default Third