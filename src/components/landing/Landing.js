'use client'
import React, { useState } from 'react'
import Header from './Header'
import First from './First'
import Second from './Second'
import Third from './Third'
import Contact from './Contact'
import Nav from '../nav/Nav'

const Landing = () => {

    const [showNav, setShowNav] = useState(false)
  return (
    <div>
        <div className=' z-20'>
            <Header setShowNav={setShowNav} />
        </div>
        <div>
            <Nav setShowNav={setShowNav} showNav={showNav} />
        </div>
        <section>
            <First />
        </section>
        <section>
            <Second />
        </section>
        <section>
            <Third />
        </section>
        <section>
            <Contact />
        </section>
    </div>
  )
}

export default Landing