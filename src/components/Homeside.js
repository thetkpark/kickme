import React from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import './css/emyle.css'
function Homeside () {
  return (
    <>
      <div id='sidebar'>
        <div className='displaysidebar'>
          <div className='displayimg'></div>
          <div className='displayname'>
            Marry Kozakura
            <br />
            <p>marry_k@outlook.com</p>
          </div>
        </div>
        <div className='menusidebar'>
          <Link to='/'>
            <i className='fas fa-chart-pie' />
            Dashboard
          </Link>
          <Link to='/profiles'>
            <i className='fas fa-users' />
            Employees
          </Link>
          <Link to='/calendar'>
            <i className='far fa-calendar-alt' />
            Schedule
          </Link>
          <Link to='/about'>
            <i className='fas fa-info-circle' />
            About us
          </Link>
        </div>
      </div>
    </>
  )
}

export default Homeside
