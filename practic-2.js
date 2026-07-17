//making it for the click event 
let clik=document.querySelector("input");
let spn = document.querySelector("span")

let count = 0;

clik.addEventListener("click",(dets)=>{
    count++;

    spn.textContent=count;
    spn.style.color="red"





})