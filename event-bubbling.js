/*let nav= document.querySelector("#main");
nav.addEventListener("click",function(){
    alert("clicked");
})*/

//this is the example of event bubbling
let line=document.querySelector("ul")
line.addEventListener("click", function(events) {
    events.target.classList.toggle("lt")//we used toggle to remove linethrough 
    
});