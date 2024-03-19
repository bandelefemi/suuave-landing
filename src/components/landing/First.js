import Image from 'next/image'
import React from 'react'

const First = () => {
  return (
    <div className=' bg-neutral-100  p-5 md:p-10 md:flex md:gap-10 lg:p-20'>
        <div className=' flex justify-center mt-10 md:mt-0 md:flex-1'>
            <Image src={'/assets/landing/1-1.svg'} alt='' width={100} height={100} className=' w-3/4 md:w-full' />
        </div>
        <div className=' flex flex-col justify-center gap-10 md:gap-5 mt-10 md:mt-0 md:flex-1'>
            <div>
                <p className=' text-center md:text-left text-2xl md:text-xl lg:text-3xl font-semibold text-neutral-500 capitalize'>
                    Find and negotiate with the ideal illustrator. <br />
                    create your next collection seamlessly
                </p>
            </div>
            <div>
                <p className=' text-center md:text-left text-lg md:text-base text-neutral-500 font-extralight'>
                    Connecting fashion designers/brands with africa fashion illustrators to inspire collaboration for optimum creativity and productivity
                </p>
            </div>
            <div className=' flex justify-center md:justify-start'>
                <p className=' cyan-btn'>
                    Sign up
                </p>
            </div>
        </div>
        {/* <div></div> */}
    </div>
  )
}

export default First