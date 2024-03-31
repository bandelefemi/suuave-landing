import React from 'react'

const First = () => {
  return (
    <div className=' h-screen'>
        <div className=' flex items-center justify-center relative h-full bg-cover' style={{backgroundImage: 'url("/assets/about/banner.jpg")'}}>
            <div className=' absolute bg-black/50 h-full w-full'></div>
            <p className=' text-4xl font-bold text-white z-30'>
                African Artistry, Global Fashion
            </p>
        </div>
    </div>
  )
}

export default First