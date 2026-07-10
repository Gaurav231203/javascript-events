// browse prr koi bhi haraat kro  event rase ho jyega 
//jese button prr click krna ,mouse hover krna , dragaand drop krna vorr bhi sari fucntional 
// cheeje jo hum ek browser prr krr akte hai jese download krna ect.
// matlad kuch bhi screen prr actioon ho  ho  or apko uska reaction dena ho to apko event handle krna ana chye 
// event matlab screen pr kuch action hua hua 
{
    //event listner ka matkab hai apnay koi event kay action aka raction diya  jese mouse click pr kyy hoga 
    //key press pr ky hoga or button dabane say ky hoga.
}
let p = document.querySelector("p");
 
p.addEventListener("click",function(){//this if for single click;
    p.style.color="green"
    p.style.fontSize="20px"
   
});
 p.addEventListener("dblclick",function(){//this is what i used for doubleclcik;

        p.style.color="red";
        p.style.backgroundColor="blue";
         p.style.fontSize="200px"
       
    });
p.addEventListener("mouseover",function(){//ye maine use kiya mouseover kay liye jb agr ami mosue text kay upr 
    //le jau to mause arrow ---> aki jahga pointer mai badal jaye;
    p.style.cursor="pointer";
})

