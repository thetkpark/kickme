import React from 'react'
import '../components/css/emyle.css'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Homemain from '../components/Homemain'
import HomeSide from '../components/Homeside'
import HomeCards from '../components/HomeCards'
import Footer from '../components/Footer'

function Dashboard () {
  return (
    <>
      <Header />
      <div className='container'>
        <Nav />
        <HomeSide />
        <Homemain />
        <HomeCards />
        <Footer />
      </div>
    </>
  )
}

export default Dashboard
