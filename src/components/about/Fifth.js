import React from 'react'
import { team } from './values'
import Image from 'next/image'

const Fifth = () => {
  return (
    <div  className=' bg-neutral-50'>
        <div className=' p-10'>
            <div  className=' flex justify-center'>
                <p className=' font-bold text-2xl text-neutral-600'>
                    TEAM
                </p>
            </div>
            <div className=' mt-10 flex justify-center'>
                <div className=' flex flex-wrap gap-10 justify-center'>
                    {team.map((t, i)=> (
                        <div key={i} className=' w-48'>
                            <div className=' space-y-3' >
                                <div>
                                    <Image src={t.image} alt='' width={100} height={100} className=' w-full rounded-xl' />
                                </div>
                                <div className=' text-center' >
                                    <p className=' font-semibold uppercase'>
                                        {t.name}
                                    </p>
                                    <p className=' text-sm font-light'>
                                        {t.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fifth