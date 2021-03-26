import React from 'react'
import './css/emprostyle.css'
function Emmdisplay () {
  return (
    <>
      <div className='profileDisplay'>
        <div className='profilePic'></div>
        <div className='profileInfo'>
          <h3>RYŪKO MATOI</h3>

          <div className='contactlist'>
            <p>contact</p>
            <a href='#github'>
              <i className='fab fa-github-square'></i>
            </a>
            <a href='#instagram'>
              <i className='fab fa-instagram-square'></i>
            </a>
            <a href='#facebook'>
              <i className='fab fa-facebook-square'></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Emmdisplay
