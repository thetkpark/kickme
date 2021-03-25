import React from 'react'
import './css/calendar.css'
function CalenMain () {
  return (
    <>
      <div id="mainCalen">
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
        <iframe src='https://calendar.google.com/calendar/embed?src=t6mf52ff4krinh3im9adbtunv0%40group.calendar.google.com&ctz=Asia%2FBangkok'></iframe>
      </div>
    </>
  )
}

export default CalenMain
