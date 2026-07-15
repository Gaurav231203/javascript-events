/*let nav= document.querySelector("#main");
nav.addEventListener("click",function(){
    alert("clicked");
})*/

//this is the example of event bubbling
let line=document.querySelector("ul").addEventListener("click",function(events){

events.target.style.textDecoration="line-through"
})