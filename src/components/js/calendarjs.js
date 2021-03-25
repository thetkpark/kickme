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