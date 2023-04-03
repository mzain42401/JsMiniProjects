let userDOB=prompt("enter your DOB ","Date Month Year")
let DOB=new Date(userDOB);
DOB=DOB.getTime();

let date=new Date();
date=date.getTime()

let minus=(date-DOB)/(1000 * 60 * 60 * 24*365.25);
minus=Math.floor(minus)
alert("your age is "+ minus + " years")






