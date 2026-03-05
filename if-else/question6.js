
 let year = Number(prompt("Enter a year which you want to check"));
year = 2012;

if (((year % 4) == 0) && !((year % 100) == 0)) {
    console.log("this year is a leap year")
}
else {
    console.log("this year is Not a leap year")
}