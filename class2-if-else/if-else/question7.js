let unit=Number(prompt("Enter your Electricity bill unit"));
if(unit<=100){
    console.log("The electricity bill is Free ")
}
else if(unit>100 && unit<=200){
   unit=unit*10;
   console.log(unit)
}
else if(unit>200 && unit <=250){
    unit=unit*15
    console.log(unit)
}
else if(unit>250){
    unit=unit*20
    console.log(unit)
}
