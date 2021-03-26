import React from 'react'
import './css/calendar.css'
import { expandEm, Vnotify } from './js/jsfnc'

class Calenside extends React.Component {
  componentDidMount () {expandEm(),Vnotify()}
  render () {
    return (
      <>
        <div id='sidebar'>
          <div className='panel'>
            <div className='publish'>
              <button className='button'>Publish&Notify</button>
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
}

export default Calenside
