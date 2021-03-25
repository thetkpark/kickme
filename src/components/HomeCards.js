import React from 'react'
import { Link } from 'react-router-dom'
import './css/emyle.css'
function HomeCards () {
  return (
    <>
      <div className='cards'>
        <div className='card1'>
          <Link to="/profiles">Employees</Link>
        </div>
        <div className='card2'>
        <Link to="/calendar">Schedule</Link>
        </div>
        <div className='card3'>
        <Link to="/about">About me</Link>
        </div>
      </div>
    </>
  )
}

export default HomeCards
