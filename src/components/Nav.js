import React from 'react'
import './css/emyle.css'
import logo from './asset/em.png'
import { Link } from 'react-router-dom'
import { Notify } from './js/jsfnc'

class Nav extends React.Component {
  componentDidMount = () => {
    Notify()
  }
  render () {
    return (
      <>
        <nav>
          <div className='navl'>
            <p>
              <Link to='/'>
                <img src={logo} />
              </Link>
            </p>
          </div>
          <div className='navr'>
            <ul>
              <li>
                <a href='#Notification' id='notify'>
                  <i className='fas fa-bell'></i>
                </a>
              </li>
              <li>
                <Link to='/employees'>
                  <i className='fas fa-user-circle'></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default Nav
