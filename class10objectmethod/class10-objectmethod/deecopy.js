//Deepcopy pass by value//
let obj1={
    id:1,
    name:"Anshulgour",
    info:{
        city:"Indore",
        pin:452010
    }
}
// console.log(obj1)
let deepCopy1 = JSON.parse(JSON.stringify(obj1))


deepCopy1.id=2
console.log(obj1)
console.log(deepCopy1)