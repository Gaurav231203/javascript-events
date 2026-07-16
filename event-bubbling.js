/*let nav= document.querySelector("#main");
nav.addEventListener("click",function(){
    alert("clicked");
})*/

//this is the example of event bubbling

//step1=>html element select kro
let ul=document.querySelector("ul");
//step2=> selected eleemnt pr event lagao 
 ul.addEventListener("click", function(dets){
    //alert("clicked")
    //step3=> abb jo bhi tumko perform krwana hai use kro jese jo function kaya andr parameter diya hai 
    // dets likha hai uss say hume ky krwana hai 
   dets.target.classList.toggle("lt")
   //yaha pr maine ul li jo details thi usami target kiya hrr ek list ko or uspr this.classList toggel krwaya

 })

