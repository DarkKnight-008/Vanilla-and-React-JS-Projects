let pb = document.querySelector(".panel-bottom");
let score  = 0;
let time = 60;
var hitrn

function wannaplay(){
    let input = confirm("Do u wanna play a bubble game ? 😈")
    return input
}
let input = wannaplay();

while(!input){
    alert("please click on OK to proceed.")
    input = wannaplay();
}


function bubbleMaker(){
        let clutter="";
for(let i=0; i<189; i++){
    let rn = Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${rn}</div>`
}
pb.innerHTML = clutter;
}
bubbleMaker();

function hitMaker(){
    let hitval = document.querySelector("#hitval")
    hitrn = Math.floor(Math.random()*10);
    hitval.textContent = hitrn
}
hitMaker();

function setTimer(){
    let timerval = document.querySelector("#timerval")
    let timerinterval = setInterval(()=>{
        if(time > 0){
            time--;
            timerval.textContent = time
        }
        else{
            clearInterval(timerinterval);
            if (score>100) {
                pb.innerHTML = `<h1> Well played🤩! Your score ${score}</h1> <button class="restart-btn">Restart Game</button>`
            }
            else if(score>=70){
                pb.innerHTML = `<h1>You can do even better😀! Your score ${score}</h1> <button class="restart-btn>Restart Game</button>`
            }
            else{
                pb.innerHTML = `<h1>Don't be a noob try again😵 your score ${score}</h1> <button class="restart-btn">Restart Game </button>`
            }
        }
    },1000)
}
setTimer();

function Increasescore(){
    let scoreval = document.querySelector("#scoreval");
    score+=10
    scoreval.textContent = score
    
}


document.querySelector(".panel-bottom").addEventListener("click", function(event){
    let bubbleval = Number(event.target.textContent);
    console.log(bubbleval)
    if(hitrn === bubbleval){
        Increasescore();
        bubbleMaker();
        hitMaker();
    }
    
})




