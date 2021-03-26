import React from 'react'
import Abmain from '../components/Abmain'
import '../components/css/aboutus.css'
import Footer from '../components/Footer'
import Nav from '../components/Nav'




function About () {
  return (
    <>
      <div className='containerAbout'>
        <Nav />
        <Abmain/>
        <Footer/>
      </div>
    </>
  )
}

export default About
