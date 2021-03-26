import React from 'react'
import './css/profile.css'
import Footer from './Footer'
import Nav from './Nav'
function Prside ({ setSelection }) {
  return (
    <>
      <div id='sidebar'>
        <div className='selector'>
          <div className='searchbox'>
            <input type='text' placeholder='search' id='search' name='search' />
          </div>
          <div className='boxchar' id='char1' onClick={() => setSelection(0)}>
            <p>Naruto Uzumaki</p>
          </div>
          <div className='boxchar' id='char2' onClick={() => setSelection(1)}>
            <p>Shintaro Kisaragi</p>
          </div>
          <div className='boxchar' id='char3' onClick={() => setSelection(2)}>
            <p>Ayano Tateyama</p>
          </div>
          <div className='boxchar' id='char4' onClick={() => setSelection(3)}>
            <p>shinobu oshino</p>
          </div>
          <div className='boxchar' id='char5' onClick={() => setSelection(4)}>
            <p>Ryūko Matoi</p>
          </div>
          <div className='boxchar' id='addchar'>
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Prside
