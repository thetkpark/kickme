import React from 'react'
import './css/aboutus.css'
// import jsfnc from '../components/js/jsfnc'
function Abmain () {

  const Abgen = () => {
    var container = document.querySelector('.mytext')
    var speeds = {
      pause: 500, //Higher number = longer delay
      slow: 120,
      normal: 90,
      fast: 40,
      superFast: 10
    }
  
    var textLines = [
      { speed: speeds.slow, string: 'Oh, hello!' },
      { speed: speeds.pause, string: '', pause: true },
      { speed: speeds.normal, string: "I'm Nonthakorn Inthong." },
      { speed: speeds.slow, string: 'you can call me' },
      { speed: speeds.fast, string: 'Kan', classes: ['red'] },
      { speed: speeds.normal, string: 'And' },
      { speed: speeds.fast, string: '631300214', classes: ['red'] },
      { speed: speeds.fast, string: 'Its my Id!' }
    ]
  
    var characters = []
    textLines.forEach((line, index) => {
      if (index < textLines.length - 1) {
        line.string += ' '
      }
  
      line.string.split('').forEach(character => {
        var span = document.createElement('span')
        span.textContent = character
        container.appendChild(span)
        characters.push({
          span: span,
          isSpace: character === ' ' && !line.pause,
          delayAfter: line.speed,
          classes: line.classes || []
        })
      })
    })
  
    function revealOneCharacter (list) {
      var next = list.splice(0, 1)[0]
      next.span.classList.add('revealed')
      next.classes.forEach(c => {
        next.span.classList.add(c)
      })
      var delay = next.isSpace && !next.pause ? 0 : next.delayAfter
  
      if (list.length > 0) {
        setTimeout(function () {
          revealOneCharacter(list)
        }, delay)
      }
    }
  
    //Ye
    setTimeout(() => {
      revealOneCharacter(characters)
    }, 600)
    Abgen();
  }

  return (
    <>
      <div id='mainAbout'>
        <div className='popup center'>
          <div className='icon'>
            <i className='fas fa-envelope-open'></i>
          </div>

          <div className='title'>Notification</div>
          <div className='describe'>
            <div className='cbox'>hello ayo</div>
          </div>
          <div className='dismiss-btn'>
            <button id='dismiss-btn'>
              <i className='fas fa-times-circle'></i>
            </button>
          </div>
        </div>
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

export default Abmain
