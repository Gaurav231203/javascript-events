// now we  are learning change  event  lets go
/*Definition of change Event

The change event is fired when the value of an HTML element has been changed and that change is confirmed by 
the user.

Simple English:

change event tab fire hota hai jab kisi form element (jaise input, select, textarea) 
ki value badal jaye aur user us change ko complete kar de.*/ 

let selected= document.querySelector("select");
 function changed(event){
    console.log(event.target.value);
 }
selected.addEventListener("change",changed);

/*ismain haime basiclly ye pata chal raha hai ki slected variable --> addEventListener hua-->
 "change"kiya--->function banya usak ek parameter naam diay (event)---> fir humne print kiya --> event.target.value*/

 //orr sabsay badi baat humne ise dono tariko say kiya