let inpt= document.querySelector("input");
let spn= document.querySelector("span")


inpt.addEventListener("input", ()=>{
   // console.log(inpt.value.length);
   let left =20-inpt.value.length;
   spn.style.color="blue";
   spn.textContent=left;

   if (left <0){
    spn.style.color="red";
   }
   else{
     spn.style.color="blue";

   }
});