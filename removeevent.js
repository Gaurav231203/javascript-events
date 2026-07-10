// v to remove eventlsitner if there is a lready an ongoing event which is applied to a html element
 let p = document.querySelector("p");


 function colorchange(){
    p.style.color="purple";
    p.style.fontSize="40px"
    p.style.textShadow="2px  5px 9px black"

 };

p.addEventListener("click",colorchange);
p.removeEventListener("click",colorchange);


