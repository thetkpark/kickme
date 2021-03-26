import React from 'react'
import './css/calendar.css'
import Notipopup from './Notipopup'
function CalenMain () {
  return (
    <>
      <div id="mainCalen">
        <Notipopup/>
        <iframe src='https://calendar.google.com/calendar/embed?src=t6mf52ff4krinh3im9adbtunv0%40group.calendar.google.com&ctz=Asia%2FBangkok'></iframe>
      </div>
    </>
  )
}

export default CalenMain
