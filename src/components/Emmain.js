import React from 'react'
import '../components/css/emprostyle.css'
import Emmdisplay from './Emmdisplay'
import EmmTab from './EmmTab'
import Notipopup from './Notipopup'


function Emmain () {
  return (
    <>
      <div id='mainEm'>
        <Notipopup />
        <Emmdisplay />
        <EmmTab />
      </div>
    </>
  )
}

export default Emmain
