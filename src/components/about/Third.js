import React from 'react'

const Third = () => {
  return (
    <div className=' md:h-screen'>
        <div className=' h-full'>
            <div className=' px-5 py-10 md:p-20 md:h-1/2 bg-stone-200 flex items-center justify-center'>
                <p className=' md:text-xl w-3/4 text-neutral-600'>
                    <span className=' font-bold'>Our Mission</span> is to  create a streamlined network for our prospects to connect, collaborate and create.

                </p>
            </div>
            <div className=' px-5 py-10 md:p-20 md:h-1/2 bg-stone-100 flex items-center justify-center'>
                <p className=' md:text-xl w-3/4 text-neutral-700'> 
                    <span className=' font-bold'>Our Vision</span> is to be the foremost go-to platform for discovering and connecting with talented African creatives, and unlocking new levels of innovation in the African fashion industry.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Third