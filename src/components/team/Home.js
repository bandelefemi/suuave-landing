'use client'
import React, { useState } from 'react'
import Nav from '../nav/Nav'
import Contact from '../landing/Contact'
import Header from '../landing/Header'
import Image from 'next/image'

const Home = () => {

    const [showNav, setShowNav] = useState(false)
  return (
    <div>
        <div className=' z-20'>
            <Header setShowNav={setShowNav} />
        </div>
        <div>
            <Nav showNav={showNav} setShowNav={setShowNav} />
        </div>
        <div className=' p-5'>
            <div>
                <div>
                    <div>
                        <Image src={'/assets/'} />
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
        <div>
            <Contact />
        </div>
    </div>
  )
}

export default Home