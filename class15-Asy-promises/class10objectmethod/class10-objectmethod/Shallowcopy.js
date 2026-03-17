//Pass by reference
const obj2={
    id:23,
    username:"Anshul",
    skill:"Java",
    other:{
        rollno:101,
        class:420
    }

}
obj2.id=24
// console.log(obj2.id)

let copy=obj2
copy.id=25
console.log(copy)
