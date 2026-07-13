  // use of  submiit event 



  //we are try ing to say to form to not reload after we press submit buttton
 {
    /*  let form = document.querySelector("form");
    form.addEventListener("submit", function (eventdetails) {
        eventdetails.preventDefault();
        console.log("form submited");

    });  */
    //this is basic submmit work 
 }
   let form = document.querySelector("form");
 //debugger // console.log("1 form mila");
   let inputs = document.querySelectorAll("input");
   let main= document.querySelector("#main");
    
    form.addEventListener("submit", function (eventdetails) {
        eventdetails.preventDefault();
       {
        // console.log("2 prevent chala")
        // console.dir(inputs[0].value);
        //console.dir(inputs[1].value);
        //console.dir(inputs[2].value);
        //console.dir(inputs[3].value);
      //used for showing in  the console ki submit krne pr kyy value aari hai
       }
       let card = document.createElement("div");//js mai div create kiya jo ki  or use naam diya card qu
       card.classList.add("card");
       // console.log("3 card mai card ki property ayi")/* qu ki hume html jo card class di thi use isami add krna tha  
       //to card-->classlist lagyi or use --> "card" dd diya abb jo bhi  properties hong "card" ki
       //  wo sbb is new div mai aagya hai */
       let profile=document.createElement("div");/* then next we again create a div and give it a 
       name of profile wich resembles the html {div} element  we given class of "profile" */
       profile.classList.add("profile");
        //console.log("4 profile mila")/* after that we assign again the class classlist  ehich is part of dom manupulation
        //and  assign all the properties of the {"profile"} class to it */
        let image= document.createElement("img");

        image.setAttribute("src", inputs[0].value);

        let h3= document.createElement("h3");

        h3.textContent= inputs[1].value;

         let h5= document.createElement("h5");

        h5.textContent= inputs[2].value;

        let p=  document.createElement("p");

        p.textContent=inputs[3].value;
        
        profile.appendChild(image)//profile mai append kiya img
       card.appendChild(profile);// card.append use kiya qu ki hume card div kay andr profile div ko  dalna tha
       
        card.appendChild(h3);
        card.appendChild(h5);
        card.appendChild(p);
        main.appendChild(card);
          inputs.forEac( function(input){//works only on arrays like structure or objects
            if(input.value!== ""){

              input.value="";
            }

            
           
          });
        

    });