import React from 'react'
import Header from './Header'
import First from './First'
import Second from './Second'
import Third from './Third'
import Contact from './Contact'

const Landing = () => {
  return (
    <div>
        <div className=' z-20'>
            <Header />
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