//is sexercise mai orignal upload button ki jaha humne us ekiya hai  humara khud ka personalized button jisain humne
//  orignal ki propery ko apne button say link kiya hai taaki humara button kaam kare

 let button= document.querySelector("#button");
  let fileinp =document.querySelector("#fileinp");
  button.addEventListener("click",function(){
    fileinp.click();
    
  });
  fileinp.addEventListener("change",function(eventdetails){
    console.log(eventdetails.target.files[0].name);
    button.textContent= eventdetails.target.files[0].name;
   // const file = eventdetails.target.files[0];
    //if(file ){
       // button.textContent=file.name;
   // }

  });