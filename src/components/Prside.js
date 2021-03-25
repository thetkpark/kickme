import React from 'react'
import './css/profile.css'
import Footer from './Footer'
import Nav from './Nav'
function Prside ({setSelection}) {
  return (
    <>
      <div id='sidebar'>
        <div className='selector'>
          <div className='searchbox'>
            <input
              type='text'
              placeholder='search'
              id='search'
              name='search'
              onchange='hideIcon(this);'
            />
          </div>
          <div className='boxchar' onclick='selectChar()' id='char1' onClick={() => setSelection(0)}>
            <p>Uzumaki Naruto</p>
          </div>
          <div className='boxchar' onclick='selectChar()' id='char2' onClick={() => setSelection(1)}>
            <p>Shintaro Kisaragi</p>{' '}
          </div>
          <div className='boxchar' onclick='selectChar()' id='char3'>
            <p>Ayano Tateyama</p>{' '}
          </div>
          <div className='boxchar' onclick='selectChar()' id='char4'>
            <p>shinobu oshino</p>{' '}
          </div>
          <div className='boxchar' onclick='selectChar()' id='char5'>
            <p>Ryūko Matoi</p>{' '}
          </div>
        </div>
      </div>
    </>
  )
}

export default Prside
