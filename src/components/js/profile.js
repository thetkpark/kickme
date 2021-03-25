console.log('hello')

// function selectChar() {
//     var x = document.createElement("IMG");
//     x.setAttribute("src", "asset/1.jpg");
//     x.setAttribute("width", "100%");
//     x.setAttribute("height", "100%");
//     x.setAttribute("alt", "wtf");
//     x.setAttribute("border-radius", "5%");
//     var src = document.getElementById("daily");
//     src.appendChild(x);
//   }

function selectChar () {
  document.getElementById('char1').onclick = function () {
    document.getElementById('daiImg').src = 'asset/boxchar1.png'
    //text
    document.getElementById('fname').innerHTML = ' uzumaki naruto'
    document.getElementById('id').innerHTML = ' 00001'
    var x = document.getElementById('name')
    x.innerHTML = 'NARUTO'
    document.getElementById('age').innerHTML = ' 17'
    document.getElementById('pos').innerHTML = ' Ninja'
    document.getElementById('status').innerHTML = ' Newbie'
  }
  document.getElementById('char2').onclick = function () {
    document.getElementById('daiImg').src = 'asset/boxchar2.png'
    document.getElementById('fname').innerHTML = ' SHINTARO KISARAGI'
    document.getElementById('id').innerHTML = ' 00002'
    var x = document.getElementById('name')
    x.innerHTML = 'SHINTARO'
    document.getElementById('age').innerHTML = ' 18'
    document.getElementById('pos').innerHTML = ' Neet'
    document.getElementById('status').innerHTML = ' Newbie'
  }
  document.getElementById('char3').onclick = function () {
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
  document.getElementById('char4').onclick = function () {
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
  document.getElementById('char5').onclick = function () {
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

  var count = 1
  document.getElementById('button').onclick = function () {
    alert('button was clicked ' + count++ + ' times')
  }
}

// var count = 1;
// document.getElementById("button").onclick = function() {
//    alert("button was clicked " + (count++) + " times");
// };

//notify
document.getElementById('notify').addEventListener('click', function () {
  document.getElementsByClassName('popup')[0].classList.add('active')
})

document.getElementById('dismiss-btn').addEventListener('click', function () {
  document.getElementsByClassName('popup')[0].classList.remove('active')
})

console.log('hello')

//show
document.getElementById('showwork').addEventListener('click', function () {
  document.getElementsByClassName('popup')[0].classList.add('active')
})
document.getElementById('showcompleted').addEventListener('click', function () {
  document.getElementsByClassName('popup')[0].classList.add('active')
})
document.getElementById('showreport').addEventListener('click', function () {
  document.getElementsByClassName('popup')[0].classList.add('active')
})
