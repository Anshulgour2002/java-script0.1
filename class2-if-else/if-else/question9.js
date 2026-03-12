let percentage=Number(prompt("Enter your Percentage"))

if(percentage>0 && percentage<=32){
    console.log("The student is fai;")
}
else if(percentage>33 && percentage<=45){
    console.log("The student is Pass with D grade")
}
else if(percentage>45 && percentage<=60){
    console.log("The student is Pass with c grade")
}
else if(percentage>60 && percentage<=70){
    console.log("The student is Pass with B grade")
}
else if(percentage>70 && percentage<=85){
    console.log("The student is Pass with A grade")
}
else if(percentage>85 && percentage<=100){
    console.log("The student is Pass with A+ grade")
}