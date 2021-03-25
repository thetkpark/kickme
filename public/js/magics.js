//notify
document.getElementById("notify").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
  })

  document.getElementById("dismiss-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
  })

console.log("hello")

var i=0,text;
text="Kusouu forest...";

function typing(){
    if(i<text.length){
        document.getElementById("textgenerator").innerHTML+=text.charAt(i);
        i++;
        setTimeout(typing,70);
    }
}
typing();

