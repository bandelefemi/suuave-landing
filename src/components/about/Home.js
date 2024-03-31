import React from 'react'
import Header from '../landing/Header'
import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Fifth from './Fifth'
import Contact from '../landing/Contact'

const Home = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
            <First />
        </div>
        <div>
            <Second />
        </div>
        <div>
            <Third />
        </div>
        <div>
            <Fourth/>
        </div>
        <div>
            <Fifth />
        </div>
        <div>
            <Contact />
        </div>
    </div>
  )
}

export default Home