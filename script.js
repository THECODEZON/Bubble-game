gsap.to("h1",{

   color:"blue",
   rotate:360,
    duration:2,
    delay:2,
    
})

var hitrn=0;
var score=0;
function increaseScore(){
    score+=1;
    document.querySelector("#scoreval").textContent=score;
}
increaseScore();
document.querySelector("#pbtm");
addEventListener("click",function(details){
   var clickedum=Number(details.target.textContent);
   if(clickedum===hitrn){
    increaseScore();
    makeBubble();
    getNewhit();
   }
});



function getNewhit(){
hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
getNewhit();


function makeBubble(){
    var clutter=" ";
for(var i=1;i<=100;i++){
   var rn= Math.floor(Math.random()*10)
   clutter+=` <div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}
makeBubble();



var timer=60;
function runTimer(){
    var timerInterval=setInterval(function(){
        if(timer>0){

            timer--;
        }else{
            clearInterval(timerInterval);
            document.querySelector("#pbtm").innerHTML=`<h1>The game is over</h1>`;
        }
      document.querySelector("#timerval").textContent=timer;
    },1000);
}
runTimer();