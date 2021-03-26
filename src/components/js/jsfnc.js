////////////////////////////////////////////////Employees
//notify
export const Notify = () => {
  document.getElementById('notify').addEventListener('click', function () {
    document.getElementsByClassName('popup')[0].classList.add('active')
  })

  document.getElementById('dismiss-btn').addEventListener('click', function () {
    document.getElementsByClassName('popup')[0].classList.remove('active')
  })

  
}

//show
export const popEm = () => {
  document.getElementById('showwork').addEventListener('click', function () {
    document.getElementsByClassName('popup')[0].classList.add('active')
  })
  document
    .getElementById('showcompleted')
    .addEventListener('click', function () {
      document.getElementsByClassName('popup')[0].classList.add('active')
    })
  document.getElementById('showreport').addEventListener('click', function () {
    document.getElementsByClassName('popup')[0].classList.add('active')
  })
  document.getElementById('dismiss-btn').addEventListener('click', function () {
    document.getElementsByClassName('popup')[0].classList.remove('active')
  })
}

//view option notify
export function Vnotify () {
  document.getElementById('empy').addEventListener('click', function () {
    document.getElementsByClassName('popup')[0].classList.add('active')
  })
  document.getElementById('pstn').addEventListener('click', function () {
    document.getElementsByClassName('popup')[0].classList.add('active')
  })
  document.getElementById('dismiss-btn').addEventListener('click', function () {
    document.getElementsByClassName('popup')[0].classList.remove('active')
  })
}

//tab
export const Eachtab = (evt, TabName) => {
  var i, tabcontent, tablinks
  tabcontent = document.getElementsByClassName('tabcontent')
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none'
  }
  tablinks = document.getElementsByClassName('tablinks')
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '')
  }
  document.getElementById(TabName).style.display = 'block'
  evt.currentTarget.className += ' active'
  document.getElementById('InfoTab').click()
}

////////////////////////////////////////////////calendar
//expand
export const expandEm = () => {
  var coll = document.getElementsByClassName('collapsible')
  var i
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
      this.classList.toggle('active')
      var content = this.nextElementSibling
      if (content.style.maxHeight) {
        content.style.maxHeight = null
      } else {
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    })
  }
}

////////////////////////////////////////////////aboutus
export const testconsole = () => {
  setTimeout(() => {
    console.log('Hi')
  }, 2000)
}

export const Abgen = () => {
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
}
////////////////////////////////////////////////profiles
export function selectChar () {
  document.getElementById('char1').onClick = function () {
    document.getElementById('daiImg').src = 'asset/boxchar1.png'
    //text
    document.getElementById('fname').innerHTML = ' uzumaki naruto'
    document.getElementById('id').innerHTML = ' 00001'
    var x = document.getElementById('name')
    x.innerHTML = 'NARUTO'
    document.getElementById('age').innerHTML = ' 17'
    document.getElementById('pos').innerHTML = ' Ninja'
    document.getElementById('status').innerHTML = ' Newbie'
  } //text
  document.getElementById('char2').onClick = function () {
    document.getElementById('daiImg').src = 'asset/boxchar2.png'
    document.getElementById('fname').innerHTML = ' SHINTARO KISARAGI'
    document.getElementById('id').innerHTML = ' 00002'
    var x = document.getElementById('name')
    x.innerHTML = 'SHINTARO'
    document.getElementById('age').innerHTML = ' 18'
    document.getElementById('pos').innerHTML = ' Neet'
    document.getElementById('status').innerHTML = ' Newbie'
  }
  document.getElementById('char3').onClick = function () {
    document.getElementById('daiImg').src = 'asset/boxchar3.jpg'
    //text
    document.getElementById('fname').innerHTML = ' AYANO TATEYAMA'
    document.getElementById('id').innerHTML = ' 00003'
    var x = document.getElementById('name')
    x.innerHTML = 'AYANO'
    document.getElementById('age').innerHTML = ' 18'
    document.getElementById('pos').innerHTML = ' Student'
    document.getElementById('status').innerHTML = ' Newbie'
  }
  document.getElementById('char4').onClick = function () {
    document.getElementById('daiImg').src = 'asset/boxchar4.jpg'
    //text
    document.getElementById('fname').innerHTML = ' SHINOBU OSHINO'
    document.getElementById('id').innerHTML = ' 00004'
    var x = document.getElementById('name')
    x.innerHTML = 'SHINOBU'
    document.getElementById('age').innerHTML = ' 598'
    document.getElementById('pos').innerHTML = ' Vampire'
    document.getElementById('status').innerHTML = ' Newbie'
  }
  document.getElementById('char5').onClick = function () {
    document.getElementById('daiImg').src = 'asset/boxchar5.jpg'
    //text
    document.getElementById('fname').innerHTML = ' Ryūko Matoi'
    document.getElementById('id').innerHTML = ' 00005'
    var x = document.getElementById('name')
    x.innerHTML = 'Ryūko'
    document.getElementById('age').innerHTML = ' 17'
    document.getElementById('pos').innerHTML = ' Student'
    document.getElementById('status').innerHTML = ' Newbie'
  }
}



////////////////////////////////////////////////index(magics)
export const Htextgen = () => {
  var i = 0,
    text
  text = 'Kusouu forest...'

  function typing () {
    if (i < text.length) {
      document.getElementById('textgenerator').innerHTML += text.charAt(i)
      i++
      setTimeout(typing, 70)
    }
  }
  typing()
}
