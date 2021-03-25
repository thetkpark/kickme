import React from 'react'
import '../components/css/profile.css'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Prmain from '../components/Prmain'
import Prside from '../components/Prside'
function Profiles () {
  return (
    <>
      <div className='containerP'>
        <Nav />
        <Prside/>
        <Prmain/>
        <Footer />
      </div>
    </>
  )
}

export default Profiles
