setInterval(()=>{
    let hours=document.getElementById("hours");
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");
    let date=new Date()
    let hour=date.getHours();
    let mint=date.getMinutes();
    let sec=date.getSeconds();
    let hourRotation=30*hour+mint/2;
    let mintRotation=6*mint;
    let secondRotation=6*sec;
    hours.style.transform=`rotate(${hourRotation}deg)`;
    minutes.style.transform=`rotate(${mintRotation}deg)`;
    seconds.style.transform=`rotate(${secondRotation}deg)`;
},1000)