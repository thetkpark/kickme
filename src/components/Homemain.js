import React from 'react'
import './css/emyle.css'
function Homemain () {
  return (
    <>
      <main>
        <div className='popup center'>
          <div className='icon'>
            <i className='fas fa-envelope-open'></i>
          </div>

          <div className='title'>Notification</div>
          <div className='describe'>
            <div className='cbox'>hello ayo</div>
          </div>
          <div className='dismiss-btn'>
            <button id='dismiss-btn'>
              <i className='fas fa-times-circle'></i>
            </button>
          </div>
        </div>
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
