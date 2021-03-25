//expand
export function tryclick(){
  console.log("minecraft");
}
export function expandEm () {
  var coll = document.getElementsByClassName('collapsible')
  console.log(coll);
  console.log(coll[0]);
  var i

  for (i = 0; i < coll.length; i++) {
    console.log(i)
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

//tab
function openCity (evt, cityName) {
  var i, tabcontent, tablinks
  tabcontent = document.getElementsByClassName('tabcontent')
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none'
  }
  tablinks = document.getElementsByClassName('tablinks')
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '')
  }
  document.getElementById(cityName).style.display = 'block'
  evt.currentTarget.className += ' active'
}

document.getElementById('InfoTab').click()

//notify
document.getElementById('notify').addEventListener('click', function () {
  document.getElementsByClassName('popup')[0].classList.add('active')
})

document.getElementById('dismiss-btn').addEventListener('click', function () {
  document.getElementsByClassName('popup')[0].classList.remove('active')
})

//view option
document.getElementById('empy').addEventListener('click', function () {
  document.getElementsByClassName('popup')[0].classList.add('active')
})
document.getElementById('pstn').addEventListener('click', function () {
  document.getElementsByClassName('popup')[0].classList.add('active')
})
