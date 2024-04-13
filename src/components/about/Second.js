import Image from 'next/image'
import React from 'react'

const Second = () => {
  return (
    <div className=' h-full bg-white'>
        <div className=' p-10 flex gap-7'>
            <div className=' flex-1 flex flex-col justify-center '>
                <div className='md:justify-start  flex  justify-center'>
                    <p className=' text-2xl font-semibold text-neutral-500 md:text-start text-center'>
                        Together, let&apos;s inspire, create, and celebrate the beauty of African fashion.
                    </p>
                </div>
                <div className=' md:hidden mt-5'>
                    <Image src={'/assets/about/2.svg'} alt='' width={100} height={100} className=' w-full h-auto' />
                </div>
                <div className=' mt-10'>
                    <p className=' text-[0.7rem] font-light text-justify'>
                        We understand that collaboration is key to unleashing the full potential of creativity. By bringing together fashion designers and brands with African fashion illustrators, we envision a dynamic environment that encourages the exploration of fresh perspectives, cultural influences, and innovative designs. Through this synergy, we believe that groundbreaking and trend-setting creations can be realized. <br /> <br />
                        By embracing the rich tapestry of African culture and integrating it into the global fashion landscape, we aim to contribute to the evolution and amplification of African fashion as a force to be reckoned with. <br /> <br />
                        Not only do we provide a space for collaboration, but we also strive to ensure that both designers and illustrators receive the recognition and exposure they deserve. By showcasing their collaborative projects, we aim to shine a light on the talent, skill, and creativity of African fashion illustrators, helping them gain visibility within the industry. <br /> <br />
                        We are thrilled to embark on this journey of creativity, collaboration, and cultural appreciation. Join us as we strive to revolutionize the fashion industry by connecting fashion designers and brands with African fashion illustrators, allowing for the realization of extraordinary and boundary-pushing creations.

                    </p>
                </div>
                <div></div>
            </div>
            <div className='hidden w-80 md:flex items-end justify-center'>
                <div>
                    <Image src={'/assets/about/2.svg'} alt='' width={100} height={100} className=' w-full h-auto' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Second