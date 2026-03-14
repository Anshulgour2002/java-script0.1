const obj1={
name:"Anshul",
age :18,
city:"Indore"
}


    Object.defineProperty(obj1,'age',{
  writable: false
})

console.log(obj1.age)

obj1.age=30
