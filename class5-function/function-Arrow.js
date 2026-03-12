// let arrow=(x,y)=>{
//     return x+y;
// }
// console.log(arrow(4,6))

const createUser = (name, age) => ({
    name: name,
    age: age
});

console.log(createUser("Anshul",22));


//isme map ka use kara hai map se hum pure array pe operation perform h jata hai 
// let numbers = [1,2,3,4];

// let result = numbers.map(num => num * 2);

// console.log(result);


let num=[1,2,3,4]
let result=num.map(num=>num*2)
console.log(result)