document.addEventListener("DOMContentLoaded", ()=>{
  const timeDisplay = document.getElementById("timeDisplay");
  const startBtn = document.getElementById("startBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const resetBtn = document.getElementById("resetBtn");


  let hours = 0, minutes = 0 , seconds = 0;
  let timerInterval = null;
  let isRunning = false;

  function updateTime(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes ++;
    }

    if(minutes === 60){
        minutes = 0;
        hours ++;
    }

timeDisplay.textContent = `${String(hours).padStart(2,"0")} : ${String(minutes).padStart(2,"0")}:${String(hours).padStart(2,"0")}`



startBtn.addEventListener("click", ()=>{
    if(!isRunning){
        timerInterval= setInterval(updateTime,1000);
    }
}


);
pauseBtn.addEventListener("Click", ()=>{
    clearInterval(timerInterval);
    isRunning = false;

});
resetBtn.addEventListener("Click", ()=>{
    clearInterval(timerInterval);
    isRunning= false;
    hours= 0;
    minutes=0;
    seconds=0;

    timeDisplay.textContent="00:00:00"

});
 }}







)