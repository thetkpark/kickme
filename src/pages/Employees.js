import React from 'react'
import '../components/css/emprostyle.css'
import Emmain from '../components/Emmain'
import Footer from '../components/Footer'
import Emside from '../components/Emside'
import Nav from '../components/Nav'

function Employees () {
  return (
    <>
      <div className='containerE'>
        <Nav />
        <Emside />
        <Emmain />
        <Footer />
      </div>
    </>
  )
}

export default Employees
