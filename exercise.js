//koi bhi key press kro wo display pr print hona chye 
let h1=document.querySelector("h1");


function changekey(dets){
     if(dets.key===" "){
        h1.textContent="you pressed space ";
     }
     else{
        h1.textContent="you pressed "+`${dets.key}`;
        console.dir(dets.code);

     }

    //h1.textContent="you presed "+ dets.key;

    
};
 window.addEventListener("keydown",changekey);
