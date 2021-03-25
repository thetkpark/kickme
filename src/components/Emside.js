import React from 'react'

import '../components/css/emprostyle.css'

function Emside () {
  return (
    <>
      <div id='sidebar'>
        <div classNamecd='onStatus'>
          <span>status</span>
          <div classNamecd='circle'></div>
        </div>

        <div classNamecd='panel'>
          <button classNamecd='collapsible'>View options</button>
          <div classNamecd='content'>
            <p id='empy'>Employees</p>
            <p id='pstn'>Position</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Emside
