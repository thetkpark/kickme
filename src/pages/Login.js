import React, { Component } from 'react'
import logo from '../components/asset/em.png'
import '../components/css/login.css'
import { lgp } from '../components/js/jsfnc'

class Login extends React.Component {
  render () {
    return (
      <div className='containerLogin'>
        <div className='Lgpic'>
          <div className='Lgpic-top'>
            <img src={logo}/>
          </div>
          <div className='Lgpic-btm'>
            Kuusou forest Employees System<br/>
           Join us on the bad experience
          </div>
        </div>
        <div className='Lgform'>
          <div className='formLg'>
            <div className='button-box'>
              <divvv id='btnLtg'></divvv>
              <button type='button' className='tg-btn' onClick={loging}>
                Login
              </button>
              <button type='button' className='tg-btn' onClick={registering}>
                Register
              </button>
            </div>
            <form id='loginn' className='input-group'>
              <input
                type='email'
                className='input-field'
                placeholder='Please enter your email'
                required
              ></input>
              <input
                type='password'
                className='input-field'
                placeholder='Please enter your password'
                required
              ></input>
              <input type='checkbox' className='checkbox' />
              <span id='rempass'>Remember Password</span>
              <button type='submit' className='submit-btn'>
                Login
              </button>
            </form>
            <form id='register' className='input-group'>
              <input
                type='email'
                className='input-field'
                placeholder='Please enter your email'
                required
              ></input>
              <input
                type='password'
                className='input-field'
                placeholder='Please enter your password'
                required
              ></input>
              <input type='checkbox' className='checkbox' />
              <span id='rempass'>I agree to the terms & conditions</span>
              <button type='submit' className='submit-btn'>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
const loging = () => {
  if (
    document.getElementById('loginn') &&
    document.getElementsByClassName('Lgform')
  ) {
    console.log("login")
    document.getElementById('loginn').style.left = '35%'
    document.getElementById('register').style.left = '200%'
    document.getElementById('btnLtg').style.left = '0'
  }
}
const registering = () => {
  if (
    document.getElementById('register') &&
    document.getElementsByClassName('Lgform')
  ) {
    console.log("register")
    document.getElementById('loginn').style.left = '-300%'
    document.getElementById('register').style.left = '35%'
    document.getElementById('btnLtg').style.left = '50%'
  }
}


export default Login
