// we are going to use event capturing 
//ismai document say hote hue event targeted eleemnt tkk jata hai 
{
    /*
     *    DOCUMENT
         moves down 
           HTML
           mosvs down 
            BODY
            down
            .A
            down
            .B
            down
            .C
            down 
            now comes to the targated event 
            Button    
    
     */
}
//code 
let a=document.querySelector(".a");
let b=document.querySelector(".b");
let c=document.querySelector(".c");
let button = document.querySelector("button")


button.addEventListener("click",function(){ // this is the targeted eleemnt  which needs to come in last
   console.log("button clicked");

} , true);
a.addEventListener(
    "click",
    function(){
   console.log("a clicked");

}, true);
b.addEventListener("click",function(){
   console.log("b clicked");

});
c.addEventListener("click",function(){
   console.log("c clicked");

} , true);