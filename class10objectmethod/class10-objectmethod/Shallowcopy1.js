let obj1={
    id:1,
    name:"Anshulgour",
    info:{
        city:"Indore",
        pin:452010
    }
}
console.log("this is my given",obj1)
let copyobj=obj1
copyobj.info.city="bhopal"
console.log("this is my shallow copy",copyobj)


