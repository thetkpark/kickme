import React, { Component, useState } from 'react'
import './css/emprostyle.css'

function EmmTab () {
  const [toggleState, setToggleState] = useState(1)
  const toggleTab = index => {
    setToggleState(index)
  }
  return (
    <>
      <div className='profileTab'>
        <div className='tabs-block'>
          <button className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}>
            Infomation
          </button>
          <button className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}>
            Scheduling
          </button>
          <button className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(3)}>
            Task
          </button>
        </div>

        <div className='tabs-content'>
          <div className={toggleState === 1 ? 'content-t active-content' : 'content-t'}>
          <div className="infotabs-content">
                <h3>Basic Infomation</h3>
                <p><span>Name: </span></p>
                <p><span>ID: </span></p>
                <p><span>Position/Role: </span></p>
                <p><span>Status: </span></p>
            </div>
            <div className="infotabs-content">
                <h3>Basic Infomation</h3>
                <p><span>Name: </span></p>
                <p><span>ID: </span></p>
                <p><span>Position/Role: </span></p>
                <p><span>Status: </span></p>
            </div>
            <div className="infotabs-content">
                <h3>Basic Infomation</h3>
                <p><span>Name: </span></p>
                <p><span>ID: </span></p>
                <p><span>Position/Role: </span></p>
                <p><span>Status: </span></p>
            </div>
          </div>
          <div className={toggleState === 2 ? 'content-t active-content' : 'content-t'}>
            <div class="calen-content">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=t6mf52ff4krinh3im9adbtunv0%40group.calendar.google.com&ctz=Asia%2FBangkok">
                </iframe>
            </div>
          </div>
          <div className={toggleState === 3 ? 'content-t active-content' : 'content-t'}>
          <h3>Task</h3>
            <div className="task-content">
            <p>
              <input
                type="checkbox"
                onclick="return false;"
                checked
              />Senketsu
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmmTab
