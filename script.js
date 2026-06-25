var timer=6;
var score=0;
var hitrn;
function makeBubble(){
    var clutter="";
for(var  i=1;i<=136;i++){
     var rn=Math.floor(Math.random()*10)
  clutter+=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}
  function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
  }  
function incScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
document.querySelector("#pbtm").addEventListener("click",
     function(dets){
        if (!dets.target.classList.contains("bubble")) return;
        var clickednum= Number(dets.target.textContent);
        
        if(clickednum===hitrn){

           if(timer<3){
            timer=timer+2;
            document.querySelector("#timerval").textContent=timer;
           }

            incScore();
            makeBubble();
            getNewHit();
        }
     }
)

function runTimer(){
 var timerint= setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
    }else{
        clearInterval(timerint);

        document.querySelector("#pbtm").innerHTML = `
     <div class="game-over" style="text-align:center; width:100%;">
        <h1>Tera Khel Khatam...</h1>
        <h2>Your Score: ${score}</h2>
        <button id="restart">Restart</button>
    </div>
`;
 document.querySelector("#restart").addEventListener("click", restartGame);

    }
  },1000);

}

function restartGame() {
    timer = 6;
    score = 0;

    document.querySelector("#timerval").textContent = timer;
    document.querySelector("#scoreval").textContent = score;

    makeBubble();
    getNewHit();
    runTimer();
}

runTimer();
makeBubble();
getNewHit();
incScore();