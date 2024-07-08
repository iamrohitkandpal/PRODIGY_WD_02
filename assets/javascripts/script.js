const playBtn = document.getElementsByClassName('m-btn')[0];
const stopBtn = document.getElementsByClassName('re-btn')[0];
const hours = document.getElementsByClassName('hrs')[0];
const minutes = document.getElementsByClassName('mil')[0];
const seconds = document.getElementsByClassName('sec')[0];

let flag = 0;
let secCount = 0;
let minCount = 0;
let hrsCount = 0;
let sec, min, hrs;

if(sec == 60) sec = 0;
if(sec == 60) sec = 0;
if(sec == 60) sec = 0;

playBtn.addEventListener("click", ()=>{
    if(flag === 0){
        playBtn.textContent = "Reset";
        stopBtn.classList.remove("cover");
        start(1);
        flag = 1;
    } else{
        playBtn.textContent = "Start";
        stopBtn.classList.add("cover");
        start(0);
        flag = 0;
    }
});
stopBtn.addEventListener("click", ()=>{
})


