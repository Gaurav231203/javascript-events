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
    //mouse.style.left= dets.clientX + "px";
    mouse.style.left=(dets.clientX-200) +"px";
    //mouse.style.top= dets.clientY + "px";
    mouse.style.top=(dets.clientY-200) + "px";
    
    console.dir(dets.clientX);
    console.log(dets.clientY);
     console.log(dets.type);


})
