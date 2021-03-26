import React from 'react'
import './css/emprostyle.css'
function Notipopup () {
  return (
    <>
      <div className='popup center'>
        <div className='icon'>
          <i className='fas fa-envelope-open'></i>
        </div>

        <div className='title'>
            PopupCard
            </div>
        <div className='describe'>
          <div className='cbox'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              <div className='cbox'>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              </div>
        </div>
        <div className='dismiss-btn'>
          <button id='dismiss-btn'>
            <i className='fas fa-times-circle'></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default Notipopup
