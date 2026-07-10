// use input eventlistner in this function
let input= document.querySelector("input");
 function inpt( event ){
    console.log( event.data  );

 };
 input.addEventListener("input",inpt);
