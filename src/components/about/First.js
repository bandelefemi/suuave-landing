import React from 'react'

const First = () => {
  return (
    <div className=' h-screen'>
        <div className=' px-5 flex items-center justify-center relative h-full bg-cover' style={{backgroundImage: 'url("/assets/about/banner.jpg")'}}>
            <div className=' absolute bg-black/50 h-full w-full'></div>
            <p className=' text-5xl text-center md:text-8xl xl:text-9xl font-bold text-white z-30'>
                African Artistry, <br /> Global Fashion.
            </p>
        </div>
    </div>
  )
}

export default First