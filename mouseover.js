let mouse= document.querySelector("#mouse");


/*mouse.addEventListener("mouseover", function(){
mouse.style.backgroundColor = "blue"; 
mouse.style.transform ="scale(1.1)";

});
mouse.addEventListener("mouseout",()=>{
    mouse.style.backgroundColor=""
    mouse.style.transform="scale(1)";
});*/
window.addEventListener("mousemove",function(dets){
    mouse.style.left= dets.clientX + "px";
    mouse.style.top= dets.clientY + "px";
    
    console.log(dets.clientX);
    console.log(dets.clientY);


})
