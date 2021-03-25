var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
    content.style.maxHeight = null;
    } else {
    content.style.maxHeight = content.scrollHeight + "px";
    } 
});
}

//notify
document.getElementById("notify").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
  })

  document.getElementById("dismiss-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
  })

//   document.getElementById("empy").addEventListener("click",function(){
//     document.getElementsByClassName("popup")[0].classList.add("active");
//   })
//   document.getElementById("pstn").addEventListener("click",function(){
//     document.getElementsByClassName("popup")[0].classList.add("active");
//   })

var container = document.querySelector(".mytext");

var speeds = {
   pause: 500, //Higher number = longer delay
   slow: 120,
   normal: 90,
   fast: 40,
   superFast: 10
};

var textLines = [
   { speed: speeds.slow, string: "Oh, hello!" },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.normal, string: "I'm Nonthakorn Inthong." },
   { speed: speeds.slow, string: "you can call me" },
   { speed: speeds.fast, string: "Kan", classes: ["red"] },
   { speed: speeds.normal, string: "And" },
   { speed: speeds.fast, string: "631300214", classes: ["red"] },
   { speed: speeds.fast, string: "Its my Id!" },
];


var characters = [];
textLines.forEach((line, index) => {
   if (index < textLines.length - 1) {
      line.string += " "; //Add a space between lines
   }

   line.string.split("").forEach((character) => {
      var span = document.createElement("span");
      span.textContent = character;
      container.appendChild(span);
      characters.push({
         span: span,
         isSpace: character === " " && !line.pause,
         delayAfter: line.speed,
         classes: line.classes || []
      });
   });
});

function revealOneCharacter(list) {
   var next = list.splice(0, 1)[0];
   next.span.classList.add("revealed");
   next.classes.forEach((c) => {
      next.span.classList.add(c);
   });
   var delay = next.isSpace && !next.pause ? 0 : next.delayAfter;

   if (list.length > 0) {
      setTimeout(function () {
         revealOneCharacter(list);
      }, delay);
   }
}

//Kick it off
setTimeout(() => {
   revealOneCharacter(characters);   
}, 600)
