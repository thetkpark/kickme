import React from 'react'
import './css/emyle.css'
import Notipopup from './Notipopup'
function Homemain () {
  return (
    <>
      <main>
        <Notipopup/>
        <div className='welcomemain'>
          <div className='imgwelcome'></div>
          <div className='textwelcome'>
            Hi sir!!
            <br />
            <span>
              <i className='fab fa-gratipay'></i> Welcome to your admin dashboard.
            </span>
          </div>
        </div>
        <div className='dailymain'>
          <div className='trans'>
            <div className='cc'>
              <div id='textgenerator'></div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Homemain
