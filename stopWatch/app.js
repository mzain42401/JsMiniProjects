// var hours=document.getElementById("hours")
var mintue=document.getElementById("mint")
var second=document.getElementById("sec")
var milisec=document.getElementById("milisec")


var mili=0;
var sec=0;
var mint=0;
var hr=0;
var forDisable=true
var interval;
const start=()=>{
interval= setInterval(()=>{
    
    mili++
    milisec.innerText=mili
    if(mili>=100){
        sec++
        second.innerText=sec
        mili=0

    }
    if(sec>=60){
        mint++
        mintue.innerText=mint
        sec=0
    }
    forDisable=false
    if(forDisable===false){
        document.getElementById("startBtn").disabled=true
    }
},10)

}

const stop=()=>{
    clearInterval(interval)
    document.getElementById("startBtn").disabled=false

}

const reset=()=>{
    mili='00'
    milisec.innerText=mili
    sec='00';
    second.innerText=sec
mint='00';
mintue.innerText=mint

clearInterval(interval)
forDisable=true
if(forDisable===true){
    document.getElementById("startBtn").disabled=false
}

}
