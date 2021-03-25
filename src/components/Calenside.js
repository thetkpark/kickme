import React from 'react'
import './css/calendar.css'
function Calenside () {
  return (
    <>
      <div id='sidebar'>
        <div className='panel'>
          <div className='publish'>
            <div className='button'>Publish&Notify</div>
          </div>
          <div className='schedule'>Schedule</div>

          <button className='collapsible'>View options</button>
          <div className='content'>
            <p id='empy'>Employees</p>
            <p id='pstn'>Position</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calenside
