import React from 'react'
import { values } from './values'
import Image from 'next/image'

const Fourth = () => {
  return (
    <div>
        <div className=' p-10'>
            <div  className=' flex justify-center'>
                <p className=' font-bold text-2xl text-neutral-600'>
                    CORE  VALUES
                </p>
            </div>
            <div className=' flex justify-center mt-10'>
                <div className=' flex flex-col md:flex-row gap-5'>
                    {values.map((v, i)=> (
                        <div key={i} className=' flex-1 space-y-4 border p-3 rounded-lg'>
                            <div>
                                <Image src={v.img} alt='' width={100} height={100} className=' w-10 h-auto' />
                            </div>
                            <div>
                                <p className=' md:text-lg font-semibold text-neutral-600 '>
                                    {v.title}
                                </p>
                            </div>
                            <div>
                                <p className=' text-xs md:text-lg font-light text-neutral-600'>
                                    {v.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fourth