import React from 'react'
import './css/aboutus.css'
// import jsfnc from '../components/js/jsfnc'
function Abmain () {


  return (
    <>
      <div id='mainAbout'>
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
        <div className='dialogue'>
          <div className='topd'>
            <div className='mytext'></div>
            
          </div>

          <div className='bottomd'>
            <div className='mypic'></div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Abmain
