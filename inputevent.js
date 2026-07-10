// use input eventlistner in this function
let input=document.querySelector("input");

function inputevent( event){

    if(event.data!==null){

        console.log(event.data);
    };
};
input.addEventListener("input",inputevent);
/*let input= document.querySelector("input");
 function inpt( event ){
    if(event.data!==null){
    console.log( event.data  );
    };
 };
 input.addEventListener("input",inpt);*/
