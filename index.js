for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        
       var button= this.innerHTML;
       makesound(button);
       btnannimation(button);

    });

}


document.addEventListener("keydown",function(event){
    makesound(event.key);
    console.log(event.key);

    btnannimation(event.key);
 });



 
 function makesound(key)
 {
     var audio;
     switch (key) {
         case 'w':
              audio=new Audio('tom-1.mp3');
              document.querySelectorAll(".drum")[0].style.color="#F7DB6A";
             break;

         case 'a':
              audio=new Audio('tom-2.mp3');
               document.querySelectorAll(".drum")[1].style.color="#FFD93D";
             break;

         case 's':
              audio=new Audio('tom-3.mp3');
               document.querySelectorAll(".drum")[2].style.color="#408E91";
             break;
         
         case 'd':
              audio=new Audio('tom-4.mp3');
               document.querySelectorAll(".drum")[3].style.color="#AEC2B6";
             break;    
         
         case 'j':
              audio=new Audio('snare.mp3');
               document.querySelectorAll(".drum")[4].style.color="#DF7857";
             break;
             
         case 'k':
              audio=new Audio('crash.mp3');
               document.querySelectorAll(".drum")[5].style.color="#DF2E38";
             break;    

         case 'l':
              audio=new Audio('kick-bass.mp3');
               document.querySelectorAll(".drum")[6].style.color="#E7B10A";
             break;    

     }
     
     audio.play();
 }


 
 function btnannimation(currentkey)
 {

    var activebtn= document.querySelector("."+currentkey);

        activebtn.classList.add("pressed");

        setTimeout(function(){
            activebtn.classList.remove("pressed");
            activebtn.style.color="#DA0463";

        },100);

       
 }