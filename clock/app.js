var hours = document.getElementById("hours")
var mint = document.getElementById("mint")
var sec = document.getElementById("sec")
var amPm = document.getElementById("amPm")
var date=document.getElementById("date")
var day=document.getElementById("day")
var month=document.getElementById("month")
var year=document.getElementById("year")




setInterval(function(){
    var newDate=new Date();
    hours.innerText=newDate.getHours();
    mint.innerText=newDate.getMinutes();
    sec.innerText=newDate.getSeconds();
    date.innerText=newDate.getDate();
    year.innerText=newDate.getFullYear()
    

    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var newDay=newDate.getDay()
    day.innerText=days[newDay]
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var newMonth=newDate.getMonth();
month.innerText=months[newMonth]


   
    if(hours.innerText>11){
        
        amPm.innerHTML="PM"
        
    }
    else{
        amPm.innerHTML="AM"

    }
    
    if(hours.innerText>12){
        hours.innerText-= 12
    }
    if(hours.innerText==0){
        hours.innerText=12
     }
},1000)





