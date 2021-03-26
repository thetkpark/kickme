import React, { Component } from 'react'
import './css/aboutus.css'
import { Abgen } from './js/jsfnc'
import { testconsole } from './js/jsfnc'
import Notipopup from './Notipopup'

class Abmain extends React.Component {
  componentDidMount = () => {
    testconsole()
    Abgen()
  }
  render () {
    return (
      <>
        <div id='mainAbout'>
          <Notipopup/>
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
}

export default Abmain
